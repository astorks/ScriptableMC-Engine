declare var Java: any;

export interface Effect$Type {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Effect$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Effect$Type');
	}

	public static get SOUND(): Effect$Type {
		return this.$javaClass.SOUND;
	}
	public static get VISUAL(): Effect$Type {
		return this.$javaClass.VISUAL;
	}
}

