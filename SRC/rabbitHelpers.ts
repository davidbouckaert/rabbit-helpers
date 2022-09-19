// TODO wil niets van data importeren const variables = require('../data/variables');
import request from 'supertest';
import { expect } from 'chai';
import { QueueParams } from './interfaces/queue-params.interface';
import { PublishMessage } from './interfaces/publish-message.interface';
import { defaultVariables, Variables } from './interfaces/variables.interface';
import { RabbitConfig } from './interfaces/rabbit-config.interface';
import { Messages } from './interfaces/messages-interface';

const variables: Variables = defaultVariables;

/**
 * This function sets a range of variables the Rabbit module uses
 * @param {RabbitConfig} rabbitConfig
 */
export const initRabbitHelpers = async (rabbitConfig: RabbitConfig) => {
  variables.username = rabbitConfig.username;
  variables.password = rabbitConfig.password;
}

/**
 * This function publishes a message onto an Entity using the RabbitMQ API
 * @param {Object} params server, vhost, entity & message(body)
 */
export const publishMsg = async ({
  server,
  vhost,
  entity,
  message,
}: PublishMessage): Promise<void> => {
  const jsonMsg: string = JSON.stringify(message);
  try {
    console.log(`INFO - CONNECTING TO RABBIT: ${server}`);
    console.log('INFO - SENDING MSG TO QUEUE...');
    await request(server)
      .post(`/api/exchanges/${vhost}/${entity}/publish`)
      .auth(variables.username, variables.password)
      .send(jsonMsg)
      .then((res) => {
        expect(res.statusCode).to.eq(200);
        expect(res.text).to.include('routed":true');
        console.log('INFO - MSG HAS BEEN SENT SUCCESSFULLY!');
      });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Pass parameters as an object
 * @param {String} server the server address
 * @param {String} vhost the name of the vhost
 * @param {String} queueName the name of the queue
 */
export const createNewQueue = async ({
  server,
  vhost,
  queueName,
}: QueueParams): Promise<void> => {
  const body = { auto_delete: false, durable: true, arguments: {} };
  const JSONbody = JSON.stringify(body);
  try {
    console.log(`INFO - CONNECTING TO RABBIT: ${server}`);
    console.log('INFO - CREATING NEW QUEUE...');
    await request(server)
      .put(`/api/queues/${vhost}/${queueName}`)
      .auth(variables.username, variables.password)
      .send(JSONbody)
      .then((res) => {
        expect(res.statusCode).to.eq(201);
        console.log('INFO - QUEUE HAS BEEN CREATED SUCCESSFULLY!');
      });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Pass parameters as an object
 * @param {String} server the server address
 * @param {String} vhost the name of the vhost
 * @param {String} queueName the name of the queue
 */
export const deleteQueue = async ({
  server,
  vhost,
  queueName,
}: QueueParams): Promise<void> => {
  const body = { auto_delete: false, durable: true, arguments: {} };
  const JSONbody = JSON.stringify(body);
  try {
    console.log(`INFO - CONNECTING TO RABBIT: ${server}`);
    console.log('INFO - DELETING NEW QUEUE...');
    await request(server)
      .delete(`/api/queues/${vhost}/${queueName}`)
      .auth(variables.username, variables.password)
      .send(JSONbody)
      .then((res) => {
        expect(res.statusCode).to.eq(204);
        console.log('INFO - QUEUE HAS BEEN DELETED SUCCESSFULLY!');
      });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Pass parameters as an object
 * @param {String} server the server address
 * @param {String} vhost the name of the vhost
 * @param {String} exchange the name of the exchange
 * @param {String} queueName the name of the queue
 */
export const bindQueue = async ({
  server,
  vhost,
  exchange,
  queueName,
}: QueueParams): Promise<void> => {
  const body = {
    routing_key: '#',
    arguments: {
      'x-arg': 'value',
    },
  };
  const JSONbody = JSON.stringify(body);
  try {
    console.log(`INFO - CONNECTING TO RABBIT: ${server}`);
    console.log('INFO - BINDING QUEUE...');
    await request(server)
      .post(`/api/bindings/${vhost}/e/${exchange}/q/${queueName}`)
      .auth(variables.username, variables.password)
      .send(JSONbody)
      .then((res) => {
        expect(res.statusCode).to.eq(201);
        console.log('INFO - QUEUE HAS BEEN BOUND SUCCESSFULLY!');
      });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Pass parameters as an object
 * @param {String} server the server address
 * @param {String} vhost the name of the vhost
 * @param {String} queueName the name of the queue
 * @returns All messages found in the queue
 */
export const getMessagesFromQueue = async ({
  server,
  vhost,
  queueName,
}: QueueParams): Promise<Messages> => {
  let messages;
  const body = {
    count: 5,
    ackmode: 'ack_requeue_false',
    encoding: 'auto',
    truncate: 50000,
  };
  const JSONbody = JSON.stringify(body);
  try {
    console.log(`INFO - CONNECTING TO RABBIT: ${server}`);
    console.log('INFO - GETTING MSG FROM QUEUE...');
    await request(server)
      .post(`/api/queues/${vhost}/${queueName}/get`)
      .auth(variables.username, variables.password)
      .send(JSONbody)
      .then((res) => {
        expect(res.statusCode).to.eq(200);
        messages = res.body;
      });
  } catch (error) {
    console.log('ERROR: [getMessagesFromQueue] - Could not get messages!');
    console.log(error);
  }
  return messages;
};
