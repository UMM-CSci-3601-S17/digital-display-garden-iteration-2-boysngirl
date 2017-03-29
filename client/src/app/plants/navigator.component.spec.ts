import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Plant } from './plant';
import { NavigatorComponent } from "./navigator.component";
import { NavigatorService } from "./navigator.service";
import { PlantSummaryComponent } from "./plant-summary.component";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Navigator component", () => {

    let navList: NavigatorComponent;
    let fixture: ComponentFixture<NavigatorComponent>;

    let navigatorServiceStub: {
        getGardenLocations: () => Observable<Plant[]>
    };

    beforeEach(() => {
        // stub NavigatorService for test purposes
        navigatorServiceStub = {
            getGardenLocations: () => Observable.of([
                {
                    id: "chris_id",
                    plantID: "Chris",
                    plantType: "type",
                    commonName: "commonName",
                    cultivar: "cultivar",
                    source: "source",
                    gardenLocation: "locationA",
                    year: 2017,
                    pageURL: "URL",
                    plantImageURLs: ["stringa", "stringb"],
                    recognitions: ["stringa", "stringb"]
                },
                {
                    id: "chris_id",
                    plantID: "Chris",
                    plantType: "type",
                    commonName: "commonName",
                    cultivar: "cultivar",
                    source: "source",
                    gardenLocation: "locationA",
                    year: 2017,
                    pageURL: "URL",
                    plantImageURLs: ["stringa", "stringb"],
                    recognitions: ["stringa", "stringb"]
                },
                {
                    id: "chris_id",
                    plantID: "Chris",
                    plantType: "type",
                    commonName: "commonName",
                    cultivar: "cultivar",
                    source: "source",
                    gardenLocation: "locationA",
                    year: 2017,
                    pageURL: "URL",
                    plantImageURLs: ["stringa", "stringb"],
                    recognitions: ["stringa", "stringb"]
                }
            ])
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ NavigatorComponent, PlantSummaryComponent ],
            // providers:    [ NavigatorService ]  // NO! Don't provide the real service!
            // Provide a test-double instead
            providers:    [ { provide: NavigatorService, useValue: navigatorServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(NavigatorComponent);
            navList = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it("contains all the plants", () => {
        expect(navList.locations.length).toEqual(3);
    });
    it("contains a plant ID 'Chris'", () => {
        expect(navList.locations.some((plant: Plant) => plant.plantID === "Chris" )).toBe(true);
    });

    it("contain a commonName named 'commonName'", () => {
        expect(navList.locations.some((plant: Plant) => plant.commonName === "commonName" )).toBe(true);
    });

    it("doesn't contain a plant whose commonName is 'Santa'", () => {
        expect(navList.locations.some((plant: Plant) => plant.commonName === "Santa" )).toBe(false);
    });

    it("has three plants that are in year 2017", () => {
        expect(navList.locations.filter((plant: Plant) => plant.year === 2017).length).toBe(3);
    });
});