const text = [
"Web Developer",
"Frontend Developer",
"Fresh Graduate RPL"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

current = text[i];

if(!isDeleting){
document.getElementById("typing").textContent =
current.substring(0,j++);

if(j > current.length){
isDeleting = true;
setTimeout(type,1000);
return;
}
}else{

document.getElementById("typing").textContent =
current.substring(0,j--);

if(j === 0){
isDeleting = false;
i++;

if(i >= text.length){
i = 0;
}
}
}

setTimeout(type,isDeleting ? 50 : 120);

}

type();