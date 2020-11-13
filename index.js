
const url="https://striveschool-api.herokuapp.com/api/movies/"


const mylist = async(genre)=>{
 
    
    const row = document.querySelector('.MyList')
    try{
    
        
            let response = await fetch(url+genre,
            { 
              headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNjgyZTQxNjJkMzAwMTdjMGI1YjEiLCJpYXQiOjE2MDUyNjU0NTQsImV4cCI6MTYwNjQ3NTA1NH0.-XHS3eGsX-wnyWU4_zwxtwO-JQpqj45wSD4HbySkUWA"
}



      }
    );

    let categories = await response.json()
    
    
   
  
    console.log(categories)
    if( response.ok){

       categories.forEach(e=> {
        
         const col = document.createElement('div');
         col.classList.add("col-sm-12",
            "col-md-6",
            "col-lg-2",
            "mx-auto",
            "text-center",
            
            )
         
         col.innerHTML=` <div class="card" >
         <img class="card-img-top " src="${e.imageUrl}" alt="Card image cap" height="200" width ="100%">
         <div class="card-body d-none">
           <p class="card-text">${e.name}</p>
           <p class="card-text d-none">${e.description}</p>
           
           <p class="card-text">${e.category}</p>
         </div>
       
         `
         row.appendChild(col)
         
     });

    }
        
 

}catch (error) {
    console.log(error);
    



    }
}
mylist('drama')
const trending = async(category)=>{
 
    
    const trending_row = document.querySelector('.trending')
    try{
    
        
            let response = await fetch(url+category,
            { 
              headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNjgyZTQxNjJkMzAwMTdjMGI1YjEiLCJpYXQiOjE2MDUyNjU0NTQsImV4cCI6MTYwNjQ3NTA1NH0.-XHS3eGsX-wnyWU4_zwxtwO-JQpqj45wSD4HbySkUWA"
}



      }
    );

    let trendings = await response.json()
    
    
   
  
    console.log(trendings)
    if( response.ok){

       trendings.forEach(e=> {
        
         const col = document.createElement('div');
         col.classList.add("col-sm-12",
            "col-md-6",
            "col-lg-2",
            "mx-auto",
            "text-center",
            
            )
         
         col.innerHTML=` <div class="card" >
         <img class="card-img-top img-fluid px-4" src="${e.imageUrl}" alt="Card image cap" height="200" width ="100%">
         <div class="card-body d-none">
           <p class="card-text">${e.name}</p>
           <p class="card-text d-none">${e.description}</p>
           
           <p class="card-text">${e.category}</p>
         </div>
       
         `
         trending_row.appendChild(col)
         
     });

    }
        
 

}catch (error) {
    console.log(error);
    



    }
}
trending('fiction')
const fantasy_movies = async(fantasy)=>{
 
    
    const fantasy_row = document.querySelector('.fantasy')
    try{
    
        
            let response = await fetch(url+fantasy,
            { 
              headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNjgyZTQxNjJkMzAwMTdjMGI1YjEiLCJpYXQiOjE2MDUyNjU0NTQsImV4cCI6MTYwNjQ3NTA1NH0.-XHS3eGsX-wnyWU4_zwxtwO-JQpqj45wSD4HbySkUWA"
}



      }
    );

    let fantasies = await response.json()
    
    
   
  
    console.log(fantasies)
    if( response.ok){

       fantasies.forEach(e=> {
        
         const col = document.createElement('div');
         col.classList.add("col-sm-12",
            "col-md-6",
            "col-lg-2",
            "mx-auto",
            "text-center",
            
            )
         
         col.innerHTML=` <div class="card" >
         <img class="card-img-top img-fluid px-4" src="${e.imageUrl}" alt="Card image cap">
         <div class="card-body d-none">
           <p class="card-text">${e.name}</p>
           <p class="card-text d-none">${e.description}</p>
           
           <p class="card-text">${e.category}</p>
         </div>
       
         `
         fantasy_row.appendChild(col)
         
     });

    }
        
 

}catch (error) {
    console.log(error);
    



    }
}
fantasy_movies('fantasy')