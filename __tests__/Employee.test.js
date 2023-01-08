// getName(), getId(), getEmail, getRole()
// const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

test("get Name using getName()", () => {
    // create a new instance of your employee
    const employee = new Employee("Diana", 1, "Diana@gmail.com")
    // test to make sure the getName() returns the name that you passed
    expect(employee.getName()).toBe("Diana");
});

test("get Id  using getId()", () =>{
    const employee = new Employee("Diana", 1, "Diana@gmail.com")
    expect(employee.getId()).toBe(1);
});

test("get Email  using getEmail()", () =>{
    const employee = new Employee("Diana", 1, "Diana@gmail.com")
    expect(employee.getEmail()).toBe("Diana@gmail.com");
});

test("get Role  using getRole()", () =>{
    const employee = new Employee("Diana", 1, "Diana@gmail.com")
    expect(employee.getRole()).toBe("Employee");
});

