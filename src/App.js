import { StoreProvider } from 'easy-peasy';
import Game from './components/Game';
import store from './store';

function App() {
  return (
    <div className='App'>
      <StoreProvider store={store}>
        <Game />
      </StoreProvider>
    </div>
  );
}

export default App;
