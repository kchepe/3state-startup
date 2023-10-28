/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client';
import { authClient } from '../../lib/apolloClient';

const useQueryAuthClient = (
  query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
  options?: QueryHookOptions<unknown, OperationVariables>,
) => {
  const { data, error, loading } = useQuery(query, {
    client: authClient,
    ...options,
  });
  return { data, error, loading };
};

export default useQueryAuthClient;
