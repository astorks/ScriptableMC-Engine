declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Recipe} from '../../../org/bukkit/inventory/Recipe.js'

export interface MerchantRecipe extends Recipe {
	getResult(): ItemStack;
	addIngredient(arg0: ItemStack): void;
	setIngredients(arg0: any): void;
	setMaxUses(arg0: number): void;
	getUses(): number;
	setPriceMultiplier(arg0: number): void;
	getMaxUses(): number;
	getPriceMultiplier(): number;
	setUses(arg0: number): void;
	removeIngredient(arg0: number): void;
	getIngredients(): any;
	hasExperienceReward(): boolean;
	setExperienceReward(arg0: boolean): void;
	setVillagerExperience(arg0: number): void;
	getVillagerExperience(): number;
}

export class MerchantRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MerchantRecipe');
	}
	constructor(arg0: ItemStack, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number) {
		return new MerchantRecipe.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new0(arg0: ItemStack, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): MerchantRecipe {
		return new MerchantRecipe.$javaClass(arg0, arg1, arg2, arg3, arg4, arg5);
	}
	public static new1(arg0: ItemStack, arg1: number, arg2: number, arg3: boolean): MerchantRecipe {
		return new MerchantRecipe.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new2(arg0: ItemStack, arg1: number): MerchantRecipe {
		return new MerchantRecipe.$javaClass(arg0, arg1);
	}
}

