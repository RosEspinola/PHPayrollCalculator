
import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

export default function SummaryRow({ label, value, bold }) {
  return (
    <View style={styles.row}>
      <Text style={[styles.rowLabel, bold && styles.bold]}>
        {label}
      </Text>

      <Text style={[styles.rowValue, bold && styles.bold]}>
        {value}
      </Text>
    </View>
  );
}
