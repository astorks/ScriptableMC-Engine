declare var Java: any;
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'

export interface AdvancementProgress {
	isDone(): boolean;
	getAdvancement(): Advancement;
	getDateAwarded(arg0: string): any;
	revokeCriteria(arg0: string): boolean;
	awardCriteria(arg0: string): boolean;
	getAwardedCriteria(): any;
	getRemainingCriteria(): any;
}

export class AdvancementProgress {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.AdvancementProgress');
	}
}

