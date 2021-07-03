
let profile = document.getElementById('profile')
profile.addEventListener('click', function(){
  // profile.src='./pic.jpeg'
  if (profile.src.includes('andrew.svg')){
    console.log('t')
    profile.src='./pic.jpeg'
  }
   else {
    profile.src='./andrew.svg'
  }
})