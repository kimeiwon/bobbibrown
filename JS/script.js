document.addEventListener(`DOMContentLoaded`, function () {

    AOS.init();

    window.addEventListener(`wheel`, (event) => {
        const headerArea = document.querySelector('.header_area');

        if (event.deltaY > 0) {
            // wheel down
            headerArea.classList.remove(`scroll`);
        } else {
            // wheel up
            headerArea.classList.add(`scroll`);
        }
    });


    //서브메뉴
    const menuBtn = document.querySelector(`#hamburger`);
    // const mainMenu = document.querySelector(`#menu`);
    const submenuBox = document.querySelector(`.sub_menu_box`);
    const mainMenu = document.querySelector(`.main_menu`);


    menuBtn.addEventListener(`click`, function () {
        submenuBox.classList.toggle(`active`);
        mainMenu.classList.toggle(`active`);
    });
   
});