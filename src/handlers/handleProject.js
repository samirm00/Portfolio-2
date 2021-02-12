'use strict';

import { logger } from '../../lib/logger.js';

import { Project } from '../classes/project.js';


export function handleProject(){

  let ProjectUrl = "https://api.github.com/users/samirm00/repos" ;

  const myProjectIds = [300421551 , 303137023,308762295, 302444542,320434177,322943999,332482701,334689597];

  // filter data array 
 const filterData = (data) =>{
 data.forEach(element =>{
   if(!myProjectIds.includes(element.id)){
     return ;
    }

    let project = new Project(element.id, element.name, element.homepage) ;    
    const renderProject = project.render();

    const projectsDiv = document.getElementById('projects');
    projectsDiv.appendChild(renderProject);
   
 })

 }

  fetch(ProjectUrl)
  .then(res => res.json())
  .then(data =>  filterData(data))
  .catch(err => console.log(err)); 
   
}



    
  


  
    
  
  

 



