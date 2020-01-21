declare var Java: any;
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {MerchantRecipe} from '../../../org/bukkit/inventory/MerchantRecipe.js'

export interface Merchant {
	getTrader(): HumanEntity;
	setRecipes(recipes: any): void;
	getRecipes(): any;
	setRecipe(i: number, recipe: MerchantRecipe): void;
	getRecipe(i: number): MerchantRecipe;
	getRecipeCount(): number;
	isTrading(): boolean;
}

export class Merchant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Merchant');
	}
}

