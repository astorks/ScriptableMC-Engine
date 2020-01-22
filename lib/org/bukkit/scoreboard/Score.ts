declare var Java: any;
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {Objective} from '../../../org/bukkit/scoreboard/Objective.js'

export interface Score {
	getEntry(): string;
	getPlayer(): OfflinePlayer;
	getScoreboard(): Scoreboard;
	getObjective(): Objective;
	getScore(): number;
	isScoreSet(): boolean;
	setScore(score: number): void;
}

export class Score {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Score');
	}
}

