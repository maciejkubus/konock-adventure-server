export type FightLogStatus = "EVADE" | "DEAD" | "DEFEND" | "ATTACK" | "EFFECTS" | "HP" | "NEXT" | "FINISH" | "START";

export interface FightLog {
  status: FightLogStatus;
  entityName: string; 
  message: string;
  data: any;
}