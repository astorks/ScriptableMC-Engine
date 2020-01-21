declare var Java: any;
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {Objective} from '../../../org/bukkit/scoreboard/Objective.js'

export interface Score {
	getEntry(): string;
	getPlayer(): OfflinePlayer;
	getScoreboard(): Scoreboard;
	getScore(): number;
	getObjective(): Objective;
	setScore(arg0: number): void;
	isScoreSet(): boolean;
}

export class Score {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Score');
	}
}

