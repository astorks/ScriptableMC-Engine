declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Note} from '../../../../org/bukkit/Note.js'
import {Instrument} from '../../../../org/bukkit/Instrument.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface NotePlayEvent extends BlockEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getNote(): Note;
	setInstrument(instrument: Instrument): void;
	getInstrument(): Instrument;
	setNote(note: Note): void;
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

