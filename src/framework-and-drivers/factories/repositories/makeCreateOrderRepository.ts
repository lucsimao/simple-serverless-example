import { CreateOrderData } from '../../repositories/order/CreateOrderData';
import { makeSNSClient } from '../clients/makeSNSClient';

export const makeCreateOrderRepository = () => {
  const snsClient = makeSNSClient();
  const result = new CreateOrderData(snsClient);

  return result;
};
