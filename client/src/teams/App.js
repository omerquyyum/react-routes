
// routes
import Home from './pages/Home';
import TeamLayout from './Layout';

const PATH = '/teams';

export default  [
  {
    path: `${PATH}`,
    component: Home,
    layout: TeamLayout,
    exect: true,
  },
];
