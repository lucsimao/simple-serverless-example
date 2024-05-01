import { SQSEvent, SQSRecord } from 'aws-lambda';

import { Order } from '../../../enterprise-business-rules/entities/Order';
import { internalServerError } from '../../../interface-adapters/util/HttpResponseParser';
import { makeProcessOrderController } from '../../factories/controllers/makeProcessOrderController';
import { adaptToServerlessResponse } from '../adapter/serverlerss';

export const processOrder = async (event: SQSEvent) => {
  try {
    const controller = makeProcessOrderController();

    const messages: string[] = event.Records.map(
      (record: SQSRecord) => record.body
    );
    const promises = messages.map((message: string) =>
      (async () => {
        const body: Order = JSON.parse(message || '');
        const result = await controller.exec({ params: body });

        if (result.status > 299 || result.status < 200) {
          console.error('error processing message', JSON.stringify(result));
          throw new Error('error processing message');
        }

        return adaptToServerlessResponse(result);
      })()
    );
    const result = await Promise.all(promises);
    return result;
  } catch (error) {
    console.error('Error adapting route', error);
    return adaptToServerlessResponse(internalServerError([error as Error]));
  }
};
