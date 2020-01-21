declare var Java: any;

export interface SoundCategory {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class SoundCategory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.SoundCategory');
	}

	public static get MASTER(): SoundCategory {
		return this.$javaClass.MASTER;
	}
	public static get MUSIC(): SoundCategory {
		return this.$javaClass.MUSIC;
	}
	public static get RECORDS(): SoundCategory {
		return this.$javaClass.RECORDS;
	}
	public static get WEATHER(): SoundCategory {
		return this.$javaClass.WEATHER;
	}
	public static get BLOCKS(): SoundCategory {
		return this.$javaClass.BLOCKS;
	}
	public static get HOSTILE(): SoundCategory {
		return this.$javaClass.HOSTILE;
	}
	public static get NEUTRAL(): SoundCategory {
		return this.$javaClass.NEUTRAL;
	}
	public static get PLAYERS(): SoundCategory {
		return this.$javaClass.PLAYERS;
	}
	public static get AMBIENT(): SoundCategory {
		return this.$javaClass.AMBIENT;
	}
	public static get VOICE(): SoundCategory {
		return this.$javaClass.VOICE;
	}
}

