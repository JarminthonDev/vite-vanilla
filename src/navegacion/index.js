// navigation.js
import { renderLogin } from '../components/login.js';
import { renderRegister } from '../components/register.js';
import { renderDashboard } from '../components/dashboardADMIN.js';
import { renderStudentEnrollment } from '../components/matricula.js';
import { renderMatricula } from '../components/matriculacion.js';
import { renderAcademicPlatform } from '../components/academicPlataform.js';
import renderEducacionVirtual from '../components/views/educacionVirtual.js';
import { renderHome } from '../components/home.js';


const appContainer = document.getElementById('app');

// Función para decodificar el token
function decodeToken(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

// Función para obtener información del usuario
export function getUserInfo() {
  const token = getToken();
  if (token) {
    const decodedToken = decodeToken(token);
    //console.log(decodedToken);
    
    return decodedToken ? {
      name: decodedToken.nombre || 'Usuario',
      rol: decodedToken.rol,
      userId: decodedToken.userId
    } : null;
  }
  return null;
}


// Función para obtener el token
function getToken() {
  return localStorage.getItem('token');
}

// Función para verificar si el usuario está autenticado
function isAuthenticated() {
  const token = getToken();
  return !!token;
}

// Función de navegación
function navigate(view) {
  appContainer.innerHTML = ''; // Limpiar el contenedor

  // Renderiza la vista según la navegación
  const userInfo = getUserInfo();

  if (view === 'login') {
    renderLogin(appContainer);
  } else if (view === 'register') {
    renderRegister(appContainer);
  } else if (view === 'dashboard') {
    if (isAuthenticated() && userInfo?.rol === 0) {
      renderDashboard(appContainer);
    } else {
      alert('Acceso denegado. No tienes permisos para ver esta página.');
      navigate('home');
    }
  } else if (view === 'matricula') {
    if (isAuthenticated()) {
      if(validate(userInfo.userId)){
        renderStudentEnrollment(appContainer);
      }else{
        navigate('matricula')
      }
    } else {
      alert('No estás autenticado. Redirigiendo al login...');
      navigate('login');
    }
  } else if (view === 'academicPlatform') {
    if (isAuthenticated()) {
      if(validate(userInfo.userId)){
        renderAcademicPlatform(appContainer);        
      }else{
        navigate('matricula')
      }
    } else {
      alert('No estás autenticado. Redirigiendo al login...');
      navigate('login');
    }
  }else if (view === 'educacionVirtual') { // NUEVA VISTA -------------
    renderEducacionVirtual(appContainer);
  }else if (view === 'matriculacion') {
    if (isAuthenticated()) {
      renderMatricula(appContainer);
    } else {
      alert('No estás autenticado. Redirigiendo al login...');
      navigate('login');
    }
  } else {
    renderHome(appContainer);
  }

  // Actualizar navbar
  updateNavbar();
}

// Función para actualizar la navbar
function updateNavbar() {
  const navbarContent = document.getElementById('navbarContent');
  const isLoggedIn = isAuthenticated();
  const userInfo = getUserInfo();

  // Limpiar contenido existente
  navbarContent.innerHTML = '';

  if (isLoggedIn && userInfo) {
    navbarContent.innerHTML = `
      <a href="#" id="showHome" class="text-gray-800 hover:text-blue-600 mr-4">Inicio</a>
      <a href="#" id="showCourse" class="text-gray-800 hover:text-blue-600 mr-4">Cursos</a>
      <div class="flex items-center space-x-4">
        <span class="text-gray-800 font-medium">Hola, ${userInfo.name}</span>
        <button id="logoutButton" class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Cerrar Sesión</button>
      </div>
    `;

    document.getElementById('logoutButton').addEventListener('click', () => {
      localStorage.removeItem('token');
      navigate('home');
    });
  } else {
    navbarContent.innerHTML = `
      <a href="#" id="showHome" class="text-gray-800 hover:text-blue-600">Inicio</a>
      <a href="#" id="showCourse" class="text-gray-800 hover:text-blue-600">Cursos</a>
      <a href="#" id="navbarLogin" class="text-gray-800 hover:text-blue-600 mr-4">Login</a>
      <button id="showRegister" class="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Sign up</button>
    `;
  }
}

// Configuración de eventos de navegación
function setupNavigationEvents() {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'showRegister') {
      e.preventDefault();
      navigate('register');
    } else if (e.target.id === 'navbarLogin') {
      e.preventDefault();
      navigate('login');
    } else if (e.target.id === 'showDashboard') {
      e.preventDefault();
      navigate('dashboard');
    } else if (e.target.id === 'showCourse') {
      e.preventDefault();
      navigate('matricula');
    } else if (e.target.id === 'showMatricula') {
      e.preventDefault();
      navigate('matriculacion');
    } else if (e.target.id === 'showHome') {
      e.preventDefault();
      navigate('home');
    }
  });
}

export const validate = async (userId)=>{
  try { 
    console.log(userId + ' desde funcion validate');
    const token = localStorage.getItem('token');
    // Realiza la solicitud GET para obtener los detalles del usuario
    const url = new URL(`https://api-skolmi.onrender.com/v1/user/users/${userId}`);
    
    const responseUser = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  // Asegúrate de enviar el token si es necesario
      },
      credentials: 'include'
    });
    const userData = await responseUser.json(); 
    
    console.log(userData[0].codigo);
                                              
    if (userData[0].codigo === null) {      
      return false
    } else {
      return true
    }
  } catch (error) {
    console.log('Error al obtener el usuario:', error);
  }
}
// Inicialización
function initApp() {
  const userInfo = getUserInfo();

  if (isAuthenticated()) {
    if (userInfo?.rol === 0) {
      // Rol de Administrador
      navigate('dashboard'); // Se asegura de que se llame el dashboard correcto
    } else {
        if (userInfo.rol == 1) {
            // Si el usuario está matriculado, carga la academicPlatform
            navigate('academicPlatform');
          } else {
            // Carga el dashboard o el formulario de matrícula
            navigate('matricula');
          }
    }
  } else {
    // Usuario no autenticado
    navigate('educacionVirtual');
  }

  setupNavigationEvents();
  updateNavbar();
}




// Exportar funciones necesarias
export { navigate, updateNavbar, initApp };
