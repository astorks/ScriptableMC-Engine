declare var Java: any;

export interface Nameable {
	setCustomName(_name: string): void;
	getCustomName(): string;
}

export class Nameable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Nameable');
	}
}

