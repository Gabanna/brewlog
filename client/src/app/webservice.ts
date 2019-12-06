import { FirebaseService } from './firebase.service';
import { HttpHeaders } from '@angular/common/http';
import { User } from 'firebase';

export default class WebService {

    private firebase: FirebaseService;

    constructor(firebase: FirebaseService) {
        this.firebase = firebase;
    }

    async createHeader(): Promise<HttpHeaders> {
        const token = await this.firebase.getToken();
        return new HttpHeaders({Authorization: token});
    }
}