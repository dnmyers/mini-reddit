import { ScreenClassProvider } from 'react-grid-system';

// import Header from "../components/Header";
import Layout from '../components/Layout';
// import Posts from '../features/posts/Posts';
import Post from '../components/Post';
import { mockPost } from '../components/Post/mockPost';

import "../styles/main.scss";
import "./App.scss";

function App() {
    return (
        <ScreenClassProvider>
            <div className="App">
                <Layout>
                    <Post post={mockPost} />
                </Layout>
            </div>
        </ScreenClassProvider>
    );
}

export default App;