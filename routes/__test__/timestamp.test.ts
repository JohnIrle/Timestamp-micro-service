import request from "supertest";
import { app } from "../../app";

it("returns a 200 on index route", async () => {
  return request(app).get("/").expect(200);
});

it("matches snapshot", async () => {
  const response = await request(app).get("/December%2015,%202015");
  expect(response.body).toMatchInlineSnapshot(`
Object {
  "natural": "December 15, 2015",
  "unix": 1450159200000,
}
`);
});

it("returns the correct response with natural date", async () => {
  const response = await request(app).get("/December%2015,%202015");
  expect(response.body).toEqual({
    unix: 1450159200000,
    natural: "December 15, 2015",
  });
});

it("returns the correct response with a unix date", async () => {
  const response = await request(app).get("/1450137600");
  expect(response.body).toEqual({
    unix: 1450137600,
    natural: "December 14, 2015",
  });
});
