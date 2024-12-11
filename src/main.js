import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { renderLogin } from './components/login.js';
import { renderRegister } from './components/register.js';

const appContainer = document.getElementById('app');

// Manejo de navegación
function navigate(view) {
  appContainer.innerHTML = '';
  if (view === 'login') {
    renderLogin(appContainer);
  } else if (view === 'register') {
    renderRegister(appContainer);
  }
}

// Render inicial
navigate('login');

// Eventos de navegación
document.addEventListener('click', (e) => {
  if (e.target.id === 'showRegister') {
    e.preventDefault();
    navigate('register');
  } else if (e.target.id === 'showLogin') {
    e.preventDefault();
    navigate('login');
  }
});
