import Inicio from './Inicio.svelte'
// Asuntos Escolares
import Inicio_Asuntos from './AE/Inicio_Asuntos.svelte'
import Inscripcion from './AE/Inscripcion.svelte'
import Reinscripcion from './AE/Reinscripcion.svelte'
import Tramites from './AE/Tramites.svelte'
// Profesores
import ProfTitular from './Prof/ProfTitular.svelte'


const routes = {
    '/' : Inicio,
    // Asuntos Escolares
    '/Inicio_Asuntos' : Inicio_Asuntos,
    '/Inscripcion' : Inscripcion,
    '/Reinscripcion' : Reinscripcion,
    '/Tramites' : Tramites,
    //Profesores
    '/ProfTitular': ProfTitular,
}


export default routes
