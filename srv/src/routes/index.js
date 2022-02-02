import SyncController from '../controllers/sync'
import HomeController from '../controllers/home'

const ConfigRoutes = (app) => {
  app.get('/contacts/sync', SyncController)
  app.get('/', HomeController)
}

export default ConfigRoutes
