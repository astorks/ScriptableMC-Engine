declare var Java: any;
import {ChatColor} from '../../../../../net/md_5/bungee/api/ChatColor.js'
import {ComponentBuilder$FormatRetention} from '../../../../../net/md_5/bungee/api/chat/ComponentBuilder$FormatRetention.js'
import {ClickEvent} from '../../../../../net/md_5/bungee/api/chat/ClickEvent.js'
import {HoverEvent} from '../../../../../net/md_5/bungee/api/chat/HoverEvent.js'

export interface BaseComponent {
	duplicate(): BaseComponent;
	setExtra(arg0: any): void;
	getExtra(): any;
	setColor(arg0: ChatColor): void;
	getColor(): ChatColor;
	duplicateWithoutFormatting(): BaseComponent;
	copyFormatting(arg0: BaseComponent): void;
	copyFormatting(arg0: BaseComponent, arg1: ComponentBuilder$FormatRetention, arg2: boolean): void;
	copyFormatting(arg0: BaseComponent, arg1: boolean): void;
	retain(arg0: ComponentBuilder$FormatRetention): void;
	isItalic(): boolean;
	isItalicRaw(): boolean;
	isBold(): boolean;
	toLegacyText(): string;
	isUnderlinedRaw(): boolean;
	isObfuscatedRaw(): boolean;
	isObfuscated(): boolean;
	addExtra(arg0: string): void;
	addExtra(arg0: BaseComponent): void;
	setBold(arg0: boolean): void;
	isBoldRaw(): boolean;
	setItalic(arg0: boolean): void;
	setStrikethrough(arg0: boolean): void;
	isStrikethroughRaw(): boolean;
	setObfuscated(arg0: boolean): void;
	setInsertion(arg0: string): void;
	toPlainText(): string;
	isUnderlined(): boolean;
	getColorRaw(): ChatColor;
	setClickEvent(arg0: ClickEvent): void;
	hasFormatting(): boolean;
	setHoverEvent(arg0: HoverEvent): void;
	setUnderlined(arg0: boolean): void;
	isStrikethrough(): boolean;
	getInsertion(): string;
	getClickEvent(): ClickEvent;
	getHoverEvent(): HoverEvent;
}

export class BaseComponent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.BaseComponent');
	}
	constructor() {
		return new BaseComponent.$javaClass();
	}
	public static new0(): BaseComponent {
		return new BaseComponent.$javaClass();
	}
	public static toLegacyText(arg0: Array<BaseComponent>): string {
		return BaseComponent.$javaClass.toLegacyText(arg0);
	}
	public static toPlainText0(arg0: Array<BaseComponent>): string {
		return BaseComponent.$javaClass.toPlainText(arg0);
	}
}

