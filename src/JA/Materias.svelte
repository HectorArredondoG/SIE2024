<main>
    <div class="container">
    
    <div class="dropdown">
        <button class="btn btn-sem dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Semestres
        </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="pr">Primer</a></li>
        <!-- <li><a class="dropdown-item" href="se">Segundo</a></li> -->
        <li><a class="dropdown-item" href="te">Tercero</a></li>
        <!-- <li><a class="dropdown-item" href="cu">Cuarto</a></li> -->
        <li><a class="dropdown-item" href="qu">Quinto</a></li>
        <!-- <li><a class="dropdown-item" href="se">Sexto</a></li> -->
        <li><a class="dropdown-item" href="sep">Septimo</a></li>
        <!-- <li><a class="dropdown-item" href="oc">Octavo</a></li> -->
        <li><a class="dropdown-item" href="no">Noveno</a></li>
        <!-- <li><a class="dropdown-item" href="de">Decimo</a></li> -->
        </ul>
    </div>

    <div>
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col" class="th1"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">Todo</th>
            <th scope="col" class="th1">Materias</th>
            <th scope="col" class="th1">Eje</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr>
            <th class="th1"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
            <td class="td1">Laboratorio Introductorio a la Restauración</td>       
            <td class="td1">Teórico-Metodólogico</td> 
            </tr>
            <tr>
            <th class="th1" scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
            <td class="td1">Metodologías y documentación para la Conservación-Restauración</td>
            <td class="td1">Instrumentación Metodólogica Profesional</td> 
    
            </tr>
            <tr>
            <th class="th1" scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
            <td class="td1">Introducción a las teorías y métodos de las ciencias sociales vinculadas a la Conservación-Restauración</td>
            <td class="td1">Fundamentos Científicos-Sociales</td> 
            </tr>
            <tr>
            <th class="th1" scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
            <td class="td1">Ciencias básicas</td>
            <td class="td1">Fundamentos Científicos-Experimentales</td> 
            </tr>
            <tr>
            <th class="th1" scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
            <td class="td1">Fundamentos del color</td>
            <td class="td1" rowspan="2">Mediación Instrumental</td> 
            </tr>
            <tr>
            <th class="th1" scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
            <td class="td1">Recursos para la representación gráfica</td>
            </tr>
        </tbody>
        </table>

        <!-- Editar -->
        <div class="row">
        <div class="col-8 gap-2 d-flex justify-content-start">

            <!-- Button editar -->
            <button type="button" class="btn btn-pencil" data-bs-toggle="modal" data-bs-target="#editarMateria"><i class="bi bi-pencil"></i>
            Editar
            </button>
            <!-- Modal 1-->
            <div class="modal fade" id="editarMateria" tabindex="-1" aria-labelledby="editarMateriaLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                <div class="modal-header modal1">
                    <h1 class="modal-title fs-5" id="editarMateriaLabel">EDITAR MATERIA</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Contenido del modal editar -->
                    <form class="alinear">
                    <div class="col-12 esp">
                    <div class="input-group">
                        <div class="input-group-text">Nombre materia</div>
                        <input type="text" class="form-control" id="autoSizingInputGroup">
                    </div>
                    </div>

                    <div class="col-12 esp">
                    <div class="input-group">
                        <div class="input-group-text">Eje</div>
                        <select class="form-select" id="inlineFormSelectPref">
                        <option selected placeholder="Seleccionar ...">Elegir ...</option>
                        <option value="1">Teórico-Metodólogico</option>
                        <option value="2">Instrumentación metodólogica profesional</option>
                        <option value="3">Fundamentos Científicos-Sociales</option>
                        <option value="3">Fundamentos Científicos-Experimentales</option>
                        <option value="3">Mediación Instrumental</option>
                        </select>
                    </div>
                    </div>

                    <div class="col-12 esp">
                    <div class="input-group">
                        <div class="input-group-text">Semestre/Ciclo</div>
                        <select class="form-select"   id="inlineFormSelectPref">
                        <option selected>Elegir ...</option>
                        <option value="1">1° Semestre/1° ciclo</option>
                        <option value="2">2° Semestre/1° ciclo</option>
                        <option value="3">3° Semestre/1° ciclo</option>
                        <option value="3">4° Semestre/2° ciclo</option>
                        <option value="3">5° Semestre/2° ciclo</option>
                        <option value="3">6° Semestre/2° ciclo</option>
                        <option value="3">7° Semestre/2° ciclo</option>
                        <option value="3">8° Semestre/3° ciclo</option>
                        <option value="3">9° Semestre/3° ciclo</option>
                        <option value="3">10° Semestre/3° ciclo</option>
                        </select>
                    </div>
                    </div>

                    <div class="col-12 esp">
                    <div class="input-group">
                        <div class="input-group-text">Categoría</div>
                        <select class="form-select" id="inlineFormSelectPref">
                        <option selected >Elegir ...</option>
                        <option value="1">Curso</option>
                        <option value="3">Módulo</option>
                        <option value="3">Módulo de 1 año</option>
                        <option value="2">Seminario taller</option>
                        </select>
                    </div>
                    </div>
                    
                    <div class="col-12 esp">
                    <div class="input-group">
                        <div class="input-group-text">Matería seriada</div>
                        <select class="form-select" id="inlineFormSelectPref">
                        <option selected >Elegir ...</option>
                        <option value="1">Sí</option>
                        <option value="3">No</option>
                        </select>
                    </div>
                    </div>

                    
                    
                </form>
                </div>

                <div class="modal-footer modal1">
                    <button type="button" class="btn btn-guardar" on:click={edit}>Guardar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
                </div>
            </div>
            </div>
            
            <!-- Boton Agregar -->
                <button type="button" class="btn btn-circle" data-bs-toggle="modal" data-bs-target="#editarMateria"><i class="bi bi-plus-circle"></i>
                Agregar
                </button>
                <!-- Modal 1-->
                <div class="modal fade" id="editarMateria" tabindex="-1" aria-labelledby="editarMateriaLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header modal1">
                        <h1 class="modal-title fs-5" id="editarMateriaLabel">AGREGAR MATERIA</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Contenido del modal editar -->
                        <form class="alinear">
                        <div class="col-12 esp">
                        <div class="input-group">
                            <div class="input-group-text">Nombre matería</div>
                            <input type="text" class="form-control" id="autoSizingInputGroup">
                        </div>
                        </div>
    
                        <div class="col-12 esp">
                        <div class="input-group">
                            <div class="input-group-text">Eje</div>
                            <select class="form-select" id="inlineFormSelectPref">
                            <option selected placeholder="Seleccionar ...">Elegir ...</option>
                            <option value="1">Teórico-Metodólogico</option>
                            <option value="2">Instrumentación metodólogica profesional</option>
                            <option value="3">Fundamentos Científicos-Sociales</option>
                            <option value="3">Fundamentos Científicos-Experimentales</option>
                            <option value="3">Mediación Instrumental</option>
                            </select>
                        </div>
                        </div>
    
                        <div class="col-12 esp">
                        <div class="input-group">
                            <div class="input-group-text">Semestre/Ciclo</div>
                            <select class="form-select"   id="inlineFormSelectPref">
                            <option selected>Elegir ...</option>
                            <option value="1">1° Semestre/1° ciclo</option>
                            <option value="2">2° Semestre/1° ciclo</option>
                            <option value="3">3° Semestre/1° ciclo</option>
                            <option value="3">4° Semestre/2° ciclo</option>
                            <option value="3">5° Semestre/2° ciclo</option>
                            <option value="3">6° Semestre/2° ciclo</option>
                            <option value="3">7° Semestre/2° ciclo</option>
                            <option value="3">8° Semestre/3° ciclo</option>
                            <option value="3">9° Semestre/3° ciclo</option>
                            <option value="3">10° Semestre/3° ciclo</option>
                            </select>
                        </div>
                        </div>
    
                        <div class="col-12 esp">
                        <div class="input-group">
                            <div class="input-group-text">Categoría</div>
                            <select class="form-select" id="inlineFormSelectPref">
                            <option selected >Elegir ...</option>
                            <option value="1">Curso</option>
                            <option value="3">Módulo</option>
                            <option value="3">Módulo de 1 año</option>
                            <option value="2">Seminario taller</option>
                            </select>
                        </div>
                        </div>
                        
                        <div class="col-12 esp">
                        <div class="input-group">
                            <div class="input-group-text">Matería seriada</div>
                            <select class="form-select" id="inlineFormSelectPref">
                            <option selected >Elegir ...</option>
                            <option value="1">Sí</option>
                            <option value="3">No</option>
                            </select>
                        </div>
                        </div>
    
                        
                        
                    </form>
                    </div>

                    <div class="modal-footer modal1">
                        <button type="button" class="btn btn-guardar" on:click={edit}>Guardar</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                    </div>
                </div>
                </div>
                <!-- Boton eliminar -->
                <button class="btn btn-trash" type="button" on:click={elim}><i class="bi bi-trash"></i>Eliminar</button>
        </div>

        <!-- Asignar profesor-->
        <div class="col-4 d-grid gap-2 d-md-flex justify-content-md-end">
            <!-- Boton asignar profesores -->
            <button type="button" class="btn btn-prof" data-bs-toggle="modal" data-bs-target="#asignarProfesor">
            Asignar profesor
            </button>
            <!--Modal 2-->
            <div class="modal fade" id="asignarProfesor" tabindex="-1" aria-labelledby="asignarProfesorLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                <div class="modal-header modal2">
                    <h1 class="modal-title fs-5" id="asignarProfesorLabel">PROFESORES</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body modal2">
                    <!-- Contenido de profesores-->
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Grado académico" aria-label="Grado académico" aria-describedby="button-addon2">
                    <button class="btn  btn-buscar" type="button" id="button-addon2">Buscar</button>
                    </div>
                    <table class="table2 table table-hover">
                    <thead>
                    <tr>
                        <th scope="col" class="th2">Seleccionar</th>
                        <th scope="col" class="th2">Nombre del profesor</th>
                        <th scope="col" class="th2">Grado académico</th>
                    </tr>
                    </thead >
                    <tbody class="table-group-divider">
                    <tr>
                        <th scope="row" class="th2"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                        <td class="td2">Alma Paulina García Murillo</td> 
                        <td class="td2">Licenciatura</td>   
                    </tr>
                    <tr>
                        <th scope="row" class="th2"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                        <td class="td2">Álvaro Sabtillán Bueyes</td>
                        <td class="td2">Licenciatura</td>  
                    </tr>
                    <tr>
                        <th scope="row" class="th2"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                        <td class="td2">Ana Julia Poncelis Gutiérrez</td>
                        <td class="td2">Licenciatura</td>  
                    </tr>
                    <tr>
                        <th scope="row" class="th2"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                        <td class="td2">Ángel Ernesto García Abajo</td>
                        <td class="td2">Licenciatura</td>  
                    </tr>
                    <tr>
                        <th scope="row" class="th2"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                        <td class="td2">Camila Pascal García </td>
                        <td class="td2">Licenciatura</td>  
                    </tr>
                    <tr>
                        <th scope="row" class="th2"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                        <td class="td2">Claudia María Coronado García</td>
                        <td class="td2">Licenciatura</td>  
                    </tr>
                    </tbody>
                </table>
                </div>
                <div class="modal-footer modal2">
                    <button type="button" class="btn btn-asignar btn-success" on:click={edit}>Asignar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
                </div>
            </div>
            </div>
            <button on:click={()=> push('/Jefatura')} class="btn btn-secondary" type="button">Cerrar</button>
        </div>
        </div>
            
    </div>  
    </div>
