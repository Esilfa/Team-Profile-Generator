const intern = require ('../lib/Intern');

test("Set school via constructor", () => {
    const testValue = "PSU";
    const e = new Intern("Tray", 2, "tray@email.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Tray", 1, "tray@email.com", "PSU");
    expect(e.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
    const testValue = "PSU";
    const e = new Intern("Tray", 1, "tray@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
