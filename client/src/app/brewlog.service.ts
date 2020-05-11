import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { BrewLog } from '@app/model';
import WebService from './webservice';

@Injectable({
  providedIn: 'root'
})
export class BrewlogService extends WebService {

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  public async loadBrewlogs(): Promise<Array<BrewLog>> {
    const headers = await this.createHeader();
    return environment.isMock(BrewLog) ? this.loadFromFile(headers) : this.loadFromServer(headers);
  }

  private loadFromFile(headers: HttpHeaders): Promise<Array<BrewLog>> {
    return this.http.get<Array<BrewLog>>('/assets/data/brewlogs.json')
    .toPromise();
  }

  private loadFromServer(headers: HttpHeaders):Promise<Array<BrewLog>> {
    return this.http.get<Array<BrewLog>>(environment.apiEndpoint + 'braulogs', {
      headers
    }).toPromise();
  }
}
