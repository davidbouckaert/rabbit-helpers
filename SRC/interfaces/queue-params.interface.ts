import { ServerParams } from './server-params.interface';

export interface QueueParams extends ServerParams {
  queueName: string;
  exchange?: string;
}
