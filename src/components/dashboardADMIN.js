export async function renderAdminDashboard(container) {
    const token = localStorage.getItem('token');
  
    // Verificar si el token está presente
    if (!token) {
      window.location.href = "/login.html";  // Redirigir al login si no hay token
      return;
    }
  
    // HTML para la vista del Dashboard
    container.innerHTML = `
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Dashboard Admin</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Perfil</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Más opciones
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Configuración</a></li>
                  <li><a class="dropdown-item" href="#">Ayuda</a></li>
                  <li><a class="dropdown-item" id="logoutBtn" href="#">Cerrar sesión</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Contenido del Dashboard Admin -->
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 text-center">
            <h1>Bienvenido al Dashboard de Admin</h1>
            <p class="mt-3">Aquí puedes ver el seguimiento de los estudiantes matriculados.</p>
            
            <!-- Tabla de estudiantes matriculados -->
            <h3 class="mt-5">Seguimiento de Estudiantes Matriculados</h3>
            <table class="table table-bordered mt-3">
              <thead class="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Correo Electrónico</th>
                  <th>Estado de Matrícula</th>
                  <th>Fecha de Matrícula</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody id="studentTableBody">
                <!-- Aquí se llenarán los datos de los estudiantes matriculados -->
                <!-- Los datos se agregarán dinámicamente -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  
    // Event listener para cerrar sesión desde el navbar
    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('token');
      window.location.href = "/login.html";  // Redirigir a la página de login
    });
  
    // Obtener los datos de estudiantes desde la API
    try {
      const response = await fetch('https://api-skolmi.onrender.com/v1/estudiantes', {
        headers: { 'Authorization': `Bearer ${token}` }  // Autenticación con el token
      });
  
      if (response.ok) {
        const data = await response.json();  // Suponiendo que la respuesta tiene una lista de estudiantes
        const studentTableBody = document.getElementById('studentTableBody');
        studentTableBody.innerHTML = '';  // Limpiar la tabla antes de llenarla
  
        // Recorrer la lista de estudiantes y agregar filas a la tabla
        data.estudiantes.forEach((student, index) => {
          studentTableBody.innerHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${student.nombre}</td>
              <td>${student.correo}</td>
              <td>${student.estado_matricula ? 'Matriculado' : 'No Matriculado'}</td>
              <td>${new Date(student.fecha_matricula).toLocaleDateString()}</td>
              <td>
                <button class="btn btn-info btn-sm" onclick="verDetalles(${student.id_usuario})">Ver Detalles</button>
              </td>
            </tr>
          `;
        });
      } else {
        alert('No se pudieron cargar los datos de los estudiantes');
      }
    } catch (error) {
      console.error('Error al obtener los datos de los estudiantes:', error);
      alert('Hubo un problema al cargar los datos. Intenta más tarde.');
    }
  }
  
  // Función para ver los detalles de un estudiante (puedes implementar la lógica para este caso)
  function verDetalles(idUsuario) {
    alert(`Ver detalles de estudiante con ID: ${idUsuario}`);
    // Aquí se podría redirigir a una página de detalles o abrir un modal
  }
  