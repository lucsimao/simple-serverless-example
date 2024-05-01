import { CreateOrder } from '../../../application-business-rules/use-cases/CreateOrder';
import { makeCreateOrderRepository } from '../repositories/makeCreateOrderRepository';

export const makeCreateOrderUseCase = () => {
  const publishOrderRepository = makeCreateOrderRepository();
  const result = new CreateOrder(publishOrderRepository);

  return result;
};
