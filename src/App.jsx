import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
import { store } from "./core/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRouter />
      <Toaster position="bottom-center" />
    </Provider>
  );
}

export default App;