</main>

<script>
    import Swal from "sweetalert2"
    import{push} from 'svelte-spa-router'

    function edit(){Swal.fire({
    title: '¿Deseas guardar los cambios?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonColor: '#31B562',
    cancelButtonColor: '#ED3127',
    confirmButtonText: 'Guardar',
    denyButtonText: 'No guardar',
}).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
    Swal.fire('Guardado', '', 'success')
    } else if (result.isDenied) {
    Swal.fire('No se guardo', '', 'error')
    }
})}

function elim(){Swal.fire({
    title: '¿Deseas eliminarlo?',
    text: "No se podra revertir esto",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#31B562',
    cancelButtonColor: '#ED3127',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
}).then((result) => {
    if (result.isConfirmed) {
    Swal.fire(
        'Eliminado',
        'Ha sido eliminado',
        'success')
    } else if (
      /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
    ) {
    Swal.fire(
        'Cancelado',
        'No se realizó ningún cambio',
        'error')
    }
})

}

</script>

<style>
    .th1, input{
    text-align: center;
    vertical-align: middle;
    }
    .btn-pencil,  .btn-circle, .btn-prof, .btn-buscar{
    background-color: #fccf00;
    color: black;
      /* background-color: rgb(255, 228, 105); */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18.72;
    }
    .btn-trash{
    background-color: #ff5950;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18.72;
    }
    .btn-guardar{
    background-color: #198754;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18.72;
    }
    i{
    margin-right: 3px;
    }
    .container{
    display: flex;
    }
    table, .dropdown{
    margin: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18.72;
    }
    .table-bordered{
    border: 5px;
    }
    .btn-sem{
    background-color: rgb(251, 125, 12);
    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-black);
    --bs-btn-border-radius: .5rem;
    --bs-btn-hover-color: var(--bs-white);
    }
    table{
    align-items: flex-start;
    justify-self: start;
    border: 1px; 
    width:auto; 
    height:20px;
    
    }
.esp{
    margin-top: 18px;
}
.alinear{
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.modal1, .modal2{
    border-color: rgb(251, 125, 12);
}
.td1{
    vertical-align: middle;
    text-align: center;
}
.table2{
    border: 1px; 
    width:90%; 
    height:20px;
    margin: 30px;
}
.th2, .td2{
    text-align: center;
}
.modal-title{
    font-size: 32px;
    font-family: 'Rubik', sans-serif;
    align-self: center;
}

</style>
