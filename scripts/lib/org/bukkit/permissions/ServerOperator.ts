declare var Java: any;

export interface ServerOperator {
	setOp(arg0: boolean): void;
	isOp(): boolean;
}

export class ServerOperator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.ServerOperator');
	}
}

