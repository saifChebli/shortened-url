import request from "supertest";
import { app } from "../../server.js";
import { connectDB, disconnectDB } from "../../config/db.js";

describe("API Endpoints", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  it("should shorten a URL", async () => {
    const res = await request(app)
      .post("/api/shorten")
      .send({ longUrl: "https://example.com" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("shortUrl");
  });
});
