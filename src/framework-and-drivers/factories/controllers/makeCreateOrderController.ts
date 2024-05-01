import { CreateOrderController } from '../../../interface-adapters/controllers/CreateOrderController';
import { makeCreateOrderUseCase } from '../use-cases/makeCreateOrderUseCase';

export const makeCreateOrderController = () => {
  const createOrderUseCase = makeCreateOrderUseCase();
  const result = new CreateOrderController(createOrderUseCase);

  return result;
};
