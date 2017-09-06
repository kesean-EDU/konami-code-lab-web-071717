const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const keyPresses = []

  function init() {
    document.body.addEventListener('keydown', (e) => {
      console.log(e.keyCode)
      keyPresses.push(e.keyCode)
      komaniCheck()
    })
  }

  function komaniCheck(){
    if (keyPresses.length > 10) {
      keyPresses.shift()
    }
    if (keyPresses.join('') === code.join('')) {
      alert("Konami Code!")
    }
  }
