const Engineer = require('../lib/Engineer');

test("get github  using getGithub()", () =>{
    const engineer = new Engineer("Diana", 1, "Diana@gmail.com", "Naidiri1")
    expect(engineer.getGithub()).toBe("Naidiri1")
});

test("gets Role  using getRole()", () =>{
    const engineerTest = new Engineer("Diana", 1, "Diana@gmail.com", "Naidiri1")
    expect(engineerTest.getRole()).toBe("Engineer");
});

