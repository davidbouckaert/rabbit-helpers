export interface Messages {
  body: {
    payload_bytes: number;
    redelivered: boolean;
    exchange: string;
    routing_key: string;
    message_count: number;
    properties: {
      priority: number;
      delivery_mode: number;
      headers: {
        __TypeId__: string;
        b3: string;
        dtdTraceTagInfo: string;
      };
      content_encoding: string;
      content_type: string;
    };
    payload: string;
    payload_encoding: string;
  };
}
