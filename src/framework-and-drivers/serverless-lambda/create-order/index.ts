import { APIGatewayProxyEvent } from 'aws-lambda';

import { Order } from '../../../enterprise-business-rules/entities/Order';
import { internalServerError } from '../../../interface-adapters/util/HttpResponseParser';
import { makeCreateOrderController } from '../../factories/controllers/makeCreateOrderController';
import { adaptToServerlessResponse } from '../adapter/serverlerss';

export const createOrder = async (event: APIGatewayProxyEvent) => {
  try {
    const controller = makeCreateOrderController();

    const body: Order = JSON.parse(event.body || '');
    const path = event.pathParameters;
    const result = await controller.exec({ params: { ...body, ...path } });

    return adaptToServerlessResponse(result);
  } catch (error) {
    console.error('Error adapting route', error);
    return adaptToServerlessResponse(internalServerError([error as Error]));
  }
};
