declare var Java: any;
import {ItemMeta} from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import {FireworkEffect} from '../../../../org/bukkit/FireworkEffect.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface FireworkMeta extends ItemMeta {
	clone(): FireworkMeta;
	clone(): ItemMeta;
	clone(): any;
	removeEffect(index: number): void;
	addEffect(effect: FireworkEffect): void;
	getEffects(): any;
	addEffects(effects: Array<FireworkEffect>): void;
	addEffects(effects: any): void;
	getEffectsSize(): number;
	clearEffects(): void;
	hasEffects(): boolean;
	setPower(power: number): void;
	getPower(): number;
	getDisplayName(): string;
	getEnchantLevel(ench: Enchantment): number;
	getEnchants(): any;
	addEnchant(ench: Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
	setLore(lore: any): void;
	getLore(): any;
	removeEnchant(ench: Enchantment): boolean;
	hasEnchant(ench: Enchantment): boolean;
	setDisplayName(_name: string): void;
	isUnbreakable(): boolean;
	setVersion(version: number): void;
	setUnbreakable(unbreakable: boolean): void;
	removeItemFlags(itemFlags: Array<ItemFlag>): void;
	hasItemFlag(flag: ItemFlag): boolean;
	hasCustomModelData(): boolean;
	getCustomModelData(): number;
	setLocalizedName(_name: string): void;
	getItemFlags(): any;
	hasDisplayName(): boolean;
	hasLocalizedName(): boolean;
	setCustomModelData(data: any): void;
	addItemFlags(itemFlags: Array<ItemFlag>): void;
	hasEnchants(): boolean;
	getLocalizedName(): string;
	hasLore(): boolean;
	hasConflictingEnchant(ench: Enchantment): boolean;
	hasAttributeModifiers(): boolean;
	getAttributeModifiers(attribute: Attribute): any;
	getAttributeModifiers(slot: EquipmentSlot): Multimap;
	getAttributeModifiers(): Multimap;
	addAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
	setAttributeModifiers(attributeModifiers: Multimap): void;
	removeAttributeModifier(attribute: Attribute): boolean;
	removeAttributeModifier(slot: EquipmentSlot): boolean;
	removeAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
	getCustomTagContainer(): CustomItemTagContainer;
	serialize(): any;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class FireworkMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.FireworkMeta');
	}
}

