//toggle class active
const navigation = document.querySelector('.navbar');

// ketika hambubrger-menu di klik
 document.querySelector('#hamburger-menu').onclick = () => {
     navigation.classList.toggle('active')
 };

//klik diluar side bar hambburger-menu hilang
const hambuger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e){
    if(!hambuger.contains(e.target) && !navigation.contains(e.target)){
        navigation.classList.remove('active')
    }
})

//ketika klik navbar list - nav hilang
document.querySelector('#navbars').onclick = () => {
    navigation.classList.toggle('active')
};

const navbar = document.querySelector('#navbars');

document.addEventListener('click',function(e){
    if(!hambuger.contains(e.target) && !navigation.contains(e.target)){
        navigation.classList.remove('active')
    }
})
