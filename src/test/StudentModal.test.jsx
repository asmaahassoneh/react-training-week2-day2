import { render, screen, fireEvent } from "@testing-library/react";
import StudentModal from "../components/StudentModal";
import { test, expect, describe, vi } from "vitest";

const mockStudent = {
  id: 1,
  name: "Asmaa",
  email: "asmaa@test.com",
  major: "Computer Science",
  gpa: 3.8,
};

describe("StudentModal", () => {
  test("renders student details correctly", () => {
    render(<StudentModal student={mockStudent} onClose={() => {}} />);

    expect(
      screen.getByRole("heading", { name: /student details/i }),
    ).toBeInTheDocument();

    expect(screen.getByText("Name:")).toBeInTheDocument();
    expect(screen.getByText("Asmaa")).toBeInTheDocument();

    expect(screen.getByText("asmaa@test.com")).toBeInTheDocument();
    expect(screen.getByText("Computer Science")).toBeInTheDocument();
    expect(screen.getByText("3.8")).toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    const mockOnClose = vi.fn();

    render(<StudentModal student={mockStudent} onClose={mockOnClose} />);

    const closeButton = screen.getByRole("button", { name: /close/i });

    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
