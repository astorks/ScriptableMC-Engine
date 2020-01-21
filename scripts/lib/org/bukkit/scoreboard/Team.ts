declare var Java: any;
import {Team$Option} from '../../../org/bukkit/scoreboard/Team$Option.js'
import {Team$OptionStatus} from '../../../org/bukkit/scoreboard/Team$OptionStatus.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {ChatColor} from '../../../org/bukkit/ChatColor.js'
import {NameTagVisibility} from '../../../org/bukkit/scoreboard/NameTagVisibility.js'

export interface Team {
	getName(): string;
	addEntry(arg0: string): void;
	getSize(): number;
	getEntries(): any;
	unregister(): void;
	setPrefix(arg0: string): void;
	getPrefix(): string;
	getDisplayName(): string;
	setOption(arg0: Team$Option, arg1: Team$OptionStatus): void;
	getOption(arg0: Team$Option): Team$OptionStatus;
	getPlayers(): any;
	getScoreboard(): Scoreboard;
	setDisplayName(arg0: string): void;
	removePlayer(arg0: OfflinePlayer): boolean;
	setColor(arg0: ChatColor): void;
	addPlayer(arg0: OfflinePlayer): void;
	getColor(): ChatColor;
	setAllowFriendlyFire(arg0: boolean): void;
	canSeeFriendlyInvisibles(): boolean;
	getNameTagVisibility(): NameTagVisibility;
	setCanSeeFriendlyInvisibles(arg0: boolean): void;
	removeEntry(arg0: string): boolean;
	allowFriendlyFire(): boolean;
	hasEntry(arg0: string): boolean;
	hasPlayer(arg0: OfflinePlayer): boolean;
	getSuffix(): string;
	setSuffix(arg0: string): void;
	setNameTagVisibility(arg0: NameTagVisibility): void;
}

export class Team {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team');
	}
}

