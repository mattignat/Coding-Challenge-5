// Coding Challenge 05

// Step 2: Create an array of 3–5 employee objects
const employees = [
    {
        name: "Sarah Johnson",
        hourlyRate: 25.50,
        hoursWorked: 40
    },
    {
        name: "Mike Chen",
        hourlyRate: 32.75,
        hoursWorked: 38
    },
    {
        name: "Emily Rodriguez",
        hourlyRate: 28.00,
        hoursWorked: 42
    },
    {
        name: "David Kim",
        hourlyRate: 35.25,
        hoursWorked: 37
    },
    {
        name: "Alex Thompson",
        hourlyRate: 22.80,
        hoursWorked: 45
    }
];

// Test the employees array
console.log("=".repeat(50));
console.log("EMPLOYEE DATA");
console.log("=".repeat(50));
console.log("Total employees:", employees.length);
console.log("\nEmployee details:");
employees.forEach((employee, index) => {
    console.log(`${index + 1}. ${employee.name}`);
    console.log(`   Hourly Rate: $${employee.hourlyRate}`);
    console.log(`   Hours Worked: ${employee.hoursWorked}`);
    console.log("");
});

// Step 3: Write a function calculateBasePay(rate, hours) that returns pay for up to 40 hours only
/**
 * Calculates base pay for up to 40 hours of work
 * @param {number} rate - The hourly rate
 * @param {number} hours - The total hours worked
 * @returns {number} - The base pay (capped at 40 hours)
 */
function calculateBasePay(rate, hours) {
    const baseHours = Math.min(hours, 40); // Cap at 40 hours maximum
    return rate * baseHours;
}

// Test the calculateBasePay function
console.log("=".repeat(50));
console.log("TESTING calculateBasePay() FUNCTION");
console.log("=".repeat(50));

// Test with different scenarios
console.log("Test 1 - Normal hours (less than 40):");
console.log("calculateBasePay(25, 35):", calculateBasePay(25, 35)); // Expected: 875

console.log("\nTest 2 - Exactly 40 hours:");
console.log("calculateBasePay(30, 40):", calculateBasePay(30, 40)); // Expected: 1200

console.log("\nTest 3 - Overtime hours (more than 40):");
console.log("calculateBasePay(25, 45):", calculateBasePay(25, 45)); // Expected: 1000 (only 40 hours counted)

console.log("\nTest 4 - Testing with employee data:");
employees.forEach(employee => {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    console.log(`${employee.name}: $${basePay.toFixed(2)} (${Math.min(employee.hoursWorked, 40)} base hours)`);
});

// Step 4: Write calculateOvertimePay(rate, hours) that returns 1.5x rate for hours over 40
/**
 * Calculates overtime pay at 1.5x rate for hours worked over 40
 * @param {number} rate - The hourly rate
 * @param {number} hours - The total hours worked
 * @returns {number} - The overtime pay (1.5x rate for hours over 40)
 */
function calculateOvertimePay(rate, hours) {
    if (hours <= 40) {
        return 0; // No overtime if 40 hours or less
    }
    const overtimeHours = hours - 40;
    const overtimeRate = rate * 1.5;
    return overtimeRate * overtimeHours;
}

// Test the calculateOvertimePay function
console.log("\n" + "=".repeat(50));
console.log("TESTING calculateOvertimePay() FUNCTION");
console.log("=".repeat(50));

// Test with different scenarios
console.log("Test 1 - No overtime (35 hours):");
console.log("calculateOvertimePay(25, 35):", calculateOvertimePay(25, 35)); // Expected: 0

console.log("\nTest 2 - Exactly 40 hours:");
console.log("calculateOvertimePay(30, 40):", calculateOvertimePay(30, 40)); // Expected: 0

console.log("\nTest 3 - 5 hours overtime:");
console.log("calculateOvertimePay(25, 45):", calculateOvertimePay(25, 45)); // Expected: 187.5 (5 hours * $37.50)

console.log("\nTest 4 - 10 hours overtime:");
console.log("calculateOvertimePay(20, 50):", calculateOvertimePay(20, 50)); // Expected: 300 (10 hours * $30)

console.log("\nTest 5 - Testing with employee data:");
employees.forEach(employee => {
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const overtimeHours = Math.max(0, employee.hoursWorked - 40);
    const overtimeRate = employee.hourlyRate * 1.5;
    
    if (overtimePay > 0) {
        console.log(`${employee.name}: $${overtimePay.toFixed(2)} (${overtimeHours} overtime hours @ $${overtimeRate.toFixed(2)}/hr)`);
    } else {
        console.log(`${employee.name}: $0.00 (no overtime)`);
    }
});

// Step 5: Write calculateTaxes(grossPay) that deducts 15% tax
/**
 * Calculates tax deduction at 15% rate
 * @param {number} grossPay - The gross pay before taxes
 * @returns {number} - The tax amount to be deducted
 */
function calculateTaxes(grossPay) {
    const taxRate = 0.15; // 15% tax rate
    return grossPay * taxRate;
}

// Test the calculateTaxes function
console.log("\n" + "=".repeat(50));
console.log("TESTING calculateTaxes() FUNCTION");
console.log("=".repeat(50));

