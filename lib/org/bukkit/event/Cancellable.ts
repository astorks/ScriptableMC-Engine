declare var Java: any;

export interface Cancellable {
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
}

export class Cancellable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Cancellable');
	}
}

