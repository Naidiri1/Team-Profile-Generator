const Intern = require("../lib/Intern");

test("get School using getSchool()", () =>{
    const intern = new Intern("Diana", 1, "Diana@gmail.com","Ohio University")
    expect(intern.getSchool()).toBe("Ohio University");
});

test("get Role  using getRole()", () =>{
    const intern = new Intern("Diana", 1, "Diana@gmail.com","Ohio University")
    expect(intern.getRole()).toBe("Intern")
});

