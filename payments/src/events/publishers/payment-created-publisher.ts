import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@sharedcontainerlibrary/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
