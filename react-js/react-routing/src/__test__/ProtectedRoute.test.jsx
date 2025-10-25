import { expect, test } from "vitest";
import ProtectedRoute from "../components/ProtectedRoute";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("check for logout button as default", () => {
  render(
    <MemoryRouter initialEntries={[""]}>
      <ProtectedRoute />
    </MemoryRouter>
  );
  let button = screen.getByText(/logout/i);
  expect(button).toBeInTheDocument();
});

test("on logout button must be not visible", async () => {
  render(
    <MemoryRouter initialEntries={[""]}>
      <ProtectedRoute />
    </MemoryRouter>
  );
  let button = screen.getByText(/logout/i);
  fireEvent.click(button);
  await waitFor(() => {
    let button = screen.queryByText(/logout/i);
    expect(button).toBeNull();
  });
});
