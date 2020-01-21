declare var Java: any;
import {BarFlag} from '../../../org/bukkit/boss/BarFlag.js'
import {BarColor} from '../../../org/bukkit/boss/BarColor.js'
import {BarStyle} from '../../../org/bukkit/boss/BarStyle.js'
import {Player} from '../../../org/bukkit/entity/Player.js'

export interface BossBar {
	removeAll(): void;
	addFlag(flag: BarFlag): void;
	getTitle(): string;
	getPlayers(): any;
	hide(): void;
	setColor(color: BarColor): void;
	setTitle(title: string): void;
	getColor(): BarColor;
	setStyle(style: BarStyle): void;
	removeFlag(flag: BarFlag): void;
	hasFlag(flag: BarFlag): boolean;
	removePlayer(player: Player): void;
	setVisible(visible: boolean): void;
	isVisible(): boolean;
	show(): void;
	getStyle(): BarStyle;
	getProgress(): number;
	setProgress(progress: number): void;
	addPlayer(player: Player): void;
}

export class BossBar {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BossBar');
	}
}

