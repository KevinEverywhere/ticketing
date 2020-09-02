import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@sharedcontainerlibrary/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
