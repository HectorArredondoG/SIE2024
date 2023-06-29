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
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                {#if posA==1}
                {#each Tramites as tramites}
                <ul class="list-group list-group-item-warning">
                    <button class="list-group-item list-group-item-action list-group-item-info">
                        <div class="d-flex w-100 justify-content-between">
    
                            <small>{tramites.Costo}</small>
                        </div>
                        <p class="mb-1">{tramites.Fecha}</p>
                        <small>{tramites.Estado}
                            <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Pasar a recojer a cajas</div>
                        </div></small>
                    </button>
                </ul>
            {/each}
                {:else}
                    <div class="row row-cols-1 row-cols-md-3 g-4" style="margin-bottom: 2.5rem;">

                        <div class="col">
                            <div class="card h-100">
                                <img src="..." class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Extraordinarios</h5>
                                    <p class="card-text">Consulta la informacion necesaria para poder registrarte a un Examen Extraordinario</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="..." class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Constancia de estudios e Historial Academico</h5>
                                    <p class="card-text">Consulta como puedes tramitar tu Constancia de estudios y tu historial academico</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="..." class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Baja Temporal</h5>
                                    <p class="card-text">Consulta como puedes tramites una baja temporal.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            

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