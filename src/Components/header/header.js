import './header.css'
import { createNavMenu } from '../nav/nav'

export const createHeader = () => {
  const header = document.querySelector('header')
  const divLogo = document.createElement('div')
  divLogo.className = 'logo'
  const aLogo = document.createElement('a')
  aLogo.href = '#'
  const imgLogo = document.createElement('img')
  imgLogo.src =
    'https://1000logos.net/wp-content/uploads/2018/03/Pinterest-Logo-2011-2016.png'
  imgLogo.alt = 'Logo'
  aLogo.appendChild(imgLogo)
  divLogo.appendChild(aLogo)
  header.appendChild(divLogo)

  const nav = createNavMenu()
  header.appendChild(nav)

  const form = document.createElement('form')
  form.action = ''
  form.id = 'form-search'
  const input = document.createElement('input')
  input.className = 'search-bar'
  input.id = 'cajaBusqueda'
  input.type = 'text'
  input.placeholder = 'Buscar...'

  form.appendChild(input)
  header.appendChild(form)

  const divUserActions = document.createElement('div')
  divUserActions.className = 'user-actions'
  const img1 = document.createElement('img')
  img1.src =
    'https://cdn.icon-icons.com/icons2/2248/PNG/512/bell_ring_icon_136887.png'
  img1.className = 'icon'
  const img2 = document.createElement('img')
  img2.src =
    'https://cdn.icon-icons.com/icons2/2942/PNG/512/chat_icon_183898.png'
  img2.className = 'icon'
  const img3 = document.createElement('img')
  img3.src =
    'https://cdn.icon-icons.com/icons2/2248/PNG/512/alpha_e_circle_icon_137975.png'
  img3.className = 'icon-circle'
  divUserActions.appendChild(img1)
  divUserActions.appendChild(img2)
  divUserActions.appendChild(img3)
  header.appendChild(divUserActions)
}
