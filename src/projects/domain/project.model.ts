import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

export type ProjectDocument = Project & Document;

@Schema({
  timestamps: true,
})
export class Project {
  @Prop({ required: true, unique: true })
  id: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
