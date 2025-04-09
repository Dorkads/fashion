import { arrivals } from './arrivalsObjects.js'

const divItems = document.querySelector('.arrivals__items')

export const unfolding = () => {

  divItems.innerHTML = arrivals.map((item) => `
         <div class='arrivals__item'>
            <img class='arrivals__item-img' src='${item.img}' alt='${item.title}'>
            <h6 class='arrivals__item-title'>${item.title}</h6>
            <a class='arrivals__item-desc' href='#!'>${item.desc}</a>
         </div>`
    ).join('')
}
