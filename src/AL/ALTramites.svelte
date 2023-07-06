<script>
// @ts-nocheck

    import NavAlumnos from "./NavAlumnos.svelte";
    let posA = 2;
    let Tramites = [
        {Titulo:'Historial Academico',Fecha:'Fecha Inicio 22/06/23',Costo:'$150',Estado:'Estado: '},
        {Titulo:'Constancia de estudio',Fecha:'Fecha Inicio 22/06/23',Costo:'$350',Estado:'Estado: '}
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
                        >Estado de tramites</button>
                </li>
                <li class="nav-item">
                    <button 
                        class="nav-link link-dark {posA == 2 ? 'active' : ''}"
                        on:click={()=>posA=2}
                        >Informacion de tramites</button>
                </li>
            </ul>
        </div>

        <div class="card-body">

            {#if posA==1}
                {#each Tramites as tramites}
                <ul class="list-group list-group-item-warning">
                    <button class="list-group-item list-group-item-action list-group-item-info">
                        <div class="d-flex w-100 justify-content-between">
    
                            <small></small>
                        </div>
                        <h5 class="card-title">{tramites.Titulo}</h5>
                        <p class="mb-1">{tramites.Fecha}</p>
                        <small>{tramites.Estado}
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Pasar a recojer a cajas</div>
                        </div></small>
                    </button>
                </ul>
                <br>
            {/each}
                {:else}

                <!-- Cartas -->
                    <div class="row row-cols-1 row-cols-md-3 g-4" style="margin-bottom: 2.5rem;">
                        <!-- Extraordinario -->
                        <div class="col">
                            <div class="card">
                                <img data-bs-toggle="modal" data-bs-target="#Mod_Extra" src="/img/Alumnos/ext.png" class="card-img-top" alt="...">
                            </div>
                        </div>

                        <!-- Constancia e Historial -->
                        <div class="col">
                            <div class="card">
                                <img src="/img/Alumnos/ceh.png" class="card-img-top" alt="...">
                            </div>
                        </div>

                        <!-- Baja Temporal -->
                        <div class="col">
                            <div class="card">
                                <img src="/img/Alumnos/bjt.png" class="card-img-top" alt="...">
                            </div>
                        </div>
                    </div>
                {/if}
            
                                            <!-- Modales -->
                <!-- Modal Extraordinarios-->
                <div class="modal fade" id="Mod_Extra" tabindex="-1" aria-labelledby="Mod_ExtraLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="Mod_ExtraLabel">Informacion para el Extraordinario</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h4>Información general</h4>
                                <p>Aqui estara toda la informacion que necesita el alumno para poder presentar un examen extraordinario</p>
                                <h5>Requisitos</h5>
                                <p>Pago de derecho de extraordinario</p>
                                <p>haber cursado la materia</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>


</body>

<style>

    .card{ 
        color: black;
        margin-left: 2.5rem;
        margin-right: 2.5rem;
        margin-top: 1rem;
        margin-bottom: 2.5rem;
        border-style: groove;
        border-color: black;
    }
</style>