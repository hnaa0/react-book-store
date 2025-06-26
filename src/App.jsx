import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
import { store } from "./core/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRouter />
    </Provider>
  );
}

export default App;
