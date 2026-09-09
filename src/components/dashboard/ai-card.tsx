import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AI_PROMPT_CHIPS } from "@/constants/dashboard-mock-data";

interface AiCardProps {
  onAsk?: (prompt: string) => void;
}

export function AiCard({ onAsk }: AiCardProps) {
  const [query, setQuery] = useState("");

  const handleSend = () => {
    if (query.trim()) {
      onAsk?.(query);
      Keyboard.dismiss();
    }
  };

  const handleChipPress = (chipText: string) => {
    setQuery(chipText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <View style={styles.iconBadge}>
              <Ionicons name="layers" size={18} color="#FFFFFF" />
            </View>
            <Text style={styles.headerTitle}>SEMESTR AI</Text>
          </View>

          <View style={styles.betaBadge}>
            <Text style={styles.betaText}>BETA</Text>
          </View>
        </View>

        {/* Suggestion Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsRow}
        >
          {AI_PROMPT_CHIPS.map((chip, index) => (
            <Pressable
              key={index}
              style={styles.chip}
              onPress={() => handleChipPress(chip)}
            >
              <Text style={styles.chipText}>{chip}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Input Box */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ask me anything about your studies, schedule, or assignments..."
            placeholderTextColor="#9CA3AF"
            value={query}
            onChangeText={setQuery}
            multiline
            numberOfLines={2}
            onSubmitEditing={handleSend}
          />

          <View style={styles.inputFooter}>
            <Text style={styles.helperText}>Press Enter to send</Text>
            <Pressable style={styles.askButton} onPress={handleSend}>
              <Text style={styles.askButtonText}>Ask →</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#18181B",
    padding: 16,
    shadowColor: "#18181B",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#7C6EE6",
    borderWidth: 1.5,
    borderColor: "#18181B",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#18181B",
    letterSpacing: 0.5,
  },
  betaBadge: {
    backgroundColor: "#FBBF24",
    borderWidth: 1.5,
    borderColor: "#18181B",
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 9,
  },
  betaText: {
    fontSize: 11,
    fontWeight: "900",
    color: "#18181B",
    letterSpacing: 0.5,
  },
  chipsRow: {
    flexDirection: "row",
    gap: 8,
    paddingBottom: 12,
  },
  chip: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#18181B",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  chipText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#18181B",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#18181B",
    borderRadius: 14,
    padding: 12,
  },
  textInput: {
    fontSize: 13,
    color: "#18181B",
    minHeight: 50,
    textAlignVertical: "top",
    paddingTop: 0,
  },
  inputFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  helperText: {
    fontSize: 11,
    color: "#9CA3AF",
    fontWeight: "500",
  },
  askButton: {
    backgroundColor: "#A78BFA",
    borderWidth: 1.5,
    borderColor: "#18181B",
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  askButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#18181B",
  },
});
