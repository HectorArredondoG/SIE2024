<script>

    import { link } from 'svelte-spa-router'

</script>

<main>

    <div class="container menu">
        <div class="row">
            <div class="col">
                <div class="card" style="width: 22rem;">
                    <a href="/Inscripcion" use:link><img src="./img/insc.png" class="card-img-top" alt="..."></a>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 22rem;">
                    <a href="/Reinscripcion" use:link><img src="./img/rcn.png" class="card-img-top" alt="..."></a>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 22rem;">
                    <a href="/Tramites" use:link><img src="./img/tra.png" class="card-img-top" alt="..."></a>
                </div>
            </div>
        </div>
    </div>


</main>

<style>

    img {
        height: 273px;
    }

    .menu {
        margin-top: 100px;
    }

</style>