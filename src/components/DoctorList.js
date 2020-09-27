import React, { useEffect, useState } from 'react';
import { Skeleton, Table, Tag, Space ,Row, Col, Typography, Button } from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useDoctorList } from '../data/useDoctorList';
import ShowError from './ShowError';

const { Text } = Typography;

const DoctorList = (props ) => {

        const { doctors, isLoading, isError, mutate } = useDoctorList();

        // const [ articles, setArticles ] = useState( props.articles );

        // useEffect( () => {
        //   console.log( 'props.articles', props.articles );
        //   setArticles( props.articles );
        // }, [ props.articles ] );


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


                <table className="table table-bordered"  >
                    <thead>
                    <tr>
                        <th className="text-align:center">Nombre</th>
                        <th className="text-align:center">Apellido</th>
                        <th className="text-align:center">Especialidad</th>

                    </tr>
                    </thead>
                    <tbody>

                    {doctors.map(doctor => (

                        <tr>
                            <th className="text-align:center">{doctor.name}</th>
                            <td className="text-align:center">{doctor.lastname}</td>
                            <td className="text-align:center">{doctor.specialty}</td>
                        </tr>

                    ))}

                    </tbody>
                </table>
            </>
        );
    }
;

export default DoctorList;