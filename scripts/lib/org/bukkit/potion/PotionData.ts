declare var Java: any;
import {PotionType} from '../../../org/bukkit/potion/PotionType.js'

export interface PotionData {
	getType(): PotionType;
	isExtended(): boolean;
	isUpgraded(): boolean;
}

export class PotionData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionData');
	}
	constructor(arg0: PotionType, arg1: boolean, arg2: boolean) {
		return new PotionData.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: PotionType, arg1: boolean, arg2: boolean): PotionData {
		return new PotionData.$javaClass(arg0, arg1, arg2);
	}
	public static new1(arg0: PotionType): PotionData {
		return new PotionData.$javaClass(arg0);
	}
}

