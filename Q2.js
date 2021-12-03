    

const promiseData = new Promise ((resolve, reject) => {
    if(resolve){
      return data;
    }else if(reject){
      return data;
    } 
  })
  
  promiseData.then(response => response.json())
  .then((result) => result.data)