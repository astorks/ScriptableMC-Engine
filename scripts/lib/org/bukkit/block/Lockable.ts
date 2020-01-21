declare var Java: any;

export interface Lockable {
	isLocked(): boolean;
	getLock(): string;
	setLock(arg0: string): void;
}

export class Lockable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Lockable');
	}
}

