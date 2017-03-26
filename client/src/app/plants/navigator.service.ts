import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { Plant } from './plant';

@Injectable()
export class NavigatorService {
    private plantUrl: string = API_URL + "plants";

    constructor(private http:Http) { }

    getGardenLocations(): Observable<Plant[]> {
        return this.http.request(API_URL + "/gardenLocations").map(res => res.json());
    }

    getFlowersByFilter(filterUrl: string): Observable<Plant[]> {
        return this.http.request(this.plantUrl + filterUrl).map(res => res.json());
    }
}