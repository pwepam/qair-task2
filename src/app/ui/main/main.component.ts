import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterBtnComponent, CounterProviderDirective, CounterWarningDirective} from "../counter-btn";


@Component({
  selector: 'qair-main',
  standalone: true,
  imports: [
    CommonModule,
    CounterBtnComponent,
    CounterProviderDirective,
    CounterWarningDirective,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
