import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

function App() {
  const siteUser = 'nihiven';

  return (
    <Router>
      <div className='container'>
        <Route
          path='/'
          exact
          render={(props) => <Home {...props} siteUser={siteUser} />}
        />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
