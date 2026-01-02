import Timeout from "./Timeout.js";

export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    timeout: Timeout | null;
    pausedTimeout: Timeout | null;
    paused;
    constructor(
        container: Element,
        slides: Element[],
        controls: Element,
        time: number = 5000
    ) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;

        this.timeout = null
        this.pausedTimeout = null
        this.index = 0;
        this.slide = this.slides[this.index]
        this.paused = false;

        this.init()
    }

    hide(element: Element) {
        element.classList.remove('active')
    }

    show(index: number) {
        this.index = index;
        this.slide = this.slides[this.index]
        this.slides.forEach(slide => this.hide(slide))
        this.slide.classList.add('active')
        this.auto(this.time)
    }

    auto(time: number) {
        this.timeout?.clear()
        this.timeout = new Timeout(() => this.next(), time)
        // setTimeout(() => this.next(), time)
        // clearTimeout
    }

    prev() {
        if (this.paused) return;
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev)
    }

    next() {
        if (this.paused) return;
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0
        this.show(next)
    }

    pause() {
        this.pausedTimeout = new Timeout(() => {
            this.paused = true
        }, 300)
    }

    continue() {
        this.pausedTimeout?.clear()
        if (this.paused) {
            this.paused = false
            this.auto(this.time)
        }
    }

    private addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        prevButton.innerText = "Anterior";
        nextButton.innerText = "Próximo";
        this.controls.appendChild(prevButton)
        this.controls.appendChild(nextButton)

        this.controls.addEventListener("pointerdown", () => this.pause())
        this.controls.addEventListener("pointerup", () => this.continue())

        prevButton.addEventListener('pointerup', () => this.prev())
        nextButton.addEventListener('pointerup', () => this.next())
    }

    private init() {
        this.addControls()
        this.show(this.index)
    }
}