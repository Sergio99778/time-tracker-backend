import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

export type TaskDocument = Task & Document;

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ required: true, unique: true })
  id: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  projectId: string;
  @Prop({ required: true })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
