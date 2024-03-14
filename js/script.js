const listaDeVideos = document.querySelectorAll('.listaDeVideos .lista')
const classDoVideoPrincipal = document.querySelector('.classDoVideoPrincipal')
const classDoTituloPrincipal = document.querySelector('.classDoTituloPrincipal')

listaDeVideos.forEach((video) => {
  video.onclick = () => {
    listaDeVideos.forEach((vid) => {
      vid.classList.remove('ativo')
    })


    video.classList.add('ativo')

    
    if (video.classList.contains('ativo')) {
      const src = video.children[0].src
      classDoVideoPrincipal.src = src
      const tituloVideoDaLista = video.children[1].innerHTML
      classDoTituloPrincipal.innerHTML = tituloVideoDaLista
    }
  }
})

const slider = document.querySelector('.listaDeVideos')
let isDragging = false
let startY = 0
let startScrollTop = 0

slider.addEventListener('mousedown', (e) => {
  isDragging = true
  startY = e.pageY
  startScrollTop = slider.scrollTop
})

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) {
    return
  }
  let deltaY = e.pageY - startY
  slider.scrollTop = startScrollTop - deltaY
})

slider.addEventListener('mouseup', (e) => {
  if (!isDragging) {
    return
  }
  isDragging = false
})

// video.classList.remove('ativo')