import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ClassItem } from "@/constants/dashboard-mock-data";

interface TodayClassesProps {
  classes: ClassItem[];
  onViewAll?: () => void;
}

export function TodayClasses({ classes, onViewAll }: TodayClassesProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>TODAY'S CLASSES</Text>
        <Pressable onPress={onViewAll} hitSlop={8}>
          <Text style={styles.viewAllText}>Full Timetable →</Text>
        </Pressable>
      </View>

      {/* Horizontal Class Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {classes.map((cls) => (
          <View
            key={cls.id}
            style={[styles.card, { backgroundColor: cls.backgroundColor }]}
          >
            {/* Top Row: Code Pill + Dot */}
            <View style={styles.cardTopRow}>
              <View style={styles.codePill}>
                <Text style={styles.codeText}>{cls.code}</Text>
              </View>
              {cls.hasDot && (
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: cls.dotColor || "#8B5CF6" },
                  ]}
                />
              )}
            </View>

            {/* Course Title & Room */}
            <Text style={styles.className} numberOfLines={1}>
              {cls.name}
            </Text>
            <Text style={styles.classSlot}>{cls.slot}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  title: {
    fontSize: 19,
    fontWeight: "900",
    color: "#18181B",
    letterSpacing: 0.5,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#4F46E5",
    textDecorationLine: "underline",
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  card: {
    width: 200,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#18181B",
    padding: 14,
    shadowColor: "#18181B",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2,
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  codePill: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#18181B",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  codeText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#18181B",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  className: {
    fontSize: 15,
    fontWeight: "900",
    color: "#18181B",
    marginBottom: 4,
  },
  classSlot: {
    fontSize: 12,
    fontWeight: "600",
    color: "#52525B",
  },
});
