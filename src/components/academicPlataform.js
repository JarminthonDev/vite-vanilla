// academicPlatform.js
export function renderAcademicPlatform(container) {
    container.innerHTML = `
      <div class="d-flex flex-row">
        <!-- Sidebar -->
        <nav class="bg-dark text-white p-3 vh-100" style="width: 250px;">
          <h4 class="text-center">Mi Plataforma</h4>
          <ul class="nav flex-column mt-4">
            <li class="nav-item mb-3">
              <a href="#" class="nav-link text-white">Inicio</a>
            </li>
            <li class="nav-item mb-3">
              <a href="#" class="nav-link text-white">Mis Cursos</a>
            </li>
            <li class="nav-item mb-3">
              <a href="#" class="nav-link text-white">Progreso</a>
            </li>
            <li class="nav-item mb-3">
              <a href="#" class="nav-link text-white">Configuración</a>
            </li>
          </ul>
        </nav>
  
        <!-- Main Content -->
        <div class="flex-grow-1">
          <!-- Navbar -->
          <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
            <a class="navbar-brand" href="#">Plataforma</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
              <ul class="navbar-nav me-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown">
                    Cursos
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="coursesDropdown">
                    <li><a class="dropdown-item" href="#">Curso 1</a></li>
                    <li><a class="dropdown-item" href="#">Curso 2</a></li>
                    <li><a class="dropdown-item" href="#">Curso 3</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Buscar cursos">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </nav>
  
          <!-- Courses Section -->
          <div class="p-4">
            <h3>Mis Cursos</h3>
            <div class="row">
              <div class="col-md-4 mb-4">
                <div class="card">
                  <img src="https://via.placeholder.com/150" class="card-img-top" alt="Curso 1">
                  <div class="card-body">
                    <h5 class="card-title">Curso 1</h5>
                    <p class="card-text">Descripción breve del curso.</p>
                    <button class="btn btn-primary">Acceder</button>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4">
                <div class="card">
                  <img src="https://via.placeholder.com/150" class="card-img-top" alt="Curso 2">
                  <div class="card-body">
                    <h5 class="card-title">Curso 2</h5>
                    <p class="card-text">Descripción breve del curso.</p>
                    <button class="btn btn-primary">Acceder</button>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4">
                <div class="card">
                  <img src="https://via.placeholder.com/150" class="card-img-top" alt="Curso 3">
                  <div class="card-body">
                    <h5 class="card-title">Curso 3</h5>
                    <p class="card-text">Descripción breve del curso.</p>
                    <button class="btn btn-primary">Acceder</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }