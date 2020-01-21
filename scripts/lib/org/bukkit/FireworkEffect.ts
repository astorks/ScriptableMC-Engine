declare var Java: any;
import {FireworkEffect$Builder} from '../../org/bukkit/FireworkEffect$Builder.js'
import {FireworkEffect$Type} from '../../org/bukkit/FireworkEffect$Type.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface FireworkEffect extends ConfigurationSerializable {
	getType(): FireworkEffect$Type;
	serialize(): any;
	getFadeColors(): any;
	getColors(): any;
	hasTrail(): boolean;
	hasFlicker(): boolean;
}

export class FireworkEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect');
	}
	public static builder(): FireworkEffect$Builder {
		return FireworkEffect.$javaClass.builder();
	}
	public static deserialize(arg0: any): ConfigurationSerializable {
		return FireworkEffect.$javaClass.deserialize(arg0);
	}
}

