// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/main.css';
// import { renderLogin } from './components/login.js';
// import { renderRegister } from './components/register.js';
// import { renderDashboard } from './components/dashboard.js';
// import { renderAdminDashboard } from './components/dashboardADMIN.js';
// import { renderStudentEnrollment } from './components/matricula.js';
// import { renderMatricula } from './components/matriculacion.js';
// import { renderHome } from './components/home.js';

// const appContainer = document.getElementById('app');

// // Función para obtener el valor del token desde localStorage
// function getToken() {
//   return localStorage.getItem('token');  // Obtiene el token desde localStorage
// }

// // Función para verificar si el usuario está autenticado
// function isAuthenticated() {
//   const token = getToken();  // Busca el token en localStorage
//   console.log(token);  // Para depuración, muestra el token
//   return token ? true : false;  // Si el token está presente, el usuario está autenticado
// }

// // Manejo de navegación
// export function navigate(view) {
//   appContainer.innerHTML = ''; // Limpiar el contenedor

//   // Renderiza la vista según la navegación
//   if (view === 'login') {
//     renderLogin(appContainer);
//   } else if (view === 'register') {
//     renderRegister(appContainer);
//   } else if (view === 'dashboard') {
//     // Si está autenticado, renderiza el dashboard
//     if (isAuthenticated()) {
//       renderDashboard(appContainer);
//     } else {
//       alert('No estás autenticado. Redirigiendo al login...');
//       navigate('login');
//     }
//   } else if (view === 'dashboardADMIN') {
//     // Si está autenticado, renderiza el dashboard ADMIN
//     if (isAuthenticated()) {
//       renderAdminDashboard(appContainer);
//     } else {
//       alert('No estás autenticado. Redirigiendo al login...');
//       navigate('login');
//     }
//   } else if (view === 'matricula') {
//     // Si está autenticado, renderiza la matrícula
//     if (isAuthenticated()) {
//       renderStudentEnrollment(appContainer);
//     } else {
//       alert('No estás autenticado. Redirigiendo al login...');
//       navigate('login');
//     }
//   } else if (view === 'matriculacion') {
//     if (isAuthenticated()) {
//       renderMatricula(appContainer);
//     } else {
//       alert('No estás autenticado. Redirigiendo al login...');
//       navigate('login');
//     }
//   } else {
//     // Renderiza la vista inicial (home)
//     renderHome(appContainer);
//   }
// }

// // Render inicial con Home (o la vista que prefieras)
// navigate('home'); // Vista inicial

// // Eventos de navegación
// document.addEventListener('click', (e) => {
//   if (e.target.id === 'showRegister') {
//     e.preventDefault();
//     navigate('register');
//   } else if (e.target.id === 'navbarLogin') {
//     e.preventDefault();
//     navigate('login');
//   } else if (e.target.id === 'showDashboard') {
//     e.preventDefault();
//     navigate('dashboard');
//   } else if (e.target.id === 'showCourse') {
//     e.preventDefault();
//     navigate('matricula');
//   } else if (e.target.id === 'showHome') {
//     e.preventDefault();
//     navigate('home');
//   }
//   else if (e.target.id === 'showMatricula') {
//     e.preventDefault();
//     navigate('matriculacion');
//   }
// });
// navigation.js
// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
// import { initApp } from './navigation.js';
import { initApp } from './navegacion';

// Inicializar la aplicación
initApp();