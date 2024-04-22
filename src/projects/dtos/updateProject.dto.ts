import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateProjectDTO {
  @IsString()
  @MaxLength(100)
  @MinLength(5)
  @IsOptional()
  title?: string;

  @IsString()
  @MaxLength(1000)
  @MinLength(5)
  @IsOptional()
  description?: string;
}
