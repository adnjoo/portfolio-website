let profile = document.getElementById("profile");
profile.addEventListener("click", function () {
  // profile.src='./pic.jpeg'
  if (profile.src.includes("andrew.svg")) {
    console.log("t");
    profile.src = "./pic.jpeg";
  } else {
    profile.src = "./andrew.svg";
  }
});


var typed = new Typed('#typed',{
  strings : ['Hi, ^2000 my name is drew.^2000', 'I like making stuff.'],
  typeSpeed : 40,
  backSpeed: 20,
  loop : false,
  showCursor:true
});

let x= document.getElementById('typed');
x.setAttribute('style','font-size:1.2em')


