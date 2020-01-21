declare var Java: any;

export interface RenderType {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class RenderType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.RenderType');
	}

	public static get INTEGER(): RenderType {
		return this.$javaClass.INTEGER;
	}
	public static get HEARTS(): RenderType {
		return this.$javaClass.HEARTS;
	}
}

