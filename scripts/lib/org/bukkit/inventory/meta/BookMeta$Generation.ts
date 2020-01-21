declare var Java: any;

export interface BookMeta$Generation {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class BookMeta$Generation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta$Generation');
	}

	public static get ORIGINAL(): BookMeta$Generation {
		return this.$javaClass.ORIGINAL;
	}
	public static get COPY_OF_ORIGINAL(): BookMeta$Generation {
		return this.$javaClass.COPY_OF_ORIGINAL;
	}
	public static get COPY_OF_COPY(): BookMeta$Generation {
		return this.$javaClass.COPY_OF_COPY;
	}
	public static get TATTERED(): BookMeta$Generation {
		return this.$javaClass.TATTERED;
	}
}

