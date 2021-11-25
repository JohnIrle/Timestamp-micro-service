import request from "supertest";
import { app } from "../../app";

it("returns a 200 on index route", async () => {
  return request(app).get("/").expect(200);
});

it("returns the correct response with natural date", async () => {
  const response = await request(app).get("/December%2015,%202015");
  console.log("natural", response.body);
  expect(response.body).toEqual({
    unix: 1450159200,
    natural: "December 15, 2015",
  });
});

it("returns the correct response with a unix date", async () => {
  const response = await request(app).get("/1450159200");
  console.log("unix", response.body);
  expect(response.body).toEqual({
    unix: 1450159200,
    natural: "December 15, 2015",
  });
});
