import { IsInt, Max, Min } from "class-validator";

export class SummonDto {

  @IsInt()
  @Min(1)
  @Max(100)
  count: number;
}