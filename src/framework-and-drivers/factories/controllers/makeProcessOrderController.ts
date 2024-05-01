import { ProcessOrderController } from '../../../interface-adapters/controllers/ProcessOrderController';
import { makeProcessOrderUseCase } from '../use-cases/makeProcessOrderUseCase';

export const makeProcessOrderController = () => {
  const processOrderUseCase = makeProcessOrderUseCase();
  const result = new ProcessOrderController(processOrderUseCase);

  return result;
};
