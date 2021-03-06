const scrollFunk = () => {
  const links = document.querySelectorAll('.header-menu__item a')
  const linkCharacteristics = document.querySelector('.card-details__link-characteristics')
  const newArray = [...links, linkCharacteristics]



  seamless.polyfill();

  newArray.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()

      const id = element.getAttribute('href').substring(1)
      const section = document.getElementById(id)

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      } else {
        seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }

    })

  })
}
scrollFunk()