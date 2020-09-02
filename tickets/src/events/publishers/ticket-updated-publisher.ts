import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@sharedcontainerlibrary/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
