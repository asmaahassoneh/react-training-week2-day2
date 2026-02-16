import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import { test, expect, describe } from "vitest";

describe("Dashboard", () => {
  test("renders dashboard title", () => {
    render(<Dashboard />);
    expect(screen.getByText(/student dashboard/i)).toBeInTheDocument();
  });
});
