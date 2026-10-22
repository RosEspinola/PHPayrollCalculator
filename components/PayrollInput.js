
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles";

export default function PayrollInput({
  name,
  setName,
  salary,
  setSalary,
  onCalculate,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Employee Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter employee name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Monthly Gross Salary (₱)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 25000"
        value={salary}
        onChangeText={setSalary}
        keyboardType="decimal-pad"
      />

      <TouchableOpacity
        style={styles.calculateButton}
        onPress={onCalculate}
      >
        <Text style={styles.buttonText}>
          Calculate Deductions
        </Text>
      </TouchableOpacity>
    </View>
  );
}
