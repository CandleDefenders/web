const btn_menu = document.querySelector('.btn_menu')
if (btn_menu) {
    btn_menu.addEventListener('click', () => {
        const menu_items = document.querySelector('.menu_items')
        menu_items.classList.toggle('show')
    })
};

window.addEventListener("scroll", function(){
    var menu = document.querySelector(".menu");
    menu.classList.toggle("sticky", this.window.scrollY > 0);
});