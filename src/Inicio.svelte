<script>
    
	import { link } from "svelte-spa-router"

</script>

<main>

    <div class="d-flex justify-content-end inicio">
		<!-- Button trigger modal -->
			<button type="button" class="btn btn  iniciob" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
				Iniciar Sesión
  			</button>
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog">
	  <div class="modal-content">
		<div class="modal-header">
		  <h1 class="modal-title fs-5" id="staticBackdropLabel"> Inicio de sesión </h1>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			<div class="input-group mb-3">
				<span class="input-group-text"> <i class="bi bi-envelope-at-fill"></i> </span>
				<div class="form-floating">
				  <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
				  <label for="floatingInputGroup1"> Correo ENCRyM - INAH </label>
				</div>
			  </div>	
			<div class="input-group mb-3">
				<span class="input-group-text"> <i class="bi bi-eye-slash-fill"></i> </span>
				<div class="form-floating">
				  <input type="password" class="form-control" id="floatingInputGroup1" placeholder="Username">
				  <label for="floatingInputGroup1"> Contraseña </label>
				</div>
			  </div>
			  <a href="/Cambiar" use:link> <span class = "d-flex justify-content-center cambio"> <u> Cambiar contraseña </u> </span> </a>	
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn sesion" data-bs-dismiss="modal"> Iniciar Sesión </button>
		  <button type="button" class="btn btn-secondary"> Cerrar </button>
		</div>
	  </div>
	</div>
  </div>	
    </div>

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
</main>

<style>

	.banners {
        margin-top: 20px;
    }

	.iniciob {
		background-color: #E54d1e;
		color: white;
		border: none;
		border-radius: 0%;
		margin-top: 10px;
	}

	.modal-header, .modal-footer {
		background-color: red;
		color:white;
	}

	.sesion {
		background-color: #Fccf00;
		color:black
	}

	.cambio {
		color:blue
	}

	

</style>