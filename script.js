let division = document.createElement('div')
division.setAttribute('class','container') 

let heading = document.createElement("h1"); 
heading.innerHTML="Nationality of a Person";

let input = document.createElement("input");
input.setAttribute("type", "text");//creating attributes for input tag
input.setAttribute("id","inp") ;
input.setAttribute("placeholder", "Enter Your Name");

let button = document.createElement('button');
button.innerText = ' Search ';
button.setAttribute('id','btn')
button.addEventListener('click', () => {  //creating onclick function for button tag
  foo();
});

let resetButton = document.createElement('button');
resetButton.innerText = 'Reset';
resetButton.setAttribute('id','btn1')
resetButton.addEventListener('click', () => {
  input.value = '';
  
});

division.append(heading)
division.append(input)
division.append(button)
division.append(resetButton)
division.append(span)
document.body.append(division)



async function foo(){
  let name=document.getElementById('inp').value //inp is input tag id name
  try{
      let response = await fetch(`https://api.nationalize.io/?name=${name}`)//fetching from API
      let res=await response.json();
      console.log(res)
      for(let i =0; i<res.country.length;i++){
     console.log(`The top two countries for ${name} are ${res.country[0].country_id} and ${res.country[1].country_id} with probabilities of ${res.country[0].probability} and ${res.country[1].probability} .`);
      }
      document.getElementById("span").innerText=`The top two countries  for the name of  ${name} is
                                                                           ${res.country[0].country_id} with probabilities of ${res.country[0].probability} and 
                                                                         ${res.country[1].country_id} with probabilities of  ${res.country[1].probability} .`
    }catch(err){
      console.log("some error occured"+err);
    }}



















