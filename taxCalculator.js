
export function calculatePayroll(monthlySalary) {
  // Simplified estimated employee contributions
  const sss = Math.min(monthlySalary * 0.05, 1750);

  const philHealth =
    Math.min(Math.max(monthlySalary, 10000), 100000) * 0.025;

  const taxableIncome = Math.max(
    0,
    monthlySalary - sss - philHealth
  );

  const annualIncome = taxableIncome * 12;
  let annualTax = 0;

  // Annual BIR income tax brackets
  if (annualIncome <= 250000) {
    annualTax = 0;
  } else if (annualIncome <= 400000) {
    annualTax = (annualIncome - 250000) * 0.15;
  } else if (annualIncome <= 800000) {
    annualTax =
      22500 + (annualIncome - 400000) * 0.20;
  } else if (annualIncome <= 2000000) {
    annualTax =
      102500 + (annualIncome - 800000) * 0.25;
  } else if (annualIncome <= 8000000) {
    annualTax =
      402500 + (annualIncome - 2000000) * 0.30;
  } else {
    annualTax =
      2202500 + (annualIncome - 8000000) * 0.35;
  }

  const bir = annualTax / 12;
  const totalDeductions = sss + philHealth + bir;

  return {
    salary: monthlySalary,
    sss,
    philHealth,
    bir,
    totalDeductions,
    takeHomePay: monthlySalary - totalDeductions,
  };
}
