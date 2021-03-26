import Home from '../pages/unauthenticated/Home.vue'
import Contato from '../pages/unauthenticated/Contato.vue'
import QuemSomos from '../pages/unauthenticated/QuemSomos.vue'
import Servicos from '../pages/unauthenticated/Servicos.vue'
import Agendamento from '../pages/unauthenticated/Agendamento.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'unauthenticated.home'
    },
    {
        path: 'contato',
        component: Contato,
        name: 'unauthenticated.contato'
    },
    {
        path: 'quem-somos',
        component: QuemSomos,
        name: 'unauthenticated.quem_somos'
    },
    {
        path: 'servicos',
        component: Servicos,
        name: 'unauthenticated.servicos'
    },
    {
        path: 'agendamentos',
        component: Agendamento,
        name: 'unauthenticated.agendamento'
    }
]

export default routes