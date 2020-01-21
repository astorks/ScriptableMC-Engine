declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../org/bukkit/Material.js'

export interface MaterialData {
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	setData(arg0: number): void;
	toItemStack(arg0: number): ItemStack;
	toItemStack(): ItemStack;
	getItemType(): Material;
}

export class MaterialData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.MaterialData');
	}
	constructor(arg0: Material) {
		return new MaterialData.$javaClass(arg0);
	}
	public static new0(arg0: Material): MaterialData {
		return new MaterialData.$javaClass(arg0);
	}
	public static new1(arg0: Material, arg1: number): MaterialData {
		return new MaterialData.$javaClass(arg0, arg1);
	}
}

