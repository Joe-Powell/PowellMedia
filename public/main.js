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