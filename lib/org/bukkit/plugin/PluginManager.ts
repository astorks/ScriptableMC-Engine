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
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
	removePermission(perm: Permission): void;
	removePermission(_name: string): void;
	registerInterface(loader: any): void;
	isPluginEnabled(_name: string): boolean;
	isPluginEnabled(plugin: Plugin): boolean;
	loadPlugins(directory: any): Array<Plugin>;
	registerEvents(listener: Listener, plugin: Plugin): void;
	useTimings(): boolean;
	getPlugins(): Array<Plugin>;
	disablePlugins(): void;
	callEvent(event: Event): void;
	clearPlugins(): void;
	addPermission(perm: Permission): void;
	getPermissionSubscriptions(permission: string): any;
	disablePlugin(plugin: Plugin): void;
	getPlugin(_name: string): Plugin;
	loadPlugin(file: any): Plugin;
	enablePlugin(plugin: Plugin): void;
	getDefaultPermissions(op: boolean): any;
	recalculatePermissionDefaults(perm: Permission): void;
	unsubscribeFromPermission(permission: string, permissible: Permissible): void;
	subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
	unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
	getDefaultPermSubscriptions(op: boolean): any;
	subscribeToPermission(permission: string, permissible: Permissible): void;
}

export class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}
}

