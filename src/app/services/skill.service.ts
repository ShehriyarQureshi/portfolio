import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  frontendSkills: any = [
    'Angular',
    'HTML',
    'CSS',
    'TypeScript',
    'pyGTK'
  ];

  backendSkills: any = [
    'Java',
    'Spring Boot',
    'Spring Security',
    'Python',
    'JDBC',
    'Hibernate ORM',
  ];

  databaseSkills: any = [
    'PostgreSQL',
    'SQLite3',
    'PostGIS',
    'pgAdmin'
  ];

  otherSkills: any = [
    'RESTful Web Services',
    'Geographic Information System',
    'Leaflet',
    'Linux',
    'Bash Scripting',
    'Version Control (Git/GitHub/Bitbucket)',
    'Apache Tomcat',
    'JSON',
    'XML',
    'Regular Expressions',
    'Vim/Neovim'
  ];

  constructor() { }
}
