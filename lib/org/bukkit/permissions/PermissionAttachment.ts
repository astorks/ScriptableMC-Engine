declare var Java: any;
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {PermissionRemovedExecutor} from '../../../org/bukkit/permissions/PermissionRemovedExecutor.js'
import {Permissible} from '../../../org/bukkit/permissions/Permissible.js'

export interface PermissionAttachment {
	remove(): boolean;
	getPermissions(): any;
	setPermission(_name: string, value: boolean): void;
	setPermission(perm: Permission, value: boolean): void;
	getPlugin(): Plugin;
	setRemovalCallback(ex: PermissionRemovedExecutor): void;
	getRemovalCallback(): PermissionRemovedExecutor;
	unsetPermission(perm: Permission): void;
	unsetPermission(_name: string): void;
	getPermissible(): Permissible;
}

export class PermissionAttachment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionAttachment');
	}
	constructor(plugin: Plugin, permissible: Permissible);
	constructor(...args: any[]) {
		return new PermissionAttachment.$javaClass(...args);
	}
}

