/* Waves library */
Waves.attach('.record, .clear', ['waves-button']);
Waves.attach('.history, .settings', ['waves-float']);
Waves.attach('.menu_color, .menu_font, .menu_color_list_item, .menu_font_list_item', ['waves-float']);
Waves.init();


class Sidebars {
    constructor(options) {
        this.elem = options;
        this.wrapper = document.querySelector('.wrapper');
        this.designElements = {
            header: document.querySelector('.header'),
            screen: document.querySelector('.screen'),
            display: document.querySelector('.display'),
            
            history: document.querySelector('.history'),
            historySVG: document.querySelector('.history_svg'),
            
            settings: document.querySelector('.settings'),
            settingsSVG: document.querySelector('.settings_svg'),
            
            controls: document.querySelector('.controls'),
            record: document.querySelector('.record'),
            recordSVG: document.querySelector('.record_svg'),
            clear: document.querySelector('.clear'),
            
            settingsMenu: document.querySelector('.settings_menu'),
            menuColor: document.querySelector('.menu_color'),
            menuColorSVG: document.querySelector('.menu_color_svg'),
            menuFont: document.querySelector('.menu_font'),
            menuFontSVG: document.querySelector('.menu_font_svg'),
            
            historySidebar: document.querySelector('.history_sidebar'),
            historySidebarScreen: document.querySelector('.history_sidebar_screen'),
            
        }
        this.colorScheme = {
            blue: {
                darkPrimary: '#1976D2',
                primary: '#2196F3',
                lightPrimary: '#BBDEFB',
                accent: '#92d04a',
                text: '#FFFFFF'
            },
            yellow: {
                darkPrimary: '#FBC02D',
                primary: '#FFEB3B',
                lightPrimary: '#FFF9C4',
                accent: '#8BC34A',
                text: '#212121'
            },
            indigo: {
                darkPrimary: '#303F9F',
                primary: '#3F51B5',
                lightPrimary: '#C5CAE9',
                accent: '#d42727',
                text: '#FFFFFF'
            },
            primaryText: '#212121',
            secondaryText: '#757575',
            divider: '#BDBDBD'
        }
        
        // Settings sidebar elements
        this.settingsBtn = document.querySelector('.settings');
        this.settingsMenu = document.querySelector('.settings_menu');
        
        
        // History sidebar elements
        this.hisorySidebar = document.querySelector('.history_sidebar');
        this.historyBtn = document.querySelector('.history');
        
        // Color menu
        this.colorMenu = document.querySelector('.menu_color');
        this.colorList = document.querySelector('.menu_color_list');
        this.colorListItem = document.querySelector('.menu_color_list_item');
        
        // Font menu
        this.fontMenu = document.querySelector('.menu_font');
        this.fontList = document.querySelector('.menu_font_list');
        
        this.addEventListeners();
    }
    
