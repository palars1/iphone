const getData = () => {

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('ER')
    }    
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error, 'ERROR')
  })
  .finally(() => {
    console.log("finally")
  })


}

getData()