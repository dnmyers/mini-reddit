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
            <Container>
                <Row>
                    <Col md={2}>
                        <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />&nbsp;<span className="logo-mini">Mini</span>-<span className="logo-reddit">Reddit</span>
                    </Col>
                    <Col md={8}>
                        <Search />
                    </Col>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;