import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamCobtainer from "./components/IceCreamCobtainer";
import NewCakeContainer from "./components/NewCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <IceCreamCobtainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
