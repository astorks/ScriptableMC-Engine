declare var Java: any;

export interface EntityTransformEvent$TransformReason {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class EntityTransformEvent$TransformReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTransformEvent$TransformReason');
	}

	public static get CURED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.CURED;
	}
	public static get INFECTION(): EntityTransformEvent$TransformReason {
		return this.$javaClass.INFECTION;
	}
	public static get DROWNED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.DROWNED;
	}
	public static get SHEARED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.SHEARED;
	}
	public static get LIGHTNING(): EntityTransformEvent$TransformReason {
		return this.$javaClass.LIGHTNING;
	}
	public static get SPLIT(): EntityTransformEvent$TransformReason {
		return this.$javaClass.SPLIT;
	}
}

