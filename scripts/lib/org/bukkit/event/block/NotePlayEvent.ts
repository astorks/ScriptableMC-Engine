declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Instrument} from '../../../../org/bukkit/Instrument.js'
import {Note} from '../../../../org/bukkit/Note.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface NotePlayEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(arg0: boolean): void;
	getInstrument(): Instrument;
	setInstrument(arg0: Instrument): void;
	setNote(arg0: Note): void;
	getNote(): Note;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class NotePlayEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.NotePlayEvent');
	}
	constructor(arg0: Block, arg1: Instrument, arg2: Note) {
		return new NotePlayEvent.$javaClass(arg0, arg1, arg2);
	}
	public static new0(arg0: Block, arg1: Instrument, arg2: Note): NotePlayEvent {
		return new NotePlayEvent.$javaClass(arg0, arg1, arg2);
	}
	public static getHandlerList(): HandlerList {
		return NotePlayEvent.$javaClass.getHandlerList();
	}
}

