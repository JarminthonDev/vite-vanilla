import { getUserInfo, navigate, validate } from "../navegacion";

export function renderLogin(container) {
  container.innerHTML = `
    <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div class="card shadow-lg p-4" style="max-width: 400px; width: 100%; border-radius: 10px;">
        <form id="loginForm">
          <div class="text-center mb-4">
            <img src="../sources/descarga.png" alt="Login Icon" class="img-fluid rounded-circle mb-3" style="width: 100px; height: 100px;">
            <h3 class="mb-3">Iniciar Sesión</h3>
          </div>

          <!-- Email -->
          <div class="mb-3">
            <label for="loginEmail" class="form-label">Correo Electrónico</label>
            <input type="email" id="loginEmail" class="form-control" placeholder="Ingresa tu correo" required>
          </div>

          <!-- Password -->
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Contraseña</label>
            <input type="password" id="loginPassword" class="form-control" placeholder="Ingresa tu contraseña" required>
          </div>

          <!-- Submit Button -->
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-lg">Ingresar</button>
          </div>

          <!-- Register Link -->
          <p class="mt-3 text-center">
            <a href="#" id="showRegister" class="text-decoration-none">¿No tienes cuenta? Regístrate</a>
          </p>
        </form>
      </div>
    </div>
  `;

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const correo = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
      // Realiza la solicitud de login
      const response = await fetch('https://api-skolmi.onrender.com/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, password }),
        credentials: 'include'
      });
    
      if (response.ok) {
        const data = await response.json();        
        // Guarda el token en localStorage
        localStorage.setItem('token', data.token);  
    
        // Asegúrate de que getUserInfo() esté implementada correctamente
        const userInfo = getUserInfo();  // Deberías asegurarte que esta función decodifique el token correctamente
    
        console.log(userInfo);
    
        if (data.token) {
          // Redirigir según el rol
          if (userInfo.rol === 0) {
            navigate('dashboard');  // Admin Dashboard
          } else if (userInfo.rol === 1) {            
            if(validate(userInfo.userId)){
              console.log(userInfo.userId);
              navigate('academicPlataform')
            }else{
              navigate('matricula')
            }            
          } else {
            // Si el rol no es 0 ni 1, redirige a la página de matrícula
            navigate('educacionVirtual');
          }
        } else {
          throw new Error('Error al decodificar el token.');
        }
      } else {
        const error = await response.json();
        alert(`Error en el login: ${error.message}`);
      }
    } catch (error) {
      console.log(error);
      alert('Hubo un problema con el servidor. Intenta más tarde.');
    }
  });
}
