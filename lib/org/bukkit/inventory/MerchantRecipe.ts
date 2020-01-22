declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Recipe} from '../../../org/bukkit/inventory/Recipe.js'

export interface MerchantRecipe extends Recipe {
	getResult(): ItemStack;
	setVillagerExperience(villagerExperience: number): void;
	getVillagerExperience(): number;
	getPriceMultiplier(): number;
	removeIngredient(index: number): void;
	getUses(): number;
	setUses(uses: number): void;
	getMaxUses(): number;
	setMaxUses(maxUses: number): void;
	setIngredients(ingredients: any): void;
	addIngredient(item: ItemStack): void;
	getIngredients(): any;
	setPriceMultiplier(priceMultiplier: number): void;
	hasExperienceReward(): boolean;
	setExperienceReward(flag: boolean): void;
}

export class MerchantRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MerchantRecipe');
	}
	constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
	constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
	constructor(result: ItemStack, maxUses: number);
	constructor(...args: any[]) {
		return new MerchantRecipe.$javaClass(...args);
	}
}

