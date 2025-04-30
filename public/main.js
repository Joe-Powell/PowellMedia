console.log('working main.js')

const Bars = document.querySelector('.fa-bars')
const slideMenu = document.querySelector('.slideMenu')


////////////////////////// UPLOADING FILES /////////////////////////////////////
const btnAdmn = document.querySelectorAll('.btnAdmn')
const hiddenFile = document.querySelectorAll('.hiddenFile')
const filename_landing = document.querySelectorAll('.filename_landing')

// ** Later we will use formData to send form to the back-end 

// Make hidden file click with buttons
if(btnAdmn) {
  for (let i = 0; i < btnAdmn.length; i++) {
    btnAdmn[i].addEventListener('click', ()=> {
      hiddenFile[i].click()

    })
  }

 
}


//  Show filename under file upload
for (let i = 0; i < hiddenFile.length; i++) {
hiddenFile[i].addEventListener('change', (e)=> {
  console.log( hiddenFile[i].files)
        // Loop through file for filename
  for (let b = 0; b < hiddenFile[i].files.length; b++) {
    filename_landing[i].innerHTML+= hiddenFile[i].files[b].name + '<br>';
  }
})
}







if(Bars) {
  Bars.addEventListener('click', ()=> {
    slideMenu.classList.toggle('activeSlideMenu')
  })
}




/////////// When click on search Icon ////////////

const searchIcon = document.querySelectorAll('.fa-search')
const searchInput = document.querySelectorAll('.searchInput')

for (let i = 0; i < searchIcon.length; i++) {
    searchIcon[i].addEventListener('click', () => {
        console.log(i)
        searchInput[i].focus();
    })

}



// Register / Login 

const reglogForm = document.querySelector('.reglogForm')

if(reglogForm) {
  reglogForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Submitted registration form in signup page')
    const email = document.querySelector('input[name=email]').value;
    const username = document.querySelector('input[name=username]').value;
    const password = document.querySelector('input[name=password]').value;
    console.log(email,username, password )
    const body = {
      email,
      username,
      password
      }

      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body)
          })

 




  } )
}