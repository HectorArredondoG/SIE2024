<script>
    import NavAlumnos from "./NavAlumnos.svelte";
    let posA = 1;
    let posB = 1;
    let Titulos = ['','Eventos','Noticias','Calendario Escolar'];
    let Descripcion = ['Aqui abajo podras ver todo el contenido de: ']
    let Semanas = [{Dias:'Lunes',Anuncio:'No voy a trabajar'},
                    {Dias:'Martes',Anuncio:'Ni te cases ni te enbarques'},
                    {Dias:'Miercoles',Anuncio:'Se casa la patrona'},
                    {Dias:'Jueves', Anuncio:'Estoy muy desvelado'},
                    {Dias:'Viernes', Anuncio:'Que se muere jesucristo'}
                    ]
</script>
<body>
    
    <NavAlumnos></NavAlumnos>

<div class="card text-center">
    <div class="card-header" style="background-color: #FFDC40;">

        <ul class="nav nav-tabs card-header-tabs">
                <!-- Eventos -->
            <li class="nav-item">
                <button class="nav-link link-dark {posA == 1 ? 'active' : ''}"
                        on:click={()=>posA=1}
                        >Eventos
                </button>
            </li>
                <!-- Noticias -->
            <li class="nav-item">
                <button class="nav-link link-dark {posA==2 ? 'active' : ''}" 
                        on:click={()=>posA=2}
                        >Comunicados
                </button>
            </li>
                <!-- Calendario -->
            <li class="nav-item">
                <button class="nav-link link-dark {posA==3 ? 'active' : ''}"
                        type="button" 
                        on:click={()=>posA=3}
                        >Calendario Institucional
                </button>
            </li>
        </ul>
    </div>

    <div class="card-body">
        <h5 class="card-title">{Titulos[posA]}</h5>
        <p class="card-text">{Descripcion+Titulos[ posA]}</p>
        {#if posA==1}
        <div class="container banners">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./img/banner/slide01.png" class="d-block w-100" alt="...">
                    </div>
                    
                    <div class="carousel-item">
                        <img src="./img/banner/slide02.png" class="d-block w-100" alt="...">
                    </div>
                    
                    <div class="carousel-item">
                        <img src="./img/banner/slide03.png" class="d-block w-100" alt="...">
                    </div>
                    
                    <div class="carousel-item">
                        <img src="./img/banner/slide04.png" class="d-block w-100" alt="...">
                    </div>
                    
                    <div class="carousel-item">
                        <img src="./img/banner/slide05.png" class="d-block w-100" alt="...">
                    </div>
                    
                    <div class="carousel-item">
                        <img src="./img/banner/slide06.png" class="d-block w-100" alt="...">
                    </div>
                    
                    <div class="carousel-item">
                        <img src="./img/banner/slide07.png" class="d-block w-100" alt="...">
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {:else if  posA==2} 
            <div class="row carda1">
                <div class="col-2">
                    <div class="btn-group dropdown">
                        <button type="button" class="btn btn-secondary dropdown-toggle btn-success" data-bs-toggle="dropdown" aria-expanded="false">
                        Comunicado de la semana
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" on:click = { ()=> posB = 1} >Lunes</button></li>
                            <li><button class="dropdown-item" on:click = { ()=> posB = 2} >Martes</button></li>
                            <li><button class="dropdown-item" on:click = { ()=> posB = 3} >Miercoles</button></li>
                            <li><button class="dropdown-item" on:click = { ()=> posB = 4} >Jueves</button></li>
                            <li><button class="dropdown-item" on:click = { ()=> posB = 5} >Viernes</button></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="col-10">
                        <div class="card mb-3 ">
                            <div class="card-body">
                                <h5 class="card-title title1">{Semanas[posB-1].Dias}</h5>
                                <p class="card-text">{Semanas[posB-1].Anuncio}</p>
                                <p class="card-text"><small class="text-muted">Hace 1 dia</small></p>
                            </div>
                        </div>
                    </div>
                </div>
        
        {:else if posA==3}
            <img src="./img/Alumnos/Calendario_Institucional.png" class="Calendario d-block w-100" alt="...">
        {/if}
    </div>
</div>

</body>


<style>
    .btn-success{
        margin-top: 1rem;
    }
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
    .title1{
        background-color: #FFDC40;
        color: black;
        border-color: black;
        border-style: solid;
    }
    .Calendario{
        border-style: groove;
    }


</style>
