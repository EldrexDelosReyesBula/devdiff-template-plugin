import { describe, it, expect } from "vitest";
import plugin from "../src/index";

describe("DevDiff Template Plugin", () => {
  it("exports a valid plugin manifest", () => {
    expect(plugin.id).toBeDefined();
    expect(plugin.name).toBeDefined();
    expect(plugin.version).toBeDefined();
    expect(typeof plugin.activate).toBe("function");
    expect(typeof plugin.deactivate).toBe("function");
  });

  it("contains lifecycle hooks and commands", () => {
    expect(plugin.hooks).toBeDefined();
    expect(Array.isArray(plugin.commands)).toBe(true);
    expect(plugin.commands?.length).toBeGreaterThan(0);
  });
});
