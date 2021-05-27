
export function currencyRate(){

    let responseData = fetch('http://localhost:7002/currencies/exchanges',{
      method: "GET",
      headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      return data;
    } )
    .catch(error => console.log(error));
    
    return responseData;
   
}