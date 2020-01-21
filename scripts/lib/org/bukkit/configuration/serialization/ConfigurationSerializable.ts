declare var Java: any;

export interface ConfigurationSerializable {
	serialize(): any;
}

export class ConfigurationSerializable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.serialization.ConfigurationSerializable');
	}
}

