class EasyHttp {

  // Make an Http Get Request
  get(url){
  
    return new Promise( (resolve, reject) => {
  
      fetch(url)
      .then( res => res.json() )
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }
  
  // Make an Http Post Request
  post(url, data){
  
    return new Promise( (resolve, reject) => {
  
      fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( res => res.json() )
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }
  
  // Make an Http PUT Request
  put(url, data){
  
    return new Promise( (resolve, reject) => {
  
      fetch(url, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( res => res.json() )
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }
  
  // Make an Http DELETE Request
  delete(url){
  
    return new Promise( (resolve, reject) => {
  
      fetch(url, {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json'
        }
      })
      .then( res => res.json() )
      .then( () => resolve('resources deleted..'))
      .catch(err => reject(err));
    })
  }
    
  }