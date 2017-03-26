import { Component, Input } from '@angular/core';
import { Plant } from './plant';

@Component({
    selector: 'plant-summary-component',
    templateUrl: 'plant-summary.component.html'
})

export class PlantSummaryComponent {
    @Input() plant: Plant
}
