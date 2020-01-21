declare var Java: any;
import {WorldType} from '../../org/bukkit/WorldType.js'
import {World} from '../../org/bukkit/World.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {CommandSender} from '../../org/bukkit/command/CommandSender.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'

export interface WorldCreator {
	name(): string;
	type(): WorldType;
	type(arg0: WorldType): WorldCreator;
	copy(arg0: WorldCreator): WorldCreator;
	copy(arg0: World): WorldCreator;
	generator(): ChunkGenerator;
	generator(arg0: ChunkGenerator): WorldCreator;
	generator(arg0: string): WorldCreator;
	generator(arg0: string, arg1: CommandSender): WorldCreator;
	environment(arg0: World$Environment): WorldCreator;
	environment(): World$Environment;
	seed(): number;
	seed(arg0: number): WorldCreator;
	createWorld(): World;
	hardcore(arg0: boolean): WorldCreator;
	hardcore(): boolean;
	generateStructures(): boolean;
	generateStructures(arg0: boolean): WorldCreator;
	generatorSettings(arg0: string): WorldCreator;
	generatorSettings(): string;
}

export class WorldCreator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldCreator');
	}
	constructor(arg0: string) {
		return new WorldCreator.$javaClass(arg0);
	}
	public static new0(arg0: string): WorldCreator {
		return new WorldCreator.$javaClass(arg0);
	}
	public static _name(arg0: string): WorldCreator {
		return WorldCreator.$javaClass.name(arg0);
	}
	public static getGeneratorForName(arg0: string, arg1: string, arg2: CommandSender): ChunkGenerator {
		return WorldCreator.$javaClass.getGeneratorForName(arg0, arg1, arg2);
	}
}

