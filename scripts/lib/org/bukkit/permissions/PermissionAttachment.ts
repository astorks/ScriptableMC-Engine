declare var Java: any;
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {PermissionRemovedExecutor} from '../../../org/bukkit/permissions/PermissionRemovedExecutor.js'
import {Permissible} from '../../../org/bukkit/permissions/Permissible.js'

export interface PermissionAttachment {
	remove(): boolean;
	getPermissions(): any;
	setPermission(arg0: Permission, arg1: boolean): void;
	setPermission(arg0: string, arg1: boolean): void;
	getPlugin(): Plugin;
	getRemovalCallback(): PermissionRemovedExecutor;
	getPermissible(): Permissible;
	unsetPermission(arg0: Permission): void;
	unsetPermission(arg0: string): void;
	setRemovalCallback(arg0: PermissionRemovedExecutor): void;
}

export class PermissionAttachment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionAttachment');
	}
	constructor(arg0: Plugin, arg1: Permissible) {
		return new PermissionAttachment.$javaClass(arg0, arg1);
	}
	public static new0(arg0: Plugin, arg1: Permissible): PermissionAttachment {
		return new PermissionAttachment.$javaClass(arg0, arg1);
	}
}

