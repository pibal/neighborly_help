import { ActivityType } from '../../../../model/activity-type';
import { TaskState } from '../../../../model/task/task-state';

export function translateBoolean(bool: boolean) {
  return bool ? 'Tak' : 'Nie';
}

export function translateTypeToPolish(type: ActivityType) {
  switch (type) {
    case ActivityType.PET:
      return 'Wyprowadzić zwierze';
    case ActivityType.RUBBISH:
      return 'Wyrzucić śmieci';
    case ActivityType.SHOPPING:
      return 'Zrobić zakupy';
  }
}

export function translateStateToPolish(state: TaskState) {
  switch (state) {
    case TaskState.RESIGNED:
      return 'Porzucone';
    case TaskState.FAILED:
      return 'Błędne';
    case TaskState.DONE:
      return 'Wykonane';
    case TaskState.ACCEPTED:
      return 'Zaakceptowane';
    case TaskState.REQUESTED:
      return 'Oczekujący';
    case TaskState.CANCELED:
      return 'Anulowane';
    case TaskState.DELETED:
      return 'Usunięte';
  }
}
