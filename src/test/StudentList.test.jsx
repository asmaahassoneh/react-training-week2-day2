import { render, screen } from "@testing-library/react";
import StudentList from "../components/StudentList";
import { test, expect, describe } from "vitest";

const mockStudents = [
  {
    id: 1,
    name: "Asmaa",
    email: "asmaa@test.com",
    major: "IT",
    gpa: 3.7,
  },
];

describe("StudentList", () => {
  test("renders student data", () => {
    render(
      <StudentList
        students={mockStudents}
        onDelete={() => {}}
        onSelect={() => {}}
      />,
    );

    expect(screen.getByText("Asmaa")).toBeInTheDocument();
    expect(screen.getByText("IT")).toBeInTheDocument();
  });

  test("shows empty message when no students", () => {
    render(
      <StudentList students={[]} onDelete={() => {}} onSelect={() => {}} />,
    );

    expect(screen.getByText(/no students/i)).toBeInTheDocument();
  });
});
