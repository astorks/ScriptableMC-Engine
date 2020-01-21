declare var Java: any;
import {Effect$Type} from '../../org/bukkit/Effect$Type.js'

export interface Effect {
	getId(): number;
	getType(): Effect$Type;
	getData(): any;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class Effect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Effect');
	}

	public static get CLICK2(): Effect {
		return this.$javaClass.CLICK2;
	}
	public static get CLICK1(): Effect {
		return this.$javaClass.CLICK1;
	}
	public static get BOW_FIRE(): Effect {
		return this.$javaClass.BOW_FIRE;
	}
	public static get DOOR_TOGGLE(): Effect {
		return this.$javaClass.DOOR_TOGGLE;
	}
	public static get IRON_DOOR_TOGGLE(): Effect {
		return this.$javaClass.IRON_DOOR_TOGGLE;
	}
	public static get TRAPDOOR_TOGGLE(): Effect {
		return this.$javaClass.TRAPDOOR_TOGGLE;
	}
	public static get IRON_TRAPDOOR_TOGGLE(): Effect {
		return this.$javaClass.IRON_TRAPDOOR_TOGGLE;
	}
	public static get FENCE_GATE_TOGGLE(): Effect {
		return this.$javaClass.FENCE_GATE_TOGGLE;
	}
	public static get DOOR_CLOSE(): Effect {
		return this.$javaClass.DOOR_CLOSE;
	}
	public static get IRON_DOOR_CLOSE(): Effect {
		return this.$javaClass.IRON_DOOR_CLOSE;
	}
	public static get TRAPDOOR_CLOSE(): Effect {
		return this.$javaClass.TRAPDOOR_CLOSE;
	}
	public static get IRON_TRAPDOOR_CLOSE(): Effect {
		return this.$javaClass.IRON_TRAPDOOR_CLOSE;
	}
	public static get FENCE_GATE_CLOSE(): Effect {
		return this.$javaClass.FENCE_GATE_CLOSE;
	}
	public static get EXTINGUISH(): Effect {
		return this.$javaClass.EXTINGUISH;
	}
	public static get RECORD_PLAY(): Effect {
		return this.$javaClass.RECORD_PLAY;
	}
	public static get GHAST_SHRIEK(): Effect {
		return this.$javaClass.GHAST_SHRIEK;
	}
	public static get GHAST_SHOOT(): Effect {
		return this.$javaClass.GHAST_SHOOT;
	}
	public static get BLAZE_SHOOT(): Effect {
		return this.$javaClass.BLAZE_SHOOT;
	}
	public static get ZOMBIE_CHEW_WOODEN_DOOR(): Effect {
		return this.$javaClass.ZOMBIE_CHEW_WOODEN_DOOR;
	}
	public static get ZOMBIE_CHEW_IRON_DOOR(): Effect {
		return this.$javaClass.ZOMBIE_CHEW_IRON_DOOR;
	}
	public static get ZOMBIE_DESTROY_DOOR(): Effect {
		return this.$javaClass.ZOMBIE_DESTROY_DOOR;
	}
	public static get SMOKE(): Effect {
		return this.$javaClass.SMOKE;
	}
	public static get STEP_SOUND(): Effect {
		return this.$javaClass.STEP_SOUND;
	}
	public static get POTION_BREAK(): Effect {
		return this.$javaClass.POTION_BREAK;
	}
	public static get ENDER_SIGNAL(): Effect {
		return this.$javaClass.ENDER_SIGNAL;
	}
	public static get MOBSPAWNER_FLAMES(): Effect {
		return this.$javaClass.MOBSPAWNER_FLAMES;
	}
	public static get BREWING_STAND_BREW(): Effect {
		return this.$javaClass.BREWING_STAND_BREW;
	}
	public static get CHORUS_FLOWER_GROW(): Effect {
		return this.$javaClass.CHORUS_FLOWER_GROW;
	}
	public static get CHORUS_FLOWER_DEATH(): Effect {
		return this.$javaClass.CHORUS_FLOWER_DEATH;
	}
	public static get PORTAL_TRAVEL(): Effect {
		return this.$javaClass.PORTAL_TRAVEL;
	}
	public static get ENDEREYE_LAUNCH(): Effect {
		return this.$javaClass.ENDEREYE_LAUNCH;
	}
	public static get FIREWORK_SHOOT(): Effect {
		return this.$javaClass.FIREWORK_SHOOT;
	}
	public static get VILLAGER_PLANT_GROW(): Effect {
		return this.$javaClass.VILLAGER_PLANT_GROW;
	}
	public static get DRAGON_BREATH(): Effect {
		return this.$javaClass.DRAGON_BREATH;
	}
	public static get ANVIL_BREAK(): Effect {
		return this.$javaClass.ANVIL_BREAK;
	}
	public static get ANVIL_USE(): Effect {
		return this.$javaClass.ANVIL_USE;
	}
	public static get ANVIL_LAND(): Effect {
		return this.$javaClass.ANVIL_LAND;
	}
	public static get ENDERDRAGON_SHOOT(): Effect {
		return this.$javaClass.ENDERDRAGON_SHOOT;
	}
	public static get WITHER_BREAK_BLOCK(): Effect {
		return this.$javaClass.WITHER_BREAK_BLOCK;
	}
	public static get WITHER_SHOOT(): Effect {
		return this.$javaClass.WITHER_SHOOT;
	}
	public static get ZOMBIE_INFECT(): Effect {
		return this.$javaClass.ZOMBIE_INFECT;
	}
	public static get ZOMBIE_CONVERTED_VILLAGER(): Effect {
		return this.$javaClass.ZOMBIE_CONVERTED_VILLAGER;
	}
	public static get BAT_TAKEOFF(): Effect {
		return this.$javaClass.BAT_TAKEOFF;
	}
	public static get END_GATEWAY_SPAWN(): Effect {
		return this.$javaClass.END_GATEWAY_SPAWN;
	}
	public static get ENDERDRAGON_GROWL(): Effect {
		return this.$javaClass.ENDERDRAGON_GROWL;
	}
}

