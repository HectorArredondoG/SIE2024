import Inicio from './Inicio.svelte'
import Inscripcion from './Inscripcion.svelte'
import Reinscripcion from './Reinscripcion.svelte'
import Tramites from './Tramites.svelte'


const routes = {
    '/' : Inicio,
    '/Inscripcion' : Inscripcion,
    '/Reinscripcion' : Reinscripcion,
    '/Tramites' : Tramites
}


export default routes
