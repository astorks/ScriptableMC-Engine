declare var Java: any;

export interface SlotPos {
	getRow(): number;
	getColumn(): number;
}

export class SlotPos {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotPos');
	}
	constructor(arg0: number, arg1: number);
	constructor(...args: any[]) {
		return new SlotPos.$javaClass(...args);
	}
}

