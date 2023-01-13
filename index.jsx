"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./redux/store");
const react_2 = require("redux-persist/integration/react");
const App_1 = require("components/App/App");
const styled_components_1 = require("styled-components");
const theme_1 = __importDefault(require("./constants/theme"));
require("./index.css");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
      <react_2.PersistGate loading={null} persistor={store_1.persistor}>
        <react_router_dom_1.BrowserRouter basename="/hw-08-phonebook-TypeScript/">
          <styled_components_1.ThemeProvider theme={theme_1.default}>
            <App_1.App />
          </styled_components_1.ThemeProvider>
        </react_router_dom_1.BrowserRouter>
      </react_2.PersistGate>
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
