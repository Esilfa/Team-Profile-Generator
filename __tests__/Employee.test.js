import Employee from '../lib/Employee';


test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Steve";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id constructor arguments", () => {
    const testValue = "50";
    const e = new Employee("Tom", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor arguments", () => {
    const testValue = "Tom@email.com";
    const e = new Employee("Tom", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Tray";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = "50";
    const e = new Employee("Tray", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "Tray@email.com";
    const e = new Employee("Tray", 2, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Tray", 2, "tray@email.com");
    expect(e.getRole()).toBe(testValue);
});
