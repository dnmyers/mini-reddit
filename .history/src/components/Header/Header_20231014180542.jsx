import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

import Search from '../Search';

import './Header.scss';

const Header = () => {
    return (
        <header>
            {/* <div className="logo">
                <div className="logo-icon">
                    <FontAwesomeIcon icon={faReddit} size="lg" />
                </div>
                <div className="logo-text">
                    <span className="logo-text-mini">Mini</span><span className="logo-text-reddit">-Reddit</span>
                </div>
            </div>
            <div className="search-container">
                <Search />
            </div> */}
            <Container fluid debug>
                <Row direction='row' debug>
                    <Col md={6} debug>
                        <Container fluid>
                            <Row direction="row">
                                <Col>
                                    <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />
                                </Col>
                                <Col>
                                    <span className="logo-text-mini">Mini</span>-<span className="logo-text-reddit">Reddit</span>
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                    <Col md={6} debug>
                        <Search />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;