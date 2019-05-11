import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsDirective } from '@profeed/core/forms/control-errors.directive';
import { ControlErrorComponent } from '@profeed/core/forms/control-error/control-error.component';
import { ControlErrorContainerDirective } from '@profeed/core/forms/control-error-container.directive';
import { FormSubmitDirective } from '@profeed/core/forms/form-submit.directive';

@NgModule({
  declarations: [
    ControlErrorsDirective,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective,
  ],
  exports: [
    ControlErrorsDirective,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective,
  ],
  entryComponents: [
    ControlErrorComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProFeedFormsModule {
}
