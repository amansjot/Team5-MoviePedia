/** QuestionType influences how a question is asked and what kinds of answers are possible */
export type QuestionType = "multiple_choice_question" | "short_answer_question";

/** A representation of a Question in a quizzing application */
export interface Question {
    /** A unique identifier for the question */
    id: number;
    /** The human-friendly title of the question */
    name: string;
    /** The instructions and content of the Question */
    body: string;
    /** The kind of Question; influences how the user answers and what options are displayed */
    type: QuestionType;
    /** The possible answers for a Question (for Multiple Choice questions) */
    options: string[];
    /** The actually correct answer expected */
    expected: string;
    /** How many points this question is worth, roughly indicating its importance and difficulty */
    points: number;
    /** Whether or not this question is ready to display to students */
    published: boolean;
}
