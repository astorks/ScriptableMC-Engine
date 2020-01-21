declare var Java: any;
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'
import {ConfigurationSerializable} from '../../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import {PersistentDataHolder} from '../../../../org/bukkit/persistence/PersistentDataHolder.js'

export interface ItemMeta extends ConfigurationSerializable, PersistentDataHolder {
	clone(): any;
	clone(): ItemMeta;
	getDisplayName(): string;
	hasEnchant(arg0: Enchantment): boolean;
	getEnchantLevel(arg0: Enchantment): number;
	getEnchants(): any;
	addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean;
	setDisplayName(arg0: string): void;
	setVersion(arg0: number): void;
	removeEnchant(arg0: Enchantment): boolean;
	getCustomTagContainer(): CustomItemTagContainer;
	hasAttributeModifiers(): boolean;
	addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean;
	removeAttributeModifier(arg0: EquipmentSlot): boolean;
	removeAttributeModifier(arg0: Attribute): boolean;
	hasConflictingEnchant(arg0: Enchantment): boolean;
	setAttributeModifiers(arg0: Multimap): void;
	getAttributeModifiers(arg0: Attribute): any;
	getAttributeModifiers(arg0: EquipmentSlot): Multimap;
	getAttributeModifiers(): Multimap;
	setLore(arg0: any): void;
	hasLore(): boolean;
	getLore(): any;
	hasDisplayName(): boolean;
	hasLocalizedName(): boolean;
	getItemFlags(): any;
	isUnbreakable(): boolean;
	setUnbreakable(arg0: boolean): void;
	removeItemFlags(arg0: Array<ItemFlag>): void;
	addItemFlags(arg0: Array<ItemFlag>): void;
	hasCustomModelData(): boolean;
	hasEnchants(): boolean;
	getCustomModelData(): number;
	setCustomModelData(arg0: any): void;
	setLocalizedName(arg0: string): void;
	hasItemFlag(arg0: ItemFlag): boolean;
	getLocalizedName(): string;
	serialize(): any;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class ItemMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.ItemMeta');
	}
}

