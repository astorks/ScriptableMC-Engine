declare var Java: any;
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'
import {ConfigurationSerializable} from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {PersistentDataHolder} from '../../../../org/bukkit/persistence/PersistentDataHolder.js'

export interface ItemMeta extends ConfigurationSerializable, PersistentDataHolder {
	clone(): ItemMeta;
	clone(): any;
	getDisplayName(): string;
	setVersion(version: number): void;
	addEnchant(ench: Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
	hasEnchant(ench: Enchantment): boolean;
	getEnchantLevel(ench: Enchantment): number;
	getEnchants(): any;
	removeEnchant(ench: Enchantment): boolean;
	setDisplayName(_name: string): void;
	setLocalizedName(_name: string): void;
	hasLore(): boolean;
	getLocalizedName(): string;
	hasDisplayName(): boolean;
	hasLocalizedName(): boolean;
	hasCustomModelData(): boolean;
	getLore(): any;
	getCustomModelData(): number;
	setLore(lore: any): void;
	removeItemFlags(itemFlags: Array<ItemFlag>): void;
	hasEnchants(): boolean;
	setCustomModelData(data: any): void;
	setUnbreakable(unbreakable: boolean): void;
	isUnbreakable(): boolean;
	hasItemFlag(flag: ItemFlag): boolean;
	addItemFlags(itemFlags: Array<ItemFlag>): void;
	getItemFlags(): any;
	addAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
	getCustomTagContainer(): CustomItemTagContainer;
	setAttributeModifiers(attributeModifiers: Multimap): void;
	hasConflictingEnchant(ench: Enchantment): boolean;
	hasAttributeModifiers(): boolean;
	getAttributeModifiers(): Multimap;
	getAttributeModifiers(attribute: Attribute): any;
	getAttributeModifiers(slot: EquipmentSlot): Multimap;
	removeAttributeModifier(slot: EquipmentSlot): boolean;
	removeAttributeModifier(attribute: Attribute, modifier: AttributeModifier): boolean;
	removeAttributeModifier(attribute: Attribute): boolean;
	serialize(): any;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class ItemMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.ItemMeta');
	}
}

