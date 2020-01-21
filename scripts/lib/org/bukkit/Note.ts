declare var Java: any;
import {Note$Tone} from '../../org/bukkit/Note$Tone.js'

export interface Note {
	getId(): number;
	flattened(): Note;
	getOctave(): number;
	sharped(): Note;
	getTone(): Note$Tone;
	isSharped(): boolean;
}

export class Note {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Note');
	}
	constructor(arg0: number) {
		return new Note.$javaClass(arg0);
	}
	public static new0(arg0: number): Note {
		return new Note.$javaClass(arg0);
	}
	public static new1(arg0: number, arg1: Note$Tone, arg2: boolean): Note {
		return new Note.$javaClass(arg0, arg1, arg2);
	}
	public static sharp(arg0: number, arg1: Note$Tone): Note {
		return Note.$javaClass.sharp(arg0, arg1);
	}
	public static natural(arg0: number, arg1: Note$Tone): Note {
		return Note.$javaClass.natural(arg0, arg1);
	}
	public static flat(arg0: number, arg1: Note$Tone): Note {
		return Note.$javaClass.flat(arg0, arg1);
	}
}

