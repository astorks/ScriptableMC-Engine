declare var Java: any;

export interface Instrument {
	getType(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Instrument {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Instrument');
	}

	public static get PIANO(): Instrument {
		return this.$javaClass.PIANO;
	}
	public static get BASS_DRUM(): Instrument {
		return this.$javaClass.BASS_DRUM;
	}
	public static get SNARE_DRUM(): Instrument {
		return this.$javaClass.SNARE_DRUM;
	}
	public static get STICKS(): Instrument {
		return this.$javaClass.STICKS;
	}
	public static get BASS_GUITAR(): Instrument {
		return this.$javaClass.BASS_GUITAR;
	}
	public static get FLUTE(): Instrument {
		return this.$javaClass.FLUTE;
	}
	public static get BELL(): Instrument {
		return this.$javaClass.BELL;
	}
	public static get GUITAR(): Instrument {
		return this.$javaClass.GUITAR;
	}
	public static get CHIME(): Instrument {
		return this.$javaClass.CHIME;
	}
	public static get XYLOPHONE(): Instrument {
		return this.$javaClass.XYLOPHONE;
	}
	public static get IRON_XYLOPHONE(): Instrument {
		return this.$javaClass.IRON_XYLOPHONE;
	}
	public static get COW_BELL(): Instrument {
		return this.$javaClass.COW_BELL;
	}
	public static get DIDGERIDOO(): Instrument {
		return this.$javaClass.DIDGERIDOO;
	}
	public static get BIT(): Instrument {
		return this.$javaClass.BIT;
	}
	public static get BANJO(): Instrument {
		return this.$javaClass.BANJO;
	}
	public static get PLING(): Instrument {
		return this.$javaClass.PLING;
	}
}

