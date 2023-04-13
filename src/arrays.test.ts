import {
    allRGB,
    bookEndList,
    countShortWords,
    injectPositive,
    makeMath,
    removeDollars,
    shoutIfExclaiming,
    stringsToIntegers,
    tripleNumbers
} from "./arrays";

describe("Testing the array functions", () => {
    //////////////////////////////////
    // bookEndList and tripleNumbers

    const NUMBERS_1 = [1, 2, 3];
    const NUMBERS_2 = [100, 300, 200];
    const NUMBERS_3 = [5];
    const NUMBERS_4: number[] = [];
    const NUMBERS_5 = [100, 199, 1, -5, 7, 3];
    const NUMBERS_6 = [-100, -200, 100, 200];
    const NUMBERS_7 = [199, 1, 550, 50, 200];

    // Ensure that none of the arrays were changed mutably
    // If you fail these, you aren't using map/filter/reduce/etc. properly!
    afterEach(() => {
        expect(NUMBERS_1).toEqual([1, 2, 3]);
        expect(NUMBERS_2).toEqual([100, 300, 200]);
        expect(NUMBERS_3).toEqual([5]);
        expect(NUMBERS_4).toEqual([]);
        expect(NUMBERS_5).toEqual([100, 199, 1, -5, 7, 3]);
        expect(NUMBERS_6).toEqual([-100, -200, 100, 200]);
        expect(NUMBERS_7).toEqual([199, 1, 550, 50, 200]);
    });

    test("Testing the bookEndList function", () => {
        expect(bookEndList(NUMBERS_1)).toEqual([1, 3]);
        expect(bookEndList(NUMBERS_2)).toEqual([100, 200]);
        expect(bookEndList(NUMBERS_3)).toEqual([5, 5]);
        expect(bookEndList(NUMBERS_4)).toEqual([]);
        expect(bookEndList(NUMBERS_5)).toEqual([100, 3]);
        expect(bookEndList(NUMBERS_6)).toEqual([-100, 200]);
    });

    test("Testing the tripleNumbers function", () => {
        expect(tripleNumbers(NUMBERS_1)).toEqual([3, 6, 9]);
        expect(tripleNumbers(NUMBERS_2)).toEqual([300, 900, 600]);
        expect(tripleNumbers(NUMBERS_3)).toEqual([15]);
        expect(tripleNumbers(NUMBERS_4)).toEqual([]);
        expect(tripleNumbers(NUMBERS_5)).toEqual([300, 597, 3, -15, 21, 9]);
        expect(tripleNumbers(NUMBERS_6)).toEqual([-300, -600, 300, 600]);
    });

    //////////////////////////////////
    // stringsToIntegers

    const VALUES_1 = ["1", "2", "3"];
    const VALUES_2 = ["100", "200", "300"];
    const VALUES_3 = ["5"];
    const VALUES_4: string[] = [];
    const VALUES_5 = ["100", "?", "27", "$44"];
    const VALUES_6 = ["-1", "0", "1", "*1"];
    const VALUES_7 = ["apple", "banana", "cactus"];

    // Ensure that none of the arrays were changed mutably
    // If you fail these, you aren't using map/filter/reduce/etc. properly!
    afterEach(() => {
        expect(VALUES_1).toEqual(["1", "2", "3"]);
        expect(VALUES_2).toEqual(["100", "200", "300"]);
        expect(VALUES_3).toEqual(["5"]);
        expect(VALUES_4).toEqual([]);
        expect(VALUES_5).toEqual(["100", "?", "27", "$44"]);
        expect(VALUES_6).toEqual(["-1", "0", "1", "*1"]);
        expect(VALUES_7).toEqual(["apple", "banana", "cactus"]);
    });

    test("Testing the stringsToIntegers function", () => {
        expect(stringsToIntegers(VALUES_1)).toEqual([1, 2, 3]);
        expect(stringsToIntegers(VALUES_2)).toEqual([100, 200, 300]);
        expect(stringsToIntegers(VALUES_3)).toEqual([5]);
        expect(stringsToIntegers(VALUES_4)).toEqual([]);
        expect(stringsToIntegers(VALUES_5)).toEqual([100, 0, 27, 0]);
        expect(stringsToIntegers(VALUES_6)).toEqual([-1, 0, 1, 0]);
        expect(stringsToIntegers(VALUES_7)).toEqual([0, 0, 0]);
    });

    //////////////////////////////////
    // removeDollars

    const AMOUNTS_1 = ["$1", "$2", "$3"];
    const AMOUNTS_2 = ["$100", "$200", "$300", "$400"];
    const AMOUNTS_3 = ["$5"];
    const AMOUNTS_4 = ["$"];
    const AMOUNTS_5 = ["100", "200", "$300", "$400"];
    const AMOUNTS_6: string[] = [];
    const AMOUNTS_7 = ["100", "???", "7", "$233", "", "$"];
    const AMOUNTS_8 = ["$one", "two", "$three"];

    // Ensure that none of the arrays were changed mutably
    // If you fail these, you aren't using map/filter/reduce/etc. properly!
    afterEach(() => {
        expect(AMOUNTS_1).toEqual(["$1", "$2", "$3"]);
        expect(AMOUNTS_2).toEqual(["$100", "$200", "$300", "$400"]);
        expect(AMOUNTS_3).toEqual(["$5"]);
        expect(AMOUNTS_4).toEqual(["$"]);
        expect(AMOUNTS_5).toEqual(["100", "200", "$300", "$400"]);
        expect(AMOUNTS_6).toEqual([]);
        expect(AMOUNTS_7).toEqual(["100", "???", "7", "$233", "", "$"]);
        expect(AMOUNTS_8).toEqual(["$one", "two", "$three"]);
    });

    test("Testing the removeDollars function", () => {
        expect(removeDollars(AMOUNTS_1)).toEqual([1, 2, 3]);
        expect(removeDollars(AMOUNTS_2)).toEqual([100, 200, 300, 400]);
        expect(removeDollars(AMOUNTS_3)).toEqual([5]);
        expect(removeDollars(AMOUNTS_4)).toEqual([0]);
        expect(removeDollars(AMOUNTS_5)).toEqual([100, 200, 300, 400]);
        expect(removeDollars(AMOUNTS_6)).toEqual([]);
        expect(removeDollars(AMOUNTS_7)).toEqual([100, 0, 7, 233, 0, 0]);
        expect(removeDollars(AMOUNTS_8)).toEqual([0, 0, 0]);
    });

    //////////////////////////////////
    // shoutIfExclaiming

    const MESSAGE_1 = ["Hello", "you", "are", "great!"];
    const MESSAGE_2 = ["oho!", "Oho!", "oHo!", "oHO!", "OHO!"];
    const MESSAGE_3 = ["Wait?", "What?", "Lo", "How?", "High!"];
    const MESSAGE_4 = ["??????"];
    const MESSAGE_5: string[] = ["This one is very long!"];
    const MESSAGE_6 = ["No", "Caps", "here.", "Right?"];

    // Ensure that none of the arrays were changed mutably
    // If you fail these, you aren't using map/filter/reduce/etc. properly!
    afterEach(() => {
        expect(MESSAGE_1).toEqual(["Hello", "you", "are", "great!"]);
        expect(MESSAGE_2).toEqual(["oho!", "Oho!", "oHo!", "oHO!", "OHO!"]);
        expect(MESSAGE_3).toEqual(["Wait?", "What?", "Lo", "How?", "High!"]);
        expect(MESSAGE_4).toEqual(["??????"]);
        expect(MESSAGE_5).toEqual(["This one is very long!"]);
        expect(MESSAGE_6).toEqual(["No", "Caps", "here.", "Right?"]);
    });

    test("Testing the shoutIfExclaiming function", () => {
        expect(shoutIfExclaiming(MESSAGE_1)).toEqual([
            "Hello",
            "you",
            "are",
            "GREAT!"
        ]);
        expect(shoutIfExclaiming(MESSAGE_2)).toEqual([
            "OHO!",
            "OHO!",
            "OHO!",
            "OHO!",
            "OHO!"
        ]);
        expect(shoutIfExclaiming(MESSAGE_3)).toEqual(["Lo", "HIGH!"]);
        expect(shoutIfExclaiming(MESSAGE_4)).toEqual([]);
        expect(shoutIfExclaiming(MESSAGE_5)).toEqual([
            "THIS ONE IS VERY LONG!"
        ]);
        expect(shoutIfExclaiming(MESSAGE_6)).toEqual(["No", "Caps", "here."]);
    });

    //////////////////////////////////
    // countShortWords

    const WORDS_1 = ["the", "cat", "in", "the", "hat"];
    const WORDS_2 = ["one", "two", "three", "four", "five", "six", "seven"];
    const WORDS_3 = ["alpha", "beta", "gamma"];
    const WORDS_4 = ["Longest", "Words", "Possible"];
    const WORDS_5: string[] = [];
    const WORDS_6 = ["", "", "", ""];

    // Ensure that none of the arrays were changed mutably
    // If you fail these, you aren't using map/filter/reduce/etc. properly!
    afterEach(() => {
        expect(WORDS_1).toEqual(["the", "cat", "in", "the", "hat"]);
        expect(WORDS_2).toEqual([
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven"
        ]);
        expect(WORDS_3).toEqual(["alpha", "beta", "gamma"]);
        expect(WORDS_4).toEqual(["Longest", "Words", "Possible"]);
        expect(WORDS_5).toEqual([]);
        expect(WORDS_6).toEqual(["", "", "", ""]);
    });

    test("Testing the countShortWords function", () => {
        expect(countShortWords(WORDS_1)).toEqual(5);
        expect(countShortWords(WORDS_2)).toEqual(3);
        expect(countShortWords(WORDS_3)).toEqual(0);
        expect(countShortWords(WORDS_4)).toEqual(0);
        expect(countShortWords(WORDS_5)).toEqual(0);
        expect(countShortWords(WORDS_6)).toEqual(4);
    });

    //////////////////////////////////
    // allRGB

    const COLORS_1 = ["red", "green", "blue"];
    const COLORS_2 = ["red", "red", "red"];
    const COLORS_3 = ["red", "red", "blue", "blue", "green", "red"];
    const COLORS_4 = ["purple", "orange", "violet"];
    const COLORS_5 = ["red", "blue", "yellow"];
    const COLORS_6 = ["green"];
    const COLORS_7 = ["red"];
    const COLORS_8 = ["kabluey"];
    const COLORS_9: string[] = [];

    // Ensure that none of the arrays were changed mutably
    // If you fail these, you aren't using map/filter/reduce/etc. properly!
    afterEach(() => {
        expect(COLORS_1).toEqual(["red", "green", "blue"]);
        expect(COLORS_2).toEqual(["red", "red", "red"]);
        expect(COLORS_3).toEqual([
            "red",
            "red",
            "blue",
            "blue",
            "green",
            "red"
        ]);
        expect(COLORS_4).toEqual(["purple", "orange", "violet"]);
        expect(COLORS_5).toEqual(["red", "blue", "yellow"]);
        expect(COLORS_6).toEqual(["green"]);
        expect(COLORS_7).toEqual(["red"]);
        expect(COLORS_8).toEqual(["kabluey"]);
        expect(COLORS_9).toEqual([]);
    });

    test("Testing the allRGB function", () => {
        expect(allRGB(COLORS_1)).toEqual(true);
        expect(allRGB(COLORS_2)).toEqual(true);
        expect(allRGB(COLORS_3)).toEqual(true);
        expect(allRGB(COLORS_4)).toEqual(false);
        expect(allRGB(COLORS_5)).toEqual(false);
        expect(allRGB(COLORS_6)).toEqual(true);
        expect(allRGB(COLORS_7)).toEqual(true);
        expect(allRGB(COLORS_8)).toEqual(false);
        expect(allRGB(COLORS_9)).toEqual(true);
    });

    //////////////////////////////////
    // makeMath

    test("Testing the makeMath function", () => {
        expect(makeMath(NUMBERS_1)).toEqual("6=1+2+3");
        expect(makeMath(NUMBERS_2)).toEqual("600=100+300+200");
        expect(makeMath(NUMBERS_3)).toEqual("5=5");
        expect(makeMath(NUMBERS_4)).toEqual("0=0");
        expect(makeMath(NUMBERS_7)).toEqual("1000=199+1+550+50+200");
    });

    //////////////////////////////////
    // injectPositive
    test("Testing the injectPositive function", () => {
        expect(injectPositive(NUMBERS_1)).toEqual([1, 2, 3, 6]);
        expect(injectPositive(NUMBERS_2)).toEqual([100, 300, 200, 600]);
        expect(injectPositive(NUMBERS_3)).toEqual([5, 5]);
        expect(injectPositive(NUMBERS_4)).toEqual([0]);
        expect(injectPositive(NUMBERS_5)).toEqual([100, 199, 1, -5, 300, 7, 3]);
        expect(injectPositive(NUMBERS_6)).toEqual([-100, 0, -200, 100, 200]);
        expect(injectPositive(NUMBERS_7)).toEqual([199, 1, 550, 50, 200, 1000]);
    });
});