// Test with different gross pay amounts
console.log("Test 1 - $1000 gross pay:");
const grossPay1 = 1000;
const taxes1 = calculateTaxes(grossPay1);
console.log(`Gross Pay: $${grossPay1.toFixed(2)}`);
console.log(`Taxes (15%): $${taxes1.toFixed(2)}`);
console.log(`Net Pay: $${(grossPay1 - taxes1).toFixed(2)}`);

console.log("\nTest 2 - $1500 gross pay:");
const grossPay2 = 1500;
const taxes2 = calculateTaxes(grossPay2);
console.log(`Gross Pay: $${grossPay2.toFixed(2)}`);
console.log(`Taxes (15%): $${taxes2.toFixed(2)}`);
console.log(`Net Pay: $${(grossPay2 - taxes2).toFixed(2)}`);

console.log("\nTest 3 - Testing with employee gross pay calculations:");
employees.forEach(employee => {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
    
    console.log(`${employee.name}:`);
    console.log(`  Base Pay: $${basePay.toFixed(2)}`);
    console.log(`  Overtime Pay: $${overtimePay.toFixed(2)}`);
    console.log(`  Gross Pay: $${grossPay.toFixed(2)}`);
    console.log(`  Taxes (15%): $${taxes.toFixed(2)}`);
    console.log(`  Net Pay: $${netPay.toFixed(2)}`);
    console.log("");
});

// Step 6: Write processPayroll(employee) that returns an object with all payroll details
/**
 * Processes complete payroll for an employee using all modular functions
 * @param {object} employee - Employee object with name, hourlyRate, and hoursWorked
 * @returns {object} - Complete payroll object with all pay calculations
 */
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
    
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

// Test the processPayroll function
console.log("\n" + "=".repeat(50));
console.log("TESTING processPayroll() FUNCTION");
console.log("=".repeat(50));

// Test with individual employee
console.log("Test 1 - Single employee payroll:");
const sampleEmployee = employees[0]; // Sarah Johnson
const payrollResult = processPayroll(sampleEmployee);
console.log("Employee:", sampleEmployee.name);
console.log("Input:", `$${sampleEmployee.hourlyRate}/hr, ${sampleEmployee.hoursWorked} hours`);
console.log("Payroll Result:", payrollResult);

// Test with all employees using the processPayroll function
console.log("\nTest 2 - Complete payroll processing for all employees:");
console.log("Using processPayroll() function (modular approach):");
console.log("-".repeat(50));

employees.forEach(employee => {
    const payroll = processPayroll(employee); // Using the modular function
    
    console.log(`${payroll.name}:`);
    console.log(`  Base Pay: $${payroll.basePay.toFixed(2)}`);
    console.log(`  Overtime Pay: $${payroll.overtimePay.toFixed(2)}`);
    console.log(`  Gross Pay: $${payroll.grossPay.toFixed(2)}`);
    console.log(`  Net Pay: $${payroll.netPay.toFixed(2)}`);
    console.log("");
});

// Test 3 - Create payroll summary using processPayroll
console.log("Test 3 - Payroll summary using processPayroll function:");
const payrollSummary = employees.map(processPayroll); // Using function instead of repeating logic
console.log("Payroll Summary Array:", payrollSummary);

console.log("\nPayroll totals:");
const totalGrossPay = payrollSummary.reduce((sum, payroll) => sum + payroll.grossPay, 0);
const totalNetPay = payrollSummary.reduce((sum, payroll) => sum + payroll.netPay, 0);
const totalTaxes = totalGrossPay - totalNetPay;

console.log(`Total Gross Pay: $${totalGrossPay.toFixed(2)}`);
console.log(`Total Taxes: $${totalTaxes.toFixed(2)}`);
console.log(`Total Net Pay: $${totalNetPay.toFixed(2)}`);

// Step 7: Loop through your employee array and log the payroll object for each employee
console.log("\n" + "=".repeat(50));
console.log("STEP 7: EMPLOYEE PAYROLL PROCESSING");
console.log("=".repeat(50));

console.log("Processing payroll for each employee using processPayroll() function:");
console.log("-".repeat(50));

// Loop through employees and log payroll object for each
employees.forEach((employee, index) => {
    console.log(`Employee ${index + 1}:`);
    
    // Use the processPayroll function (modular approach - no repeated logic)
    const payrollObject = processPayroll(employee);
    
    // Log the complete payroll object
    console.log(payrollObject);
    
    // Also log in a more readable format
    console.log("Formatted Details:");
    console.log(`  Name: ${payrollObject.name}`);
    console.log(`  Base Pay: $${payrollObject.basePay.toFixed(2)}`);
    console.log(`  Overtime Pay: $${payrollObject.overtimePay.toFixed(2)}`);
    console.log(`  Gross Pay: $${payrollObject.grossPay.toFixed(2)}`);
    console.log(`  Net Pay: $${payrollObject.netPay.toFixed(2)}`);
    console.log("");
});

console.log("✅ Payroll processing complete for all employees!");
console.log("✅ All functions used modularly - no logic repeated in loops!");

