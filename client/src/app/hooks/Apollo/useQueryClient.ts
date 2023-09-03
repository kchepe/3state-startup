/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    DocumentNode,
    OperationVariables,
    QueryHookOptions,
    TypedDocumentNode,
    useQuery,
} from '@apollo/client';
import { graphqlClient } from '../../lib/apolloClient';

const useQueryClient = (
    query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
    options?: QueryHookOptions<unknown, OperationVariables>,
) => {
const { data, error, loading } = useQuery(query, {
    client: graphqlClient,
    ...options,
});
    return { data, error, loading };
};

export default useQueryClient;
