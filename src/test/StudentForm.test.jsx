import { render, screen, fireEvent } from "@testing-library/react";
import StudentForm from "../components/StudentForm";
import { test, expect, describe, vi } from "vitest";

describe("StudentForm", () => {
  test("renders register button", () => {
    render(<StudentForm setStudent={() => {}} />);
    expect(
      screen.getByRole("button", { name: /register student/i }),
    ).toBeInTheDocument();
  });

  test("calls addStudent when form is valid", () => {
    const mockAddStudent = vi.fn();

    render(<StudentForm setStudent={mockAddStudent} />);

    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: "Asmaa" },
    });

    fireEvent.change(screen.getByPlaceholderText(/email address/i), {
      target: { value: "asmaa@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/major/i), {
      target: { value: "Computer Science" },
    });

    fireEvent.change(screen.getByPlaceholderText(/gpa/i), {
      target: { value: "3.5" },
    });

    fireEvent.click(screen.getByRole("button", { name: /register student/i }));

    expect(mockAddStudent).toHaveBeenCalledTimes(1);
  });
});
