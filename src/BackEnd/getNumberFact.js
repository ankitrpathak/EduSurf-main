async function getNumberFact(category){
    var result = undefined;
    await fetch(`http://numbersapi.com/random/${category}?json`,{
      headers : { 
        'Accept': 'application/json'
       }

    })
      .then(function(response){
          if(response.ok){
            return response.json();
          }
      }).then(data => {
        result = data;
      });
    return result;
}
export default getNumberFact;