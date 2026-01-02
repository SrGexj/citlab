import { Home } from '../pages/Home'
import CitlabTemplate from '../pages/CitlabTemplate'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

export const routes = {
  home : { path: '/', element: <Home />, isIndex: true },
  citlab: { path: '/citlab/:id', element: <CitlabTemplate /> },
  login : { path: '/login', element: <Login /> },
  register : { path: '/register', element: <Register /> },
  // Añade más rutas aquí
  // ejemplo: {
  //   path: '/ejemplo',
  //   element: <Ejemplo />,
  // },
}
