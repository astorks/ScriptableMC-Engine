declare var Java: any;
import {Objective} from '../../../org/bukkit/scoreboard/Objective.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {Team} from '../../../org/bukkit/scoreboard/Team.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'

export interface Scoreboard {
	getEntries(): any;
	getPlayers(): any;
	getObjectivesByCriteria(criteria: string): any;
	registerNewObjective(_name: string, criteria: string): Objective;
	registerNewObjective(_name: string, criteria: string, displayName: string, renderType: RenderType): Objective;
	registerNewObjective(_name: string, criteria: string, displayName: string): Objective;
	resetScores(player: OfflinePlayer): void;
	resetScores(entry: string): void;
	getEntryTeam(entry: string): Team;
	getScores(entry: string): any;
	getScores(player: OfflinePlayer): any;
	getObjective(_name: string): Objective;
	getObjective(slot: DisplaySlot): Objective;
	getPlayerTeam(player: OfflinePlayer): Team;
	getTeam(teamName: string): Team;
	getObjectives(): any;
	getTeams(): any;
	registerNewTeam(_name: string): Team;
	clearSlot(slot: DisplaySlot): void;
}

export class Scoreboard {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Scoreboard');
	}
}

