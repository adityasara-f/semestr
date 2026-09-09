import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface DashboardHeaderProps {
  userName?: string;
  userEmail?: string;
  userPhoto?: string;
  studentId?: string;
  onSignOut: () => void;
}

export function DashboardHeader({
  userName = "NEEHARIKA V RAO",
  userEmail,
  userPhoto,
  studentId = "25BCE0542",
  onSignOut,
}: DashboardHeaderProps) {
  const displayName = userName.trim() ? userName.toUpperCase() : "NEEHARIKA V RAO";
  const initial = displayName.charAt(0) || "N";

  const handleProfilePress = () => {
    Alert.alert(
      "Account Profile",
      `Signed in as ${displayName}\n${userEmail || "Student"}`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Sign Out",
          style: "destructive",
          onPress: onSignOut,
        },
      ]
    );
  };

  const handleNotificationsPress = () => {
    Alert.alert("Notifications", "You have no new unread notifications.");
  };

  return (
    <View style={styles.container}>
      {/* Left: Avatar & User Info */}
      <View style={styles.userSection}>
        <Pressable onPress={handleProfilePress} style={styles.avatarButton}>
          {userPhoto ? (
            <Image source={{ uri: userPhoto }} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarFallback}>
              <Text style={styles.avatarInitial}>{initial}</Text>
            </View>
          )}
        </Pressable>

        <View style={styles.userInfo}>
          <Text style={styles.userName} numberOfLines={1}>
            {displayName}
          </Text>
          <Text style={styles.studentId}>{studentId}</Text>
        </View>
      </View>

      {/* Right: Actions */}
      <View style={styles.actionButtons}>
        <Pressable
          style={styles.iconButton}
          onPress={handleNotificationsPress}
          hitSlop={8}
        >
          <Ionicons name="notifications-outline" size={20} color="#18181B" />
        </Pressable>

        <Pressable
          style={styles.iconButton}
          onPress={handleProfilePress}
          hitSlop={8}
        >
          <Ionicons name="person-outline" size={20} color="#18181B" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: "#F4EFEA",
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },
  avatarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#18181B",
    overflow: "hidden",
    backgroundColor: "#8B5CF6",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 22,
  },
  avatarFallback: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B5CF6",
  },
  avatarInitial: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },
  userInfo: {
    marginLeft: 12,
    justifyContent: "center",
    flexShrink: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "900",
    color: "#18181B",
    letterSpacing: 0.5,
  },
  studentId: {
    fontSize: 12,
    color: "#71717A",
    fontWeight: "600",
    marginTop: 2,
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#18181B",
    justifyContent: "center",
    alignItems: "center",
  },
});
