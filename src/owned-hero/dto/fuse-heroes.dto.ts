import { ArrayMinSize, IsArray } from "class-validator";

export class FuseHeroesDto {
  @IsArray()
  @ArrayMinSize(2)
  ownedHeroIds: number[];
}