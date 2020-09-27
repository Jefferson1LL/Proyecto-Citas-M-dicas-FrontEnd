import React, { useEffect, useState } from 'react';
import { Skeleton, Table, Tag, Space ,Row, Col, Typography, Button } from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useAppointmentList } from '../data/useAppointmentList';
import ShowError from './ShowError';

const { Text } = Typography;

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


                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">Sintoma</th>
                        <th className="text-center">Fecha</th>
                        <th className="text-center">Hora</th>

                    </tr>
                    </thead>
                    <tbody>

                    {appointments.map(appointment => (

                        <tr>
                            <th className="text-center">{appointment.description}</th>
                            <td className="text-center">{appointment.datetime}</td>
                            <td className="text-center">{appointment.time}</td>
                        </tr>

                    ))}

                    </tbody>
                </table>
            </>
        );
    }
;

export default AppointmentList;