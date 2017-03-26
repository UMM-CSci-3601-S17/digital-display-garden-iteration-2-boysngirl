import { Component, OnInit } from '@angular/core';
import { NavigatorService } from "./navigator.service";
import { FilterBy } from "./filter.pipe";
import { Plant } from './plant';

@Component({
    selector: 'navigator-component',
    templateUrl: 'navigator.component.html'
    // providers: [ FilterBy ]
})

export class NavigatorComponent implements OnInit {
    public locations: Plant[];

    constructor(private bedListService: NavigatorService) {
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