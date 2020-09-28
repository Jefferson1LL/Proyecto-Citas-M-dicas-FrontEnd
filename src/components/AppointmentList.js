import React, { useEffect, useState } from 'react';
import {Card, Avatar, Skeleton, Table, Tag, Space, Row, Col, Typography, Button, Modal, Divider, message} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useAppointmentList } from '../data/useAppointmentList';
import ShowError from './ShowError';
import {Form, Input, Select} from "../pages/Antd";
import Appointments from "../pages/Appointments";
import API from "../data";
import ErrorList from "./ErrorList";
import {translateMessage} from "../utils/traslateMessage";

const { Text } = Typography;
const {Meta} = Card;
const AppointmentList = (props ) => {
        const [ showModal, setShowModal ] = useState( false );
        const [ currentAppointmentId, setCurrentAppointmentId ] = useState( null );
        const [ currentAppointmentDescription, setCurrentAppointmentDescription ] = useState( null );
        const [ currentAppointmentTime, setCurrentAppointmentTime ] = useState( null );
        const [ currentAppointmentDateTime, setCurrentAppointmentDateTime ] = useState( null );
        const { appointments, isLoading, isError, mutate } = useAppointmentList();

        // const [ articles, setArticles ] = useState( props.articles );

        // useEffect( () => {
        //   console.log( 'props.articles', props.articles );
        //   setArticles( props.articles );
        // }, [ props.articles ] );

        const handleChangeCategory = ( e ) => {
            // setArticles( props.articles.filter( ( article ) => e.target.value === 'all' || article.category_data.id ===
            // e.target.value ) );
        };

    const [loading, setLoading] = useState(true);
        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 9 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                                <Skeleton.Image style={ { width: 200 } } />

                            </div>
                        </Col>
                    )
                }
            </Row>;
        }

        if( isError ) {
            return <ShowError error={ isError } />;
        }

    const handleViewDetails = (id) => {
            setCurrentAppointmentId(id)
        setShowModal(true);
    }
    const handleViewDescription = (description) => {
        setCurrentAppointmentDescription(description)
    }
    const handleViewTime = (time) => {
        setCurrentAppointmentTime(time)
    }
    const handleViewDateTime = (datetime) => {
        setCurrentAppointmentDateTime(datetime)
    }

    const handleCancel = () => {
        setShowModal(false);
    }

    const handleOk = () => {
        setShowModal(false);
    }


        return (
            <>


                <Row>
                    {
                        appointments.map((appointment, index)=>{
                            return (
                                <Col>
                                    <Card
                                        onClick={ () => {
                                            handleViewDetails(appointment.id)
                                            handleViewDescription(appointment.description)
                                            handleViewTime(appointment.time)
                                            handleViewDateTime(appointment.datetime)

                                        }}
                                        style={{
                                            width: 500,
                                            marginRight: 20,
                                            marginBottom: 30,
                                            background: '#fffff'

                                        }}



                                    >
                                        <Meta
                                            avatar={<Avatar size={64} src="https://draherraizmedicoypaciente.files.wordpress.com/2013/12/sin-tc3adtulo.png" />}
                                            title={`Fecha: ${appointment.datetime} 
                                            Hora: ${appointment.time} Cita: ${appointment.status}`}
                                            description={appointment.description}
                                        />

                                    </Card>
                                    <Modal
                                        title={`Número de cita: ${currentAppointmentId}`}
                                        visible={showModal}

                                        onOk={ () => handleOk()}
                                        onCancel={ () => handleCancel()}
                                    >
                                        Fecha: {currentAppointmentDateTime}
                                        <Divider/>
                                        Hora: {currentAppointmentTime}
                                        <Divider/>
                                        Descripción: {currentAppointmentDescription}

                                    </Modal>


                                </Col>

                            )
                        })
                    }

                </Row>
            </>
        );
    }
;

export default AppointmentList;