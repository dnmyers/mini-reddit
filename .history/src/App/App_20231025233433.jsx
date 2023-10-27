import { ScreenClassProvider, Container, Col, Row } from 'react-grid-system';

// import Layout from '../components/Layout';
import Header from "../components/Header";
import Subreddits from '../features/subreddits/Subreddits';
import Posts from '../features/posts/Posts';
import Post from '../components/Post';
// import { mockPost } from '../components/Post/mockPost';

import "../styles/main.scss";
import "./App.scss";

function App() {
    const debugOn = false;

    return (
        <ScreenClassProvider>
            <div className="App">
                <Container fluid debug={debugOn ? true : false}>
                    <Row debug={debugOn ? true : false}>
                        <Col sm={12} debug={debugOn ? true : false}>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} lg={3} xxl={2} order={{ md: 2 }}>
                            {/* <Col xs="content" order={{ md: 2 }}> */}
                            <div className="layout__subreddits-container">
                                <Subreddits />
                            </div>
                        </Col>
                        <Col md={8} lg={9} xxl={10} order={{ md: 1 }}>
                            {/* <Col order={{ md: 1 }}> */}
                            <Posts />
                        </Col>
                    </Row>
                </Container>
            </div>
        </ScreenClassProvider>
    );
}

export default App;