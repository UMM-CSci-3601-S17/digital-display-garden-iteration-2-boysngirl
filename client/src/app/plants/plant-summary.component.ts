import { Component, Input } from '@angular/core';
import { Plant } from './plant';
import { Comment } from './comment';
import {ActivatedRoute, Params} from '@angular/router';
import {PlantSummaryService} from './plant-summary.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'plant-summary-component',
    templateUrl: 'plant-summary.component.html'
})

export class PlantSummaryComponent {
    // @Input() plant: Plant
    public _plant: Plant;
    public rated: Boolean = false;
    public commented: Boolean = false;
    public currentQuery: string = "";
    public comments: Comment[];

    constructor(private plantService: PlantSummaryService,
                private route: ActivatedRoute,
    ){ }

    /**
     * Whenever a different plant is selected, we update `this.rated` and `this.commented`
     * so that the icons and comment box show up again.
     * @param plant
     */
    @Input()
    set plant(plant: Plant){
        // We check if `plant` is undefined first (when no plant is selected)
        // Then, we check if there has been any change in plants selected.
        if (plant || this._plant["_id"]["$oid"] !== plant["_id"]["$oid"]) {
            this.rated = false;
            this.commented = false;
        }
        this._plant = plant;
    }

    private rate(rating: string): void {
        if(!this.rated){
            this.plantService.ratePlant(this._plant["_id"]["$oid"], rating)
                .subscribe(succeeded => this.rated = succeeded);
        }
    }

    private comment(comment: string): void {
        if(!this.commented){
            if(comment != null) {
                this.plantService.commentPlant(this._plant["_id"]["$oid"], comment)
                    .subscribe(succeeded => {
                        this.commented = succeeded;
                        // Populate the comments - should be inside the outer subscribe to force the order
                        this.plantService.getComments(this._plant["_id"]["$oid"])
                            .subscribe(comments => this.comments = comments);
                    });
            }
        }
    }
}
