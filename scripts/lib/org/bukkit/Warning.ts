declare var Java: any;

export interface Warning {
	value(): boolean;
	reason(): string;
	annotationType(): any;
}

export class Warning {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning');
	}
}

