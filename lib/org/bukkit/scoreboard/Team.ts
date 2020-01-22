declare var Java: any;
import {Team$Option} from '../../../org/bukkit/scoreboard/Team$Option.js'
import {Team$OptionStatus} from '../../../org/bukkit/scoreboard/Team$OptionStatus.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {ChatColor} from '../../../org/bukkit/ChatColor.js'
import {NameTagVisibility} from '../../../org/bukkit/scoreboard/NameTagVisibility.js'

export interface Team {
	getName(): string;
	addEntry(entry: string): void;
	getSize(): number;
	getEntries(): any;
	unregister(): void;
	setPrefix(prefix: string): void;
	getPrefix(): string;
	getDisplayName(): string;
	setOption(option: Team$Option, status: Team$OptionStatus): void;
	getOption(option: Team$Option): Team$OptionStatus;
	setDisplayName(displayName: string): void;
	getScoreboard(): Scoreboard;
	addPlayer(player: OfflinePlayer): void;
	removePlayer(player: OfflinePlayer): boolean;
	setColor(color: ChatColor): void;
	getColor(): ChatColor;
	getPlayers(): any;
	hasEntry(entry: string): boolean;
	setSuffix(suffix: string): void;
	allowFriendlyFire(): boolean;
	removeEntry(entry: string): boolean;
	getSuffix(): string;
	hasPlayer(player: OfflinePlayer): boolean;
	getNameTagVisibility(): NameTagVisibility;
	canSeeFriendlyInvisibles(): boolean;
	setNameTagVisibility(visibility: NameTagVisibility): void;
	setAllowFriendlyFire(enabled: boolean): void;
	setCanSeeFriendlyInvisibles(enabled: boolean): void;
}

export class Team {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team');
	}
}

