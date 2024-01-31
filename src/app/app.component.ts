import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {LayoutComponent} from "./ui/layout";
import {CounterBtnComponent} from "./ui/counter-btn";
import {HeaderComponent} from "./ui/header/header.component";
import {FooterComponent} from "./ui/footer/footer.component";
import {SideNavComponent} from "./ui/side-nav/side-nav.component";

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutComponent,
    CounterBtnComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ],
  selector: 'qair-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
