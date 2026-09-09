import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TaskItem } from "@/constants/dashboard-mock-data";

interface UpcomingTasksProps {
  tasks: TaskItem[];
  onTaskPress?: (task: TaskItem) => void;
}

export function UpcomingTasks({ tasks, onTaskPress }: UpcomingTasksProps) {
  const [filter, setFilter] = useState<"All" | "Pending" | "Done">("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") return task.status === "pending";
    if (filter === "Done") return task.status === "done";
    return true;
  });

  return (
    <View style={styles.container}>
      {/* Header with Filter Pills */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>UPCOMING TASKS</Text>
        <View style={styles.filterGroup}>
          {(["All", "Pending", "Done"] as const).map((tab) => {
            const isActive = filter === tab;
            return (
              <Pressable
                key={tab}
                style={[styles.filterPill, isActive && styles.filterPillActive]}
                onPress={() => setFilter(tab)}
              >
                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.filterTextActive,
                  ]}
                >
                  {tab}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Task List */}
      <View style={styles.taskList}>
        {filteredTasks.map((task) => (
          <Pressable
            key={task.id}
            style={styles.card}
            onPress={() => onTaskPress?.(task)}
          >
            {/* Left Status Dot with border */}
            <View
              style={[
                styles.statusDot,
                { backgroundColor: task.dotColor },
              ]}
            />

            {/* Middle Details */}
            <View style={styles.detailsContainer}>
              <Text style={styles.taskTitle} numberOfLines={1}>
                {task.title}
              </Text>

              <View style={styles.badgeRow}>
                {/* Subject Pill */}
                <View style={styles.subjectBadge}>
                  <Text style={styles.subjectText}>{task.subject}</Text>
                </View>

                {/* Type Pill */}
                <View
                  style={[
                    styles.typeBadge,
                    { borderColor: task.typeColor },
                  ]}
                >
                  <Text
                    style={[
                      styles.typeText,
                      { color: task.typeColor },
                    ]}
                  >
                    {task.type}
                  </Text>
                </View>

                {/* Due Date */}
                <Text style={styles.dueDateText}>{task.dueDate}</Text>
              </View>
            </View>

            {/* Right Days Remaining Badge */}
            <View
              style={[
                styles.daysBadge,
                { backgroundColor: task.badgeBgColor },
              ]}
            >
              <Text style={styles.daysNumber}>{task.daysLeft}</Text>
              <Text style={styles.daysUnit}>days</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: 19,
    fontWeight: "900",
    color: "#18181B",
    letterSpacing: 0.5,
  },
  filterGroup: {
    flexDirection: "row",
    gap: 6,
  },
  filterPill: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#18181B",
    borderRadius: 14,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  filterPillActive: {
    backgroundColor: "#18181B",
  },
  filterText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#18181B",
  },
  filterTextActive: {
    color: "#FFFFFF",
  },
  taskList: {
    gap: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#18181B",
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: "#18181B",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#18181B",
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#18181B",
    marginBottom: 6,
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },
  subjectBadge: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#18181B",
    borderRadius: 8,
    paddingVertical: 1.5,
    paddingHorizontal: 6,
  },
  subjectText: {
    fontSize: 10,
    fontWeight: "900",
    color: "#18181B",
  },
  typeBadge: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 1.5,
    paddingHorizontal: 6,
  },
  typeText: {
    fontSize: 10,
    fontWeight: "800",
  },
  dueDateText: {
    fontSize: 11,
    color: "#71717A",
    fontWeight: "500",
    marginLeft: 2,
  },
  daysBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#18181B",
    justifyContent: "center",
    alignItems: "center",
  },
  daysNumber: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 18,
  },
  daysUnit: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "800",
    marginTop: -2,
  },
});
