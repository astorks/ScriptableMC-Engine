declare var Java: any;
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'
import {Score} from '../../../org/bukkit/scoreboard/Score.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'

export interface Objective {
	getName(): string;
	getDisplayName(): string;
	unregister(): void;
	setDisplayName(displayName: string): void;
	getScoreboard(): Scoreboard;
	getCriteria(): string;
	setDisplaySlot(slot: DisplaySlot): void;
	getRenderType(): RenderType;
	isModifiable(): boolean;
	setRenderType(renderType: RenderType): void;
	getDisplaySlot(): DisplaySlot;
	getScore(player: OfflinePlayer): Score;
	getScore(entry: string): Score;
}

export class Objective {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Objective');
	}
}

