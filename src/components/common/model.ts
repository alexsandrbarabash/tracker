export interface ActivityStyleProps {
  index: number;
  active: boolean;
}

export interface ActivitiesObject {
  active: boolean;
  title: string;
  time: number;
  startTime?: number;
  updateTime?: number | null;
}

export interface AddActivityProps {
  onAdd: (activity: ActivitiesObject) => void;
}

export interface ActivityProps extends ActivityStyleProps, ActivitiesObject {
  onRemove: (indexRemoveElement: number) => void;
  onActiveDisactive: (indexActiveDisactive: number) => void;
  width: number;
}
