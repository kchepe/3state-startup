/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    DocumentNode,
    MutationHookOptions,
    OperationVariables,
    TypedDocumentNode,
    useMutation,
} from '@apollo/client';
import { authClient } from '../../lib/apolloClient';

const useMutationAuthClient = (
    query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
    options?: MutationHookOptions<any, any>,
) => {
const [mutation, { loading }] = useMutation(query, {
    client: authClient,
    ...options,
});
    return { mutation, loading };
};

export default useMutationAuthClient;
