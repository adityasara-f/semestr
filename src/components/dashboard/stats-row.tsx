import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DashboardStats } from "@/constants/dashboard-mock-data";

interface StatsRowProps {
  stats: DashboardStats;
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <View style={styles.container}>
      {/* Attendance Card */}
      <View style={styles.card}>
        <Text style={[styles.statValue, { color: stats.attendance.color }]}>
          {stats.attendance.value}
        </Text>
        <Text style={styles.statLabel}>{stats.attendance.label}</Text>
        <Text style={styles.statSubtext}>{stats.attendance.subtext}</Text>
      </View>

      {/* GPA Card */}
      <View style={styles.card}>
        <Text style={[styles.statValue, { color: stats.gpa.color }]}>
          {stats.gpa.value}
        </Text>
        <Text style={styles.statLabel}>{stats.gpa.label}</Text>
        <Text style={styles.statSubtext}>{stats.gpa.subtext}</Text>
      </View>

      {/* Tasks Done Card */}
      <View style={styles.card}>
        <Text style={[styles.statValue, { color: stats.tasksDone.color }]}>
          {stats.tasksDone.value}
        </Text>
        <Text style={styles.statLabel}>{stats.tasksDone.label}</Text>
        <Text style={styles.statSubtext}>{stats.tasksDone.subtext}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#18181B",
    paddingVertical: 14,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#18181B",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 4,
    textAlign: "center",
  },
  statLabel: {
    fontSize: 13,
    fontWeight: "800",
    color: "#18181B",
    marginBottom: 2,
    textAlign: "center",
  },
  statSubtext: {
    fontSize: 11,
    fontWeight: "500",
    color: "#71717A",
    textAlign: "center",
  },
});
