declare var Java: any;
import {FireworkEffect$Builder} from '../../org/bukkit/FireworkEffect$Builder.js'
import {FireworkEffect$Type} from '../../org/bukkit/FireworkEffect$Type.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface FireworkEffect extends ConfigurationSerializable {
	getType(): FireworkEffect$Type;
	serialize(): any;
	getFadeColors(): any;
	hasFlicker(): boolean;
	hasTrail(): boolean;
	getColors(): any;
}

export class FireworkEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect');
	}
}

