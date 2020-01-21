declare var Java: any;

export interface MainHand {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class MainHand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MainHand');
	}

	public static get LEFT(): MainHand {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): MainHand {
		return this.$javaClass.RIGHT;
	}
}

