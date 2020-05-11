import { HttpHeaders } from '@angular/common/http';

export default class WebService {

    async createHeader(): Promise<HttpHeaders> {
        return new HttpHeaders();
    }
}