declare var Java: any;
import {ItemMeta} from '../../../../org/bukkit/inventory/meta/ItemMeta.js'
import {BookMeta$Generation} from '../../../../org/bukkit/inventory/meta/BookMeta$Generation.js'
import {Enchantment} from '../../../../org/bukkit/enchantments/Enchantment.js'
import {CustomItemTagContainer} from '../../../../org/bukkit/inventory/meta/tags/CustomItemTagContainer.js'
import {Attribute} from '../../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../../org/bukkit/attribute/AttributeModifier.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Multimap} from '../../../../com/google/common/collect/Multimap.js'
import {ItemFlag} from '../../../../org/bukkit/inventory/ItemFlag.js'
import {PersistentDataContainer} from '../../../../org/bukkit/persistence/PersistentDataContainer.js'

export interface BookMeta extends ItemMeta {
	clone(): ItemMeta;
	clone(): BookMeta;
	clone(): any;
	getTitle(): string;
	setTitle(arg0: string): boolean;
	hasAuthor(): boolean;
	addPage(arg0: Array<string>): void;
	setAuthor(arg0: string): void;
	getPageCount(): number;
	setGeneration(arg0: BookMeta$Generation): void;
	getPage(arg0: number): string;
	hasPages(): boolean;
	getAuthor(): string;
	hasTitle(): boolean;
	getPages(): any;
	setPages(arg0: Array<string>): void;
	setPages(arg0: any): void;
	setPage(arg0: number, arg1: string): void;
	hasGeneration(): boolean;
	getGeneration(): BookMeta$Generation;
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

export class BookMeta {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta');
	}
}

