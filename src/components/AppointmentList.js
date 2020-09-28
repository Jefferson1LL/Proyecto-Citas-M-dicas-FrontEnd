import React, { useEffect, useState } from 'react';
import { Card, Avatar,Skeleton, Table, Tag, Space ,Row, Col, Typography, Button } from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useAppointmentList } from '../data/useAppointmentList';
import ShowError from './ShowError';

const { Text } = Typography;
const {Meta} = Card;
const AppointmentList = (props ) => {

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






        return (
            <>


                <Row>
                    {
                        appointments.map((appointment, index)=>{
                            return (
                                <Col>
                                    <Card
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