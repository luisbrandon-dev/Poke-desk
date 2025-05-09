import { Component } from '@angular/core';
import { CardsContainerComponent } from "../../shared/components/cards-container/cards-container.component";
import { FiltersContainerComponent } from '../../shared/components/filters-container/filters-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsContainerComponent, FiltersContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
