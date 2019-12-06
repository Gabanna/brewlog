import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import BrewLog from '@model/brewlog.model';
import WebService from './webservice';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class BrewlogService extends WebService {

  constructor(
    private http: HttpClient,
    firebase: FirebaseService
  ) {
    super(firebase);
  }

  public async loadBrewlogs(): Promise<Array<BrewLog>> {
    const headers = await this.createHeader();
    return this.http.get<Array<BrewLog>>(environment.apiEndpoint + 'braulogs', {
      headers
    }).toPromise();
  }
}
