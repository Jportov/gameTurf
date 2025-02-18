import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesComponent from "./router";
import { store } from "./store";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
        </div>
        <RoutesComponent />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
