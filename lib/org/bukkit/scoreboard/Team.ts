declare var Java: any;
import {Team$Option} from '../../../org/bukkit/scoreboard/Team$Option.js'
import {Team$OptionStatus} from '../../../org/bukkit/scoreboard/Team$OptionStatus.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {ChatColor} from '../../../org/bukkit/ChatColor.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {NameTagVisibility} from '../../../org/bukkit/scoreboard/NameTagVisibility.js'

export interface Team {
	getName(): string;
	addEntry(entry: string): void;
	getSize(): number;
	getEntries(): any;
	setPrefix(prefix: string): void;
	getPrefix(): string;
	getDisplayName(): string;
	unregister(): void;
	setOption(option: Team$Option, status: Team$OptionStatus): void;
	getOption(option: Team$Option): Team$OptionStatus;
	getPlayers(): any;
	setDisplayName(displayName: string): void;
	getScoreboard(): Scoreboard;
	setColor(color: ChatColor): void;
	getColor(): ChatColor;
	removePlayer(player: OfflinePlayer): boolean;
	addPlayer(player: OfflinePlayer): void;
	canSeeFriendlyInvisibles(): boolean;
	setAllowFriendlyFire(enabled: boolean): void;
	setCanSeeFriendlyInvisibles(enabled: boolean): void;
	getNameTagVisibility(): NameTagVisibility;
	setNameTagVisibility(visibility: NameTagVisibility): void;
	removeEntry(entry: string): boolean;
	getSuffix(): string;
	setSuffix(suffix: string): void;
	hasPlayer(player: OfflinePlayer): boolean;
	allowFriendlyFire(): boolean;
	hasEntry(entry: string): boolean;
}

export class Team {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team');
	}
}

