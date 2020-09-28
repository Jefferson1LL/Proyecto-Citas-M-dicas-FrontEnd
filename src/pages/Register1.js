import React from 'react';
import Routes from '../constants/routes';
import API from '../data/index';
import { Button, Col, Form, Input, message, Row, Typography } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined, EditOutlined, FileTextOutlined } from '@ant-design/icons';
import ErrorList from '../components/ErrorList';
import { translateMessage } from '../utils/traslateMessage';
import withoutAuth from '../hocs/withoutAuth';
import '../styles/register.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../providers/Auth';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons/lib';

const { Title } = Typography;

const Register1 = () => {
    // const auth = useAuth();
    // const router = useRouter();

    // React.useEffect( () => {
    //   const checkAuthentication = () => {
    //     console.log( 'auth.token', auth );
    //     if( auth.token ) {
    //       router.push( Routes.HOME );
    //     }
    //   };
    //
    //   checkAuthentication();
    // }, [ auth ] );

    const { setAuthenticated, setCurrentUser } = useAuth();

    const onFinish = async( userData ) => {
        console.log( 'Received values of form: ', userData );
        const { name, lastname,birthdate, idcard, phone, address,email, password, password_confirmation, specialty } = userData;

        try {
            const user = await API.post( '/registerD', {
                name,
                lastname,
                birthdate,
                idcard,
                phone,
                address,
                email,
                password,
                password_confirmation,
                specialty
            } );

            console.log( 'User', user );

            localStorage.setItem( 'login', JSON.stringify( true ) ); // this is to sync auth state in local storage
            Cookies.set( 'token', user.data.token, { expires: 1 } );
            API.headers[ 'Authorization' ] = 'Bearer ' + user.data.token; // start sending authorization header
            delete user.data.token;
            setCurrentUser( user.data );
            setAuthenticated( true );
        } catch( e ) {
            console.error( 'No se pudo registrar el usuario', e );
            setAuthenticated( false );
            const errorList = e.error && <ErrorList errors={ e.error } />;
            message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
        }
    };

    return (
        <>
            <Title style={ { textAlign: 'center' } }>Registro de Doctores</Title>

            <Row justify='center' className='login'>
                <Col span={ 8 }>
                    <Form name='register-form'
                          className='register-form'
                          initialValues={ {
                              email: '',
                              password: ''
                          } }
                          onFinish={ onFinish }
                    >
                        <Form.Item name='name'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu nombre'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <UserOutlined /> } placeholder='Nombre' />
                        </Form.Item>

                        <Form.Item name='lastname'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu apellido'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <UserOutlined /> } placeholder='Apellido' />
                        </Form.Item>

                        <Form.Item name='birthdate'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa su fecha de nacimiento'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <UserOutlined /> } placeholder='Fecha de Nacimiento' />
                        </Form.Item>

                        <Form.Item name='idcard'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu cedula'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <UserOutlined /> } placeholder='Cedula' />
                        </Form.Item>

                        <Form.Item name='phone'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu número de teléfono'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input  prefix={ <UserOutlined /> } placeholder='Telefono' />
                        </Form.Item>

                        <Form.Item name='address'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu dirección'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <UserOutlined /> } placeholder='Dirección' />
                        </Form.Item>

                        <Form.Item name='specialty'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Dinos tu especialidad'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <EditOutlined /> } placeholder='Especialidad' />
                        </Form.Item>

                        <Form.Item name='email'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu nombre de usuario'
                                       },
                                       {
                                           type: 'email',
                                           message: 'Ingresa un correo válido'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input prefix={ <MailOutlined /> } placeholder='Email' />
                        </Form.Item>

                        <Form.Item name='password'
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Ingresa tu clave'
                                       }
                                   ] }
                                   hasFeedback
                        >
                            <Input.Password prefix={ <LockOutlined /> }
                                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                            placeholder='Clave' />
                        </Form.Item>

                        <Form.Item name='password_confirmation'
                                   dependencies={ [ 'password' ] }
                                   hasFeedback
                                   rules={ [
                                       {
                                           required: true,
                                           message: 'Confirma tu clave',
                                       },
                                       ( { getFieldValue } ) => ({
                                           validator( rule, value ) {
                                               if( !value || getFieldValue( 'password' ) === value ) {
                                                   return Promise.resolve();
                                               }
                                               return Promise.reject( 'Las claves no coinciden' );
                                           },
                                       }),
                                   ] }
                        >
                            <Input.Password prefix={ <LockOutlined /> }
                                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                            placeholder='Confirma tu clave' />
                        </Form.Item>





                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='login-form-button'>
                                Registrarme
                            </Button>
                            <div><Link to={ Routes.LOGIN }>Ya tengo una cuenta</Link></div>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default withoutAuth( Register1 );