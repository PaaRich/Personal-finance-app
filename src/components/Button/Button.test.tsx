import { screen, render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import '@testing-library/jest-dom/vitest';
import Button from "./Button";

describe("Testing the button", () => {
    test("existence", () => {
        render(<Button />);
        const Btn = screen.getByRole('button');
        expect(Btn).toBeInTheDocument();
    })
})