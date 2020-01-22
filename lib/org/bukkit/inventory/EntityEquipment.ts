declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'

export interface EntityEquipment {
	clear(): void;
	getItemInHand(): ItemStack;
	setItemInHand(stack: ItemStack): void;
	getHolder(): Entity;
	setItemInOffHandDropChance(chance: number): void;
	setHelmetDropChance(chance: number): void;
	getLeggingsDropChance(): number;
	getHelmetDropChance(): number;
	getItemInHandDropChance(): number;
	getItemInMainHandDropChance(): number;
	setChestplateDropChance(chance: number): void;
	getChestplateDropChance(): number;
	setItemInHandDropChance(chance: number): void;
	setItemInMainHandDropChance(chance: number): void;
	setLeggingsDropChance(chance: number): void;
	getItemInOffHandDropChance(): number;
	getLeggings(): ItemStack;
	setArmorContents(items: Array<ItemStack>): void;
	setBoots(boots: ItemStack): void;
	setHelmet(helmet: ItemStack): void;
	getItemInMainHand(): ItemStack;
	getItemInOffHand(): ItemStack;
	setItemInOffHand(item: ItemStack): void;
	setChestplate(chestplate: ItemStack): void;
	setLeggings(leggings: ItemStack): void;
	getArmorContents(): Array<ItemStack>;
	getBoots(): ItemStack;
	setItemInMainHand(item: ItemStack): void;
	getHelmet(): ItemStack;
	getChestplate(): ItemStack;
	setBootsDropChance(chance: number): void;
	getBootsDropChance(): number;
}

export class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}
}

