import { Project } from '../models/project.model';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'This is the first project',
        technologies: [
            { name: 'Angular', version: '10.2.5', iconURL: 'https://angular.io/assets/images/logos/angular/angular.svg', doc: 'https://v10.angular.io/docs' },
            { name: 'TypeScript', version: '4.0.8', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png', doc: 'https://www.typescriptlang.org/pt/docs/' },
            { name: 'CSS', version: '3', iconURL: 'https://prosimples.com/wp-content/uploads/2024/01/css-3.png', doc: 'https://devdocs.io/css/' },
        ],
        versions: [ 
            {version: 1, description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
            {version: 2, description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project1',
        category: 'Web application'
    },
    {
        id: 2,
        title: 'TCC 2026',
        description: 'This is the second project',
        technologies: [
            { name: 'React', version: '17.0.2', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
            { name: 'JavaScript', version: 'ES6', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' },
            { name: 'HTML', version: '5', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project2',
        category: 'Web application'
    },
    {
        id: 3,
        title: 'ToDoList',
        description: 'This is the third project',
        technologies: [
            { name: 'Vue.js', version: '3.0.0', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png' },
            { name: 'JavaScript', version: 'ES6', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' },
            { name: 'CSS', version: '3', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project3',
        category: 'Desktop application'
    },
    {
        id: 4,
        title: 'PaymentAPI',
        description: 'This is the fourth project',
        technologies: [
            { name: 'Node.js', version: '14.21.3', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png' },
            { name: 'JavaScript', version: 'ES6', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project4',
        category: 'API'
    },
    {
        id: 5,
        title: 'Portfolio',
        description: 'This is the first project',
        technologies: [
            { name: 'Angular', version: '10.2.5', iconURL: 'https://angular.io/assets/images/logos/angular/angular.svg' },
            { name: 'TypeScript', version: '4.0.8', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png' },
            { name: 'CSS', version: '3', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project1',
        category: 'Portfolio'
    },
    {
        id: 6,
        title: 'TCC',
        description: 'This is the second project',
        technologies: [
            { name: 'React', version: '17.0.2', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
            { name: 'JavaScript', version: 'ES6', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' },
            { name: 'HTML', version: '5', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project2',
    },
     {
        id: 1,
        title: 'Portfolio',
        description: 'This is the first project',
        technologies: [
            { name: 'Angular', version: '10.2.5', iconURL: 'https://angular.io/assets/images/logos/angular/angular.svg', doc: 'https://v10.angular.io/docs' },
            { name: 'TypeScript', version: '4.0.8', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png', doc: 'https://www.typescriptlang.org/pt/docs/' },
            { name: 'CSS', version: '3', iconURL: 'https://prosimples.com/wp-content/uploads/2024/01/css-3.png', doc: 'https://devdocs.io/css/' },
        ],
        versions: [ 
            {version: 1, description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
            {version: 2, description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project1',
    },
    {
        id: 2,
        title: 'TCC 2026',
        description: 'This is the second project',
        technologies: [
            { name: 'React', version: '17.0.2', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
            { name: 'JavaScript', version: 'ES6', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' },
            { name: 'HTML', version: '5', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project2',
    },
    {
        id: 3,
        title: 'ToDoList',
        description: 'This is the third project',
        technologies: [
            { name: 'Vue.js', version: '3.0.0', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png' },
            { name: 'JavaScript', version: 'ES6', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' },
            { name: 'CSS', version: '3', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project3',
    },
    {
        id: 4,
        title: 'PaymentAPI',
        description: 'This is the fourth project',
        technologies: [
            { name: 'Node.js', version: '14.21.3', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png' },
            { name: 'JavaScript', version: 'ES6', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project4',
    },
    {
        id: 5,
        title: 'Portfolio',
        description: 'This is the first project',
        technologies: [
            { name: 'Angular', version: '10.2.5', iconURL: 'https://angular.io/assets/images/logos/angular/angular.svg' },
            { name: 'TypeScript', version: '4.0.8', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png' },
            { name: 'CSS', version: '3', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project1',
    },
    {
        id: 6,
        title: 'TCC',
        description: 'This is the second project',
        technologies: [
            { name: 'React', version: '17.0.2', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
            { name: 'JavaScript', version: 'ES6', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' },
            { name: 'HTML', version: '5', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' },
        ],
        imagesURL: ['image1, image2, image3'],
        link: 'https://example.com/project2',
    },
];
