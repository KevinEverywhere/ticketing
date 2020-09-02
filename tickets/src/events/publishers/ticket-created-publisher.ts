import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@sharedcontainerlibrary/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
