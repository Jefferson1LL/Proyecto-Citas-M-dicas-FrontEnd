import React, { useState } from 'react';

import Routes from '../constants/routes';
import { useAuth } from '../providers/Auth';
import { Menu } from 'antd';
import { LogoutOutlined, LoginOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';
import Search from "antd/es/input/Search";

const linkStyle = {};

const Navigation = ( props ) => {
    let location = useLocation();

    const [ menuState, setMenuState ] = useState( {
        current: location.pathname, // set the current selected item in menu, by default the current page
        collapsed: false,
        openKeys: []
    } );
    const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();

    React.useEffect( () => {
        setMenuState( {
            ...menuState,
            current: location.pathname
        } );
    }, [ location, isAuthenticated ] );

    const handleClick = ( e ) => {
        console.log( 'click ', e );
        setMenuState( {
            ...menuState,
            current: e.key
        } );
    };

    return (
        <>
            <Menu
                mode={ props.mode }
                onClick={ handleClick }
                className='menu'
                theme='dark'
                selectedKeys={ [ menuState.current ] }
                style={ {
                    lineHeight: '64px',
                    width: 'fit-content'
                } }

            >
                <Search placeholder="Buscar síntomas" onSearch={value => console.log(value)} enterButton
                        style={{marginRight: 15,marginTop:15, width: 225 }}/>
                <Menu.Item key={ Routes.HOME }>
                    <Link to={ Routes.HOME } style={ linkStyle }>Inicio</Link>
                </Menu.Item>

                <Menu.Item key={ Routes.ABOUT }>
                    <Link to={ Routes.ABOUT } style={ linkStyle }>Acerca de</Link>
                </Menu.Item>

                <Menu.Item key={ Routes.APPOINTMENTS }>
                    <Link to={ Routes.APPOINTMENTS } style={ linkStyle }>Citas</Link>
                </Menu.Item>

                <Menu.Item key={ Routes.DOCTORS }>
                    <Link to={ Routes.DOCTORS } style={ linkStyle }>Doctores Disponibles</Link>
                </Menu.Item>

                <Menu.Item key={ Routes.QUESTIONS }>
                    <Link to={ Routes.QUESTIONS } style={ linkStyle }>¿Cómo funciona?</Link>
                </Menu.Item>

                {
                    isAuthenticated
                        ? <Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name }>
                            <Menu.Item key={ Routes.LOGIN }>
                                <Link to={ Routes.LOGOUT } className='logout-link'>
                                    {
                                        isCheckingAuth
                                            ? <LoadingOutlined />
                                            : <><LogoutOutlined /> Salir</>
                                    }
                                </Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        : <Menu.Item key={ Routes.LOGIN }>
                            <Link to={ Routes.LOGIN }>
                                {
                                    isCheckingAuth
                                        ? <LoadingOutlined />
                                        : <><LoginOutlined /> Ingresar</>
                                }
                            </Link>
                        </Menu.Item>
                }
            </Menu>
        </>
    );
};

export default Navigation;