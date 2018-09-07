import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  ComponentRef,
  ViewContainerRef, Injector, Renderer2, TemplateRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MoneyTooltipComponent } from './tooltip.component';
import { TooltipInterface, TooltipPosition } from './tooltip.interface';

@Directive({
  selector: '[money-tooltip]',
})
export class ToolTipDirective {
  // Определим опции согласно интерфейсу;
  @Input() public tooltipOptions: TooltipInterface = this.initialOptions;
  @Input() public showOnClick: boolean = this.tooltipOptions.showOnClick;
  @Input() public autoShowHide: boolean = this.tooltipOptions.autoShowHide;
  @Input() public appendToBody: boolean = this.tooltipOptions.appendToBody;
  @Input() public template: any = this.tooltipOptions.template;
  @Input() public isCloseBtn: boolean = this.tooltipOptions.isCloseBtn;
  @Input() public position: TooltipPosition = this.tooltipOptions.position;

  private isClear: boolean = true;
  private componentRef: ComponentRef<MoneyTooltipComponent>;
  private get initialOptions(): TooltipInterface {
    return {
      template: '',
      autoShowHide: true,
      showOnClick: false,
      appendToBody: false,
      isCloseBtn: false,
      position: 'top'
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private renderer : Renderer2,
              private ef: ElementRef,
              @Inject(DOCUMENT) private document: any) {}

  @HostListener('mouseover', ['$event']) onMouseHover(event: MouseEvent) {
    if (!this.isClear || this.showOnClick) {
      return;
    }
    this.showTooltip();
  }
  @HostListener('mouseleave') hideTooltip() {
    if (this.componentRef && this.autoShowHide) {
      this.componentRef.destroy(); //уничтожаем сам компонент
      this.isClear = true;
    }
  }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    if (!this.showOnClick) {
      return;
    }
    if(this.componentRef && this.autoShowHide && this.isClear) {
      this.componentRef.destroy(); //уничтожаем сам компонент
      this.isClear = true;
      return;
    }
    this.showTooltip();
  }


  private showTooltip() {
    let componentFactory: any;
    const injector = Injector.create({
      providers: [
        {
          provide: 'tooltipConfig',
          useValue: {
            host: this.ef.nativeElement
          }
        }
      ]
    });
    componentFactory = this.componentFactoryResolver.resolveComponentFactory(MoneyTooltipComponent); // сюда мы вставим название компонента для его создания
    this.componentRef = this.viewContainerRef.createComponent(componentFactory, 0, injector, this.generateNgContent());
    //в тело страницы нам надо вставить созданный нами новый элемент
    if(this.tooltipOptions.appendToBody) {
      this.document.querySelector('body').appendChild(this.componentRef.location.nativeElement);
    } else {
      this.ef.nativeElement.appendChild(this.componentRef.location.nativeElement);
    }
    this.componentRef.instance.position = this.position;
    this.isClear = false; //помечаем что элемент уже создан
  }

  private generateNgContent() {
    if ( typeof this.template === 'string' ) {
      const element = this.renderer.createText(this.template);
      return [ [ element ] ];
    }

    if ( this.template instanceof TemplateRef ) {
      const context = {};
      const viewRef = this.template.createEmbeddedView(context);
      // In earlier versions, you may need to add this line
      // this.appRef.attachView(viewRef);
      return [ viewRef.rootNodes ];
    }
  }
}
