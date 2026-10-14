import { describe, expect, it } from "vitest";
import { rssNewsSwitchState } from "./rssSourcesSheet.utils";

describe("rssNewsSwitchState", () => {
	it("mirrors the loaded gateway setting", () => {
		expect(rssNewsSwitchState({ enabled: true }, false)).toEqual({ checked: true, ready: true, failed: false });
		expect(rssNewsSwitchState({ enabled: false }, false)).toEqual({ checked: false, ready: true, failed: false });
	});

	it("is not ready, and not shown as on, while the setting loads", () => {
		expect(rssNewsSwitchState(undefined, false)).toEqual({ checked: false, ready: false, failed: false });
	});

	it("reports a failed load instead of defaulting to on", () => {
		expect(rssNewsSwitchState(undefined, true)).toEqual({ checked: false, ready: false, failed: true });
	});
});