declare var Java: any;
import {PluginLoadOrder} from '../../../org/bukkit/plugin/PluginLoadOrder.js'
import {PermissionDefault} from '../../../org/bukkit/permissions/PermissionDefault.js'

export interface PluginDescriptionFile {
	getName(): string;
	getPermissions(): any;
	save(writer: any): void;
	getVersion(): string;
	getPrefix(): string;
	getFullName(): string;
	getDescription(): string;
	getMain(): string;
	getLoad(): PluginLoadOrder;
	getAuthors(): any;
	getWebsite(): string;
	getDepend(): any;
	getSoftDepend(): any;
	getLoadBefore(): any;
	getCommands(): any;
	getAwareness(): any;
	getRawName(): string;
	getClassLoaderOf(): string;
	getAPIVersion(): string;
	getPermissionDefault(): PermissionDefault;
}

export class PluginDescriptionFile {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginDescriptionFile');
	}
	constructor(reader: any);
	constructor(stream: any);
	constructor(pluginName: string, pluginVersion: string, mainClass: string);
	constructor(...args: any[]) {
		return new PluginDescriptionFile.$javaClass(...args);
	}
}

