import { ActivityType } from '../../../../model/activity-type';

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
