declare var Java: any;
import {EquipmentSlot} from '../../../org/bukkit/inventory/EquipmentSlot.js'
import {AttributeModifier$Operation} from '../../../org/bukkit/attribute/AttributeModifier$Operation.js'
import {ConfigurationSerializable} from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface AttributeModifier extends ConfigurationSerializable {
	getName(): string;
	getSlot(): EquipmentSlot;
	getOperation(): AttributeModifier$Operation;
	getUniqueId(): string;
	serialize(): any;
	getAmount(): number;
}

export class AttributeModifier {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeModifier');
	}
	constructor(arg0: string, arg1: string, arg2: number, arg3: AttributeModifier$Operation, arg4: EquipmentSlot) {
		return new AttributeModifier.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new0(arg0: string, arg1: string, arg2: number, arg3: AttributeModifier$Operation, arg4: EquipmentSlot): AttributeModifier {
		return new AttributeModifier.$javaClass(arg0, arg1, arg2, arg3, arg4);
	}
	public static new1(arg0: string, arg1: string, arg2: number, arg3: AttributeModifier$Operation): AttributeModifier {
		return new AttributeModifier.$javaClass(arg0, arg1, arg2, arg3);
	}
	public static new2(arg0: string, arg1: number, arg2: AttributeModifier$Operation): AttributeModifier {
		return new AttributeModifier.$javaClass(arg0, arg1, arg2);
	}
	public static deserialize(arg0: any): AttributeModifier {
		return AttributeModifier.$javaClass.deserialize(arg0);
	}
}

