import { Router } from 'express'
import authRouter from './auth-router'

const router: Router = Router()

type Route = {
    path: string
    route: Router
}

const defaultRoutes: Route[] = [
    {
        path: '/auth',
        route: authRouter,
    },
]

defaultRoutes.forEach((route: Route) => {
    router.use(route.path, route.route)
})

export default router
