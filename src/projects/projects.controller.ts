import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getProjects() {
    return this.projectsService.getProjects();
  }

  @Get(':id')
  getProjectById(id: string) {
    return this.projectsService.getProjectById(id);
  }

  @Get('query')
  getByQuery(query: any) {
    return this.projectsService.getByQuery(query);
  }

  @Post()
  createProject(projectData: any) {
    return this.projectsService.createProject(projectData);
  }

  @Put(':id')
  updateProject(id: string, projectData: any) {
    return this.projectsService.updateProject(id, projectData);
  }

  @Delete(':id')
  deleteProject(id: string) {
    return this.projectsService.deleteProject(id);
  }
}
