declare var Java: any;

export interface Raid$RaidStatus {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Raid$RaidStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid$RaidStatus');
	}

	public static get ONGOING(): Raid$RaidStatus {
		return this.$javaClass.ONGOING;
	}
	public static get VICTORY(): Raid$RaidStatus {
		return this.$javaClass.VICTORY;
	}
	public static get LOSS(): Raid$RaidStatus {
		return this.$javaClass.LOSS;
	}
	public static get STOPPED(): Raid$RaidStatus {
		return this.$javaClass.STOPPED;
	}
}

