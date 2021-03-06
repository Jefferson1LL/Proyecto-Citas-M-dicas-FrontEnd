import React from 'react';
import Routes from '../constants/routes';
import Navigation from './Navigation';
import { Layout, Row, Col, Button, Popover } from 'antd';
import { FacebookOutlined, InstagramOutlined, GithubOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
//import logo from '../images/logo-menta.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

/**
 * Este componente renderiza los elementos comunes para toda la aplicación
 *
 * Header (menu), Content y Footer
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const MainLayout = props => {
    console.log( 'props', props );
    return (
        <div className='app'>
            <Layout>
                <Row type='flex' justify='center' className='header-wrapper'>
                    <Col span={ 20 }>
                        <Header className='header'>
                            <Row type='flex' justify='space-between' align='bottom'>
                                <Col xs={ 24 } md={ -5 } className='logo-wrapper'>

                                </Col>

                                <Col md={ 14 } align='right' className='main-menu'>
                                    <Navigation mode='horizontal' />
                                </Col>

                                <Col xs={ 2 } align='right' className='responsive-menu-button'>
                                    <Popover content={ <Navigation mode='vertical' /> }
                                             trigger='click'
                                             placement='rightTop'
                                             overlayClassName='responsive-menu-wrapper'>
                                        <Button type='primary'>
                                            <svg viewBox='64 64 896 896'
                                                 focusable='false'
                                                 className=''
                                                 data-icon='menu'
                                                 width='1em'
                                                 height='1em'
                                                 fill='currentColor'
                                                 aria-hidden='true'>
                                                <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
                                            </svg>
                                        </Button>
                                    </Popover>
                                </Col>

                                <Col xs={ 22 } md={ 4 } className='logos-social-header' align='right'>
                                    <a href='https://www.facebook.com'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       style={ {
                                           marginLeft: 30,
                                           marginRight: 30
                                       } }>
                                        <FacebookOutlined />
                                    </a>

                                    <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                                        <InstagramOutlined />
                                    </a>
                                </Col>
                            </Row>
                        </Header>
                    </Col>
                </Row>


                <Content className='content'>
                    <Row type='flex' justify='center' style={ { flex: 'auto' } }>
                        <Col xs={ 22 } md={ 20 }>
                            { props.children }
                        </Col>
                    </Row>
                </Content>

                <Footer className='footer'>
                    <Row>
                        <Col xs={ { span: 24 } } md={ 8 } className='logo-blanco'>
                            <p><strong>Preguntas Frecuentes</strong></p>
                            <p><Link to={ Routes.QUESTIONS } style={ { marginRight: 20 } }>¿Cómo registrarme? Soy doctor</Link></p>
                            <p><Link to={ Routes.QUESTIONS } style={ { marginRight: 20 } }>¿Cómo registrarme? Soy paciente</Link></p>
                            <p><Link to={ Routes.QUESTIONS } style={ { marginRight: 20 } }>¿Cómo cancelo una cita?</Link></p>
                            <p><Link to={ Routes.QUESTIONS } style={ { marginRight: 20 } }>Sugerencias Y Reclamos</Link></p>



                        </Col>

                        <Col xs={ {
                            span: 24,
                            offset: 0
                        } }
                             md={ {
                                 span: 5,
                                 offset: 3
                             } }
                             className='logo-menta'>

                            <p><strong> ¿Quiénes somos?</strong></p>
                            <p>A  través del servicio y la preparación de nuestros médicos, enfermeras, personal de asistencia, técnicos y cientos de colaboradores dedicados a la atención del paciente, es un lugar en el que se trata a los pacientes de manera humanista y profesional.</p>

                            <a href='https://grupomenta.com' rel='noopener noreferrer' target='_blank'>

                            </a>
                        </Col>

                        <Col xs={ {
                            span: 24,
                            offset: 0
                        } }
                             md={ {
                                 span: 4,
                                 offset: 4
                             } }
                             className='contact-links'>
                            <p><strong>Contáctanos</strong></p>
                            <p><MailOutlined /> <a href='mailto:desarrolloepn@gmail.com'>desarrolloepn@gmail.com</a></p>
                            <p><WhatsAppOutlined /> <a href='https://wa.me/593993731322' target='_blank' rel='noopener noreferrer'>+593
                                9937331322</a></p>
                        </Col>
                    </Row>

                    <Row type='flex' justify='space-between' align='bottom'>


                        <Col xs={ 24 } md={ 4 } className='footer-links'>

                        </Col>

                        <Col xs={ 24 } md={ 8 } className='logos-social'>
                            <strong>Síguenos en:</strong>
                            <a href='https://www.facebook.com'
                               target='_blank'
                               rel='noopener noreferrer'
                               style={ {
                                   marginLeft: 30,
                                   marginRight: 30
                               } }>
                                <FacebookOutlined />
                            </a>

                            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                                <InstagramOutlined />
                            </a>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </div>
    );
};

export default MainLayout;