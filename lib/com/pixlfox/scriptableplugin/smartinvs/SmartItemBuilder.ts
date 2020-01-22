declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'

export interface SmartItemBuilder {
	build(): ItemStack;
	getDisplayName(): string;
	addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): SmartItemBuilder;
	setLore(lore: Array<string>): SmartItemBuilder;
	getLore(): Array<string>;
	removeEnchantment(enchantment: Enchantment): SmartItemBuilder;
	setDisplayName(displayName: string): SmartItemBuilder;
	isUnbreakable(isUnbreakable: boolean): SmartItemBuilder;
}

export class SmartItemBuilder {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptableplugin.smartinvs.SmartItemBuilder');
	}
	constructor(itemStack: ItemStack);
	constructor(...args: any[]) {
		return new SmartItemBuilder.$javaClass(...args);
	}
}

