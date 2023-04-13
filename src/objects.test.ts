import { Question } from "./interfaces/question";
import {
    makeBlankQuestion,
    isCorrect,
    isValid,
    toShortForm,
    toMarkdown,
    duplicateQuestion,
    renameQuestion,
    publishQuestion,
    addOption,
    mergeQuestion
} from "./objects";
import testQuestionData from "./data/questions.json";
import backupQuestionData from "./data/questions.json";

////////////////////////////////////////////
// Setting up the test data

const { BLANK_QUESTIONS, SIMPLE_QUESTIONS }: Record<string, Question[]> =
    // Typecast the test data that we imported to be a record matching
    //  strings to the question list
    testQuestionData as Record<string, Question[]>;

// We have backup versions of the data to make sure all changes are immutable
const {
    BLANK_QUESTIONS: BACKUP_BLANK_QUESTIONS,
    SIMPLE_QUESTIONS: BACKUP_SIMPLE_QUESTIONS
}: Record<string, Question[]> = backupQuestionData as Record<
    string,
    Question[]
>;

// Unpack the list of simple questions into convenient constants
const [ADDITION_QUESTION, LETTER_QUESTION, COLOR_QUESTION, SHAPE_QUESTION] =
    SIMPLE_QUESTIONS;
const [
    BACKUP_ADDITION_QUESTION,
    BACKUP_LETTER_QUESTION,
    BACKUP_COLOR_QUESTION,
    BACKUP_SHAPE_QUESTION
] = BACKUP_SIMPLE_QUESTIONS;

////////////////////////////////////////////
// Actual tests

