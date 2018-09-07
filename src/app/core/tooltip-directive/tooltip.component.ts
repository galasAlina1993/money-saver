import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {TooltipPosition} from './tooltip.interface';

@Component({
  template : `
    <div class="money-tooltip-container"
         [ngStyle]="tooltipPosition"
         [ngClass]="position"
        #tooltipContainer>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `.money-tooltip-container {
      position: absolute;
      z-index: 999;
      padding: 8px;
      background: #333333;
      color: #fff;
      border-radius: 5px;
    }
    .money-tooltip-container.top:before {
      content: "";
      width: 0%;
      height: 0%;
      top: 100%;
      left: 50%; right: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      border-top: 12px solid #333333;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
    }`
  ]
})

export class MoneyTooltipComponent {
  public position: TooltipPosition = 'top';
  constructor(@Inject('tooltipConfig') private config) {
  }

  @ViewChild('tooltipContainer', { read: ElementRef }) private tooltipContainer;

  public get tooltipPosition() {
    const clientRectInject = this.config.host.getBoundingClientRect();
    const { height, width } = this.tooltipContainer.nativeElement.getBoundingClientRect();
    switch (this.position) {
      case 'top':
        return {
          'top.px': clientRectInject.top - height - 8,
          'left.px': this.calcLeft(clientRectInject.right, clientRectInject.width, width)
        }
    }
  }

  private calcLeft(rightInject: number, widthInject: number, refWidth: number): number {
    return (rightInject - (widthInject / 2)) - (refWidth / 2);
  }
}
