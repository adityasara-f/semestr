import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type TabKey = "home" | "timetable" | "center" | "tasks" | "more";

interface DashboardTabBarProps {
  activeTab?: TabKey;
  onSelectTab?: (tab: TabKey) => void;
}

export function DashboardTabBar({
  activeTab = "home",
  onSelectTab,
}: DashboardTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <View style={styles.container}>
        {/* Tab 1: Home */}
        <Pressable
          style={styles.tabItem}
          onPress={() => onSelectTab?.("home")}
          hitSlop={6}
        >
          <Ionicons
            name={activeTab === "home" ? "home" : "home-outline"}
            size={22}
            color={activeTab === "home" ? "#6C5CE7" : "#71717A"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "home" && styles.tabLabelActive,
            ]}
          >
            Home
          </Text>
        </Pressable>

        {/* Tab 2: Timetable */}
        <Pressable
          style={styles.tabItem}
          onPress={() => onSelectTab?.("timetable")}
          hitSlop={6}
        >
          <Ionicons
            name="calendar-outline"
            size={22}
            color={activeTab === "timetable" ? "#6C5CE7" : "#71717A"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "timetable" && styles.tabLabelActive,
            ]}
          >
            Timetable
          </Text>
        </Pressable>

        {/* Center: Raised AI Stack Button */}
        <View style={styles.centerButtonWrapper}>
          <Pressable
            style={styles.centerButton}
            onPress={() => onSelectTab?.("center")}
            hitSlop={8}
          >
            <Ionicons name="layers" size={24} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Tab 4: Tasks */}
        <Pressable
          style={styles.tabItem}
          onPress={() => onSelectTab?.("tasks")}
          hitSlop={6}
        >
          <Ionicons
            name="checkbox-outline"
            size={22}
            color={activeTab === "tasks" ? "#6C5CE7" : "#71717A"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "tasks" && styles.tabLabelActive,
            ]}
          >
            Tasks
          </Text>
        </Pressable>

        {/* Tab 5: More */}
        <Pressable
          style={styles.tabItem}
          onPress={() => onSelectTab?.("more")}
          hitSlop={6}
        >
          <Ionicons
            name="ellipsis-horizontal"
            size={22}
            color={activeTab === "more" ? "#6C5CE7" : "#71717A"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "more" && styles.tabLabelActive,
            ]}
          >
            More
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F4EFEA",
    borderTopWidth: 2,
    borderTopColor: "#18181B",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,
    paddingHorizontal: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#71717A",
  },
  tabLabelActive: {
    color: "#6C5CE7",
    fontWeight: "900",
  },
  centerButtonWrapper: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  centerButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#6C5CE7",
    borderWidth: 2.5,
    borderColor: "#18181B",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -22,
    shadowColor: "#18181B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
});
