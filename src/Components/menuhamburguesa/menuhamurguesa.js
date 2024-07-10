import './menuhamburguesa.css'

export const createMenuHamburguesa = () => {
  const menuContainer = document.createElement('div')
  menuContainer.className = 'menu-container'

  const menuIcon = document.createElement('div')
  menuIcon.className = 'menu-icon'
  menuIcon.innerHTML = `<div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>`

  const divHambuguer = document.createElement('div')
  divHambuguer.className = 'menu-links'
  divHambuguer.innerHTML = `<a href="#inicio">Inicio</a>
                            <a href="#">Explorar</a>
                            <a href="#">Crear</a>
                            <a href="#">Notificaciones</a>
                            <a href="#">Comentarios</a>`

  menuContainer.appendChild(menuIcon)
  menuContainer.appendChild(divHambuguer)

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('change')
    divHambuguer.classList.toggle('show')
  })

  return menuContainer
}
