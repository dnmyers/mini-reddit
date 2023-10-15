import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

import Search from '../Search';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <Container fluid debug>
                <Row direction='row' debug>
                    <Col md={4} debug>
                        <div className="logo">
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />&nbsp;<span className="logo-text-mini">Mini</span>-<span className="logo-text-reddit">Reddit</span>
                        </div>
                    </Col>
                    <Col md={8} debug>
                        <Search />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;