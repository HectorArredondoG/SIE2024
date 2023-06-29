<script>
    import NavAlumnos from "./NavAlumnos.svelte";
    import { push } from "svelte-spa-router";

</script>


<body>
    <NavAlumnos></NavAlumnos>
    <div class="container">
        
        <div class="row row-cols-1 row-cols-md-4 g-4" style="margin-top: 1.5rem;">

            <!-- Adeudos -->
            <div class="col">
                <div class="card h-100">
                    <img src="./img/Diseño/fns.png" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title"> </h5>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted" style="justify-content: center;">
                            <button type="button" class="btn btn-success"
                                    on:click={()=>push('/ALAdeudos')}>Ir a</button>
                        </small>
                    </div>
                </div>
            </div>

            <!-- Noticias -->
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">Noticias</h5>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <button type="button" class="btn btn-success"
                                    on:click={()=>push('/ALNoticias')}>Ir a</button>
                        </small>
                    </div>
                </div>
            </div>

            <!-- Escolares -->
            <div class="col">
                <div class="card h-100">
                    <img src="./img/Diseño/mat.png" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title"></h5>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <button type="button" class="btn btn-success"
                                    on:click={()=>push('/ALEscolares')}>Ir a</button>
                        </small>
                    </div>
                </div>
            </div>

            <!-- Tramites -->
            <div class="col">
                <div class="card h-100">
                    <img src="./img/Diseño/tram.png" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title"> </h5>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <button type="button" class="btn btn-success"
                                    on:click={()=>push('/ALTramites')} >Ir a</button>
                        </small>
                    </div>
                </div>
            </div>

        </div>
    </div>



</body>

<style>
</style>