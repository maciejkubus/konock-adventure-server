import { TeamPositions } from "./team-positions.interface";

export interface Team {
  player: TeamPositions;
  enemy: TeamPositions;
}