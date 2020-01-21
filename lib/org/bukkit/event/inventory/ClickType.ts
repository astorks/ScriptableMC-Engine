declare var Java: any;

export interface ClickType {
	isShiftClick(): boolean;
	isRightClick(): boolean;
	isLeftClick(): boolean;
	isKeyboardClick(): boolean;
	isCreativeAction(): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class ClickType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.ClickType');
	}

	public static get LEFT(): ClickType {
		return this.$javaClass.LEFT;
	}
	public static get SHIFT_LEFT(): ClickType {
		return this.$javaClass.SHIFT_LEFT;
	}
	public static get RIGHT(): ClickType {
		return this.$javaClass.RIGHT;
	}
	public static get SHIFT_RIGHT(): ClickType {
		return this.$javaClass.SHIFT_RIGHT;
	}
	public static get WINDOW_BORDER_LEFT(): ClickType {
		return this.$javaClass.WINDOW_BORDER_LEFT;
	}
	public static get WINDOW_BORDER_RIGHT(): ClickType {
		return this.$javaClass.WINDOW_BORDER_RIGHT;
	}
	public static get MIDDLE(): ClickType {
		return this.$javaClass.MIDDLE;
	}
	public static get NUMBER_KEY(): ClickType {
		return this.$javaClass.NUMBER_KEY;
	}
	public static get DOUBLE_CLICK(): ClickType {
		return this.$javaClass.DOUBLE_CLICK;
	}
	public static get DROP(): ClickType {
		return this.$javaClass.DROP;
	}
	public static get CONTROL_DROP(): ClickType {
		return this.$javaClass.CONTROL_DROP;
	}
	public static get CREATIVE(): ClickType {
		return this.$javaClass.CREATIVE;
	}
	public static get UNKNOWN(): ClickType {
		return this.$javaClass.UNKNOWN;
	}
}

