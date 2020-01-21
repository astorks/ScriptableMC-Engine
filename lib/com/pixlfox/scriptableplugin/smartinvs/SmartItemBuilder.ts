declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'

export interface SmartItemBuilder {
	build(): ItemStack;
	getDisplayName(): string;
	removeEnchantment(enchantment: Enchantment): SmartItemBuilder;
	addEnchant(enchantment: Enchantment, level: number, ignoreLevelRestriction: boolean): SmartItemBuilder;
	setDisplayName(displayName: string): SmartItemBuilder;
	getLore(): Array<string>;
	setLore(lore: Array<string>): SmartItemBuilder;
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