    // Event listeners
    addEventListeners() {
        this.settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.open(this.settingsMenu, 'X', '-80');
        });
        this.historyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.open(this.hisorySidebar, 'X', '80');
        });
        this.wrapper.addEventListener('click', (e) => {
            this.close(this.settingsMenu, 'X', '80');
            this.close(this.hisorySidebar, 'X', '-80');
        });
        this.colorMenu.addEventListener('click', (e) => {
            this.toggleClass(this.colorList,  'list-open');
        });
        this.fontMenu.addEventListener('click', (e) => {
            this.toggleClass(this.fontList, 'list-open');
        });
        this.colorList.addEventListener('click', (e) => {
            console.log(e.target.id);
            e.stopPropagation();
            if (e.target.id === 'color2') {
                this.changeColors(this.colorScheme.yellow.darkPrimary, this.colorScheme.yellow.primary, this.colorScheme.yellow.lightPrimary, this.colorScheme.yellow.accent, this.colorScheme.yellow.text);
            } else if (e.target.id === 'color3') {
                this.changeColors(this.colorScheme.indigo.darkPrimary, this.colorScheme.indigo.primary, this.colorScheme.indigo.lightPrimary, this.colorScheme.indigo.accent, this.colorScheme.indigo.text);
            } else if (e.target.id === 'color1') {
                this.changeColors(this.colorScheme.blue.darkPrimary, this.colorScheme.blue.primary, this.colorScheme.blue.lightPrimary, this.colorScheme.blue.accent, this.colorScheme.yellow.text);
            }
        });
    }
    
    // Methods
    open(element, direction, percent, state) {
        element.style.transform = `translate${direction}(${percent}%)`;
        
        if (element.className === 'settings_menu') {
            this.historyBtn.style.pointerEvents = 'none';
        } else if (element.className === 'history_sidebar') {
            this.settingsBtn.style.pointerEvents = 'none';
        }
    }
    
    close(element, direction, percent, state) {
        element.style.transform = `translate${direction}(${percent}%)`;
        this.settingsBtn.style.pointerEvents = 'all';
        this.historyBtn.style.pointerEvents = 'all';
    }
    
    toggleClass(element, className) {
        element.classList.toggle(className);
        console.log(element.className)
    }
    
    changeColors(darkPrimary, primary, lightPrimary, accent, text) {
         this.designElements.header.style.backgroundColor = darkPrimary;
         this.designElements.screen.style.backgroundColor = primary;
         this.designElements.display.style.backgroundColor = lightPrimary;
        
         this.designElements.history.style.backgroundColor = primary;
         this.designElements.historySVG.style.fill = text;
         this.designElements.history.style.color = text;
        
         this.designElements.settings.style.backgroundColor = primary;
         this.designElements.settingsSVG.style.fill = text;
         this.designElements.settings.style.color = text;
        
         this.designElements.controls.style.backgroundColor = lightPrimary;
         this.designElements.record.style.backgroundColor = accent;
         this.designElements.record.style.color = text;
         this.designElements.recordSVG.style.fill = text;
        
         this.designElements.clear.style.backgroundColor = accent;
         this.designElements.clear.style.color = text;
         this.designElements.settingsMenu.style.backgroundColor = darkPrimary;
         this.designElements.menuColor.style.backgroundColor = primary;
         this.designElements.menuColor.style.color = text;
         this.designElements.menuColorSVG.style.fill = text;
        
         this.designElements.menuFont.style.backgroundColor = primary;
         this.designElements.menuFont.style.color = text;
         this.designElements.menuFontSVG.style.fill = text;
         
         this.designElements.historySidebar.style.backgroundColor = darkPrimary;
         this.designElements.historySidebarScreen.style.backgroundColor = lightPrimary;
    }
}

new Sidebars();



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

class Recording {
    constructor() {
        // API variables
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'en-IN';
        this.recognition.continuous = true;
        this.transcript;
        //this.recognition.interimResults = true;
        
        this.statement = document.createElement('h5');
        this.result = document.createElement('h4');
        this.display = document.querySelector('.display');
        this.recordBtn = document.querySelector('.record');
        this.clearBtn = document.querySelector('.clear');
        
        this.addEventListeners();
    }
    
    addEventListeners() {
        this.recognition.addEventListener('result', (e) => {
            this.transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
            
            
            // Checking multiplications for similar words
            if (this.transcript[0].includes('multiply')) {
                this.transcript[0] = this.transcript[0].replace('multiply', '*');
            } else if (this.transcript[0].includes('x')) {
                this.transcript[0] = this.transcript[0].replace('x', '*');
            }
            console.log(this.transcript);
            
            this.statement.textContent = this.transcript;
            this.display.appendChild(this.statement);
            
            this.result.textContent = eval(this.transcript[0]);
            this.display.appendChild(this.result);
        });
        this.recordBtn.addEventListener('click', (e) => {
            this.record();
        });
        this.clearBtn.addEventListener('click', (e) => {
            this.clear();
        })
    }
    record() {
        this.recognition.start();
    }
    clear() {
        this.recognition.stop();
        this.transcript = [];
        this.statement.textContent = '';
        this.result.textContent = '';
    }
}

new Recording();

















