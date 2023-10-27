



window.onload=function(){
var password = document.getElementById("myInput");
var genButtn = document.getElementById('Generator');
var reqlength = document.getElementById('length');
var copybuttn=document.getElementById('copybuttn');
var rangecon=document.getElementById('rangecon');
const Symbols=['*', '&', '^', '@', '%', '!', '$', '#'];
const Numbers=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SmallCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const UpperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var checked={"Symbols":Symbols,"Numbers":Numbers,"SmallCase":SmallCase,"UpperCase":UpperCase }
var userchoice=new Set()


function myFunction(){ navigator.clipboard.writeText(password.value);       }

rangecon.lastElementChild.innerText=reqlength.value

  

function get_random (list) {  return list[Math.floor((Math.random()*list.length))];}

function get_random1 (list) { let list1=Array.from(list); return list1[Math.floor((Math.random()*list1.length))];}



function generate(length){password.value=""; for(let i=0;i<length;i++){ password.value+=get_random(checked[get_random1(userchoice)]) }rangecon.lastElementChild.innerText=reqlength.value}
  

// Object.values(checked)

  copybuttn.addEventListener('click',myFunction)
  reqlength.addEventListener('change',function(){ generate(reqlength.value)})
  genButtn.addEventListener("click",function(){ generate(reqlength.value)})

  

var boxes=document.querySelectorAll('input[type="checkbox"]');
boxes.forEach(box => {
  
    if(box.checked){
      userchoice.add(box.id)
     
    }else{
      // userchoice.splice(userchoice.indexOf(box.id) )     ; console.log(userchoice)

    }
  box.addEventListener('change',function(){
    if(box.checked){
      userchoice.add(box.id)
     
    }else{

      if (userchoice.size==1 ){box.checked=true } else{userchoice.delete(box.id)
       }
      // userchoice.splice(userchoice.indexOf(box.id) )     ; console.log(userchoice)

    }

    generate(reqlength.value)
  })
  
});



  generate(reqlength.value)

}