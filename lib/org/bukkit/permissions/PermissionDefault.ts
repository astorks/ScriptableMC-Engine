declare var Java: any;

export interface PermissionDefault {
	getValue(op: boolean): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class PermissionDefault {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionDefault');
	}

	public static get TRUE(): PermissionDefault {
		return this.$javaClass.TRUE;
	}
	public static get FALSE(): PermissionDefault {
		return this.$javaClass.FALSE;
	}
	public static get OP(): PermissionDefault {
		return this.$javaClass.OP;
	}
	public static get NOT_OP(): PermissionDefault {
		return this.$javaClass.NOT_OP;
	}
}

