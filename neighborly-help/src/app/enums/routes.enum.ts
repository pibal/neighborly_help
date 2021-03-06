export enum RoutesEnum {
  App = 'app',
  Auth = 'auth',

  Login = 'login',
  Register = 'register',

  OfferHelp = 'offer-help',
  OfferHelp_SearchTask = 'search',
  OfferHelp_AcceptedTasks = 'offer-help',

  NeedHelp = 'need-help',
  NeedHelp_AddTask = 'add-task',
  NeedHelp_SubmittedTasks = 'submitted-tasks',
}

export const getOfferHelpSearchTaskUrl = `/${RoutesEnum.App}/${RoutesEnum.OfferHelp}/${RoutesEnum.OfferHelp_SearchTask}`;
export const getOfferHelpAcceptedTasksUrl = `/${RoutesEnum.App}/${RoutesEnum.OfferHelp}/${RoutesEnum.OfferHelp_AcceptedTasks}`;

export const getNeedHelpAddTaskUrl = `/${RoutesEnum.App}/${RoutesEnum.NeedHelp}/${RoutesEnum.NeedHelp_AddTask}`;
export const getNeedHelpSubmittedTasksUrl = `/${RoutesEnum.App}/${RoutesEnum.NeedHelp}/${RoutesEnum.NeedHelp_SubmittedTasks}`;
