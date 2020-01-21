declare var Java: any;

export interface AnimalTamer {
	getName(): string;
	getUniqueId(): string;
}

export class AnimalTamer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AnimalTamer');
	}
}

