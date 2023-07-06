<script>
    import NavAlumnos from "./NavAlumnos.svelte";
    let posA = 1;
    let posB = 0;
    let Titulos = [     {titulo:'', 
                            descripcion:''},
                        {titulo:'Aqui podras consultar tu horario del primer semestre de la: ', 
                            descripcion:'Licenciatura en restauración'},
                        {titulo:'Aqui podras revisar calificaciones del primer semestre de la: ', 
                            descripcion:'Licenciatura en restauración'},
                        {titulo:'Aqui podras consultar tu historial academico de tu estancia en el ENCRyM', 
                            descripcion:''}
                    ]
    let Horario = [    
                        {Materia:'Laboratorio Introductorio a la Restauración', 
                            Calificacion:10},
                        {Materia:'Metodologías y documentación para la Conservación',
                            Calificacion:7},
                        {Materia:'Introducción a las teorías y métodos de las ciencias sociales vinculadas a la conservación',
                            Calificacion:8},
                        {Materia:'Ciencia básica',
                            Calificacion:5},
                        {Materia:'Fundamentos del color',
                            Calificacion:10}
                    ]

</script>
<body>

    <NavAlumnos></NavAlumnos>

    <div class="card text-center">
        <div class="card-header" style="background-color: #FFDC40;">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <button 
                        class="nav-link link-dark {posA == 1 ? 'active' : ''}"
                        on:click={()=>posA=1}
                        >Horario</button>
                </li>
                <li class="nav-item">
                    <button 
                        class="nav-link link-dark {posA == 2 ? 'active' : ''}"
                        on:click={()=>posA=2}
                        >Calificaciones</button>
                </li>
                <li class="nav-item">
                    <button 
                        class="nav-link link-dark {posA == 3 ? 'active' : ''}"
                        on:click={()=>posA=3}
                        >Avance Curricular</button>
                </li>
            </ul>
        </div>

        <div class="card-body">
            <h5 class="card-title">{Titulos[posA].titulo}</h5>
            <p class="card-text">{Titulos[posA].descripcion}</p>
            {#if posA == 1}
            <div class="container">
                <table class="table table-bordered border-dark table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Horario</th>
                        <th scope="col">Lunes</th>
                        <th scope="col">Martes</th>
                        <th scope="col">Miercoles</th>
                        <th scope="col">Jueves</th>
                        <th scope="col">Viernes</th>
                        </tr>
                    </thead>
        
                    <tbody>

                        <tr>
                            <th scope="row">7:00 - 9:00</th>
                            <th class="table-danger" colspan="1">Lab Introductorio Rest.
                                <p class="card-text">
                                    <small class="text-muted">Laboratorio de Restauracion-LAB</small>
                                </p>
                            </th>
                            <th class="table-vacia" colspan="2"></th>
                            <th class="table-danger" colspan="1">Lab Introductorio Rest.
                                <p class="card-text">
                                    <small class="text-muted">Laboratorio de Restauracion-LAB</small>
                                </p>
                            </th>
                            <th class="table-verde" colspan="1">Fundamentos del color
                                <p class="card-text">
                                    <small class="text-muted">Aula 12-MOD</small>
                                </p>
                            </th>
                        </tr>

                        <tr>
                            <th scope="row">9:00 - 11:00</th>
                            <th class="table-info" colspan="2">Int. teorías y métodos de las ciencias sociales. Restauracion
                                <p class="card-text">
                                    <small class="text-muted">Aula 12-CUR</small>
                                </p>
                            </th>
                            <th class="table-vacia" colspan="1"></th>
                            <th class="table-info" colspan="2">Int. teorías y métodos de las ciencias sociales. Restauracion
                                <p class="card-text">
                                    <small class="text-muted">Aula 12-CUR</small>
                                </p>
                            </th>
                        </tr>

                        <tr>
                            <th scope="row">11:00 - 13:00 </th>
                            <th class="table-vacia" colspan="1"></th>
                            <th class="table-amarilla"colspan="2">Metodologias y Doc. Restauracion 
                                <p class="card-text">
                                    <small class="text-muted">Aula 12-CUR</small>
                                </p>
                            </th>
                            <th class="table-vacia" colspan="1"></th>
                            <th class="table-violeta"colspan="1">Ciencia Basica
                                <p class="card-text">
                                    <small class="text-muted">Aula 12-CUR</small>
                                </p>
                            </th>
                        </tr>

                        <tr>
                            <th scope="row">13:00 - 15:00 </th>
                            <th class="table-violeta"colspan="1">Ciencia Basica
                                <p class="card-text">
                                    <small class="text-muted">Aula 12-CUR</small>
                                </p>
                            </th>
                            <th class="table-verde" colspan="1">Fundamentos del color
                                <p class="card-text">
                                    <small class="text-muted">Aula 12-MOD</small>
                                </p>
                            </th>
                            <th class="table-amarilla" colspan="2">Metodologias y Doc. Restauracion
                                <p class="card-text">
                                    <small class="text-muted">Aula 12-CUR</small>
                                </p>
                            </th>
                            <th class="table-vacia" colspan="1"></th>
                        </tr>

                        <tr>
                            <th scope="row">13:00 - 15:00 </th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                        </tr>

                        <tr>
                            <th scope="row">15:00 - 17:00 </th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                        </tr>

                        <tr>
                            <th scope="row">17:00 - 19:00 </th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                        </tr>

                    </tbody>
        
                </table>
            </div>
            {:else if  posA == 2}
            <div class="row">
                <div class="col-1"></div>
                <div class="col-1">
                    <div class="btn-group dropdown">
                        <button type="button" class="btn btn-secondary dropdown-toggle" style="background-color:#FBAB0C" data-bs-toggle="dropdown" aria-expanded="false">
                        Materia
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" style="background-color:#FBAB0C">
                            <li><button class="dropdown-item" on:click = { ()=> posB = 0 } >Laboratorio Introductorio a la Restauración</button></li>
                            <li><button class="dropdown-item" on:click = { ()=> posB = 1 } >Metodologías y documentación para la Conservación</button></li>
                            <li><button class="dropdown-item" on:click = { ()=> posB = 2 } >Introducción a las teorías y métodos de las ciencias sociales vinculadas a la conservación</button></li>
                            <li><button class="dropdown-item" on:click = { ()=> posB = 3 } >Ciencia básica</button></li>
                            <li><button class="dropdown-item" on:click = { ()=> posB = 4 }>Fundamentos del color</button></li>
                        </ul>
                    </div>
                </div>
                <div class="col-2"></div>
                <div class="col-6">
                    <div class="card text-bg-{ Horario[posB].Calificacion <= 5 ? 'danger' : 'success' } mb-3" style="max-width: 18rem;">
                        <div class="card-header">{ Horario[posB].Materia }</div>
                            <div class="card-body">
                            <h5 class="card-title">{ Horario[posB].Calificacion }</h5>
                            <p class="card-text">{ Horario[posB].Calificacion <= 5 ? 'No acreditaste 😭' : 'Acreditaste Satisfactoriamente' }</p>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="col-1">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-reporte" style="background-color:#dc3545" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Reporte
                    </button>
                    
                    <!-- Modal -->
                    <div 
                        class="modal fade" id="staticBackdrop" 
                            data-bs-backdrop="static" 
                                data-bs-keyboard="false" 
                                    tabindex="-1" 
                                        aria-labelledby="staticBackdropLabel" 
                                            aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Estas a punto de generar un Reporte</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1">
                                            <label class="form-check-label" for="inlineCheckbox1">Correccion de calificaciones</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="2">
                                            <label class="form-check-label" for="inlineCheckbox1">Aclaración de calificación</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <textarea class="form-control" placeholder="Motivo del Reporte" id="Reporte"></textarea>
                                            <label for="Reporte"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn btn-success">Mandar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-1"></div>
            </div>


            {:else if posA == 3 }
                <div class="row">
                    <div class="col-2 col2">
                        <div class="btn-group dropend">
                            <button type="button" class="btn btn-secondary dropdown-toggle" style="background-color:#FBAB0C" data-bs-toggle="dropdown" aria-expanded="false">
                            Ciclo
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" style="background-color:#FBAB0C">
                                <li><button class="dropdown-item" on:click = { ()=> posB = 0 } >1° Semestre Primavera-2023</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 1 } >2° Semestre Otoño-2023</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 2 } >3° Semestre Primavera 2024</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 3 } >4° Semestre Otoño-2024</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 4 } >5° Semestre Primavera 2025</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 5 } >6° Semestre Otoño-2025</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 6 } >7° Semestre Primavera-2026</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 7 } >8° Semestre Otoño 2026</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 8 } >9° Semestre Primavera-2027</button></li>
                                <li><button class="dropdown-item" on:click = { ()=> posB = 9 } >10° Semestre Otoño 2027</button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-10">
                        {#if posB==0}
                            <table class="table table-bordered border-dark">
                                <thead>
                                <tr>
                                    <th scope="col">Materia</th>
                                    <th scope="col" colspan="2">Calificacion</th>
                                    <th scope="col" colspan="2">Comentario</th>
                                </tr>
                                </thead>
                                <tbody class="align-baseline">
                                <tr>
                                    <th class="align-baseline" scope="row">Laboratorio Introductorio a la Restauración</th>
                                    <td colspan="2" style="background-color: greenyellow;">10</td>
                                    <td colspan="2">Acredito Satisfactoriamente</td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Metodologías y documentación para la Conservación</th>
                                    <td colspan="2" style="background-color: yellow;" >7</td>
                                    <td colspan="2">Acredito</td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Introducción a las teorías y métodos de las ciencias sociales vinculadas a la conservación</th>
                                    <td colspan="2" style="background-color: greenyellow;">8</td>
                                    <td colspan="2">Acredito Satisfactoriamente</td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Ciencia básica</th>
                                    <td colspan="2" style="background-color:orangered">5</td>
                                    <td colspan="2">No Acredito</td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Fundamentos del color</th>
                                    <td colspan="2" style="background-color: greenyellow;">10</td>
                                    <td colspan="2">Acredito Satisfactoriamente</td>
                                </tr>
                                </tbody>
                            </table>
                        {:else if posB==1}
                            <h1 class="Avance-Titulo">Se esta cursando el actual ciclo espere al fin de curso para poder consultar tus calificaciones</h1>
                            <table class="table table-bordered border-dark">
                                <thead>
                                <tr>
                                    <th scope="col">Materia</th>
                                    <th scope="col" colspan="2">Calificacion</th>
                                    <th scope="col" colspan="2">Comentario</th>
                                </tr>
                                </thead>
                                <tbody class="align-baseline">
                                <tr>
                                    <th class="align-baseline" scope="row">Restauración de Cerámica</th>
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Experimentación cerámica</th>
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Valoración y diagnóstico</th>
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Nociones conceptuales en las teorías de la restauración</th>
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Petrología</th>
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Fisicoquímica de la limpieza</th>
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <th class="align-baseline" scope="row">Recursos para la representación gráfica</th>
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                </tr>
                                </tbody>
                            </table>
                        {:else }
                            <h1 class="Avance-Titulo">Todavia no se ha cursado el ciclo</h1>
                        {/if}
                    </div>
                </div>
            {/if}
        </div>
    </div>

</body>

<style>

    .Avance-Titulo{
        color: red;
    }
    .col2{
        border-right-color: #FBAB0C;
        border-right-style: solid;
    }
    .btn-reporte{
        color: white;
        border-style:groove;
        border-color:black;
    }
    .table-vacia{
        background-color: black;
    }
    .table-violeta{
        background-color: rgb(241, 133, 241);
    }
    .table-verde{
        background-color: rgba(42, 211, 42, 0.531);
    }
    .table-amarilla{
        background-color: rgb(223, 233, 47);
    }
    .table-info, .table-danger{
        border-color: black;
    }
    .container{
        margin-top: 2rem;
    }
    .card{ 
        color: black;
        margin-left: 2.5rem;
        margin-right: 2.5rem;
        margin-top: 1rem;
        border-style: groove;
        border-color: black;
    }

</style>