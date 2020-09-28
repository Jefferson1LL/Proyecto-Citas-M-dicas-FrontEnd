import React, { useState } from 'react';
import API from '../data';
import { translateMessage } from '../utils/traslateMessage';
import DoctorList from '../components/DoctorList';
import { Button, message, Skeleton, Row, Col } from 'antd';
import { useAuth } from '../providers/Auth';
import { useCategories } from '../data/useCategories';
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
        <div>


            <DoctorList />
        </div>
    );
};


export default HomePage;