import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { renderLogin } from './components/login.js';
import { renderRegister } from './components/register.js';
import { renderDashboard } from './components/dashboard.js';
import { renderAdminDashboard } from './components/dashboardADMIN.js';
import { renderStudentEnrollment } from './components/matricula.js';

const appContainer = document.getElementById('app');

// Manejo de navegación
function navigate(view) {
  appContainer.innerHTML = '';  // Limpiar el contenedor antes de mostrar la vista
  if (view === 'login') {
    renderLogin(appContainer);
  } else if (view === 'register') {
    renderRegister(appContainer);
  } else if (view === 'dashboard') {
    renderDashboard(appContainer);  // Vista de dashboard
  } else if (view === 'dashboardADMIN') {
    renderAdminDashboard(appContainer);
  } else if (view === 'matricula') {
    renderStudentEnrollment(appContainer);
  }
}

// Añadir un token falso temporalmente para el diseño
localStorage.setItem('token', 'fake-token'); // Esto simula que el usuario está autenticado

// Render inicial con Dashboard
navigate('matricula');

// Eventos de navegación
document.addEventListener('click', (e) => {
  if (e.target.id === 'showRegister') {
    e.preventDefault();
    navigate('register');
  } else if (e.target.id === 'showLogin' || e.target.id === 'navbarLogin') {
    e.preventDefault();
    
    navigate('login'); 
  } else if (e.target.id === 'showDashboard') {
    e.preventDefault();
    navigate('dashboard');
  }
});


// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/main.css';
// import { renderLogin } from './components/login.js';
// import { renderRegister } from './components/register.js';
// import { renderDashboard } from './components/dashboard.js';

// const appContainer = document.getElementById('app');

// // Función para cambiar las vistas
// function navigate(view) {
//   appContainer.innerHTML = '';  // Limpiar el contenedor antes de mostrar la vista
//   switch (view) {
//     case 'login':
//       renderLogin(appContainer);
//       break;
//     case 'register':
//       renderRegister(appContainer);
//       break;
//     case 'dashboard':
//       renderDashboard(appContainer);  // Vista de dashboard
//       break;
//     default:
//       renderLogin(appContainer);  // Redirigir a login si la vista no es válida
//       break;
//   }
// }

// // Render inicial (dependiendo si ya hay un token guardado o no)
// const token = localStorage.getItem('token');
// if (token) {
//   navigate('dashboard'); // Si el token existe, redirige al dashboard
// } else {
//   navigate('login');  // Si no hay token, muestra la vista de login
// }

// // Eventos de navegación (maneja los clics de los enlaces)
// document.addEventListener('click', (e) => {
//   // Mostrar registro al hacer clic en "Regístrate"
//   if (e.target.id === 'showRegister') {
//     e.preventDefault();
//     navigate('register');
//   }

//   // Mostrar login al hacer clic en "Iniciar sesión" (en la vista de registro)
//   else if (e.target.id === 'showLogin') {
//     e.preventDefault();
//     navigate('login');
//   }

//   // Mostrar dashboard al hacer clic en el menú de navegación
//   else if (e.target.id === 'showDashboard') {
//     e.preventDefault();
//     navigate('dashboard');
//   }
// });
