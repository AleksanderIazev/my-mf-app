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
  feedbacks: IFeedbacks[];
  numberOfNewElements: number;
}

interface IFeedbacks {
  text?: string;
  id: number;
  isViewed: boolean;
}
