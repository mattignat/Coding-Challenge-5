// Coding Challenge 06

// Step 2: Create a base class called Employee
/**
 * Base Employee class demonstrating object-oriented programming principles
 * Uses class syntax with constructor() as required
 */
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    /**
     * Returns a formatted string describing the employee
     * @returns {string} Formatted description of the employee
     */
    describe() {
        return `Employee: ${this.name} works in the ${this.department} department.`;
    }
}

// Step 3: Create a subclass called Manager that extends Employee
/**
 * Manager class that extends Employee using inheritance
 * Demonstrates extends keyword and super() usage
 */
class Manager extends Employee {
    constructor(name, department, teamSize) {
        // Use super() to call the parent constructor and inherit name and department
        super(name, department);
        
        // Add Manager-specific property
        this.teamSize = teamSize;
    }

    /**
     * Override the describe() method to include manager-specific information
     * Uses super() to call the parent method and adds team size information
     * @returns {string} Formatted description including manager details
     */
    describe() {
        // Call the parent describe() method using super()
        const baseDescription = super.describe();
        
        // Add manager-specific information
        return `${baseDescription} This manager leads a team of ${this.teamSize} people.`;
    }
}

// Step 4: Create sample employees and managers
console.log("=== Employee Management System Demo ===\n");

// Create sample employees using new Employee()
const employee1 = new Employee("Alice Johnson", "Engineering");
const employee2 = new Employee("Bob Smith", "Marketing");
const employee3 = new Employee("Carol Davis", "Sales");

// Create sample managers using new Manager()
const manager1 = new Manager("David Wilson", "Engineering", 8);
const manager2 = new Manager("Sarah Brown", "Marketing", 5);

// Display employee information
console.log("EMPLOYEES:");
console.log("----------");
console.log(employee1.describe());
console.log(employee2.describe());
console.log(employee3.describe());

console.log("\nMANAGERS:");
console.log("---------");
console.log(manager1.describe());
console.log(manager2.describe());

// Step 5: Create a Company class with employee management methods
/**
 * Company class that manages a collection of employees
 * Demonstrates composition and array management
 */
class Company {
    constructor() {
        this.employees = [];
    }

    /**
     * Adds an employee to the company's employee array
     * @param {Employee} employee - The employee object to add
     */
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(`Added ${employee.name} to the company.`);
    }

    /**
     * Lists all employees by logging each employee's description
     */
    listEmployees() {
        console.log("\n=== COMPANY EMPLOYEE ROSTER ===");
        if (this.employees.length === 0) {
            console.log("No employees in the company.");
        } else {
            this.employees.forEach((employee, index) => {
                console.log(`${index + 1}. ${employee.describe()}`);
            });
        }
        console.log("================================\n");
    }
}

// Demonstrate the Company class
console.log("\n=== COMPANY MANAGEMENT DEMO ===");
const myCompany = new Company();

// Add all employees and managers to the company
myCompany.addEmployee(employee1);
myCompany.addEmployee(employee2);
myCompany.addEmployee(employee3);
myCompany.addEmployee(manager1);
myCompany.addEmployee(manager2);

// List all employees in the company
myCompany.listEmployees();

