import React from "react";
let curDate =new Date();
curDate =curDate.getHours();
let greetings ="";
const cssStyles ={};
if(curDate>=1 && curDate<=11){
  greetings='Good Morning';cssStyles.color="blue";
}else if(curDate>=13 && curDate<=17)
{
  greetings='Good Afternoon';cssStyles.color="orange";
}else{
  greetings='Good Night';cssStyles.color="black";
}
setInterval(myTimer, 1000);
function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
const name ="Kush";
const currDate = new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();  
const imgk ='https://picsum.photos/240/300';
const imgu ='https://picsum.photos/250/300';
const links="https://picsum.photos/";
const imgh ='https://picsum.photos/260/300';
function All()
{
    return(
        <>
        <h1 className="top" contentEditable="true">My Name is {name}  </h1><h2 className="bottom">HIIIII</h2><p>Current date is = {currDate}</p><br></br><p>current Time is = {currTime}</p><div className="photos">
            <img src={imgk} alt="..." />
            <img src={imgu} alt="..." />
            <a href={links} target="_k">
              <img src={imgh} alt="..." />
            </a>
            <br></br>
        </div><h3 className="good">Hello Sir, <span style={cssStyles}>{greetings}</span></h3>
        <div>
          <p id="demo"> {myTimer}</p>
        </div>
        </>
    );
}
export default All;