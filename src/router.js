import index from './components/index'
import test from './components/test'
import scan from './components/scan'
import setting from './components/setting'
let router = [

    { path: '/', component: index },
    { path: '/test', component: test },
    { path: '/scan', component: scan },
    { path: '/setting', component: setting },
]
export default router