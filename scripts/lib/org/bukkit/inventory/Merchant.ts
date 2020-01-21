declare var Java: any;
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {MerchantRecipe} from '../../../org/bukkit/inventory/MerchantRecipe.js'

export interface Merchant {
	getRecipes(): any;
	setRecipes(arg0: any): void;
	getTrader(): HumanEntity;
	isTrading(): boolean;
	setRecipe(arg0: number, arg1: MerchantRecipe): void;
	getRecipeCount(): number;
	getRecipe(arg0: number): MerchantRecipe;
}

export class Merchant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Merchant');
	}
}

