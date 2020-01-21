declare var Java: any;

export interface Note$Tone {
	getId(sharped: boolean): number;
	getId(): number;
	isSharpable(): boolean;
	isSharped(id: number): boolean;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Note$Tone {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Note$Tone');
	}

	public static get G(): Note$Tone {
		return this.$javaClass.G;
	}
	public static get A(): Note$Tone {
		return this.$javaClass.A;
	}
	public static get B(): Note$Tone {
		return this.$javaClass.B;
	}
	public static get C(): Note$Tone {
		return this.$javaClass.C;
	}
	public static get D(): Note$Tone {
		return this.$javaClass.D;
	}
	public static get E(): Note$Tone {
		return this.$javaClass.E;
	}
	public static get F(): Note$Tone {
		return this.$javaClass.F;
	}
}

