import { Injectable } from "@angular/core";
import { environmet } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable, of, switchMap } from "rxjs";
import { OmdbDetailsResponse } from "../models/omdb-details-response.model";
import { Movie } from "../models/movie.model";
import { OmdbResponse } from "../models/omdb-response.model";

@Injectable({ providedIn: 'root' })

export class AppService {

    private apiUrl = environmet.apiUrl;
    private apiKey = environmet.apiKey;

    constructor(private httpClient: HttpClient) { }

    searchResults(condition: string): Observable<OmdbDetailsResponse[]> {
        return this.httpClient.get<OmdbResponse>(`${this.apiUrl}?apikey=${this.apiKey}&s=${condition}`).pipe(
            switchMap(response => {

                if (!response.Search) return of([]);

                let detailedRequests: Observable<OmdbDetailsResponse>[] = response.Search.map((movieDetails: Movie) =>
                    this.httpClient.get<OmdbDetailsResponse>(`${this.apiUrl}?apikey=${this.apiKey}&i=${movieDetails.imdbID}`)
                );

                return forkJoin(detailedRequests);
            })
        );
    }
}