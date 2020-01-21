declare var Java: any;

export interface Consumer {
	accept(arg0: any): void;
}

export class Consumer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.Consumer');
	}
}

