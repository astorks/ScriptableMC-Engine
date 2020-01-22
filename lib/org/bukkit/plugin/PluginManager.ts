declare var Java: any;
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {EventPriority} from '../../../org/bukkit/event/EventPriority.js'
import {EventExecutor} from '../../../org/bukkit/plugin/EventExecutor.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Event} from '../../../org/bukkit/event/Event.js'
import {Permissible} from '../../../org/bukkit/permissions/Permissible.js'

export interface PluginManager {
	getPermissions(): any;
	getPermission(_name: string): Permission;
	getPermissionSubscriptions(permission: string): any;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
	enablePlugin(plugin: Plugin): void;
	disablePlugin(plugin: Plugin): void;
	loadPlugin(file: any): Plugin;
	getPlugin(_name: string): Plugin;
	useTimings(): boolean;
	disablePlugins(): void;
	loadPlugins(directory: any): Array<Plugin>;
	isPluginEnabled(plugin: Plugin): boolean;
	isPluginEnabled(_name: string): boolean;
	clearPlugins(): void;
	removePermission(perm: Permission): void;
	removePermission(_name: string): void;
	registerEvents(listener: Listener, plugin: Plugin): void;
	callEvent(event: Event): void;
	addPermission(perm: Permission): void;
	recalculatePermissionDefaults(perm: Permission): void;
	registerInterface(loader: any): void;
	getPlugins(): Array<Plugin>;
	unsubscribeFromPermission(permission: string, permissible: Permissible): void;
	subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
	getDefaultPermissions(op: boolean): any;
	getDefaultPermSubscriptions(op: boolean): any;
	unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
	subscribeToPermission(permission: string, permissible: Permissible): void;
}

export class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}
}

