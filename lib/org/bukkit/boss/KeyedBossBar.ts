declare var Java: any;
import {BarFlag} from '../../../org/bukkit/boss/BarFlag.js'
import {BarStyle} from '../../../org/bukkit/boss/BarStyle.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {BarColor} from '../../../org/bukkit/boss/BarColor.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {BossBar} from '../../../org/bukkit/boss/BossBar.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface KeyedBossBar extends BossBar, Keyed {
	removeAll(): void;
	addFlag(flag: BarFlag): void;
	getTitle(): string;
	getProgress(): number;
	setTitle(title: string): void;
	show(): void;
	setStyle(style: BarStyle): void;
	hasFlag(flag: BarFlag): boolean;
	addPlayer(player: Player): void;
	removeFlag(flag: BarFlag): void;
	getStyle(): BarStyle;
	setProgress(progress: number): void;
	isVisible(): boolean;
	hide(): void;
	setVisible(visible: boolean): void;
	removePlayer(player: Player): void;
	setColor(color: BarColor): void;
	getColor(): BarColor;
	getPlayers(): any;
	getKey(): NamespacedKey;
}

export class KeyedBossBar {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.KeyedBossBar');
	}
}

