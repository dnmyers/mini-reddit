import { ScreenClassProvider } from 'react-grid-system';

// import Header from "../components/Header";
import Layout from '../components/Layout';

import "../styles/main.scss";
import "./App.scss";

function App() {
    return (
        <ScreenClassProvider>
            <Layout />
        </ScreenClassProvider>
    );
}

export default App;