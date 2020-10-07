import {Component, OnInit, Output} from '@angular/core';
import {PARTS} from '../Data/Parts';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {

  @Output()
  public toggleAddItemMenu = new EventEmitter();

  parts = PARTS;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDecrementQuantity(id: string): void {
    this.parts.filter(p => p.id === id)
      .map(p => p.quantity--);
  }

  onSetQuantity(value: string, id: string): void {
    this.parts.filter(p => p.id === id)
      .map(p => p.quantity = Number(value));
  }

  onRemovePart(id: string): void {
    this.parts = this.parts.filter(p => p.id !== id);
  }

  onAddPart($event): void {
    this.toggleAddItemMenu.emit($event);
  }
}
