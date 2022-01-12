import { render, screen } from "../../../test-utils";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import Type from "../type";

test("display product images from server", async () => {
  render(<Type orderType="products" />);

  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((el) => el.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

test("when fetching product datas, face an error", async () => {
  server.resetHandlers(
    rest.get("http://localhost:5000/products", (res, req, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("fetch option infomation from server", async () => {
  render(<Type orderType="options" />);

  const optionCheckboxs = await screen.findAllByRole("checkbox");
  expect(optionCheckboxs).toHaveLength(2);
});
