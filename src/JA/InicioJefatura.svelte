<script>
    import { link } from "svelte-spa-router"
</script>

<main>

    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col lic">
                <div class="card" style="width: 10rem;">
                    <a href="/LicenciaturaRes" use:link><img src="../img/Diseño/ler.png" class="card-img-top" alt="Licenciatura Restauración"></a>
                </div>
            </div>
            
            <div class="col materia">
                <div class="card" style="width: 10rem;">
                    <a href="/Materias" use:link><img src="../img/Diseño/mat.png" class="card-img-top " alt="Materias"></a>
                </div>
            </div>

            <div class="col inscripcion">
                <div class="card" style="width: 10rem;">

                    <a href="/RegistroPersonal" use:link><img src="../img/Diseño/consul.png" class="card-img-top" alt="Inscripción"></a>


                </div>
            </div>

            <div class="col consultas">
                <div class="card" style="width: 10rem;">
                    <a href="/RegistroPersonal" use:link><img src="../img/Diseño/adac.png" class="card-img-top" alt="..."></a>

                </div>
            </div>
            <div class="col consultas">
                <div class="card" style="width: 10rem;">
                    <a href="/RegistroPersonal" use:link><img src="../img/Diseño/adac.png" class="card-img-top" alt="..."></a>

                </div>
            </div>
            

        </div>
    </div>

</main>

<style>
    img {
        width: 320px;
        height: 250px;
    }
    .lic, .materia, .consultas, .inscripcion {
        margin-top: 80px;
    }
    .lic :hover {
        box-shadow: 5px 2px 2px rgb(228, 2, 2);
    }
    .card{
        margin-right: 2rem;
    }
    .materia :hover {
        box-shadow: 5px 2px 2px rgb(228, 2, 2);
    }
    .consultas :hover {
        box-shadow: 5px 2px 2px rgb(228, 2, 2);
    }
    .inscripcion :hover {
        box-shadow: 5px 2px 2px rgb(228, 2, 2);
    }
    .row{
        margin-left: 12rem;
    }
</style>