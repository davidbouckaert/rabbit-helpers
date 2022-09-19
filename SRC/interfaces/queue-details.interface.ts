export interface QueueDetails {
  consumer_details: [
    {
      arguments: {};
      channel_details: {
        connection_name: string;
        name: string;
        node: string;
        number: number;
        peer_host: string;
        peer_port: number;
        user: string;
      };
      ack_required: boolean;
      active: boolean;
      activity_status: string;
      consumer_tag: string;
      exclusive: boolean;
      prefetch_count: number;
      queue: {
        name: string;
        vhost: string;
      };
    }
  ];
  arguments: {
    'x-dead-letter-exchange': string;
    'x-dead-letter-routing-key': string;
  };
  auto_delete: boolean;
  backing_queue_status: {
    avg_ack_egress_rate: number;
    avg_ack_ingress_rate: number;
    avg_egress_rate: number;
    avg_ingress_rate: number;
    delta: ['delta', number, number, number, number];
    len: number;
    mirror_seen: number;
    mirror_senders: number;
    mode: 'default';
    next_seq_id: number;
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    target_ram_count: number;
  };
  consumer_capacity: number;
  consumer_utilisation: number;
  consumers: number;
  deliveries: [];
  durable: true;
  effective_policy_definition: {
    'ha-mode': string;
    'ha-sync-mode': string;
  };
  exclusive: boolean;
  exclusive_consumer_tag: string | null;
  garbage_collection: {
    fullsweep_after: number;
    max_heap_size: number;
    min_bin_vheap_size: number;
    min_heap_size: number;
    minor_gcs: number;
  };
  head_message_timestamp: string | null;
  idle_since: '2022-09-19 12:11:39';
  incoming: [];
  memory: number;
  message_bytes: number;
  message_bytes_paged_out: number;
  message_bytes_persistent: number;
  message_bytes_ram: number;
  message_bytes_ready: number;
  message_bytes_unacknowledged: number;
  message_stats: {
    ack: number;
    ack_details: {
      rate: number;
    };
    deliver: number;
    deliver_details: {
      rate: number;
    };
    deliver_get: number;
    deliver_get_details: {
      rate: number;
    };
    deliver_no_ack: number;
    deliver_no_ack_details: {
      rate: number;
    };
    get: number;
    get_details: {
      rate: number;
    };
    get_empty: number;
    get_empty_details: {
      rate: number;
    };
    get_no_ack: 0;
    get_no_ack_details: {
      rate: number;
    };
    publish: number;
    publish_details: {
      rate: number;
    };
    redeliver: number;
    redeliver_details: {
      rate: number;
    };
  };
  messages: number;
  messages_details: {
    rate: number;
  };
  messages_paged_out: number;
  messages_persistent: number;
  messages_ram: number;
  messages_ready: number;
  messages_ready_details: {
    rate: number;
  };
  messages_ready_ram: number;
  messages_unacknowledged: number;
  messages_unacknowledged_details: {
    rate: number;
  };
  messages_unacknowledged_ram: number;
  name: string;
  node: string;
  operator_policy: string | null;
  policy: 'ha';
  recoverable_slaves: [string];
  reductions: number;
  reductions_details: {
    rate: number;
  };
  single_active_consumer_tag: string | null;
  slave_nodes: [string];
  state: string;
  synchronised_slave_nodes: [string];
  type: string;
  vhost: string;
}
