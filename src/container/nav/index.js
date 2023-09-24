class Nav {
  static #HOME_PAGE = 'https://google.com'

  static #backward = () => {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #reload = () => {
    return location.reload()
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static #run = () => {
    try {
      const url = new URL(window.input.value)
      return this.#changePage(url.href)
    } catch (err) {
      alert(`Введіть коректну адресу`)
      console.log(err)
    }
  }

  static init = () => {
    window.backward.onclick = this.#backward
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.run.onclick = this.#run

    window.input.value = location.href
  }
}

Nav.init()
