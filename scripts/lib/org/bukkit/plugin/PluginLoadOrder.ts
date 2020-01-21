declare var Java: any;

export interface PluginLoadOrder {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class PluginLoadOrder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoadOrder');
	}

	public static get STARTUP(): PluginLoadOrder {
		return this.$javaClass.STARTUP;
	}
	public static get POSTWORLD(): PluginLoadOrder {
		return this.$javaClass.POSTWORLD;
	}
}

