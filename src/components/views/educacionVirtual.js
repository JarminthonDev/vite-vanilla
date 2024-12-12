export default function renderEducacionVirtual() {
    document.getElementById("app").innerHTML = `
        <header class="bg-primary text-white text-center py-5">
            <h1>¿Quiénes somos?</h1>
            <p class="lead">Somos una institución dedicada a la educación virtual con más de 21 años de experiencia, brindando excelencia académica.</p>
        </header>

        <section class="container text-center my-5">
            <div class="row">
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title">21</h5>
                            <p class="card-text">Años de experiencia</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title">90+</h5>
                            <p class="card-text">Profesionales en educación</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title">2900+</h5>
                            <p class="card-text">Estudiantes graduados</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light py-5">
            <div class="container text-center">
                <h2 class="mb-4">Ventajas de la Educación Virtual</h2>
                <div class="row">
                    <div class="col-md-3">
                        <h5>Tiempo libre</h5>
                        <p>Flexibilidad para adaptar horarios a tus necesidades.</p>
                    </div>
                    <div class="col-md-3">
                        <h5>Metodología</h5>
                        <p>Clases diseñadas con herramientas dinámicas.</p>
                    </div>
                    <div class="col-md-3">
                        <h5>Orientación vocacional</h5>
                        <p>Asesoría para definir tu camino profesional.</p>
                    </div>
                    <div class="col-md-3">
                        <h5>Flexibilidad</h5>
                        <p>Estudia desde cualquier lugar y momento.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container text-center py-5">
            <h2 class="mb-4">Programas de Educación Virtual</h2>
            <div class="row">
                <div class="col-md-3">
                    <div class="card shadow">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Program Image">
                        <div class="card-body">
                            <h5 class="card-title">Finanzas</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Program Image">
                        <div class="card-body">
                            <h5 class="card-title">Marketing</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Program Image">
                        <div class="card-body">
                            <h5 class="card-title">Desarrollo</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Program Image">
                        <div class="card-body">
                            <h5 class="card-title">Diseño</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
