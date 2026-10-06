// Menu hambúrguer (celular e tablet)
const botao = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
 
function alternar(aberto) {
  menu.classList.toggle('aberto', aberto);
  botao.classList.toggle('aberto', aberto);
  botao.setAttribute('aria-expanded', aberto);
  botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}
 
botao.addEventListener('click', () => alternar(!menu.classList.contains('aberto')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => alternar(false)));
 