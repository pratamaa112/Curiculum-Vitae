//toggle class active
const navigation = document.querySelector('.navbar');

// ketika hambubrger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navigation.classList.toggle('active')
};
