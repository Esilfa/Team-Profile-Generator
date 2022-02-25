const Manager= require ('../lib/Manager');


test("Set office number via constructor", () => {
    const testValue = 123-123-12345;
    const e = new Manager("Tray", 1, "tray@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Tray", 1, "tray@email.com", 123-123-12345);
    expect(e.getRole()).toBe(testValue);
});

test("Get office number via getOfficeNumber()", () => {
    const testValue = 123-123-12345;
    const e = new Manager("Tray", 1, "tray@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

