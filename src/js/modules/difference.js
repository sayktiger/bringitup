export default class Difference{
    constructor(oldOfficer, newOfficer, items){
        try{
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.items = items;
            this.oldItems = this.oldOfficer.querySelectorAll(this.items);
            this.newItems = this.newOfficer.querySelectorAll(this.items);
            this.oldCounter = 0;
            this.newCounter = 0;
        }catch(e){}
    }

    hideItems(){
        this.oldItems.forEach((item, i, arr) =>{
            if(i !== arr.length - 1) {
                item.style.display = `none`;
            }
        });

        this.newItems.forEach((item, i, arr) =>{
            if(i !== arr.length - 1) {
                item.style.display = `none`;
            }
        });
    }

    bindItems(){
        this.oldOfficer.querySelector(`.plus`).addEventListener(`click`, () =>{
            if(this.oldItems.length - 2 !== this.oldCounter ){
                this.oldItems[this.oldCounter].classList.add(`animated`, `fadeIn`);
                this.oldItems[this.oldCounter].style.display = `flex`;
                this.oldCounter++;
            } else {
                this.oldItems[this.oldCounter].classList.add(`animated`, `fadeIn`);
                this.oldItems[this.oldCounter].style.display = `flex`;
                this.oldItems[this.oldItems.length - 1].remove();
            }
        });

        this.newOfficer.querySelector(`.plus`).addEventListener(`click`, () =>{
            if(this.newItems.length - 2 !== this.newCounter ){
                this.newItems[this.newCounter].classList.add(`animated`, `fadeIn`);
                this.newItems[this.newCounter].style.display = `flex`;
                this.newCounter++;
            } else {
                this.newItems[this.newCounter].classList.add(`animated`, `fadeIn`);
                this.newItems[this.newCounter].style.display = `flex`;
                this.newItems[this.newItems.length - 1].remove();
            }
        });
    }

    init(){
        try{
            this.hideItems();
            this.bindItems();
        }catch(e){}
    }
}