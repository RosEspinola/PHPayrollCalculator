
import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import SummaryRow from "./SummaryRow";

export default function PayrollSummary({
  name,
  result,
  money,
}) {
  if (!result) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Payroll Summary</Text>

      <Text style={styles.employee}>
        Employee: {name.trim() || "Not provided"}
      </Text>

      <SummaryRow
        label="Gross Monthly Salary"
        value={money(result.salary)}
      />

      <SummaryRow
        label="BIR Income Tax (estimate)"
        value={money(result.bir)}
      />

      <SummaryRow
        label="SSS Employee Share (estimate)"
        value={money(result.sss)}
      />

      <SummaryRow
        label="PhilHealth Employee Share (estimate)"
        value={money(result.philHealth)}
      />

      <View style={styles.divider} />

      <SummaryRow
        label="Total Deductions"
        value={money(result.totalDeductions)}
        bold
      />

      <View style={styles.takeHome}>
        <Text style={styles.takeHomeLabel}>
          ESTIMATED TAKE-HOME PAY
        </Text>

        <Text style={styles.takeHomeAmount}>
          {money(result.takeHomePay)}
        </Text>
      </View>
    </View>
  );
}
