/**
 * описание получаемых данных реста /statistics (используется для данных в StarsContainer)
 * @prop {Assessment[]} assessments - кол-во для каждого ряда звёзд.
 * @prop {number} - средняя оценка
 * @prop {number} - кол-во отзывов
 */

export interface IStatisticsData {
  assessments: IAssessment[];
  average: number;
  reviewsCount: number;
}

interface IAssessment {
  assessment: number;
  count: number;
}

/**
 * описание получаемых данных реста /rating (используется для данных в виджете, а также для уведомление Новое на табах)
 * @prop {number} average - средняя оценка.
 * @prop {number} reviewsCount - колв-отзывов
 * @prop {TNotificationsInfo} notificationInfo - признаки нотификаций.
 */

export interface IRatingData {
  average: number;
  reviewsCount: number;
  notificationInfo: TNotificationsInfo;
}

type TNotificationsKeys = "aboutNew" | "mineNew" | "waitingNew";
type TNotificationsInfo = Record<TNotificationsKeys, boolean>;

/**
 * описание получаемых данных реста /list
 * @prop {IFeedbacks[]} feedbacks - массив с отзывами.
 */

export interface IListData {
  feedbacks: IPartialReview[];
  numberOfElements: number;
  numberOfNewElements: number;
}

// interface IFeedbacks {
//   text?: string;
//   id: number;
//   isViewed: boolean;
// }

export type IPartialReview = Partial<IReview>;

interface IReview {
  id: string;
  text: string;
  assessment: number;
  publicationDateTime: string;
  canLeaveLike: boolean;
  likeCount: string;
  dislikeCount: string;
  like: boolean;
  dislike: boolean;
  answer: IPartialAnswer;
  editable: boolean;
  isViewed: boolean;
}

type IPartialAnswer = Partial<IAnswer>;

interface IAnswer {
  id: string;
  fromUcpId: string;
  fromInn: string;
  fromName: string;
  fromKpp: string;
  text: string;
  canLeaveLike: boolean;
  likeCount: string;
  dislikeCount: string;
  like: boolean;
  dislike: boolean;
  moderationStatus: string;
  moderationStatusName: string;
  editable: boolean;
}

/**
 * Описание приходящих данных с waiting-list
 */

export interface IWaitingData {
  waitingList: IWaitingElement[];
  numberOfElements: number;
  numberOfNewElements: number;
}

interface IWaitingElement {
  name: string;
  id: number | string;
  isViewed: false;
  inn?: number;
  kpp?: number;
}

/**
 * Интерфейс приходящих данных (мои отзывы)
 */

export interface IMineListData {
  mineList: TMineElementPartial[];
}

export type TMineElementPartial = Partial<IMineElement>;

export interface IMineElement {
  name: "Компания 666";
  id: "8ae414e1-b722-4a3d-a0ec-437eef3d3e25";
  text: "Отзыв на компанию 666";
  assessment: 5;
  publicationDateTime: "2024-07-19T00:11:00";
  canLeaveLike: true;
  likeCount: "1";
  dislikeCount: "0";
  like: true;
  dislike: false;
  editable: false;
  isViewed: false;
  answer: IPartialAnswer;
}
