import Inicio from './Inicio.svelte'
import Inscripcion from './AE/Inscripcion.svelte'
import Reinscripcion from './AE/Reinscripcion.svelte'
import Tramites from './AE/Tramites.svelte'
import ProfTitular from './Prof/ProfTitular.svelte'
import Jefatura from './JA/InicioJefatura.svelte'


const routes = {
    '/' : Inicio,
    '/Inscripcion' : Inscripcion,
    '/Reinscripcion' : Reinscripcion,
    '/Tramites' : Tramites,
    '/ProfTitular': ProfTitular,
    '/Jefatura': Jefatura,
}


export default routes
