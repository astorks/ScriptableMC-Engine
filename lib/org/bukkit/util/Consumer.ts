declare var Java: any;

export interface Consumer {
	accept(t: any): void;
}

export class Consumer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.Consumer');
	}
}

