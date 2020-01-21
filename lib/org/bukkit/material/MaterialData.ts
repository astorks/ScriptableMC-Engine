declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../org/bukkit/Material.js'

export interface MaterialData {
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	setData(data: number): void;
	toItemStack(amount: number): ItemStack;
	toItemStack(): ItemStack;
	getItemType(): Material;
}

export class MaterialData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.MaterialData');
	}
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new MaterialData.$javaClass(...args);
	}
}

