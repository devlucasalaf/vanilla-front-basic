(function handleMenu(win, doc) {
  let setOpen = false

  const menuBtn = doc.querySelector('#menu-btn')
  const menuContainer = doc.querySelector('#menu-container')
  const links = doc.querySelectorAll('.links')
  console.log(links)

  const menuHandle = () => {
    setOpen = !setOpen

    if (setOpen === true) {
      menuContainer.style.display = 'block'
      menuBtn.innerHTML = 'Close Menu'
    } else {
      menuContainer.style.display = 'none'
      menuBtn.innerHTML = 'Open Menu'
    }
  }

  for (const link of links) {
    link.addEventListener('click', menuHandle)
  }
  menuBtn.addEventListener('click', menuHandle, false)


})(window, document)