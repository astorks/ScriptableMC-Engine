declare var Java: any;
import {PluginLoadOrder} from '../../../org/bukkit/plugin/PluginLoadOrder.js'
import {PermissionDefault} from '../../../org/bukkit/permissions/PermissionDefault.js'

export interface PluginDescriptionFile {
	getName(): string;
	getPermissions(): any;
	save(arg0: any): void;
	getVersion(): string;
	getPrefix(): string;
	getFullName(): string;
	getDescription(): string;
	getMain(): string;
	getLoad(): PluginLoadOrder;
	getAuthors(): any;
	getDepend(): any;
	getWebsite(): string;
	getCommands(): any;
	getClassLoaderOf(): string;
	getSoftDepend(): any;
	getRawName(): string;
	getLoadBefore(): any;
	getAwareness(): any;
	getAPIVersion(): string;
	getPermissionDefault(): PermissionDefault;
}

export class PluginDescriptionFile {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginDescriptionFile');
	}
	constructor(arg0: any) {
		return new PluginDescriptionFile.$javaClass(arg0);
	}
	public static new0(arg0: any): PluginDescriptionFile {
		return new PluginDescriptionFile.$javaClass(arg0);
	}
	public static new1(arg0: any): PluginDescriptionFile {
		return new PluginDescriptionFile.$javaClass(arg0);
	}
	public static new2(arg0: string, arg1: string, arg2: string): PluginDescriptionFile {
		return new PluginDescriptionFile.$javaClass(arg0, arg1, arg2);
	}
}

