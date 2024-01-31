import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterBtnComponent, CounterWarningDirective, withCounterState} from "../counter-btn";


@Component({
  selector: 'qair-side-nav',
  standalone: true,
  imports: [CommonModule, CounterBtnComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...withCounterState()],
  hostDirectives: [CounterWarningDirective],
})
export class SideNavComponent {}
