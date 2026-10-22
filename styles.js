
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  content: {
    padding: 20,
    paddingBottom: 35,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#17365D",
    marginTop: 15,
  },
  subtitle: {
    color: "#64748B",
    marginTop: 5,
    marginBottom: 22,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 2,
  },
  label: {
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 9,
    padding: 13,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },
  calculateButton: {
    backgroundColor: "#17365D",
    padding: 15,
    borderRadius: 9,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#17365D",
    marginBottom: 12,
  },
  employee: {
    color: "#64748B",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  rowLabel: {
    flex: 1,
    color: "#475569",
    fontSize: 13,
  },
  rowValue: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
  },
  bold: {
    fontWeight: "bold",
    color: "#17365D",
  },
  divider: {
    height: 2,
    backgroundColor: "#CBD5E1",
    marginTop: 8,
  },
  takeHome: {
    backgroundColor: "#E8F5E9",
    padding: 16,
    borderRadius: 10,
    marginTop: 18,
  },
  takeHomeLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#246B3B",
  },
  takeHomeAmount: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#246B3B",
    marginTop: 8,
  },
  resetButton: {
    backgroundColor: "#64748B",
    padding: 14,
    borderRadius: 9,
    alignItems: "center",
  },
  note: {
    fontSize: 12,
    lineHeight: 18,
    color: "#64748B",
    marginTop: 18,
  },
});
