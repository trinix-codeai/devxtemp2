import { describe, expect, it } from "vitest";
import { destinations, packages, posts } from "./data/mockData";

describe("mock data", () => {
  it("provides seeded content for key commerce surfaces", () => {
    expect(destinations.length).toBeGreaterThan(0);
    expect(packages.length).toBeGreaterThan(0);
    expect(posts.length).toBeGreaterThan(0);
  });
});
