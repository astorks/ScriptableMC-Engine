declare var Java: any;

export interface Listener {
}

export class Listener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Listener');
	}
}

