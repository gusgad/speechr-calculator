/* Waves library */
Waves.attach('.record, .clear', ['waves-button']);
Waves.attach('.history, .settings', ['waves-float']);
Waves.init();


class Sidebars {
    constructor(options) {
        this.elem = options;
        this.wrapper = document.querySelector('.wrapper');
        
        // Settings sidebar elements
        this.settingsBtn = document.querySelector('.settings');
        this.settingsMenu = document.querySelector('.settings_menu');
        
        
        // History sidebar elements
        this.hisorySidebar = document.querySelector('.history_sidebar');
        this.historyBtn = document.querySelector('.history');
        
        // Color menu
        this.colorMenu = document.querySelector('.menu_color');
        this.colorList = document.querySelector('.menu_color_list');
        
        // Font menu
        this.fontMenu = document.querySelector('.menu_font');
        
        this.addEventListeners();
    }
    
    addEventListeners() {
        this.settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.open(this.settingsMenu, '-80');
        });
        this.historyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.open(this.hisorySidebar, '80');
        });
        this.wrapper.addEventListener('click', (e) => {
            this.close(this.settingsMenu, '80');
            this.close(this.hisorySidebar, '-80');
        });
        this.colorMenu.addEventListener('click', (e) => {
            this.showMenu(this.colorList);
        });
    }
    
    open(element, percent) {
        element.style.transform = `translateX(${percent}%)`;
        if (element.className === 'settings_menu') {
            this.historyBtn.style.pointerEvents = 'none';
        } else if (element.className === 'history_sidebar') {
            this.settingsBtn.style.pointerEvents = 'none';
        }
    }
    
    close(element, percent) {
        element.style.transform = `translateX(${percent}%)`;
        this.settingsBtn.style.pointerEvents = 'all';
        this.historyBtn.style.pointerEvents = 'all';
    }
    
    showMenu(element) {
        element.style.transform = 'translateY(0%)';
    }
    
    hideMenu(element) {
        element.style.transform = 'translateX(100%)';
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

















