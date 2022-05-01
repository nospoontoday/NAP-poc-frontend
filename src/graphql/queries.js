import {gql} from '@apollo/client';

export const LOAD_EMPLOYEES = gql`
    query {
        getAllEmployees {
            first_name
            last_name
        }
    }
`;