import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';

@Component({
  selector: 'qair-counter-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-btn.component.html',
  styleUrl: './counter-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterBtnComponent {
  constructor(readonly counterService: CounterService) {}
}
