import React, {useEffect, useState} from 'react';
import {
    useQuery,
    gql
} from '@apollo/client';
import { LOAD_EMPLOYEES } from '../graphql/queries';

function GetEmployees() {
    const {error, loading, data} = useQuery(LOAD_EMPLOYEES);

    useEffect(() => {
        if(data) {
            console.log(data);
        }
    }, [data]);

    return (
        <div></div>
    );
}

export default GetEmployees;