declare var Java: any;
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'

export interface EntityEquipment {
	clear(): void;
	getHolder(): Entity;
	setItemInHand(stack: ItemStack): void;
	getItemInHand(): ItemStack;
	getItemInMainHandDropChance(): number;
	getChestplateDropChance(): number;
	getItemInOffHandDropChance(): number;
	setLeggingsDropChance(chance: number): void;
	setChestplateDropChance(chance: number): void;
	setItemInOffHandDropChance(chance: number): void;
	getItemInHandDropChance(): number;
	getHelmetDropChance(): number;
	setItemInHandDropChance(chance: number): void;
	setHelmetDropChance(chance: number): void;
	getLeggingsDropChance(): number;
	setItemInMainHandDropChance(chance: number): void;
	setItemInMainHand(item: ItemStack): void;
	setHelmet(helmet: ItemStack): void;
	getItemInMainHand(): ItemStack;
	setLeggings(leggings: ItemStack): void;
	getChestplate(): ItemStack;
	getBootsDropChance(): number;
	setBootsDropChance(chance: number): void;
	getArmorContents(): Array<ItemStack>;
	setBoots(boots: ItemStack): void;
	getLeggings(): ItemStack;
	getBoots(): ItemStack;
	getItemInOffHand(): ItemStack;
	getHelmet(): ItemStack;
	setChestplate(chestplate: ItemStack): void;
	setArmorContents(items: Array<ItemStack>): void;
	setItemInOffHand(item: ItemStack): void;
}

export class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}
}

