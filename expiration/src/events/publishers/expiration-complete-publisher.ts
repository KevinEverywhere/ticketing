import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from '@sharedcontainerlibrary/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
