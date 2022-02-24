import request from "supertest";
import { app } from "../../app";

it("returns a 200 on index route", async () => {
  return request(app).get("/").expect(200);
});

it("returns the correct response with natural date", async () => {
  const response = await request(app).get("/December%2015,%202015");
  const response2 = await request(app).get("/May%2013,%201990");
  const response3 = await request(app).get("/January%2012,%202021");
  expect(response.body).toEqual({
    unix: 1450137600,
    natural: "December 15, 2015",
  });
  expect(response2.body).toEqual({
    unix: 642556800,
    natural: "May 13, 1990",
  });
  expect(response3.body).toEqual({
    unix: 1610409600,
    natural: "January 12, 2021",
  });
});

it("returns the correct response with a unix date", async () => {
  const response = await request(app).get("/1450137600");
  const response2 = await request(app).get("/642556800");
  const response3 = await request(app).get("/1610409600");
  expect(response.body).toEqual({
    unix: 1450137600,
    natural: "December 15, 2015",
  });
  expect(response2.body).toEqual({
    unix: 642556800,
    natural: "May 13, 1990",
  });
  expect(response3.body).toEqual({
    unix: 1610409600,
    natural: "January 12, 2021",
  });
});
