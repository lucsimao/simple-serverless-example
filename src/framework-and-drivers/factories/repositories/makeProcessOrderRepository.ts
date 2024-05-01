import { ProcessOrderData } from '../../repositories/order/ProcessOrderData';
import { makeDynamoDatabaseClient } from '../clients/makeDynamoDatabaseClient';

export const makeProcessOrderRepository = () => {
  const dynamoDatabaseClient = makeDynamoDatabaseClient({
    tableName: process.env.ORDER_TABLE || '',
  });
  const result = new ProcessOrderData(dynamoDatabaseClient);

  return result;
};
