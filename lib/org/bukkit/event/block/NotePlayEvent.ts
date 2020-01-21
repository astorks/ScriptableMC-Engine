declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Note} from '../../../../org/bukkit/Note.js'
import {Instrument} from '../../../../org/bukkit/Instrument.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface NotePlayEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	setNote(note: Note): void;
	setInstrument(instrument: Instrument): void;
	getInstrument(): Instrument;
	getNote(): Note;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class NotePlayEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.NotePlayEvent');
	}
	constructor(block: Block, instrument: Instrument, note: Note);
	constructor(...args: any[]) {
		return new NotePlayEvent.$javaClass(...args);
	}
}

