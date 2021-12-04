import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import './styles/_commons.scss'
import ScrollToTop from './components/scrollToTop/ScrollToTop';
function App() {
  return (
  <>
  <BrowserRouter>
  <Switch>
    <Route path="/" exact={true} component={HomePage} />
  </Switch>
  </BrowserRouter>
  <ScrollToTop/>
  </>
  );
}

export default App;
