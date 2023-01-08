const Manager = require("../lib/Manager");

test("get Office Number using getOfficeNumber()",() =>{
    const manager = new Manager("Diana", 1, "Diana@gmail.com", 2)
expect(manager.getOfficeNumber()).toBe(2)
});

test("get Role using getRole()", () =>{
const manager = new  Manager("Diana", 1, "Diana@gmail.com", 2)
expect(manager.getRole()).toBe("Manager")
});
