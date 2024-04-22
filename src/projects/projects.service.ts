import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './domain/project.model';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  createProject(projectData: any) {
    const idProject = uuidv4();
    return this.projectModel.create({ idProject, ...projectData });
  }

  async getProjects() {
    return this.projectModel.find().exec();
  }

  async getProjectById(id: string) {
    return this.projectModel.findById(id).exec();
  }

  async updateProject(id: string, projectData: any) {
    return this.projectModel.findByIdAndUpdate(id, projectData, { new: true });
  }

  async deleteProject(id: string) {
    return this.projectModel.findByIdAndDelete(id);
  }

  async getByQuery(query: any) {
    return this.projectModel.find(query).exec();
  }
}
