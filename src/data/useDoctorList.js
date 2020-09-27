import useSWR from 'swr';
import API from './index';

export const useDoctorList = () => {
    const { data, error, mutate } = useSWR( '/doctors', API.fetcher );

    return {
        doctors: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};