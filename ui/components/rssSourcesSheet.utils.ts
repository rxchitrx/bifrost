export interface RSSNewsSwitchState {
	checked: boolean;
	/** False until the gateway setting is known; the switch stays disabled meanwhile. */
	ready: boolean;
	/** The setting could not be loaded, so the sheet shows an error next to the switch. */
	failed: boolean;
}

/**
 * State of the gateway-wide news switch. Showing a default before the setting
 * loads would let an admin "turn off" news that is already off, so the switch
 * stays unknown until the gateway answers.
 */
export function rssNewsSwitchState(settings: { enabled: boolean } | undefined, isError: boolean): RSSNewsSwitchState {
	if (!settings) return { checked: false, ready: false, failed: isError };
	return { checked: settings.enabled, ready: true, failed: false };
}