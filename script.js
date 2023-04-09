const hourHand = document.querySelector('[data-hour]');
const minuteHand = document.querySelector('[data-minute]');
const secondHand = document.querySelector('[data-second]');
const interval = 1000;

class Clock {
    currentDate;
    secondRatio;
    minRatio;
    hourRatio;

    constructor(hourHand, minuteHand, secondHand) {
        this.hourHand = hourHand;
        this.minuteHand = minuteHand;
        this.secondHand = secondHand;
    }
    
    setRotation(elem, rotation) {
        elem.style.setProperty('--rotation', rotation * 360)
    }
    setClock() {
        this.currentDate = new Date();
        this.secondRatio = this.currentDate.getSeconds() / 60;
        this.minRatio = (this.secondRatio + this.currentDate.getMinutes()) / 60;
        this.hourRatio = (this.minRatio + this.currentDate.getHours()) / 12;

        console.log('this.minRatio', this.minRatio)
        this.setRotation(this.secondHand, this.secondRatio);
        this.setRotation(this.minuteHand, this.minRatio);
        this.setRotation(this.hourHand, this.hourRatio);

    }

} 

const clock = new Clock(hourHand, minuteHand, secondHand);
setInterval(() => clock.setClock(), interval);
