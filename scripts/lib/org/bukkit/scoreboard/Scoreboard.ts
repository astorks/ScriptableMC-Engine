declare var Java: any;
import {Team} from '../../../org/bukkit/scoreboard/Team.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {Objective} from '../../../org/bukkit/scoreboard/Objective.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'

export interface Scoreboard {
	getEntries(): any;
	getPlayers(): any;
	getEntryTeam(arg0: string): Team;
	registerNewTeam(arg0: string): Team;
	getTeam(arg0: string): Team;
	resetScores(arg0: string): void;
	resetScores(arg0: OfflinePlayer): void;
	getTeams(): any;
	getPlayerTeam(arg0: OfflinePlayer): Team;
	clearSlot(arg0: DisplaySlot): void;
	getObjective(arg0: DisplaySlot): Objective;
	getObjective(arg0: string): Objective;
	getObjectives(): any;
	getScores(arg0: string): any;
	getScores(arg0: OfflinePlayer): any;
	registerNewObjective(arg0: string, arg1: string, arg2: string): Objective;
	registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective;
	registerNewObjective(arg0: string, arg1: string): Objective;
	getObjectivesByCriteria(arg0: string): any;
}

export class Scoreboard {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Scoreboard');
	}
}

