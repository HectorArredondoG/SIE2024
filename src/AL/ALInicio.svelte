<script>
	import Tramites from './../AE/Tramites.svelte';
    import NavAlumnos from "./NavAlumnos.svelte";
    import { push } from "svelte-spa-router";
    import { link } from "svelte-spa-router"

</script>


<body>
    <NavAlumnos></NavAlumnos>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col Adeudos">
                <div class="card" style="width: 2.5rem;">
                    <a href="/ALAdeudos" use:link><img src="../img/Alumnos/ads.png" class="card-img-top" alt="Adeudos"></a>
                </div>
            </div>
            <!-- Noticias -->
            <div class="col Noticias">
                <div class="card" style="width: 2.5rem;">
                    <a href="/ALNoticias" use:link><img src="../img/Alumnos/ntc.png" class="card-img-top " alt="Noticiass"></a>
                </div>
            </div>
            <!-- Escolares -->
            <div class="col Escolares">
                <div class="card" style="width: 2.5rem;">
                    <a href="/ALEscolares" use:link><img src="../img/Alumnos/esc.png" class="card-img-top" alt="Escolares"></a>
                </div>
            </div>
            <!-- Tramites -->
            <div class="col Tramites">
                <div class="card" style="width: 2.5rem;">
                    <a href="/ALTramites" use:link><img src="../img/Alumnos/trm.png" class="card-img-top" alt="Trámites"></a>
                </div>
            </div>
            <!-- Practicas Semestrales -->
            <div class="col Tutorias">
                <div class="card" style="width: 2.5rem;">
                    <a href="/ALTutorias" use:link><img src="../img/Alumnos/tut.png" class="card-img-top" alt="Tutorias"></a>
                </div>
            </div>
            <!-- TTutorias -->
            <div class="col Practicas">
                <div class="card" style="width: 2.5rem;">
                    <a href="/ALPracticasS" use:link><img src="../img/Alumnos/pcsm.png" class="card-img-top" alt="Practicas Semestrales"></a>
                </div>
            </div>
            
    </div>



</body>

<style> 
    .row{
        margin-left: 4.5rem;
    }
    img {
        width: 320px;
        height: 250px;
    }
    .card{
        margin-right: 2rem;
    }

    .Adeudos, 
    .Noticias, 
    .Tramites, 
    .Escolares,
    .Tutorias,
    .Practicas 
        {
            margin-top: 5rem;
        }
    .Adeudos :hover,
    .Noticias :hover,
    .Tramites :hover,
    .Escolares :hover,
    .Tutorias :hover,
    .Practicas :hover
        {
            box-shadow: .25rem .25rem 1rem orange ;
        }

</style>