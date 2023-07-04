$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);


//scoll/sticky

const headerTop = $('.header-topbar')
const headerNav = $('.header-nav')

window.addEventListener('scroll', scrollFunction)

function scrollFunction () {
    if((document.documentElement.getClientRects()[0].y) <= -20){
        headerTop.classList.add('hide')
        headerNav.classList.add('scroll')
    } else {
        headerTop.classList.remove('hide')
        headerNav.classList.remove('scroll')
    }
}

//active

const headerNavItem = $$('.header-nav__item')

headerNavItem.forEach(item => {
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        $('.header-nav__item.active').classList.remove('active')
        item.classList.add('active')
    })
});

//header search input

const headerSearchIcon = $('.header-nav__search i')
const headerSearchInput = $('.header-nav__search-input')

headerSearchIcon.addEventListener('click', (e)=> {
    headerSearchInput.classList.toggle('hide')
})


// header list active
const searchItem = $$('.search-header__item')

searchItem.forEach(item => {
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        $('.search-header__item.active').classList.remove('active')
        item.classList.add('active')
    })
});

// container list active
const searchContainerItem = $$('.search-container__item')

searchContainerItem.forEach(item => {
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        $('.search-container__item.active').classList.remove('active')
        item.classList.add('active')
    })
});