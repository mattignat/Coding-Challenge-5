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

