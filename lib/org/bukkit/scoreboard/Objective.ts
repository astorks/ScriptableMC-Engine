declare var Java: any;
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {Score} from '../../../org/bukkit/scoreboard/Score.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'

export interface Objective {
	getName(): string;
	unregister(): void;
	getDisplayName(): string;
	setDisplayName(displayName: string): void;
	getScoreboard(): Scoreboard;
	getCriteria(): string;
	getScore(player: OfflinePlayer): Score;
	getScore(entry: string): Score;
	isModifiable(): boolean;
	getDisplaySlot(): DisplaySlot;
	setDisplaySlot(slot: DisplaySlot): void;
	setRenderType(renderType: RenderType): void;
	getRenderType(): RenderType;
}

export class Objective {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Objective');
	}
}

