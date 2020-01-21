declare var Java: any;

export interface Lockable {
	isLocked(): boolean;
	setLock(key: string): void;
	getLock(): string;
}

export class Lockable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Lockable');
	}
}

