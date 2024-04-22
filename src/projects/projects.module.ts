import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './domain/project.model';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.NEST_APP_MONGODB_DATABASE_URL),
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [],
})
export class ProjectsModule {}
