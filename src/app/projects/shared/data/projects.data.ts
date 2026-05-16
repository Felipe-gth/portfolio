import { Project } from '../models/project.model';

export const projects: Project[] = [
{
    id: 1,
    title: 'portfolio',
    description: 'This is the first project',
    technologies: ['Angular', 'TypeScript', 'CSS'],
    imagesURL: ['image1, image2, image3'],
    link: 'https://example.com/project1',
},
{
    id: 2,
    title: 'tcc',
    description: 'This is the second project',
    technologies: ['React', 'JavaScript', 'HTML'],
    imagesURL: ['image1, image2, image3'],
    link: 'https://example.com/project2',
},
{
    id: 3,
    title: 'toDoList',
    description: 'This is the third project',
    technologies: ['Vue.js', 'JavaScript', 'CSS'],
    imagesURL: ['image1, image2, image3'],
    link: 'https://example.com/project3',
},
{
    id: 4,
    title: 'paymentAPI',
    description: 'This is the fourth project',
    technologies: ['Vue.js', 'JavaScript', 'CSS'],
    imagesURL: ['image1, image2, image3'],
    link: 'https://example.com/project3',
},
];