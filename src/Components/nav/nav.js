import './nav.css'
import { createButton } from '../Button/button'
export const createNavMenu = () => {
  let navMenu = document.createElement('nav')
  navMenu.className = 'menu'
  const buttons = [
    { bgColor: 'black', textColor: 'white', text: 'Inicio', href: '#inicio' },
    {
      bgColor: 'white',
      textColor: 'black',
      text: 'Explorar',
      href: '#explorar'
    },
    { bgColor: 'white', textColor: 'black', text: 'Crear', href: '#crear' }
  ]

  let ul = document.createElement('ul')
  buttons.forEach((item) => {
    const li = document.createElement('li')
    li.innerHTML = createButton({
      bgColor: item.bgColor,
      textColor: item.textColor,
      text: item.text
    })

    const button = li.querySelector('button')
    const a = document.createElement('a')
    a.href = item.href
    a.appendChild(button)

    li.appendChild(a)
    ul.appendChild(li)
  })

  navMenu.appendChild(ul)
  const header = document.querySelector('header')
  if (header) {
    header.appendChild(navMenu)
  } else {
    console.error('No funciona el DOM en el header')
  }

  return navMenu
}
