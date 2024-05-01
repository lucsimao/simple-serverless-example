import { SNS } from 'aws-sdk';

import { SnsNotificationClient } from '../../adapters/notification/SnsNotificationClient';

export const makeSNSClient = () => {
  const sns = new SNS();
  const result = new SnsNotificationClient(
    sns,
    process.env.ORDER_TOPIC_URL || ''
  );

  return result;
};
