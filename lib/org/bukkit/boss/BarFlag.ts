declare var Java: any;

export interface BarFlag {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class BarFlag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarFlag');
	}

	public static get DARKEN_SKY(): BarFlag {
		return this.$javaClass.DARKEN_SKY;
	}
	public static get PLAY_BOSS_MUSIC(): BarFlag {
		return this.$javaClass.PLAY_BOSS_MUSIC;
	}
	public static get CREATE_FOG(): BarFlag {
		return this.$javaClass.CREATE_FOG;
	}
}

