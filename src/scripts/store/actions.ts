export interface Action {
  type: string;
  dataText?: string;
  dataNumber?: number;
  dataMap?: { [key: string]: any };
  dataList?: any[];
  reason?: string;
}

export function showMessage(message: string): Action {
  return {
    type: 'SHOW_MESSAGE',
    dataText: message,
    reason: 'info',
  };
}
