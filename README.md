# PH Payroll Calculator

A simple mobile application built with **React Native and Expo** that estimates Philippine employee payroll deductions, including BIR income tax, SSS, and PhilHealth.

## Features

- Enter the employee's name.
- Enter the monthly gross salary.
- Calculate estimated BIR income tax.
- Calculate estimated SSS contributions.
- Calculate estimated PhilHealth contributions.
- Display total deductions.
- Calculate estimated take-home pay.
- Reset the calculator and clear the entered information.

## Technologies Used

- React Native
- JavaScript
- Expo
- Git and GitHub

## Project Structure

```text
PHPayrollCalculator/
├── App.js
├── styles.js
├── taxCalculator.js
└── components/
    ├── PayrollInput.js
    ├── PayrollSummary.js
    └── SummaryRow.js
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/RosEspinola/PHPayrollCalculator.git
```

### 2. Open the project folder

```bash
cd PHPayrollCalculator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npx expo start
```

Open the application using Expo Go on your Android device or an available emulator.

## How to Use

1. Open the PH Payroll Calculator.
2. Enter the employee's name.
3. Enter the monthly gross salary.
4. Press **Calculate Deductions**.
5. View the estimated BIR, SSS, and PhilHealth deductions.
6. Check the total deductions and estimated take-home pay.
7. Press **Reset Calculator** to clear the information.

## Important Note

This project is intended for educational purposes. The current calculations use simplified estimates and may not match actual payroll deductions. Official contribution schedules, withholding tax rules, and applicable employee circumstances should be verified before using the application for real payroll.

Employer contributions and Pag-IBIG deductions are not included.

## Author

**Rosilito E. Espinola**

Bachelor of Science in Computer Science (BSCS)

## License

This project is intended for educational and learning purposes.
