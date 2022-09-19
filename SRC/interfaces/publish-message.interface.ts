import { ServerParams } from './server-params.interface';

export interface PublishMessage extends ServerParams {
  entity: string;
  message: string;
}
