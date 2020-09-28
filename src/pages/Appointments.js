import React, { useState } from 'react';
import API from '../data';
import { translateMessage } from '../utils/traslateMessage';
import AppointmentList from '../components/AppointmentList';
import ArticleForm from '../components/ArticleForm';
import {
    DatePicker,
    TimePicker,
    Form,
    Input,
    InputNumber,
    Modal,
    Button,
    message,
    Skeleton,
    Row,
    Col,
    Divider,
    Select
} from 'antd';
import { useAuth } from '../providers/Auth';
import { useCategories } from '../data/useCategories';
import {CarryOutOutlined} from '@ant-design/icons';
import ShowError from '../components/ShowError';
import { mutate } from 'swr';
import Cookies from "js-cookie";
import ErrorList from "../components/ErrorList";
import DoctorList from "../components/DoctorList";
import {useDoctorList} from "../data/useDoctorList";

/**
 * Fetch Appointments from DB
 */
export const fetchAppointments = async() => {
    // console.log( `Show data fetched. Appointments: ${ JSON.stringify( articles ) }` );

    return await API.get( '/appointments' );
};


/**
 * Appointments list page
 * @param props
 * @constructor
 */
const {Option} = Select;

const Appointments = ( {
                           update,
                           //onSubmit,
                           onCancel,

                       } ) => {
    const { doctors, isLoading, isError, mutate } = useDoctorList();
    const [ submitting, setSubmitting ] = useState( false );
    const [ form ] = Form.useForm();
    const [ isSaving, setIsSaving ] = useState( false );
    const onCreate = async values => {
        console.log( 'Received values of form: ', values );

        form.validateFields()
            .then( async( values ) => {
                console.log( 'values', values );
                setIsSaving( true );

                // use form data to be able to send a file to the server
                const data = new FormData();
                data.append( 'datetime', values.datetime );
                data.append( 'description', values.description );
                data.append( 'time', values.time );
                data.append( 'doctor_id', values.doctor_id );


                try {
                    await API.post( '/appointments', data ); // post data to server
                    form.resetFields();
                    setIsSaving( false );
                    //onSubmit();
                } catch( e ) {
                    setIsSaving( false );

                    const errorList = e.error && <ErrorList errors={ e.error } />;
                    message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
                }
            } )
            .catch( info => {
                console.log( 'Validate Failed:', info );
            } );

    };

    const [ visible, setVisible ] = useState( false );
    const [ showModal, setShowModal ] = useState( false );
    // const doctors = DoctorList();



    const auth = useAuth();

    // console.log( 'categories', categories );

    /**
     * Executed after the form is submitted
     * Fetches all the articles and refreshes the list
     * Closes the modal
     */
    const afterCreate = async() => {
        try {
            // show skeleton
            await mutate( '/appointments', async appointments => {
                return { data: [ {}, ...appointments.data ] };
            }, false );

            await mutate( '/appointments' );
            setVisible( false ); // close the modal
        } catch( error ) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );

            message.error( translateMessage( error.message ) );
        }
    };

    const handleViewDetails = () => {
        setShowModal(true);
    }

    // const handleOk = () => {
    //     htmlType='submit' loading={ submitting }
    // }

    const handleCancel = () => {
        setShowModal(false);
    }

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };


        function onChange(date, dateString) {
            console.log(date, dateString);
    }

    const handleChangeCategory = () => {};
    return (

        <div>
            <Button icon={<CarryOutOutlined />} onClick={ () => handleViewDetails()} type="primary">Agendar Cita</Button>

            <Modal
                title="Registrar cita"
                visible={showModal}
                confirmLoading={ isSaving }
                onOk={ () => onCreate()}
                onCancel={ () => handleCancel()}
            >
                <Form {...layout} name="nest-messages" form={ form }>
                    <Form.Item name='datetime'
                               label="Fecha"
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese la fecha de su consulta'
                                   }
                               ] }
                               hasFeedback>
                        <Input />
                    </Form.Item>
                    <Form.Item name='description'
                               label="Sintomas"
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese los sintomas que tiene'
                                   }
                               ] }
                               hasFeedback>
                        <Input />
                    </Form.Item>
                    <Form.Item name='time'
                               label="Hora"
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese la hora en la que requiere la cita'
                                   }
                               ] }
                               hasFeedback>
                        <Input />
                    </Form.Item>
                    <Form.Item name='doctor_id'
                               label='Doctor'
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Selecciona un Doctor'
                                   }
                               ] }
                    >
                        <Select style={ { width: 315 } } onChange={ handleChangeCategory } loading={ !doctors }>
                            {
                                doctors && doctors.map( ( doctor, index ) =>
                                    <Option value={ doctor.id } key={ index }>{`Nombre: ${ doctor.name } ${doctor.lastname} , Especialidad: ${doctor.specialty}`}</Option>
                                )
                            }
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>


            <Divider/>

            <AppointmentList />
        </div>
    );
};


export default Appointments;