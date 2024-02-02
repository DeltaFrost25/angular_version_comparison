import { ChangeDetectionStrategy, Component } from '@angular/core';

//// import { AccordionModule } from 'primeng/accordion';
// import { AutoCompleteModule } from 'primeng/autocomplete';
// import { AvatarModule } from 'primeng/avatar';
// import { AvatarGroupModule } from 'primeng/avatargroup';
// import { BadgeModule } from 'primeng/badge';
// import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { ButtonModule } from 'primeng/button';
// import { CalendarModule } from 'primeng/calendar';
// import { CarouselModule } from 'primeng/carousel';
// import { CascadeSelectModule } from 'primeng/cascadeselect';
// import { ChartModule } from 'primeng/chart';
// import { CheckboxModule } from 'primeng/checkbox';
// import { ChipModule } from 'primeng/chip';
// import { ChipsModule } from 'primeng/chips';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { ConfirmPopupModule } from 'primeng/confirmpopup';
// import { ColorPickerModule } from 'primeng/colorpicker';
// import { ContextMenuModule } from 'primeng/contextmenu';
// import { DataViewModule } from 'primeng/dataview';
// import { VirtualScrollerModule } from 'primeng/virtualscroller';
// import { DialogModule } from 'primeng/dialog';
// import { DividerModule } from 'primeng/divider';
// import { DockModule } from 'primeng/dock';
// import { DragDropModule } from 'primeng/dragdrop';
// import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    /*
    // AvatarModule,
    // AvatarGroupModule,
    // AccordionModule,
    // AutoCompleteModule,
    // BadgeModule,
    // BreadcrumbModule,
    // ButtonModule,
    // CalendarModule,
    // CarouselModule,
    // CascadeSelectModule,
    // ChartModule,
    // CheckboxModule,
    // ChipsModule,
    // ChipModule,
    // ColorPickerModule,
    // ConfirmDialogModule,
    // ConfirmPopupModule,
    // ContextMenuModule,
    // VirtualScrollerModule,
    // DataViewModule,
    // DialogModule,
    // DividerModule,
    // DockModule,
    // DragDropModule,
    // DropdownModule, */
  ],
  template: ` <p>home works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
