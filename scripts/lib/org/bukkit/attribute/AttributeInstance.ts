declare var Java: any;
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../org/bukkit/attribute/AttributeModifier.js'

export interface AttributeInstance {
	getModifiers(): any;
	getValue(): number;
	getDefaultValue(): number;
	getAttribute(): Attribute;
	addModifier(arg0: AttributeModifier): void;
	removeModifier(arg0: AttributeModifier): void;
	setBaseValue(arg0: number): void;
	getBaseValue(): number;
}

export class AttributeInstance {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeInstance');
	}
}

