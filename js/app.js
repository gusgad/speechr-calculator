class SidebarMenu {
    constructor(options) {
        this.elem = options.elem;
    }
}

let sidebarMenu = new SidebarMenu({
    settingsBtn: document.querySelector('.settings'),
    settingsMenu: document.querySelector('.settings_menu')
});

let settingsBtn = document.querySelector('.settings');
settingsBtn.addEventListener('click', function(e) {
    alert('sup');
})