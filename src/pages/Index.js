import React, { useState } from 'react';
import API from '../data';
import { translateMessage } from '../utils/traslateMessage';
import DoctorList from '../components/DoctorList';
import {Divider, Statistic, Typography, Image, Carousel, Button, message, Skeleton, Row, Col } from 'antd';
import { useAuth } from '../providers/Auth';
import {FileSearchOutlined, CarryOutOutlined, CheckOutlined} from '@ant-design/icons';

import ShowError from '../components/ShowError';
import { mutate } from 'swr';


/**
 * Fetch Appointments from DB
 */
export const fetchAppointments = async() => {
    // console.log( `Show data fetched. Appointments: ${ JSON.stringify( articles ) }` );

    return await API.get( '/doctors' );
};

/**
 * Appointments list page
 * @param props
 * @constructor
 */
const HomePage = (props ) => {

    const [ visible, setVisible ] = useState( false );


    const auth = useAuth();

    const { Text, Link } = Typography;

    const contentStyle = {
        height: '180px',
        color: '#fff',
        lineHeight: '180px',
        textAlign: 'center',
        background: '#364d79',
    };

    /**
     * Executed after the form is submitted
     * Fetches all the articles and refreshes the list
     * Closes the modal
     */
    const afterCreate = async() => {
        try {
            // show skeleton
            await mutate( '/doctors', async doctors => {
                return { data: [ {}, ...doctors.data ] };
            }, false );

            await mutate( '/doctors' );
            setVisible( false ); // close the modal
        } catch( error ) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );

            message.error( translateMessage( error.message ) );
        }
    };

    return (
    <>

        <Row justify='center' className='second-part'>
            <h1 >BUSCA<FileSearchOutlined href="https://ant.design"/>          AGENDA<CarryOutOutlined />          CONFIRMA<CheckOutlined /></h1>
        </Row>

        <Carousel autoplay>
            <div>
                <Image
                    width={1300}
                    height={600}
                    style={contentStyle}
                    src="https://www.larepublica.net/storage/images/2019/10/15/20191015163653.hospitales.x2.jpg"
                />
            </div>
            <div>
                <Image
                    width={1300}
                    height={600}
                    style={contentStyle}
                    src="https://cflvdg.avoz.es/default/2020/04/15/00121586962563020907154/Foto/V11A0017.jpg"
                />
            </div>
            <div>
                <Image
                    width={1300}
                    height={600}
                    style={contentStyle}
                    src="https://as.com/deporteyvida/imagenes/2018/12/05/portada/1544008122_306443_1544008230_noticia_normal.jpg"
                />
            </div>
            <div>
                <Image
                    width={1300}
                    height={600}
                    style={contentStyle}
                    src="https://radioondaazul.com/wp-content/uploads/2020/08/hospitalizados-por-covid.jpg"
                />
            </div>
        </Carousel>
        <Divider />
        <div>
            <Row justify='center' className='second-part'>
                <h1 >Las principales condiciones medicas más buscadas</h1>
            </Row>

            <Row justify='center' className='second-part'>

                <Col span={2}>
                    <Statistic title="Piel" value={459} />
                </Col>
                <Col span={2}>
                    <Statistic title="Alergía" value={401} />
                </Col>
                <Col span={2}>
                    <Statistic title="Dolores" value={300} />
                </Col>
                <Col span={2}>
                    <Statistic title="Ansiedad" value={259} />
                </Col>
                <Col span={2}>
                    <Statistic title="Resfrío" value={1569} />
                </Col>
            </Row>

            <Divider />

            <DoctorList />
        </div>
    </>
    );
};


export default HomePage;