import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CreateComponent } from './Component/create/create.component';
import { UpdateComponent } from './Component/update/update.component';
import { ListComponent } from './Component/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    HttpClientModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'services';
}
