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
        //this.recognition.interimResults = true;
        
        this.statement = document.createElement('h5');
        this.result = document.createElement('h4');
        this.display = document.querySelector('.display');
        this.recordBtn = document.querySelector('.record');
        
        this.addEventListeners();
    }
    
    addEventListeners() {
        this.recognition.addEventListener('result', (e) => {
            let transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript);
            
            console.log(eval(transcript[0]));
            
            
            this.statement.textContent = transcript;
            this.display.appendChild(this.statement);
            
            this.result.textContent = eval(transcript[0]);
            this.display.appendChild(this.result);
        });
        this.recordBtn.addEventListener('click', (e) => {
            this.recognition.start();
        });
    }
}

new Recording();

















