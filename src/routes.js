import Inicio from './Inicio.svelte'
// Asuntos Escolares
import Inicio_Asuntos from './AE/Inicio_Asuntos.svelte'
import Inscripcion from './AE/Inscripcion.svelte'
import Reinscripcion from './AE/Reinscripcion.svelte'
import Tramites from './AE/Tramites.svelte'
// Profesores
import ProfTitular from './Prof/ProfTitular.svelte'
import Jefatura from './JA/InicioJefatura.svelte'
import Materias from './JA/Materias.svelte'
//Alumnos
import Alumnos from './AL/ALInicio.svelte'
import AlAdeudos from './AL/ALAdeudos.svelte'
import ALNoticias from './AL/ALNoticias.svelte'
import ALEscolares from './AL/ALEscolares.svelte'
import ALTramites from './AL/ALTramites.svelte'


const routes = {
    '/' : Inicio,
    // Asuntos Escolares
    '/Inicio_Asuntos' : Inicio_Asuntos,
    '/Inscripcion' : Inscripcion,
    '/Reinscripcion' : Reinscripcion,
    '/Tramites' : Tramites,
    //Profesores
    '/ProfTitular': ProfTitular,
    '/Jefatura': Jefatura,
    '/Materias': Materias,
    //Alumnos
    '/Alumnos':Alumnos,
    '/ALAdeudos': AlAdeudos,
    '/ALNoticias': ALNoticias,
    '/ALEscolares': ALEscolares,
    '/ALTramites': ALTramites

}


export default routes
