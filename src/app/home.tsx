import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AiCard } from "@/components/dashboard/ai-card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardTabBar, TabKey } from "@/components/dashboard/dashboard-tab-bar";
import { HeroBanner } from "@/components/dashboard/hero-banner";
import { RecentCheckins } from "@/components/dashboard/recent-checkins";
import { StatsRow } from "@/components/dashboard/stats-row";
import { TodayClasses } from "@/components/dashboard/today-classes";
import { UpcomingTasks } from "@/components/dashboard/upcoming-tasks";
import {
  MOCK_CHECKINS,
  MOCK_CLASSES,
  MOCK_STATS,
  MOCK_TASKS,
  TaskItem,
} from "@/constants/dashboard-mock-data";

export default function DashboardScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    name?: string;
    email?: string;
    photo?: string;
  }>();

  const [activeTab, setActiveTab] = useState<TabKey>("home");

  const handleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (e) {
      console.error("Sign out error:", e);
    }
    router.replace("/");
  };

  const handleTaskPress = (task: TaskItem) => {
    Alert.alert(task.title, `${task.type} for ${task.subject}\n${task.dueDate}`);
  };

  const handleAiAsk = (prompt: string) => {
    Alert.alert("Semestr AI", `Query: "${prompt}"\n(AI Assistant processing...)`);
  };

  const handleViewTimetable = () => {
    Alert.alert("Timetable", "Navigating to full semester timetable view.");
  };

  const handleTabSelect = (tab: TabKey) => {
    setActiveTab(tab);
    if (tab === "center") {
      Alert.alert("Semestr AI", "Quick action menu activated.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4EFEA" />
      <View style={styles.container}>
        {/* Top Header */}
        <DashboardHeader
          userName={params.name || "NEEHARIKA V RAO"}
          userEmail={params.email}
          userPhoto={params.photo}
          studentId="25BCE0542"
          onSignOut={handleSignOut}
        />

        {/* Scrollable Dashboard Body */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Banner ("READY TO CRUSH TODAY?") */}
          <HeroBanner
            greeting="Good morning 👋"
            classesCount={4}
            tasksDueCount={3}
            dayNumber="09"
            monthName="SEP"
            weekdayName="Tue"
          />

          {/* Stats Row (Attendance 88%, GPA 8.4, Tasks Done 12/18) */}
          <StatsRow stats={MOCK_STATS} />

          {/* Semestr AI Section */}
          <AiCard onAsk={handleAiAsk} />

          {/* Today's Classes */}
          <TodayClasses
            classes={MOCK_CLASSES}
            onViewAll={handleViewTimetable}
          />

          {/* Upcoming Tasks */}
          <UpcomingTasks
            tasks={MOCK_TASKS}
            onTaskPress={handleTaskPress}
          />

          {/* Recent Check-ins */}
          <RecentCheckins checkins={MOCK_CHECKINS} />
        </ScrollView>

        {/* Docked Custom Bottom Navigation Bar */}
        <DashboardTabBar
          activeTab={activeTab}
          onSelectTab={handleTabSelect}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4EFEA",
  },
  container: {
    flex: 1,
    backgroundColor: "#F4EFEA",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 4,
    paddingBottom: 24,
  },
});
