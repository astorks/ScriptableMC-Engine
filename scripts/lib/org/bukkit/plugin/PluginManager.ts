declare var Java: any;
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {EventPriority} from '../../../org/bukkit/event/EventPriority.js'
import {EventExecutor} from '../../../org/bukkit/plugin/EventExecutor.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Permissible} from '../../../org/bukkit/permissions/Permissible.js'
import {Event} from '../../../org/bukkit/event/Event.js'

export interface PluginManager {
	getPermissions(): any;
	getPermission(arg0: string): Permission;
	getPermissionSubscriptions(arg0: string): any;
	registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
	registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
	enablePlugin(arg0: Plugin): void;
	disablePlugin(arg0: Plugin): void;
	loadPlugin(arg0: any): Plugin;
	getPlugin(arg0: string): Plugin;
	getDefaultPermissions(arg0: boolean): any;
	subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
	recalculatePermissionDefaults(arg0: Permission): void;
	subscribeToPermission(arg0: string, arg1: Permissible): void;
	getDefaultPermSubscriptions(arg0: boolean): any;
	unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
	unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
	callEvent(arg0: Event): void;
	clearPlugins(): void;
	addPermission(arg0: Permission): void;
	isPluginEnabled(arg0: Plugin): boolean;
	isPluginEnabled(arg0: string): boolean;
	registerEvents(arg0: Listener, arg1: Plugin): void;
	useTimings(): boolean;
	loadPlugins(arg0: any): Array<Plugin>;
	disablePlugins(): void;
	getPlugins(): Array<Plugin>;
	removePermission(arg0: string): void;
	removePermission(arg0: Permission): void;
	registerInterface(arg0: any): void;
}

export class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}
}

