declare var Java: any;
import {PermissionDefault} from '../../../org/bukkit/permissions/PermissionDefault.js'

export interface Permission {
	getName(): string;
	getDefault(): PermissionDefault;
	setDefault(arg0: PermissionDefault): void;
	getDescription(): string;
	setDescription(arg0: string): void;
	recalculatePermissibles(): void;
	addParent(arg0: Permission, arg1: boolean): void;
	addParent(arg0: string, arg1: boolean): Permission;
	getPermissibles(): any;
	getChildren(): any;
}

export class Permission {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permission');
	}
	constructor(arg0: string, arg1: string, arg2: PermissionDefault) {
		return new Permission.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: string, arg1: string, arg2: PermissionDefault): Permission {
		return new Permission.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: string, arg1: string, arg2: PermissionDefault, arg3: any): Permission {
		return new Permission.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new2(arg0: string, arg1: string, arg2: any): Permission {
		return new Permission.$javaClass(arg0, arg1, arg2);
	}
	public static new3(arg0: string, arg1: PermissionDefault, arg2: any): Permission {
		return new Permission.$javaClass(arg0, arg1, arg2);
	}
	public static new4(arg0: string, arg1: any): Permission {
		return new Permission.$javaClass(arg0, arg1);
	}
	public static new5(arg0: string): Permission {
		return new Permission.$javaClass(arg0);
	}
	public static new6(arg0: string, arg1: string): Permission {
		return new Permission.$javaClass(arg0, arg1);
	}
	public static new7(arg0: string, arg1: PermissionDefault): Permission {
		return new Permission.$javaClass(arg0, arg1);
	}
	public static loadPermissions(arg0: any, arg1: string, arg2: PermissionDefault): any {
		return Permission.$javaClass.loadPermissions(arg0, arg1, arg2);
	}
	public static loadPermission(arg0: string, arg1: any, arg2: PermissionDefault, arg3: any): Permission {
		return Permission.$javaClass.loadPermission(arg0, arg1, arg2, arg3);
	}
	public static loadPermission0(arg0: string, arg1: any): Permission {
		return Permission.$javaClass.loadPermission(arg0, arg1);
	}
}

