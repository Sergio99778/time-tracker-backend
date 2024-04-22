import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProjectDTO {
  @IsString()
  @MaxLength(100)
  @MinLength(5)
  title: string;

  @IsString()
  @MaxLength(1000)
  @MinLength(5)
  description: string;
}
