import { Home } from '../pages/Home'
import CitlabTemplate from '../pages/CitlabTemplate'

export const routes = {
  home: {
    path: '/',
    element: <Home />,
    isIndex: true
  },
  citlab: {
    path: '/citlab/:id',
    element: <CitlabTemplate />,
  },
  // Añade más rutas aquí
  // ejemplo: {
  //   path: '/ejemplo',
  //   element: <Ejemplo />,
  // },
}
