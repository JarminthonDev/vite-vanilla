import '../styles/login.css';

export function renderLogin(container) {
  container.innerHTML = `
    <div class="form-wrapper">
    <div class = "d-flex col justify-content-center align-items-center">
      <form id="loginForm" class="p-4 bg-dark text-white rounded shadow">
        <div class="text-center mb-4">
          <img src="../sources/descarga.png" alt="Login Icon" class="img-fluid rounded-circle">
          <h2 class="mt-3 neon-text">Iniciar Sesión</h2>
        </div>
        <div class="mb-3">
          <label for="loginEmail" class="form-label">Correo Electrónico</label>
          <input type="email" id="loginEmail" class="form-control" placeholder="Ingresa tu correo" required>
        </div>
        <div class="mb-3">
          <label for="loginPassword" class="form-label">Contraseña</label>
          <input type="password" id="loginPassword" class="form-control" placeholder="Ingresa tu contraseña" required>
        </div>
        <button type="submit" class="btn btn-warning w-100">Ingresar</button>
        <p class="mt-3 text-center">
          <a href="#" id="showRegister" class="text-decoration-none neon-text">¿No tienes cuenta? Regístrate</a>
        </p>
      </form>
      </div>
      
      <div >
      </div>
      </div>
      `;
    //   <img class = "col image-login " src="../sources/custom.jpg" alt="" srcset="">

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      try {
        const response = await fetch('https://api-skolmi.onrender.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          alert(`Bienvenido ${data.user.name}!`);
          // Aquí puedes guardar el token o redirigir al usuario
          localStorage.setItem('token', data.token);
        } else {
          const error = await response.json();
          alert(`Error: ${error.message}`);
        }
      } catch (error) {
        alert('Hubo un problema con el servidor. Intenta más tarde.');
      }
    });
  }
  
