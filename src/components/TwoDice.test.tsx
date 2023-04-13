import React from "react";
import { render, screen } from "@testing-library/react";
import { TwoDice } from "./TwoDice";
import { extractDigits } from "./StartAttempt.test";

describe("TwoDice Component tests", () => {
    let mathRandomFunction: jest.SpyInstance;
    beforeEach(() => {
        mathRandomFunction = jest
            .spyOn(global.Math, "random")
            .mockReturnValue(0.5) // 4
            .mockReturnValueOnce(0.0) // 1
            .mockReturnValueOnce(0.99) // 6
            .mockReturnValueOnce(0.75) // 5
            .mockReturnValueOnce(0.75) // 5
            .mockReturnValueOnce(0.1) // 1
            .mockReturnValueOnce(0.1); // 1
    });
    afterEach(() => {
        jest.spyOn(global.Math, "random").mockRestore();
    });
    beforeEach(() => {
        render(<TwoDice />);
    });
    test("There is a `left-die` and `right-die` testid", () => {
        const leftDie = screen.getByTestId("left-die");
        const rightDie = screen.getByTestId("right-die");
        expect(leftDie).toBeInTheDocument();
        expect(rightDie).toBeInTheDocument();
    });
    test("The `left-die` and `right-die` are two different numbers", () => {
        const leftDie = screen.getByTestId("left-die");
        const rightDie = screen.getByTestId("right-die");
        const leftNumber = extractDigits(leftDie);
        const rightNumber = extractDigits(rightDie);
        // Then they are two numbers
        expect(leftNumber).not.toBeNull();
        expect(rightNumber).not.toBeNull();
        // Then they are two different numbers
        expect(leftNumber).not.toEqual(rightNumber);
    });
    test("There are two buttons present", () => {
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        expect(leftButton).toBeInTheDocument();
        expect(rightButton).toBeInTheDocument();
    });
    test("Clicking left button changes first number", () => {
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        leftButton.click();
        leftButton.click();
        leftButton.click();
        // Then the random function should be called 3 times
        expect(mathRandomFunction).toBeCalledTimes(3);
        // And the number to be 5
        const leftNumber = extractDigits(screen.getByTestId("left-die"));
        expect(leftNumber).toEqual(5);
    });
    // Clicking right button changes second number
    test("Clicking right button changes second number", () => {
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        rightButton.click();
        rightButton.click();
        rightButton.click();
        // Then the random function should be called 3 times
        expect(mathRandomFunction).toBeCalledTimes(3);
        // And the number to be 5
        const rightNumber = extractDigits(screen.getByTestId("right-die"));
        expect(rightNumber).toEqual(5);
    });
    // Rolling two different numbers does not win or lose the game
    test("Rolling two different numbers does not win or lose the game", () => {
        // Given
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        const leftDie = screen.getByTestId("left-die");
        const rightDie = screen.getByTestId("right-die");
        // When the left and right buttons are rolled once each
        leftButton.click();
        rightButton.click();
        // Then the numbers are not equal
        const leftNumber = extractDigits(leftDie);
        const rightNumber = extractDigits(rightDie);
        expect(leftNumber).toEqual(1);
        expect(rightNumber).toEqual(6);
        // And then the game is not won
        const winText = screen.queryByText(/Win/i);
        expect(winText).toBeNull();
        // And then nor is the game lost
        const loseText = screen.queryByText(/Lose/i);
        expect(loseText).toBeNull();
    });
    test("Getting snake eyes loses the game", () => {
        // Given
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        const leftDie = screen.getByTestId("left-die");
        const rightDie = screen.getByTestId("right-die");
        // When the left and right buttons are rolled once each
        leftButton.click();
        rightButton.click();
        rightButton.click();
        rightButton.click();
        rightButton.click();
        // Then the numbers are not equal
        const leftNumber = extractDigits(leftDie);
        const rightNumber = extractDigits(rightDie);
        expect(leftNumber).toEqual(1);
        expect(rightNumber).toEqual(1);
        // And then the game is not won
        const winText = screen.queryByText(/Win/i);
        expect(winText).toBeNull();
        // And then the game is lost
        const loseText = screen.getByText(/Lose/i);
        expect(loseText).toBeInTheDocument();
    });
    test("Getting matching numbers wins the game", () => {
        // Given
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        const leftDie = screen.getByTestId("left-die");
        const rightDie = screen.getByTestId("right-die");
        // When the left and right buttons are rolled once each
        leftButton.click();
        leftButton.click();
        leftButton.click();
        rightButton.click();
        // Then the numbers are not equal
        const leftNumber = extractDigits(leftDie);
        const rightNumber = extractDigits(rightDie);
        expect(leftNumber).toEqual(5);
        expect(rightNumber).toEqual(5);
        // And then the game is not lost
        const loseText = screen.queryByText(/Lose/i);
        expect(loseText).toBeNull();
        // And then the game is won
        const winText = screen.getByText(/Win/i);
        expect(winText).toBeInTheDocument();
    });
});
