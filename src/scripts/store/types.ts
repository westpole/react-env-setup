export interface NotificationType {
  message: string | undefined;
  reason: string | undefined;
}

export interface AppStore {
  notification: NotificationType;
}
