declare var Java: any;

export interface Cancellable {
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
}

export class Cancellable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Cancellable');
	}
}

