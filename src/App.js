import { StoreProvider } from 'easy-peasy';
import Game from './components/Game';
import Footer from './components/Footer';
import store from './store';

function App() {
  return (
    <div className='App'>
      <StoreProvider store={store}>
        <Game />
        <Footer />
      </StoreProvider>
    </div>
  );
}

export default App;
