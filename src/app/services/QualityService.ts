import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class QualityService {
    qualityUrl = 'http://www.mocky.io/v2/5d28754a2c000066003eda63?mocky-delay=3000ms';

    constructor(private http: HttpClient) {}

    getValues() {
        return this.http.get<object>(this.qualityUrl);
    }
}