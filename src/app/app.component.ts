import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planet-express';
  isAddMode = false;

  handleToggleAddItem(): void {
    this.isAddMode = !this.isAddMode;
  }
}
