declare var Java: any;

export interface AttributeModifier$Operation {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class AttributeModifier$Operation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeModifier$Operation');
	}

	public static get ADD_NUMBER(): AttributeModifier$Operation {
		return this.$javaClass.ADD_NUMBER;
	}
	public static get ADD_SCALAR(): AttributeModifier$Operation {
		return this.$javaClass.ADD_SCALAR;
	}
	public static get MULTIPLY_SCALAR_1(): AttributeModifier$Operation {
		return this.$javaClass.MULTIPLY_SCALAR_1;
	}
}

