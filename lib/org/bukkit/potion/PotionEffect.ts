declare var Java: any;
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {Color} from '../../../org/bukkit/Color.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface PotionEffect extends ConfigurationSerializable {
	apply(entity: LivingEntity): boolean;
	getType(): PotionEffectType;
	serialize(): any;
	getColor(): Color;
	hasParticles(): boolean;
	isAmbient(): boolean;
	getAmplifier(): number;
	hasIcon(): boolean;
	getDuration(): number;
}

export class PotionEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionEffect');
	}
	constructor(map: any);
	constructor(type: PotionEffectType, duration: number, amplifier: number);
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean);
	constructor(...args: any[]) {
		return new PotionEffect.$javaClass(...args);
	}
}

