//---------------------------------------------------------Question 1 ----------------------------------------------------------------------------------------------------------------
/* Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' 
(the element is in index.html file) all right our new element needs style. For that, assign to the new element the className 'square'!. 
Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o' 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//Assign 'question1' element to  a 'div' varialbe, Assign 'square' element to a 'square' variable.
let div = document.getElementById('question1');
//document.getElementsByClassName('square')[0];

// call listen function
//create new div element 'nDive', add all square syling to the new element
//Assign string value to the new div, then replace the old div element with the new one!!

div.addEventListener ('click', () => {
    nDiv = document.getElementsByClassName('square')[0];
    nDiv.innerHTML = "o";         
    });


    /* -----------Create new Div with different text -------------
    let div = document.getElementById('question1');
    let square = document.getElementsByClassName('square')[0];
    div.addEventListener ('click', () => {
    
        let nDiv = document.createElement('div');
        nDiv.classList.add('square')
        nDiv.innerHTML = "o";         
        div.replaceChild(nDiv, square); 
    }); 
    --------------------------------------------------------------*/

/*----------------------------------------Question 2 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a JavaScript program to remove items from a dropdown list. In order to create the list we are providing you with the array below, those items are the ones you need to add to the dropdown list as the select options
you also need to create a button that makes the remove action of the element selected append the new list as a child of the element with the 'id = a-2' append the button as a child of the element with the 'id = a-2' 
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

let q2 = document.getElementById('question2');
const colors = ['red', 'white', 'black', 'green', 'orange'];

let select = document.createElement('select')
q2.append(select);

//function loops over the array items and store them in variable within <option> tag. 
let colorOptions = " ";
let options = function () 
{ 
  for (i = 0; i < colors.length; i++)
    {
        colorOptions += `<option> ${colors[i]} </option>`;
    }
  return colorOptions;
}
select.innerHTML = options();

//create button, append it, and name it "Remove Color "
let btn = document.createElement('button');
let button = document.getElementById('question2').appendChild(btn);
btn.textContent = "Remove Color";

//when the event is clicked,item selected will be removed
btn.addEventListener('click', () => 
{ 
  select.remove(select.selectedIndex);
})

// assign the button element to 'removeColorButton', and call 'click function it to  assign "removeColorButton".
// const removeColorButton = document.getElementsByTagName('button')[0];
// removeColorButton.addEventListener('click', ()  => 
//     {
//         //Assign mySelect element to select variable, use it to access the index and assing it to value "variable",
//         // then delete the selected index value
//         var select = document.getElementById('mySelect');
//         value = select.selectedIndex;
//         select.removeChild(select[value]);
//     });  


/*------------------------------------------------Question 3 --------------------------------------------------------------------------------------------------------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
take the radius from the input value element with the 'id=radius' in the index.html file And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
const  calculate_sphere = () =>
 {
  // declare volume and surface vaiables
  var volume;
  var surface;
  //get radius element and value from html document and assign it to radius variable, get the absolute value for the value.
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);

  //calculate the volume, fix digits after the dot to 4, then make that value equal to "volume" element value in the html document
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;

  //calculate the surface, fix digits after the dot to 4, then make that value equal to "area" element value in the html document
  surface = (4) * Math.PI * Math.pow(radius, 2);
  surface = surface.toFixed(4);
  document.getElementById('area').value = surface;
  
  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere;



/*-----------------------------------Question 4 ------------------------------------------------------------------------------------------------------------------------------------------------
Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the  respective question above with their aswer and if they are hidden then the click option should 
//be display the question with their respective aswer append the 3 buttons to the element with the 'id = a-4' as childrens
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    // /*for each question I did: pick question element from html document, 
    //                            pick the button element
    //                            call event listener: click function for the button 
    //                            then toggle question display, between block and display.

    let question1 = document.getElementById('question1');
    let showHide1= document.getElementById('showHide1');
    showHide1.addEventListener('click', ()  => 
    {
        question1.classList.toggle('visible');
    } );


    let question2 = document.getElementById('question2');
    let showHide2= document.getElementById('showHide2');
    showHide2.addEventListener('click', ()  => 
    {
        question2.classList.toggle('visible');
    } );


    let question3 = document.getElementById('question3');
    let button_4= document.getElementById('showHide3');
    button_4.addEventListener('click', ()  => 
    {
        question3.classList.toggle('visible');
    } );