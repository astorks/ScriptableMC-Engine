declare var Java: any;
import {ItemMeta} from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import {BookMeta$Generation} from '../../../../org/bukkit/inventory/meta/BookMeta$Generation.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface BookMeta extends ItemMeta {
	clone(): BookMeta;
	clone(): ItemMeta;
	clone(): any;
	getTitle(): string;
	getPage(page: number): string;
	setTitle(title: string): boolean;
	setAuthor(author: string): void;
	getPageCount(): number;
	setGeneration(generation: BookMeta$Generation): void;
	hasAuthor(): boolean;
	getPages(): any;
	setPages(pages: any): void;
	setPages(pages: Array<string>): void;
	getGeneration(): BookMeta$Generation;
	setPage(page: number, data: string): void;
	hasGeneration(): boolean;
	addPage(pages: Array<string>): void;
	hasPages(): boolean;
	hasTitle(): boolean;
	getAuthor(): string;
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

export class BookMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta');
	}
}

