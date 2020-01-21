declare var Java: any;

export interface GameRule {
	getName(): string;
	getType(): any;
}

export class GameRule {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GameRule');
	}
	public static values(): Array<GameRule> {
		return GameRule.$javaClass.values();
	}
	public static getByName(arg0: string): GameRule {
		return GameRule.$javaClass.getByName(arg0);
	}
}

