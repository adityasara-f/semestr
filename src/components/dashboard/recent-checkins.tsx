import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckInItem } from "@/constants/dashboard-mock-data";

interface RecentCheckinsProps {
  checkins: CheckInItem[];
}

export function RecentCheckins({ checkins }: RecentCheckinsProps) {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>RECENT CHECK-INS</Text>

      {/* 2x2 Grid */}
      <View style={styles.grid}>
        {checkins.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Header: Pin + Code */}
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={16} color="#10B981" />
              <Text style={styles.locationCode}>{item.location}</Text>
            </View>

            {/* Timestamp */}
            <Text style={styles.timestamp}>{item.timestamp}</Text>

            {/* Entry Badge */}
            <View style={styles.entryBadge}>
              <Text style={styles.entryText}>{item.type}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 19,
    fontWeight: "900",
    color: "#18181B",
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#18181B",
    padding: 12,
    shadowColor: "#18181B",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 6,
  },
  locationCode: {
    fontSize: 14,
    fontWeight: "900",
    color: "#18181B",
  },
  timestamp: {
    fontSize: 11,
    fontWeight: "600",
    color: "#71717A",
    marginBottom: 8,
    fontFamily: "monospace",
  },
  entryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#10B981",
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  entryText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#10B981",
  },
});
