import index from './components/index'
import noutati from './components/noutati'
import profilStudent from './components/profil-student'
import contact from './components/contact'



export default [
    {   
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/noutati',
        name: 'noutati', 
        component: noutati
    },
    {
        path: '/profil',
        name: 'profil-student',
        component: profilStudent
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    }
    
    
]
