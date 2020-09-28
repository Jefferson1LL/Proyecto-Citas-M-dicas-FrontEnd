import React from 'react';
import { Layout, Row, Col, Button, Popover,Divider,Space,Card } from 'antd';
import Carousel from "antd/es/carousel";
import Image from "antd/es/image";
//import 'bootstrap/dist/css/bootstrap.min.css';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const AboutPage = () => {

    return (
        <>
                    <h1 >Quienes Somos</h1>


            <Row justify='center' className='second-part'>
                <h1 >Equipo de Trabajo</h1>
            </Row>
            <Row justify='center' className='second-part'>
                <table className="team">
                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <Card title="Xavier Jaramillo" >
                            <div >
                                <img width={150} height={150} src="../images/xavier.jpg" />
                            </div>
                        </Card>
                        <td></td>
                        <td>
                            <Card title="Josue Garrido" >
                                <div >
                                    <img width={150} height={150} src="../images/josue.jpeg" />
                                </div>
                            </Card>
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <Card title="Mauricio Rodriguez" >
                            <div >
                                <img width={150} height={150} src="../images/mauricio.jpeg" />
                            </div>
                        </Card>
                        <td>

                        </td>
                        <td>
                            <Card title="Jefferson Llumiquinga" >
                                <div >
                                    <img width={150} height={150} src="../images/jeff.jpeg" />
                                </div>
                            </Card>
                        </td>
                    </tr>
                </table>
                <Row className='second-part'>
                    <Col span={24}>
                        <h1 >Misión</h1>
                        <h3>
                            A través del servicio y la preparación de nuestros médicos,
                            enfermeras, personal de asistencia, técnicos y cientos de
                            colaboradores dedicados a la atención del paciente, es un lugar en
                            el que se trata a los pacientes de manera humanista y profesional.

                        </h3>
                    </Col>
                    <Col span={24}>
                        <h1 >Visión</h1>
                        <h3>
                            Ser para el año 2022 una institución de salud de alta complejidad,
                            líder en atención integral, segura, humanizada, centrada en la persona,
                            cuidadora del medio ambiente y centro de referencia a nivel nacional e
                            internacional.

                        </h3>
                    </Col>
                </Row>
            </Row>
        </>
    );
};

export default AboutPage;