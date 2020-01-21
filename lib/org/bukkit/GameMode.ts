declare var Java: any;

export interface GameMode {
	getValue(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class GameMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GameMode');
	}

	public static get CREATIVE(): GameMode {
		return this.$javaClass.CREATIVE;
	}
	public static get SURVIVAL(): GameMode {
		return this.$javaClass.SURVIVAL;
	}
	public static get ADVENTURE(): GameMode {
		return this.$javaClass.ADVENTURE;
	}
	public static get SPECTATOR(): GameMode {
		return this.$javaClass.SPECTATOR;
	}
}

