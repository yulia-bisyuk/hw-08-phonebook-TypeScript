"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("@reduxjs/toolkit/query/react");
const BeatLoader_1 = __importDefault(require("react-spinners/BeatLoader"));
const ContactsPage_styled_1 = require("pages/ContactsPage/ContactsPage.styled");
const hooks_1 = require("../../hooks");
const authSelectors_1 = require("redux/authentication/authSelectors");
const authApi_1 = require("redux/authentication/authApi");
const PrivateRoute_1 = __importDefault(require("components/PrivateRoute"));
const PublicRoute_1 = __importDefault(require("components/PublicRoute"));
const HomePage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/HomePage'))));
const LoginPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/LoginPage'))));
const ContactsPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/ContactsPage'))));
const RegistrationPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/RegistrationPage'))));
const Layout = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('components/Layout'))));
const App = () => {
    const token = (0, hooks_1.useAppSelector)(authSelectors_1.getToken);
    (0, authApi_1.useFetchCurrentUserQuery)(token !== null && token !== void 0 ? token : react_2.skipToken);
    return (<react_1.Suspense fallback={<ContactsPage_styled_1.Note>
          <BeatLoader_1.default color="#0c005a" loading={true} size={20} margin={2}/>
        </ContactsPage_styled_1.Note>}>
      <Layout>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<PublicRoute_1.default>
                <HomePage />
              </PublicRoute_1.default>}/>

          <react_router_dom_1.Route path="register" element={<PublicRoute_1.default restricted navigateTo="/contacts">
                <RegistrationPage />
              </PublicRoute_1.default>}/>

          <react_router_dom_1.Route path="login" element={<PublicRoute_1.default restricted navigateTo="/contacts">
                <LoginPage />
              </PublicRoute_1.default>}/>

          <react_router_dom_1.Route path="contacts" element={<PrivateRoute_1.default>
                <ContactsPage />
              </PrivateRoute_1.default>}/>
        </react_router_dom_1.Routes>
      </Layout>
    </react_1.Suspense>);
};
exports.App = App;
