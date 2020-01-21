declare var Java: any;

export interface Horse$Variant {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Horse$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Horse$Variant');
	}

	public static get HORSE(): Horse$Variant {
		return this.$javaClass.HORSE;
	}
	public static get DONKEY(): Horse$Variant {
		return this.$javaClass.DONKEY;
	}
	public static get MULE(): Horse$Variant {
		return this.$javaClass.MULE;
	}
	public static get UNDEAD_HORSE(): Horse$Variant {
		return this.$javaClass.UNDEAD_HORSE;
	}
	public static get SKELETON_HORSE(): Horse$Variant {
		return this.$javaClass.SKELETON_HORSE;
	}
	public static get LLAMA(): Horse$Variant {
		return this.$javaClass.LLAMA;
	}
}

