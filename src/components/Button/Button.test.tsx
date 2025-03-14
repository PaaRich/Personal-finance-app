import { screen, render } from "@testing-library/react";
import { describe, test, expect,vi } from "vitest";
import '@testing-library/jest-dom/vitest';
import userEvent from "@testing-library/user-event"
import Button from "./Button";

describe("Testing the button", () => {
    test("existence", () => {
        render(<Button title="Title" onclick={() => console.log("onclick")} />);
        const Btn = screen.getByRole('button');
        expect(Btn).toBeInTheDocument();
        expect(Btn).toHaveTextContent("Title")
    });

    test("responsiveness", async () => {
        userEvent.setup()
        render(<Button title="Add New Budget" onclick={() => console.log("onclick")} />);
        const Btn = screen.getByRole('button',{name:"+ Add New Budget"});
        await userEvent.hover(Btn);
        expect(Btn).toHaveStyle("backgroundColor:rgb(105, 104, 104)");
        const mockOnClick=vi.fn()
        await userEvent.click(Btn);
        expect(mockOnClick).toBeCalledTimes(1)
    })
})