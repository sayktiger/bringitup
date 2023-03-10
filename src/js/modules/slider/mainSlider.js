import Slider from "./slider";

export default class MainSlider extends Slider{
    constructor(btns){
        super(btns);
    }

    showSlides(n){
        if(n > this.slides.length){
            this.slideIndex = 1;
        }

        if(n < 1){
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach((slide,i) =>{
            slide.style.display = `none`;
            slide.classList.add(`animated`, `slideInUp`);
        });

        this.slides[this.slideIndex-1].style.display = `block`;

        try{
            this.hanson.style.opacity = 0;

            if(n === 3){
                this.hanson.classList.add(`animated`);
                setTimeout(() =>{
                    this.hanson.style.opacity = 1;
                    this.hanson.classList.add(`slideInUp`);
                },3000)
            } else{
                this.hanson.classList.remove(`slideInUp`);
            }
        }catch(e){}
    }

    plusSlides(n){
        this.showSlides(this.slideIndex += n);
    }

    render(){
        if(this.container){
            try{
                this.hanson = document.querySelector(`.hanson`);
            }catch(e){}
    
            this.btns.forEach(btn =>{
                btn.addEventListener(`click`, (e) =>{
                    e.preventDefault();
    
                    this.plusSlides(1);
                });
    
                btn.parentNode.previousElementSibling.addEventListener(`click`, (e) =>{
                    e.preventDefault();
    
                    this.slideIndex = 1;
                    this.showSlides(this.slideIndex);
                });
            });
    
            this.showSlides(this.slideIndex);

            document.querySelectorAll(`.prevmodule`).forEach(item =>{
                item.addEventListener(`click`, (e) =>{
                    e.stopPropagation();
                    e.preventDefault();
                    
                    this.plusSlides(-1);
                });
            });

            
            document.querySelectorAll(`.nextmodule`).forEach(item =>{
                item.addEventListener(`click`, (e) =>{
                    e.stopPropagation();
                    e.preventDefault();
                    
                    this.plusSlides(1);
                });
            });
        } 
    }
}