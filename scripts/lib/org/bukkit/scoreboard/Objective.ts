declare var Java: any;
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'
import {Score} from '../../../org/bukkit/scoreboard/Score.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'

export interface Objective {
	getName(): string;
	unregister(): void;
	getDisplayName(): string;
	getScoreboard(): Scoreboard;
	setDisplayName(arg0: string): void;
	getCriteria(): string;
	getDisplaySlot(): DisplaySlot;
	isModifiable(): boolean;
	setDisplaySlot(arg0: DisplaySlot): void;
	setRenderType(arg0: RenderType): void;
	getScore(arg0: OfflinePlayer): Score;
	getScore(arg0: string): Score;
	getRenderType(): RenderType;
}

export class Objective {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Objective');
	}
}

