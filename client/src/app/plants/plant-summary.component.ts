import { Component, Input } from '@angular/core';
import { Plant } from './plant';
import {ActivatedRoute, Params} from '@angular/router';
import {PlantSummaryService} from './plant-summary.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'plant-summary-component',
    templateUrl: 'plant-summary.component.html'
})

export class PlantSummaryComponent {
    @Input() plant: Plant
    private rated: Boolean = false;
    private commented: Boolean = false;
    private currentQuery: string = "";

    constructor(private plantService: PlantSummaryService,
                private route: ActivatedRoute,
    ){ }

    private rate(rating: string): void {
        if(!this.rated){
            this.plantService.ratePlant(this.plant["_id"]["$oid"], rating)
                .subscribe(succeeded => this.rated = succeeded);
        }
    }

    private comment(comment: string): void {
        if(!this.commented){
            if(comment != null) {
                this.plantService.commentPlant(this.plant["_id"]["$oid"], comment)
                    .subscribe(succeeded => this.commented = succeeded);
            }
        }
    }
}
