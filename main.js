import './style.css'
import { createHeader } from './src/Components/header/header'

createHeader()

const formSearch = document.querySelector('#form-search')
const cajaBusqueda = document.querySelector('#cajaBusqueda')
let keyword = ''
let page = 1
const accessKey = 'OvDetFC5-R4RJYTsfRvlqAhFK8Bsxos4MZbuKGQH_VE'
let resultadoBusqueda = document.querySelector('#resultadoBusqueda')

let totalImagenesCargadas = 0
const limiteImagenes = 25

async function buscarImagenes() {
  keyword = cajaBusqueda.value.trim()
  let url

  if (keyword === '') {
    url = `https://api.unsplash.com/photos/random?count=10&client_id=${accessKey}`
  } else {
    url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
  }

  const response = await fetch(url)
  const data = await response.json()

  if (page === 1) {
    resultadoBusqueda.innerHTML = ''
    totalImagenesCargadas = 0
  }

  let resultados
  if (keyword === '') {
    resultados = data
  } else {
    resultados = data.results
  }

  if (resultados.length === 0 && keyword !== '') {
    const suggestion = document.createElement('p')
    suggestion.className = 'no-results'
    suggestion.textContent =
      'No se encontraron resultados. Prueba buscar "gatos" o utiliza otra frase.'
    resultadoBusqueda.appendChild(suggestion)

    url = `https://api.unsplash.com/search/photos?page=${page}&query=gatos&client_id=${accessKey}`
    const responseGatos = await fetch(url)
    const dataGatos = await responseGatos.json()
    resultados = dataGatos.results
  }

  resultados.forEach((result) => {
    if (totalImagenesCargadas < limiteImagenes) {
      const carta = document.createElement('div')
      carta.className = 'carta-imagen'

      const imagen = document.createElement('img')
      imagen.src = result.urls.small
      imagen.className = 'foto'

      const imagenLink = document.createElement('a')
      imagenLink.href = result.links.html
      imagenLink.target = '_blank'

      const usuarioInfo = document.createElement('div')
      usuarioInfo.className = 'usuario-info'

      const usuarioImagen = document.createElement('div')
      usuarioImagen.className = 'usuario-imagen'

      const userImage = document.createElement('img')
      userImage.src = result.user.profile_image.small
      usuarioImagen.appendChild(userImage)

      const usuarioTexto = document.createElement('div')
      usuarioTexto.className = 'usuario-texto'

      const nombre = document.createElement('span')
      nombre.className = 'nombre'
      nombre.textContent = result.user.name

      const fecha = document.createElement('span')
      fecha.className = 'fecha'
      const date = new Date(result.created_at)
      fecha.textContent = date.toLocaleDateString()

      usuarioTexto.appendChild(nombre)
      usuarioTexto.appendChild(fecha)

      usuarioInfo.appendChild(usuarioImagen)
      usuarioInfo.appendChild(usuarioTexto)

      const botones = document.createElement('div')
      botones.className = 'botones'

      const likeButton = document.createElement('button')
      likeButton.className = 'boton'
      const likeIcon = document.createElement('img')
      likeIcon.src =
        'https://cdn.icon-icons.com/icons2/3832/PNG/512/heart_circle_icon_234532.png'
      likeButton.appendChild(likeIcon)

      const saveButton = document.createElement('button')
      saveButton.className = 'boton'
      const saveIcon = document.createElement('img')
      saveIcon.src = 'https://static.thenounproject.com/png/621426-200.png'
      saveButton.appendChild(saveIcon)

      botones.appendChild(likeButton)
      botones.appendChild(saveButton)

      carta.appendChild(imagenLink)
      imagenLink.appendChild(imagen)
      carta.appendChild(usuarioInfo)
      carta.appendChild(botones)
      resultadoBusqueda.appendChild(carta)

      totalImagenesCargadas++
    }
  })

  page++

  cajaBusqueda.value = ''
}

formSearch.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  buscarImagenes()
})

document.addEventListener('DOMContentLoaded', () => {
  buscarImagenes()
})

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    buscarImagenes()
  }
})

const logo = document.querySelector('.logo')

logo.addEventListener('click', () => {
  page = 1
  keyword = ''
  resultadoBusqueda.innerHTML = ''
  buscarImagenes()
})
