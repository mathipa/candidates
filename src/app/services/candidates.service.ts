import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICandidate} from "../interfaces/ICandidate";

const apiURL = 'https://randomuser.me/api/';
@Injectable({
  providedIn: "root"
})
export class CandidatesService {

  constructor(private http: HttpClient) {
  }

  // HttpClient API get() method => Fetch Candidates list
  getCandidates(): Promise<ICandidate[]> {
    return this.http.get(apiURL).toPromise().then((response: any) => {
      return response.results as ICandidate[];
    });
  }

}
