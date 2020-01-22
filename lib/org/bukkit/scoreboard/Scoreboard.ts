declare var Java: any;
import {Objective} from '../../../org/bukkit/scoreboard/Objective.js'
import {RenderType} from '../../../org/bukkit/scoreboard/RenderType.js'
import {DisplaySlot} from '../../../org/bukkit/scoreboard/DisplaySlot.js'
import {Team} from '../../../org/bukkit/scoreboard/Team.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'

export interface Scoreboard {
	getEntries(): any;
	registerNewObjective(_name: string, criteria: string): Objective;
	registerNewObjective(_name: string, criteria: string, displayName: string, renderType: RenderType): Objective;
	registerNewObjective(_name: string, criteria: string, displayName: string): Objective;
	getObjectivesByCriteria(criteria: string): any;
	clearSlot(slot: DisplaySlot): void;
	getObjective(slot: DisplaySlot): Objective;
	getObjective(_name: string): Objective;
	getObjectives(): any;
	registerNewTeam(_name: string): Team;
	resetScores(player: OfflinePlayer): void;
	resetScores(entry: string): void;
	getPlayers(): any;
	getTeams(): any;
	getScores(entry: string): any;
	getScores(player: OfflinePlayer): any;
	getPlayerTeam(player: OfflinePlayer): Team;
	getTeam(teamName: string): Team;
	getEntryTeam(entry: string): Team;
}

export class Scoreboard {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Scoreboard');
	}
}

