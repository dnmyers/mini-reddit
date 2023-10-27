import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

import Search from '../Search';

import './Header.scss';

const   Header = () => {
    const debugOn = false;

    return (
        <header>
            <Container fluid>
                <Row align='center'>
                    <Col sm={5} md={4}>
                        <motion.div
                            intial={{
                                scale: 0,
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.3,
                                    ease: 'easeInOut'
                                }
                            }}
                            whileHover={{
                                scale: 1.1,
                                x: 15
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            className="logo"
                        >
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />&nbsp;<span className="logo-text-mini">Mini-</span><span className="logo-text-reddit">Reddit</span>
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon-2" />
                        </motion.div>
                    </Col>
                    <Col sm={7} md={8}>
                        <Search />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;