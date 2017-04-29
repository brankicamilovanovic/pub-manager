import {pica} from '../podaci/pica'
const element = document.getElementById('karta-pica')

// singlton
export default class KartaPica {

  static clear() {
    element.innerHTML = ''
  }

  static cena(pice) {
    let cena
    pica.map(p => {
      if (p.naziv == pice) cena = p.cena
    })
    return cena
  }

  static render(sto) {
    KartaPica.clear()
    const div = document.createElement('div')
    pica.map(pice => {
      const p = document.createElement('p')
      p.innerHTML = `
      <img src="${pice.slika}">
      <span>${pice.naziv}</span>: <span>${pice.cena}</span>
      `
      p.onclick = () => sto.dodaj(pice)
      div.appendChild(p)
    })
    element.appendChild(div)
  }
}
