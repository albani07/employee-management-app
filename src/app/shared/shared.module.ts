import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ManagerDirective } from './directives/manager.directive';
import { PositionUppercasedPipe } from './pipes/position-uppercased.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    ManagerDirective,
    PositionUppercasedPipe
  ],
  exports: [
    HeaderComponent,
    ManagerDirective,
    PositionUppercasedPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
