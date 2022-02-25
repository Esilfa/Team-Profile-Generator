const Engineer = require ('../lib/Engineer');


test("Set Github account via constructor", () => {
    const testValue = "Github";
    const e = new Engineer("Tray", 1, "tray@email.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Tom", 1, "tom@email.com", "GithubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Get Github username via getGithub()", () => {
    const testValue = "GithubUser";
    const e = new Engineer("Tom", 3, "tom1@emailcom", testValue);
    expect(e.getGithub()).toBe(testValue);
});
