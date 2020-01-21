declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'

export interface EntityEquipment {
	clear(): void;
	setItemInHand(arg0: ItemStack): void;
	getItemInHand(): ItemStack;
	getHolder(): Entity;
	setBoots(arg0: ItemStack): void;
	getItemInMainHand(): ItemStack;
	setHelmet(arg0: ItemStack): void;
	setChestplate(arg0: ItemStack): void;
	getArmorContents(): Array<ItemStack>;
	setArmorContents(arg0: Array<ItemStack>): void;
	getHelmet(): ItemStack;
	getBootsDropChance(): number;
	setItemInMainHand(arg0: ItemStack): void;
	setLeggings(arg0: ItemStack): void;
	getItemInOffHand(): ItemStack;
	setItemInOffHand(arg0: ItemStack): void;
	getChestplate(): ItemStack;
	getLeggings(): ItemStack;
	getBoots(): ItemStack;
	setBootsDropChance(arg0: number): void;
	setChestplateDropChance(arg0: number): void;
	getItemInHandDropChance(): number;
	setItemInHandDropChance(arg0: number): void;
	getItemInOffHandDropChance(): number;
	getChestplateDropChance(): number;
	setHelmetDropChance(arg0: number): void;
	getItemInMainHandDropChance(): number;
	getHelmetDropChance(): number;
	setItemInMainHandDropChance(arg0: number): void;
	getLeggingsDropChance(): number;
	setItemInOffHandDropChance(arg0: number): void;
	setLeggingsDropChance(arg0: number): void;
}

export class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}
}

