export enum RoutesEnum {
  Auth = 'auth',

  OfferHelp = 'offer-help',
  OfferHelp_SearchTask = 'search',
  OfferHelp_AcceptedTasks = 'offer-help',

  NeedHelp = 'need-help',
  NeedHelp_AddTask = 'add-task',
  NeedHelp_SubmittedTasks = 'submitted-tasks',
}

export const getOfferHelpSearchTaskUrl = `/${RoutesEnum.OfferHelp}/${RoutesEnum.OfferHelp_SearchTask}`;
export const getOfferHelpAcceptedTasksUrl = `/${RoutesEnum.OfferHelp}/${RoutesEnum.OfferHelp_AcceptedTasks}`;

export const getNeedHelpAddTaskUrl = `/${RoutesEnum.NeedHelp}/${RoutesEnum.NeedHelp_AddTask}`;
export const getNeedHelpSubmittedTasksUrl = `/${RoutesEnum.NeedHelp}/${RoutesEnum.NeedHelp_SubmittedTasks}`;
