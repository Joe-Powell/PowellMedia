console.log('working main.js')
const btn = document.querySelector('.btn')
const uploadBlogFile = document.querySelector('input[name=blogUpload]')
const Bars = document.querySelector('.fa-bars')
const slideMenu = document.querySelector('.slideMenu')

if(btn) {
  btn1.addEventListener('click', ()=> {
    uploadBlogFile.click()
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