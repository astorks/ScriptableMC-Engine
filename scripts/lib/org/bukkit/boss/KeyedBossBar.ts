declare var Java: any;
import {BarFlag} from '../../../org/bukkit/boss/BarFlag.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {BarColor} from '../../../org/bukkit/boss/BarColor.js'
import {BarStyle} from '../../../org/bukkit/boss/BarStyle.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {BossBar} from '../../../org/bukkit/boss/BossBar.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface KeyedBossBar extends BossBar, Keyed {
	removeAll(): void;
	addFlag(arg0: BarFlag): void;
	getPlayers(): any;
	hide(): void;
	getTitle(): string;
	setTitle(arg0: string): void;
	removePlayer(arg0: Player): void;
	setColor(arg0: BarColor): void;
	isVisible(): boolean;
	getProgress(): number;
	setVisible(arg0: boolean): void;
	getStyle(): BarStyle;
	show(): void;
	addPlayer(arg0: Player): void;
	getColor(): BarColor;
	hasFlag(arg0: BarFlag): boolean;
	setProgress(arg0: number): void;
	setStyle(arg0: BarStyle): void;
	removeFlag(arg0: BarFlag): void;
	getKey(): NamespacedKey;
}

export class KeyedBossBar {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.KeyedBossBar');
	}
}

