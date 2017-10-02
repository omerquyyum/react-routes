
// routes
import Home from './pages/Home';
import UserLayout from './Layout';

const PATH = '/users';

export default  [

  {
    path: `${PATH}`,
    component: Home,
    layout: UserLayout,
    exect: true,
  },
];
