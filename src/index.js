import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import {App} from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