describe("Testing the object functions", () => {
    //////////////////////////////////
    // makeBlankQuestion

    test("Testing the makeBlankQuestion function", () => {
        expect(
            makeBlankQuestion(1, "Question 1", "multiple_choice_question")
        ).toEqual(BLANK_QUESTIONS[0]);
        expect(
            makeBlankQuestion(47, "My New Question", "multiple_choice_question")
        ).toEqual(BLANK_QUESTIONS[1]);
        expect(
            makeBlankQuestion(2, "Question 2", "short_answer_question")
        ).toEqual(BLANK_QUESTIONS[2]);
    });

    ///////////////////////////////////
    // isCorrect
    test("Testing the isCorrect function", () => {
        expect(isCorrect(ADDITION_QUESTION, "4")).toEqual(true);
        expect(isCorrect(ADDITION_QUESTION, "2")).toEqual(false);
        expect(isCorrect(ADDITION_QUESTION, " 4\n")).toEqual(true);
        expect(isCorrect(LETTER_QUESTION, "Z")).toEqual(true);
        expect(isCorrect(LETTER_QUESTION, "z")).toEqual(true);
        expect(isCorrect(LETTER_QUESTION, "4")).toEqual(false);
        expect(isCorrect(LETTER_QUESTION, "0")).toEqual(false);
        expect(isCorrect(LETTER_QUESTION, "zed")).toEqual(false);
        expect(isCorrect(COLOR_QUESTION, "red")).toEqual(true);
        expect(isCorrect(COLOR_QUESTION, "apple")).toEqual(false);
        expect(isCorrect(COLOR_QUESTION, "firetruck")).toEqual(false);
        expect(isCorrect(SHAPE_QUESTION, "square")).toEqual(false);
        expect(isCorrect(SHAPE_QUESTION, "triangle")).toEqual(false);
        expect(isCorrect(SHAPE_QUESTION, "circle")).toEqual(true);
    });

    ///////////////////////////////////
    // isValid
    test("Testing the isValid function", () => {
        expect(isValid(ADDITION_QUESTION, "4")).toEqual(true);
        expect(isValid(ADDITION_QUESTION, "2")).toEqual(true);
        expect(isValid(ADDITION_QUESTION, " 4\n")).toEqual(true);
        expect(isValid(LETTER_QUESTION, "Z")).toEqual(true);
        expect(isValid(LETTER_QUESTION, "z")).toEqual(true);
        expect(isValid(LETTER_QUESTION, "4")).toEqual(true);
        expect(isValid(LETTER_QUESTION, "0")).toEqual(true);
        expect(isValid(LETTER_QUESTION, "zed")).toEqual(true);
        expect(isValid(COLOR_QUESTION, "red")).toEqual(true);
        expect(isValid(COLOR_QUESTION, "apple")).toEqual(true);
        expect(isValid(COLOR_QUESTION, "firetruck")).toEqual(true);
        expect(isValid(COLOR_QUESTION, "RED")).toEqual(false);
        expect(isValid(COLOR_QUESTION, "orange")).toEqual(false);
        expect(isValid(SHAPE_QUESTION, "square")).toEqual(true);
        expect(isValid(SHAPE_QUESTION, "triangle")).toEqual(true);
        expect(isValid(SHAPE_QUESTION, "circle")).toEqual(true);
        expect(isValid(SHAPE_QUESTION, "circle ")).toEqual(false);
        expect(isValid(SHAPE_QUESTION, "rhombus")).toEqual(false);
    });

    ///////////////////////////////////
    // toShortForm
    test("Testing the toShortForm function", () => {
        expect(toShortForm(ADDITION_QUESTION)).toEqual("1: Addition");
        expect(toShortForm(LETTER_QUESTION)).toEqual("2: Letters");
        expect(toShortForm(COLOR_QUESTION)).toEqual("5: Colors");
        expect(toShortForm(SHAPE_QUESTION)).toEqual("9: Shapes");
        expect(toShortForm(BLANK_QUESTIONS[1])).toEqual("47: My New Que");
    });

    ///////////////////////////////////
    // toMarkdown
    test("Testing the toMarkdown function", () => {
        expect(toMarkdown(ADDITION_QUESTION)).toEqual(`# Addition
What is 2+2?`);
        expect(toMarkdown(LETTER_QUESTION)).toEqual(`# Letters
What is the last letter of the English alphabet?`);
        expect(toMarkdown(COLOR_QUESTION)).toEqual(`# Colors
Which of these is a color?
- red
- apple
- firetruck`);
        expect(toMarkdown(SHAPE_QUESTION)).toEqual(`# Shapes
What shape can you make with one line?
- square
- triangle
- circle`);
    });

    afterEach(() => {
        expect(ADDITION_QUESTION).toEqual(BACKUP_ADDITION_QUESTION);
        expect(LETTER_QUESTION).toEqual(BACKUP_LETTER_QUESTION);
        expect(SHAPE_QUESTION).toEqual(BACKUP_SHAPE_QUESTION);
        expect(COLOR_QUESTION).toEqual(BACKUP_COLOR_QUESTION);
        expect(BLANK_QUESTIONS).toEqual(BACKUP_BLANK_QUESTIONS);
    });

    ///////////////////////////////////
    // renameQuestion
    test("Testing the renameQuestion function", () => {
        expect(
            renameQuestion(ADDITION_QUESTION, "My Addition Question")
        ).toEqual({
            id: 1,
            name: "My Addition Question",
            body: "What is 2+2?",
            type: "short_answer_question",
            options: [],
            expected: "4",
            points: 1,
            published: true
        });
        expect(
            renameQuestion(SHAPE_QUESTION, "I COMPLETELY CHANGED THIS NAME")
        ).toEqual({
            id: 9,
            name: "I COMPLETELY CHANGED THIS NAME",
            body: "What shape can you make with one line?",
            type: "multiple_choice_question",
            options: ["square", "triangle", "circle"],
            expected: "circle",
            points: 2,
            published: false
        });
    });

    ///////////////////////////////////
    // publishQuestion
    test("Testing the publishQuestion function", () => {
        expect(publishQuestion(ADDITION_QUESTION)).toEqual({
            id: 1,
            name: "Addition",
            body: "What is 2+2?",
            type: "short_answer_question",
            options: [],
            expected: "4",
            points: 1,
            published: false
        });
        expect(publishQuestion(LETTER_QUESTION)).toEqual({
            id: 2,
            name: "Letters",
            body: "What is the last letter of the English alphabet?",
            type: "short_answer_question",
            options: [],
            expected: "Z",
            points: 1,
            published: true
        });
        expect(publishQuestion(publishQuestion(ADDITION_QUESTION))).toEqual({
            id: 1,
            name: "Addition",
            body: "What is 2+2?",
            type: "short_answer_question",
            options: [],
            expected: "4",
            points: 1,
            published: true
        });
    });

    ///////////////////////////////////
    // duplicateQuestion
    test("Testing the duplicateQuestion function", () => {
        expect(duplicateQuestion(9, ADDITION_QUESTION)).toEqual({
            id: 9,
            name: "Copy of Addition",
            body: "What is 2+2?",
            type: "short_answer_question",
            options: [],
            expected: "4",
            points: 1,
            published: false
        });
        expect(duplicateQuestion(55, LETTER_QUESTION)).toEqual({
            id: 55,
            name: "Copy of Letters",
            body: "What is the last letter of the English alphabet?",
            type: "short_answer_question",
            options: [],
            expected: "Z",
            points: 1,
            published: false
        });
    });

    ///////////////////////////////////
    // addOption
    test("Testing the addOption function", () => {
        expect(addOption(SHAPE_QUESTION, "heptagon")).toEqual({
            id: 9,
            name: "Shapes",
            body: "What shape can you make with one line?",
            type: "multiple_choice_question",
            options: ["square", "triangle", "circle", "heptagon"],
            expected: "circle",
            points: 2,
            published: false
        });
        expect(addOption(COLOR_QUESTION, "squiggles")).toEqual({
            id: 5,
            name: "Colors",
            body: "Which of these is a color?",
            type: "multiple_choice_question",
            options: ["red", "apple", "firetruck", "squiggles"],
            expected: "red",
            points: 1,
            published: true
        });
    });

    ///////////////////////////////////
    // mergeQuestion
    test("Testing the mergeQuestion function", () => {
        expect(
            mergeQuestion(
                192,
                "More Points Addition",
                ADDITION_QUESTION,
                SHAPE_QUESTION
            )
        ).toEqual({
            id: 192,
            name: "More Points Addition",
            body: "What is 2+2?",
            type: "short_answer_question",
            options: [],
            expected: "4",
            points: 2,
            published: false
        });

        expect(
            mergeQuestion(
                99,
                "Less Points Shape",
                SHAPE_QUESTION,
                ADDITION_QUESTION
            )
        ).toEqual({
            id: 99,
            name: "Less Points Shape",
            body: "What shape can you make with one line?",
            type: "multiple_choice_question",
            options: ["square", "triangle", "circle"],
            expected: "circle",
            points: 1,
            published: false
        });
    });
});
