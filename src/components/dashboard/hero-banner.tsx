import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeroBannerProps {
  greeting?: string;
  classesCount?: number;
  tasksDueCount?: number;
  dayNumber?: string;
  monthName?: string;
  weekdayName?: string;
}

export function HeroBanner({
  greeting = "Good morning 👋",
  classesCount = 4,
  tasksDueCount = 3,
  dayNumber = "09",
  monthName = "SEP",
  weekdayName = "Tue",
}: HeroBannerProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.topRow}>
          {/* Headline & Greeting */}
          <View style={styles.textColumn}>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.headline}>READY TO</Text>
            <Text style={styles.headline}>CRUSH TODAY?</Text>
          </View>

          {/* Date Badge */}
          <View style={styles.dateBadge}>
            <Text style={styles.dateDay}>{dayNumber}</Text>
            <Text style={styles.dateMonth}>{monthName}</Text>
            <Text style={styles.dateWeekday}>{weekdayName}</Text>
          </View>
        </View>

        {/* Subtitle / summary */}
        <Text style={styles.summaryText}>
          {classesCount} classes · {tasksDueCount} tasks due this week
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#7C6EE6",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#18181B",
    padding: 20,
    // Neo-brutalist shadow offset
    shadowColor: "#18181B",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textColumn: {
    flex: 1,
    paddingRight: 10,
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    opacity: 0.95,
  },
  headline: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 33,
    letterSpacing: 0.5,
  },
  dateBadge: {
    width: 66,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  dateDay: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 26,
  },
  dateMonth: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginTop: 1,
  },
  dateWeekday: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
    opacity: 0.9,
    marginTop: 1,
  },
  summaryText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 16,
    opacity: 0.9,
  },
});
