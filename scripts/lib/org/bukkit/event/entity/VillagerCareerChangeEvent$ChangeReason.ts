declare var Java: any;

export interface VillagerCareerChangeEvent$ChangeReason {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export class VillagerCareerChangeEvent$ChangeReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent$ChangeReason');
	}

	public static get LOSING_JOB(): VillagerCareerChangeEvent$ChangeReason {
		return this.$javaClass.LOSING_JOB;
	}
	public static get EMPLOYED(): VillagerCareerChangeEvent$ChangeReason {
		return this.$javaClass.EMPLOYED;
	}
}

