import { Entity } from "../fight/entity";

export interface TeamPositions {
  front: Entity;
  middle?: Entity;
  back?: Entity;
}