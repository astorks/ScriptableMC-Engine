declare var Java: any;

export interface Nameable {
	getCustomName(): string;
	setCustomName(arg0: string): void;
}

export class Nameable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Nameable');
	}
}

