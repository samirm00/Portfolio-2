'use strict';

import { logger } from '../../lib/logger.js';

import { Project } from '../classes/project.js';


export function handleProject(){

  let ProjectUrl = "https://api.github.com/users/samirm00/repos" ;

  // Array of the selected project ids

  const myProjectIds = [300421551 , 303137023,308762295, 302444542,320434177,322943999,332482701,334689597];
 // declare a variable to be able to add it to the logger 
  let project ;
  // filter data array 
 const filterData = (data) =>{
 data.forEach(element =>{
   if(!myProjectIds.includes(element.id)){
     return ;
    }

     project = new Project(element.id, element.name, element.html_url) ;    
    const renderProject = project.render();

    const projectsDiv = document.getElementById('projects');
    projectsDiv.appendChild(renderProject);
   
 })

 }

 // fetch data form GitHub API 
 
  fetch(ProjectUrl)
  .then(res => res.json())
  .then(data =>  filterData(data))
  .catch(err => console.log(err)); 
  
  
//posh project to logger function 
  logger.push({
    action: 'fetch project',
    project: project,
    
})
}



    
  


  
    
  
  

 



