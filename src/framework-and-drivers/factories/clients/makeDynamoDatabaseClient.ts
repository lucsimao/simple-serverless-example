import { DynamoDB } from 'aws-sdk';

import { DynamoDatabaseClient } from '../../adapters/database/DynamoDatabaseClient';

export interface DatabaseParams {
  tableName: string;
}

export const makeDynamoDatabaseClient = (input: DatabaseParams) => {
  const dynamoClient = new DynamoDB();
  const result = new DynamoDatabaseClient(dynamoClient, input.tableName);

  return result;
};
