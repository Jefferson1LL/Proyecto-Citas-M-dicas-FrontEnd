import React, { useEffect, useState } from 'react';
import  { Avatar, Card, Skeleton, Table, Tag, Space ,Row, Col, Typography, Button } from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useDoctorList } from '../data/useDoctorList';
import ShowError from './ShowError';

const { Text } = Typography;

const DoctorList = (props ) => {

        const { Meta } = Card;
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
                <Row justify='center' gutter={[16, 16]}>

                        {
                doctors.map((doctor) => {
                    return (


                    <Col>
                        <Card
                            title={"Doctor/a"}
                            extra={<a href='../citas'>Agendar</a>}
                            style={{
                                width: 300,
                                marginRight: 20,
                                marginBottom: 30 }}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={`${doctor.name}  ${doctor.lastname}`}
                                description={`Especialidad: ${doctor.specialty}`}
                            />
                        </Card>
                    </Col>
                    )}
                )}

                </Row>
            </>
        );

}

export default DoctorList;