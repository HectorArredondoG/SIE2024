<script>

    let PrendidoA,PrendidoN,PrendidoT,PrendidoE
    import { push } from "svelte-spa-router";

</script>

<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #FFDC40;" >
    <div class="container-fluid">

        <a class="navbar-brand" href="#/Alumnos">Ir al inicio: Alumnos</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">



                            <!-- Adeudos -->
                <!-- <li class="nav-item">
                    <button class="nav-link {PrendidoA==true? 'activado ':''}"
                            on:click={()=>{PrendidoA=true}}
                            on:click={()=>push('/ALAdeudos')}>Adeudos
                    </button> -->



                            <!-- Noticias -->
                <!-- </li>
                <li class="nav-item">
                    <button class="nav-link {PrendidoN==true? 'activado ':''}" 
                            on:click={()=>push('/ALNoticias')}
                            on:click={()=>{PrendidoN=true}}>Noticias</button>
 -->


                            <!-- Escolares -->
                <!-- </li>
                <li class="nav-item">
                    <button class="nav-link {PrendidoE==true? 'activado ':''}" 
                            on:click={()=>push('/ALEscolares')} 
                            on:click={()=>{PrendidoE=true}}>Escolares</button>
                </li> -->



                            <!-- Tramites -->
                <!-- <li class="nav-item">
                    <button class="nav-link {PrendidoT==true? 'activado ':''}" 
                            on:click={()=>push('/ALTramites')} 
                            on:click={()=>{PrendidoT=true}}>Tramites</button>
                </li> -->

            </ul>
        </div>

    </div>
</nav>

<style>



    .navbar-brand{
        color: black;
    }

    .nav-link{
        color: black;
        border-style: groove;
        margin-right: 2.5rem;
        border-color: transparent;
        padding-left: .5rem;
        padding-right: .5rem;
    }
    .activado{
        background-color: #FB7D0C;
		color: white;
        border-style: double;
        border-color: black;
    }
    button{
        background-color: transparent;
    }
    .navbar{
        margin-top: .5rem;
        margin-left: 1rem;
        margin-right: 1rem;
        border-style: groove;
    }

</style>