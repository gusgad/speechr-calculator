class Sidebars {
    constructor(options) {
        this.elem = options;
        this.wrapper = document.querySelector('.wrapper');
        
        // Settings sidebar elements
        this.settingsPos = false;
        this.settingsBtn = document.querySelector('.settings');
        this.settingsMenu = document.querySelector('.settings_menu');
        this.historyBtn = document.querySelector('.history');
        
        // History sidebar elements
        this.hisorySidebar = document.querySelector('.history_sidebar');
        this.historyBtn = document.querySelector('.history');
        
        this.addEventListeners();
    }
    addEventListeners() {
        this.settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openSettings();
        });
        this.wrapper.addEventListener('click', (e) => {
            this.closeSettings();
            this.closeHistory();
        });
        this.historyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openHistory();
        })
    }
    openSettings() {
        this.settingsMenu.style.transform = 'translateX(-80%)';
        this.settingsPos = true;
    }
    closeSettings() {
        this.settingsMenu.style.transform = 'translateX(80%)';
        this.settingsPos = false;
    }
    openHistory() {
        this.hisorySidebar.style.transform = 'translateX(80%)';
    }
    closeHistory() {
        this.hisorySidebar.style.transform = 'translateX(-80%)';
    }
}

new Sidebars();

/*let sidebarMenu = new SidebarMenu({
    settingsBtn: document.querySelector('.settings'),
    settingsMenu: document.querySelector('.settings_menu')
});

let settingsBtn = document.querySelector('.settings');
settingsBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    sidebarMenu.open();
})

let wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', function(e) {
    if (sidebarMenu.position === true) {
        sidebarMenu.close();
    }
})*/