import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import BrewLog from '@model/brewlog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewlogService {

  constructor(
    private http: HttpClient
  ) { }

  public loadBrewlogs(): Observable<Array<BrewLog>> {
    return this.http.get<Array<BrewLog>>(environment.apiEndpoint + 'brewlogs');
  }
}
