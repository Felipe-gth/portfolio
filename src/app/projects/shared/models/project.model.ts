import { Technology } from '../../../shared/models/technology.model';

export interface Project {
    id?: number;
    title?: string;
    description?: string;
    technologies?: Technology[];
    imagesURL?: string[];
    link?: string;
}
