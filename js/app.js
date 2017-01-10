/* Service Worker registration */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


/* Waves library */
Waves.attach('.record, .clear', ['waves-button']);
Waves.attach('.history, .settings', ['waves-float']);
Waves.attach('.menu_color, .menu_font, .menu_color_list_item, .menu_font_list_item', ['waves-float']);
Waves.init();

/* Main app */
class Sidebars {
    constructor(options) {
        
        // Basic elements
        this.html = document.querySelector('html');
        this.wrapper = document.querySelector('.wrapper');
        
        // Elements for CSS design
        this.designElements = {
            header: document.querySelector('.header'),
            screen: document.querySelector('.screen'),
            display: document.querySelector('.display'),
            
            history: document.querySelector('.info'),
            historySVG: document.querySelector('.info_svg'),
            
            settings: document.querySelector('.settings'),
            settingsSVG: document.querySelector('.settings_svg'),
            
            controls: document.querySelector('.controls'),
            record: document.querySelector('.record'),
            recordSVG: document.querySelector('.record_svg'),
            clear: document.querySelector('.clear'),
            
            settingsMenu: document.querySelector('.settings_sidebar'),
            menuColor: document.querySelector('.menu_color'),
            menuColorSVG: document.querySelector('.menu_color_svg'),
            menuFont: document.querySelector('.menu_font'),
            menuFontSVG: document.querySelector('.menu_font_svg'),
            
            historySidebar: document.querySelector('.info_sidebar'),
            historySidebarScreen: document.querySelector('.info_sidebar_screen')
            
        }
        
        // Color palettes for schemes
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
        this.settingsMenu = document.querySelector('.settings_sidebar');
        
        
        // History sidebar elements
        this.infoSidebar = document.querySelector('.info_sidebar');
        this.infoBtn = document.querySelector('.info');
        
        // Color menu
        this.colorMenu = document.querySelector('.menu_color');
        this.colorList = document.querySelector('.menu_color_list');
        this.colorListItem = document.querySelector('.menu_color_list_item');
        
        // Font menu
        this.fontMenu = document.querySelector('.menu_font');
        this.fontList = document.querySelector('.menu_font_list');
        this.fontListItem = document.querySelector('.menu_font_list_item');
        
        this.addEventListeners();
    }
    
    
    // Event listeners for animations and menu settings
    addEventListeners() {
        
        this.settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.open(this.settingsMenu, 'X', '-80');
        });
        
        this.infoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.open(this.infoSidebar, 'X', '80');
        });
        
        this.wrapper.addEventListener('click', (e) => {
            this.close(this.settingsMenu, 'X', '80');
            this.close(this.infoSidebar, 'X', '-80');
        });
        
        this.colorMenu.addEventListener('click', (e) => {
            this.toggleClass(this.colorList,  'list-open', this.fontMenu, 'menu-closed');
        });
        
        this.fontMenu.addEventListener('click', (e) => {
            this.toggleClass(this.fontList, 'list-open', this.colorMenu, 'menu-closed');
        });
        
        this.colorList.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target.id === 'color2') {
                this.changeColors(this.colorScheme.yellow.darkPrimary, this.colorScheme.yellow.primary, this.colorScheme.yellow.lightPrimary, this.colorScheme.yellow.accent, this.colorScheme.yellow.text);
            } else if (e.target.id === 'color3') {
                this.changeColors(this.colorScheme.indigo.darkPrimary, this.colorScheme.indigo.primary, this.colorScheme.indigo.lightPrimary, this.colorScheme.indigo.accent, this.colorScheme.indigo.text);
            } else if (e.target.id === 'color1') {
                this.changeColors(this.colorScheme.blue.darkPrimary, this.colorScheme.blue.primary, this.colorScheme.blue.lightPrimary, this.colorScheme.blue.accent, this.colorScheme.yellow.text);
            }
        });
        
        this.fontList.addEventListener('click', (e) => {
            if (e.target.id === 'font2') {
                this.html.style.fontSize = '80%';
            } else if (e.target.id === 'font1') {
                this.html.style.fontSize = '100%';
            }
        });
        
    }
    
    
    // Methods for animations and menu settings
    open(element, direction, percent, state) {
        element.style.transform = `translate${direction}(${percent}%)`;
        if (element.className === 'settings_sidebar') {
            this.infoBtn.style.pointerEvents = 'none';
        } else if (element.className === 'info_sidebar') {
            this.settingsBtn.style.pointerEvents = 'none';
        }
    }
    
    close(element, direction, percent, state) {
        element.style.transform = `translate${direction}(${percent}%)`;
        this.settingsBtn.style.pointerEvents = 'all';
        this.infoBtn.style.pointerEvents = 'all';
    }
    
    toggleClass(element, className, secondElem, state) {
        element.classList.toggle(className);
        secondElem.classList.toggle(state);
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


// Checking API availability
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

class Recording {
    constructor(options) {
        
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
        this.infoSidebarScreen = document.querySelector('.info_sidebar_screen');
        
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Calculating and showing the result
        this.recognition.addEventListener('result', (e) => {
            this.speechProcess(e);
        });
        
        this.recognition.addEventListener('nomatch', (e) => {
            this.display.textContent = 'Error occured, please try again';
        });
        
        this.recordBtn.addEventListener('click', (e) => {
            this.record();
        });
        
        this.clearBtn.addEventListener('click', (e) => {
            this.clear();
        });
    }
    
    // Methods for record and clear
    record() {
        this.recognition.start();
    }
    
    clear() {
        this.recognition.stop();
        this.transcript = [];
        this.statement.textContent = '';
        this.result.textContent = '';
    }
    
    speechProcess(e) {
        this.transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            
            // Checking multiplications (* asterisk) and divisions (/ slash) for similar words
            if (this.transcript.includes('multiply')) {
                this.transcript = this.transcript.replace('multiply', '*');
            } else if (this.transcript.includes('x')) {
                this.transcript = this.transcript.replace('x', '*');
            } else if (this.transcript.includes('X')) {
                this.transcript = this.transcript.replace('X', '*');
            } else if (this.transcript.includes('multiplied')) {
                this.transcript = this.transcript.replace('multiplied', '*');
            } 
            
            if (this.transcript.includes('divide')) {
                this.transcript = this.transcript.replace('divide', '/');
            } else if (this.transcript.includes('divided')) {
                this.transcript = this.transcript.replace('divided', '/');
            } else if (this.transcript.includes('/d')) {
                this.transcript = this.transcript.replace('/d', '/');
            }

            
            console.log(this.transcript);
            
            // Displaying
            this.statement.textContent = this.transcript;
            this.display.appendChild(this.statement);
            
            this.result.textContent = eval(this.transcript);
            this.display.appendChild(this.result);
        
    }
}

new Recording();