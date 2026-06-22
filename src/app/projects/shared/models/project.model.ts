import { Technology } from '../../../shared/models/technology.model';
import { Version } from './version.model'; 
export interface Project {
    id?: number;
    title?: string;
    description?: string;
    technologies?: Technology[];
    versions?: Version[];
    imagesURL?: string[];
    link?: string;
}
