declare var Java: any;

export interface DragType {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class DragType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.DragType');
	}

	public static get SINGLE(): DragType {
		return this.$javaClass.SINGLE;
	}
	public static get EVEN(): DragType {
		return this.$javaClass.EVEN;
	}
}

