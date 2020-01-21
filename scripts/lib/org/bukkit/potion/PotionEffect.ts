declare var Java: any;
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {Color} from '../../../org/bukkit/Color.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface PotionEffect extends ConfigurationSerializable {
	apply(arg0: LivingEntity): boolean;
	getType(): PotionEffectType;
	serialize(): any;
	getColor(): Color;
	getAmplifier(): number;
	getDuration(): number;
	isAmbient(): boolean;
	hasParticles(): boolean;
	hasIcon(): boolean;
}

export class PotionEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionEffect');
	}
	constructor(arg0: any) {
		return new PotionEffect.$javaClass(arg0);
	}
	public static new0(arg0: any): PotionEffect {
		return new PotionEffect.$javaClass(arg0);
	}
	public static new1(arg0: PotionEffectType, arg1: number, arg2: number): PotionEffect {
		return new PotionEffect.$javaClass(arg0, arg1, arg2);
	}
	public static new2(arg0: PotionEffectType, arg1: number, arg2: number, arg3: boolean): PotionEffect {
		return new PotionEffect.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new3(arg0: PotionEffectType, arg1: number, arg2: number, arg3: boolean, arg4: boolean): PotionEffect {
		return new PotionEffect.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new4(arg0: PotionEffectType, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean): PotionEffect {
		return new PotionEffect.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
}

