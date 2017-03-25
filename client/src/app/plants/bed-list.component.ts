import { Component, OnInit } from '@angular/core';
import { BedListService } from "./bed-list.service";
import { FilterBy } from "./filter.pipe";
import { Plant } from './plant';

@Component({
    selector: 'bed-list-component',
    templateUrl: 'bed-list.component.html'
    // providers: [ FilterBy ]
})

export class BedListComponent implements OnInit {
    public locations: Plant[];

    constructor(private bedListService: BedListService) {
        // this.plants = this.plantListService.getPlants();
    }

    ngOnInit(): void {
        this.bedListService.getGardenLocations().subscribe(
            locations => this.locations = locations,
            err => {
                console.log(err);
            }
        );
    }
}
