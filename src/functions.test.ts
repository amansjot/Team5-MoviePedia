import {
    add3,
    fahrenheitToCelius,
    shout,
    isQuestion,
    convertYesNo
} from "./functions";

describe("Testing the basic functions", () => {
    test("Testing the fahrenheitToCelius function", () => {
        expect(fahrenheitToCelius(32)).toBe(0);
        expect(fahrenheitToCelius(-40)).toBe(-40);
        expect(fahrenheitToCelius(-22)).toBe(-30);
        expect(fahrenheitToCelius(14)).toBe(-10);
        expect(fahrenheitToCelius(68)).toBe(20);
        expect(fahrenheitToCelius(86)).toBe(30);
        expect(fahrenheitToCelius(212)).toBe(100);
    });

    test("Testing the add3 function", () => {
        expect(add3(1, 2, 3)).toBe(6);
        expect(add3(9, 7, 4)).toBe(20);
        expect(add3(6, -3, 9)).toBe(15);
        expect(add3(10, 1, -9)).toBe(11);
        expect(add3(-9, -100, -4)).toBe(0);
        expect(add3(-1, -1, 1)).toBe(1);
    });

    test("Testing the shout function", () => {
        expect(shout("Hello")).toBe("HELLO!");
        expect(shout("What?")).toBe("WHAT?!");
        expect(shout("oHo")).toBe("OHO!");
        expect(shout("AHHHH!!!")).toBe("AHHHH!!!!");
        expect(shout("")).toBe("!");
        expect(shout("Please go outside")).toBe("PLEASE GO OUTSIDE!");
    });

    test("Testing the isQuestion function", () => {
        expect(isQuestion("Is this a question?")).toBe(true);
        expect(isQuestion("Who are you?")).toBe(true);
        expect(isQuestion("WHAT ARE YOU !?")).toBe(true);
        expect(isQuestion("WHAT IS THIS?!")).toBe(false);
        expect(isQuestion("OH GOD!")).toBe(false);
        expect(isQuestion("Oh nevermind, it's fine.")).toBe(false);
        expect(isQuestion("")).toBe(false);
    });

    test("Testing the convertYesNo function", () => {
        expect(convertYesNo("yes")).toBe(true);
        expect(convertYesNo("YES")).toBe(true);
        expect(convertYesNo("NO")).toBe(false);
        expect(convertYesNo("no")).toBe(false);
        expect(convertYesNo("Apple")).toBe(null);
        expect(convertYesNo("Bananas")).toBe(null);
        expect(convertYesNo("Nope")).toBe(null);
        expect(convertYesNo("Yesterday")).toBe(null);
        expect(convertYesNo("Maybe")).toBe(null);
    });
});
