declare var Java: any;
import {Color} from '../../../org/bukkit/Color.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'

export interface PotionEffectType {
	getName(): string;
	getId(): number;
	getColor(): Color;
	isInstant(): boolean;
	createEffect(arg0: number, arg1: number): PotionEffect;
	getDurationModifier(): number;
}

export class PotionEffectType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionEffectType');
	}
	public static values(): Array<PotionEffectType> {
		return PotionEffectType.$javaClass.values();
	}
	public static getByName(arg0: string): PotionEffectType {
		return PotionEffectType.$javaClass.getByName(arg0);
	}
	public static getById(arg0: number): PotionEffectType {
		return PotionEffectType.$javaClass.getById(arg0);
	}
	public static stopAcceptingRegistrations(): void {
		return PotionEffectType.$javaClass.stopAcceptingRegistrations();
	}
	public static registerPotionEffectType(arg0: PotionEffectType): void {
		return PotionEffectType.$javaClass.registerPotionEffectType(arg0);
	}
}

