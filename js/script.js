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
