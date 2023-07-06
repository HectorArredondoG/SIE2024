<script>
    import NavAlumnos from "./NavAlumnos.svelte";
    
    let posA = 1
    let Titulos=['','Adeudos en finanzas','Adeudos en Informatica','Adeudos en Biblioteca','Adeudos en Talleres' ]
    let Finanzas = [
                    {Adeudo:' Inscripcion', Motivo:'Se deben el concepto de inscripcion',Fecha:'fecha limite de pago en 5 dias',Costo:'$600'},
                    {Adeudo:' Extraordinario', Motivo:'Se debe la incripcion a un extraordinario',Fecha:'fecha limite de pago en 15 dias',Costo:'$1050'},
                    {Adeudo:' libro: Metodologias de restauracion', Motivo:'Se extravio un libro de la biblioteca',Fecha:'fecha limite de pago en 1 mes',Costo:'$3000'},
                    ]
    let Informatica = [
                    {Adeudo:' Cable VGA', Motivo:'Se presto cable VGA',Fecha:'Se prestó el dia 5/5/23',FechaLim:'Favor de entregarlo antes del 5/5/23'},
                    {Adeudo:' Laptop', Motivo:'Se presto Laptop',Fecha:'Se prestó el dia 5/5/23',FechaLim:'Favor de entregarlo antes del 5/5/23'},
                    {Adeudo:' Cable de Red', Motivo:'Se presto cable de red',Fecha:'Se prestó el dia 5/5/23',FechaLim:'Favor de entregarlo antes del 5/5/23'},
                    ]
    let Biblioteca = [
                    {Adeudo:' Restauracion Inmobiliaria', Motivo:'Se prestó Libro',Fecha:'Se prestó el dia 28/4/23',FechaLim:'Favor de entregarlo antes del 28/5/23'},
                    {Adeudo:' Restauracion Arqueologica', Motivo:'Se prestó Libro',Fecha:'Se prestó el dia 7/5/23',FechaLim:'Favor de entregarlo antes del 7/6/23'},
                    {Adeudo:' Historia de la conservacion', Motivo:'Se prestó Libro',Fecha:'Se prestó el dia 10/5/23',FechaLim:'Favor de entregarlo antes del 10/6/23'},
                    ]
    let Talleres = [
                    {Adeudo:'Hiplocorito de sodio',Motivo:'Se presto la sustancia al Alumno',Fecha:'Se presto el dia 13/06/23', FechaLim:'Favor de entregarlo antes del 13/06/23'}
    ]
// on:click={()=>posB=2
// {posB==2 ? 'active':''}
</script>


<body>
    
    <NavAlumnos></NavAlumnos>



    <div class="card text-center">

        <div class="card-header" style="background-color: #FFDC40;">
            <ul class="nav nav-tabs card-header-tabs">

					<!-- Finanzas -->
                <li class="nav-item">
                    <button
                        class="nav-link link-dark {posA==1 ? 'active':''}" 
                        on:click={()=>posA=1}>Finanzas
                    </button>
                </li>
					<!-- Informatica -->
                <li class="nav-item">
                    <button
                        
                        class="nav-link link-dark {posA==2 ? 'active':''}"
                        on:click={()=>posA=2}>Informatica
                    </button>
                </li>
					<!-- Biblioteca -->
                <li class="nav-item">
                    <button 
                        class="nav-link link-dark {posA==3 ? 'active':''}"
                        on:click={()=>posA=3}>Biblioteca
                    </button>
                </li>
                    <!-- Talleres -->
                <li class="nav-item">
                    <button 
                        class="nav-link link-dark {posA==4 ? 'active':''}"
                        on:click={()=>posA=4}>Talleres
                    </button>
                </li>


            </ul>
        </div>




        <div class="card-body">
					<!-- Titulo -->
            <h5 class="card-title">{Titulos[posA]}</h5>
				<div class="list-group list-group-item-action">

                    {#if posA==1}
                        {#each Finanzas as finanzas}
                            <button 
                                class="list-group-item list-group-item-action list-group-item-danger ">
                                <div class="d-flex w-100 justify-content-between">
                                    
                                    <h5 class="mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                            <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z">
                                            </path>
                                        </svg>{finanzas.Adeudo}</h5>
                                    <small></small>
                                </div>
                                <p class="mb-1">{finanzas.Motivo}</p>
                                <small>{finanzas.Fecha}</small>
                            </button>
                        {/each}
                    {:else if posA==2}
                        {#each Informatica as Informatica}
                            <button 
                                class="list-group-item list-group-item-action list-group-item-warning ">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                            <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z">
                                            </path>
                                        </svg>{Informatica.Adeudo}</h5>
                                    <small>{Informatica.FechaLim}</small>
                                </div>
                                <p class="mb-1">{Informatica.Motivo}</p>
                                <small>{Informatica.Fecha}</small>
                            </button>
                        {/each}
                    {:else if posA==3}
                        {#each Biblioteca as biblioteca}
                            <button 
                                class="list-group-item list-group-item-action" style="background-color: #FFE469;">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                            <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z">
                                            </path>
                                        </svg>{biblioteca.Adeudo}</h5>
                                    <small>{biblioteca.FechaLim}</small>
                                </div>
                                <p class="mb-1">{biblioteca.Motivo}</p>
                                <small>{biblioteca.Fecha}</small>
                            </button>
                        {/each}
                    {:else if posA==4}
                        {#each Talleres as talleres}
                        <button 
                            class="list-group-item list-group-item-action" style="background-color: #FFCD69;">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                        <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z">
                                        </path>
                                    </svg>{talleres.Adeudo}</h5>
                                <small>{talleres.FechaLim}</small>
                            </div>
                            <p class="mb-1">{talleres.Motivo}</p>
                            <small>{talleres.Fecha}</small>
                        </button>
                        {/each}
                    {/if}
                    
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
        border-style: groove;
        border-color: black;
    }
    .card-header{
        color: black;
    }
</style>
