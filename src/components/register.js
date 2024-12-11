import '../styles/register.css';

export function renderRegister(container) {
  container.innerHTML = `
    <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div class="card shadow-lg p-4" style="max-width: 400px; width: 100%; border-radius: 10px;">
        <form id="registerForm">
          <div class="text-center mb-4">
            <img src="../sources/descarga.png" alt="Register Icon" class="img-fluid rounded-circle mb-3" style="width: 100px; height: 100px;">
            <h3 class="mb-3">Registrarse</h3>
          </div>

          <!-- Nombre -->
          <div class="mb-3">
            <label for="registerName" class="form-label">Nombre</label>
            <input type="text" id="registerName" class="form-control" placeholder="Ingresa tu nombre" required>
          </div>

          <!-- Correo Electrónico -->
          <div class="mb-3">
            <label for="registerEmail" class="form-label">Correo Electrónico</label>
            <input type="email" id="registerEmail" class="form-control" placeholder="Ingresa tu correo" required>
          </div>

          <!-- Contraseña -->
          <div class="mb-3">
            <label for="registerPassword" class="form-label">Contraseña</label>
            <input type="password" id="registerPassword" class="form-control" placeholder="Crea una contraseña" required>
          </div>

          <!-- Botón de Registro -->
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-warning btn-lg">Registrarse</button>
          </div>

          <!-- Enlace para Iniciar sesión -->
          <p class="mt-3 text-center">
            <a href="#" id="showLogin" class="text-decoration-none">¿Ya tienes cuenta? Inicia sesión</a>
          </p>
        </form>
      </div>
    </div>
  `;

  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('registerName').value;
    const correo = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
      const response = await fetch('https://api-skolmi.onrender.com/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, correo, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        // Opcional: redirigir al login
        window.location.href = '/login.html'; // O la URL de inicio de sesión correspondiente
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      alert('Hubo un problema con el servidor. Intenta más tarde.');
    }
  });
}
