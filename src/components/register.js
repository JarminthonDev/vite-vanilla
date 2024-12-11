import '../styles/register.css';

export function renderRegister(container) {
  container.innerHTML = `
    <div class="form-wrapper">
      <form id="registerForm" class="p-4 bg-dark text-white rounded shadow">
        <div class="text-center mb-4">
          <img src="../sources/descarga.png" alt="Register Icon" class="img-fluid rounded-circle">
          <h2 class="mt-3 neon-text">Registrarse</h2>
        </div>
        <div class="mb-3">
          <label for="registerName" class="form-label">Nombre</label>
          <input type="text" id="registerName" class="form-control" placeholder="Ingresa tu nombre" required>
        </div>
        <div class="mb-3">
          <label for="registerEmail" class="form-label">Correo Electrónico</label>
          <input type="email" id="registerEmail" class="form-control" placeholder="Ingresa tu correo" required>
        </div>
        <div class="mb-3">
          <label for="registerPassword" class="form-label">Contraseña</label>
          <input type="password" id="registerPassword" class="form-control" placeholder="Crea una contraseña" required>
        </div>
        <button type="submit" class="btn btn-warning w-100">Registrarse</button>
        <p class="mt-3 text-center">
          <a href="#" id="showLogin" class="text-decoration-none neon-text">¿Ya tienes cuenta? Inicia sesión</a>
        </p>
      </form>
    </div>
  `;

  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('registerName').value;
    const correo = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    console.log(nombre);
    
    try {
      const response = await fetch('https://api-skolmi.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, correo, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        // Opcional: redirigir al login
      } else {
        const error = await response.json();
        console.log(error);        
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
        alert(error)
      alert('Hubo un problema con el servidor. Intenta más tarde.');
    }
  });
}