import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@sharedcontainerlibrary/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
