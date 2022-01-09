import { render, screen, userEvent } from "@testing-library/react";
import Type from "../type";

test("update produc's total when products change", async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("상품 총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  const americaInput = await screen.findByRole("spinButton", {
    name: "America",
  });

  userEvent.clear();
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});
