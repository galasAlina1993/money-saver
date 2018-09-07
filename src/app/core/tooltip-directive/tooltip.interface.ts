export type TooltipPosition = 'top' | 'left' | 'right' | 'bottom';

export interface  TooltipInterface {
  position?: TooltipPosition;
  appendToBody?: boolean;
  showOnClick?: boolean;
  template?: any;
  autoShowHide?: boolean;
  isCloseBtn?: boolean;
}
