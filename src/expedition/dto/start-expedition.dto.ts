import { IsInt, IsNotEmpty } from "class-validator";

export class StartExpeditionDto {
  @IsNotEmpty()
  @IsInt()
  front: number;

  @IsNotEmpty()
  @IsInt()
  middle: number;

  @IsNotEmpty()
  @IsInt()
  back: number;
}