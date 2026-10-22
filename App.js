
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { calculatePayroll } from "./taxCalculator";
import PayrollInput from "./components/PayrollInput";
import PayrollSummary from "./components/PayrollSummary";

export default function App() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState(null);

  const money = (amount) =>
    "₱" + amount.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const calculateTax = () => {
    const monthlySalary = Number(salary);

    if (
      !salary.trim() ||
      !Number.isFinite(monthlySalary) ||
      monthlySalary <= 0
    ) {
      Alert.alert(
        "Invalid Input",
        "Enter a valid monthly salary."
      );
      return;
    }

    setResult(calculatePayroll(monthlySalary));
  };

  const reset = () => {
    setName("");
    setSalary("");
    setResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>
          PH Payroll Calculator
        </Text>

        <Text style={styles.subtitle}>
          BIR Income Tax • SSS • PhilHealth
        </Text>

        <PayrollInput
          name={name}
          setName={setName}
          salary={salary}
          setSalary={setSalary}
          onCalculate={calculateTax}
        />

        <PayrollSummary
          name={name}
          result={result}
          money={money}
        />

        <TouchableOpacity
          style={styles.resetButton}
          onPress={reset}
        >
          <Text style={styles.buttonText}>
            Reset Calculator
          </Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          For educational use only. Actual deductions depend
          on official contribution schedules and applicable
          payroll rules. Employer contributions and Pag-IBIG
          are not included.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
