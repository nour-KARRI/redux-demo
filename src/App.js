
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamCobtainer from './components/IceCreamCobtainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <IceCreamCobtainer />
      </div>
    </Provider>


  );
}

export default App;
