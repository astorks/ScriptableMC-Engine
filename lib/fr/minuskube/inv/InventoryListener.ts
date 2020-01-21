declare var Java: any;

export interface InventoryListener {
	accept(arg0: any): void;
	getType(): any;
}

export class InventoryListener {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.InventoryListener');
	}
	constructor(arg0: any, arg1: any);
	constructor(...args: any[]) {
		return new InventoryListener.$javaClass(...args);
	}
}

