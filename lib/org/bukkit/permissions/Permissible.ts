declare var Java: any;
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {ServerOperator} from '../../../org/bukkit/permissions/ServerOperator.js'

export interface Permissible extends ServerOperator {
	removeAttachment(attachment: PermissionAttachment): void;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	hasPermission(_name: string): boolean;
	hasPermission(perm: Permission): boolean;
	recalculatePermissions(): void;
	getEffectivePermissions(): any;
	isOp(): boolean;
	setOp(value: boolean): void;
}

export class Permissible {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permissible');
	}
}

