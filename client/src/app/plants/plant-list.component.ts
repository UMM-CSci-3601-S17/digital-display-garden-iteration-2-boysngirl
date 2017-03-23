import { Component, OnInit } from '@angular/core';
import { PlantListService } from "./plant-list.service";
import { Plant } from "./plant";
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'plant-list-component',
    templateUrl: 'plant-list.component.html',
    providers: [ FilterBy ]
})

export class PlantListComponent implements OnInit {
    public plants: Plant[];
    public locations: Plant[];

    private rated: Boolean = false;
    private commented: Boolean = false;

    constructor(private plantListService: PlantListService) {
        // this.plants = this.plantListService.getPlants();
    }

    public getSelectedBed(): string{
        return (<HTMLInputElement>document.getElementById("locationDropdown")).value;
    }

    public populateFlowers(): void{

        var bed = this.getSelectedBed();
        var filterUrl = "?gardenLocation=" + bed;

        this.plantListService.getFlowersByFilter(filterUrl).subscribe (
            plants => this.plants = plants,
            err => {
                console.log(err);
            }
        );
    }

    ngOnInit(): void {
        // this.plantListService.getPlants().subscribe(
        //     plants => this.plants = plants,
        //     err => {
        //         console.log(err);
        //     }
        // );

        this.plantListService.getGardenLocations().subscribe(
            locations => this.locations = locations,
            err => {
                console.log(err);
            }
        );
    }

    private rate(rating: string): void {
        if(!this.rated){
            this.plantListService.ratePlant(this.plants["_id"]["$oid"], rating)
                .subscribe(succeeded => this.rated = succeeded);
        }
    }

    private comment(comment: string): void {
        if(!this.commented){
            if(comment != null) {
                this.plantListService.commentPlant(this.plants["_id"]["$oid"], comment)
                    .subscribe(succeeded => this.commented = succeeded);
            }
        }
    }

}
