declare var Java: any;
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {ServerOperator} from '../../../org/bukkit/permissions/ServerOperator.js'

export interface Permissible extends ServerOperator {
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	getEffectivePermissions(): any;
	recalculatePermissions(): void;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	removeAttachment(arg0: PermissionAttachment): void;
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	setOp(arg0: boolean): void;
	isOp(): boolean;
}

export class Permissible {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permissible');
	}
}

