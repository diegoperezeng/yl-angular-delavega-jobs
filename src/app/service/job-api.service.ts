import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobApiService {
  
  private urlCompanies = 'https://landing.jobs/api/v1/companies';
  private urlJobs = 'https://landing.jobs/api/v1/companies/[id]/jobs.json';

  constructor(
    private http: HttpClient
  ) { }

  get apiListCompanies():Observable<any> {
    return this.http.get<any>(this.urlCompanies).pipe(
      tap( data => console.log(data) )
    )
  }



}
