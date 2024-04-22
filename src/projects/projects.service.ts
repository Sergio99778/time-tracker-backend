import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './domain/project.model';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { CreateProjectDTO } from './dtos/createProject.dto';
import { UpdateProjectDTO } from './dtos/updateProject.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  createProject(projectData: CreateProjectDTO) {
    const idProject = uuidv4();
    return this.projectModel.create({ id: idProject, ...projectData });
  }

  async getProjects() {
    return this.projectModel.find().exec();
  }

  async getProjectById(id: string) {
    const projects = await this.projectModel.find({ id }).exec();
    if (!projects) {
      throw new NotFoundException('Project not found');
    }
    return projects;
  }

  async updateProject(id: string, projectData: UpdateProjectDTO) {
    return this.projectModel.findByIdAndUpdate(id, projectData, { new: true });
  }

  async deleteProject(id: string) {
    return this.projectModel.findByIdAndDelete(id);
  }

  async getByQuery(query: any) {
    return this.projectModel.find(query).exec();
  }
}
