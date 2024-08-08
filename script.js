
const mexico = document.getElementById('mexico');
const container = document.getElementById('container');

function clicar() {
    container.style.display = 'none';
    mexico.style.display = 'flex';
    console.log("Legal")
}

function fecharAba() {
    window.close();
    console.log("conseguiu")
  }