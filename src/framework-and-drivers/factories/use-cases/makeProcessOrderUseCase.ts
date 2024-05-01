import { ProcessOrder } from '../../../application-business-rules/use-cases/ProcessOrder';
import { makeProcessOrderRepository } from '../repositories/makeProcessOrderRepository';

export const makeProcessOrderUseCase = () => {
  const processOrderRepository = makeProcessOrderRepository();
  const result = new ProcessOrder(processOrderRepository);

  return result;
};
