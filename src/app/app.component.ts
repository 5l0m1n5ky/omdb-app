import { Component, AfterViewInit, ViewChild, inject } from '@angular/core';
import { AppService } from './app.service';
import { OmdbDetailsResponse } from '../models/omdb-details-response.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MatTableModule, MatSortModule],
    templateUrl: './app.component.html'
})
export class AppComponent {

    private _liveAnnouncer = inject(LiveAnnouncer);

    query: string = 'nolan';
    movies: any[] = [];
    isLoading: boolean = false;
    tableColumns = ['Poster', 'Title', 'Year', 'Runtime', 'Genre', 'Director', 'Plot'];

    omdbMovieData: OmdbDetailsResponse[] = [
        {
            Title: "Facing Nolan",
            Year: "2022",
            Rated: "TV-14",
            Released: "12 Mar 2022",
            Runtime: "102 min",
            Genre: "Documentary, Biography, Sport",
            Director: "Bradley Jackson",
            Writer: "Bradley Jackson",
            Actors: "Alan Ashby, Buzzie Bavasi, Craig Biggio",
            Plot: "In the world of Major League Baseball no one has created a mythology like Nolan Ryan. Told from the point of view of the hitters who faced him and the teammates who revered him, Facing Nolan is the definitive documentary of a Texa...",
            Language: "English",
            Country: "United States",
            Awards: "1 nomination total",
            Poster: "https://m.media-amazon.com/images/M/MV5BNWQ0ZjAwZDYtNTM0NS00Y2I4LWEzODYtZDgyMTZlZjUzYmExXkEyXkFqcGc@._V1_SX300.jpg",
            Ratings: [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "96%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "73/100"
                }
            ],
            Metascore: "73",
            imdbRating: "7.9",
            imdbVotes: "1,922",
            imdbID: "tt17511190",
            Type: "movie",
            DVD: "N/A",
            BoxOffice: "$405,797",
            Production: "N/A",
            Website: "N/A",
            Response: "True"
        },
        {
            "Title": "The Director's Notebook: The Cinematic Sleight of Hand of Christopher Nolan",
            "Year": "2007",
            "Rated": "N/A",
            "Released": "23 May 2007",
            "Runtime": "20 min",
            "Genre": "Documentary, Short",
            "Director": "Mark Rance",
            "Writer": "N/A",
            "Actors": "Christopher Nolan, Hugh Jackman, Rebecca Hall, Christopher Priest",
            "Plot": "N/A",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMWZkYWYzMGUtYzdhZS00MGQwLWE1ODAtYzcwNzc2YmE3NzNkXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.9/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.9",
            "imdbVotes": "76",
            "imdbID": "tt1035445",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "180°: Christopher Nolan Interviews Al Pacino",
            "Year": "2002",
            "Rated": "N/A",
            "Released": "15 Oct 2002",
            "Runtime": "17 min",
            "Genre": "Documentary, Short",
            "Director": "Richard Ingber",
            "Writer": "N/A",
            "Actors": "Christopher Nolan, Al Pacino",
            "Plot": "Director Christopher Nolan conducts an interview with legendary actor Al Pacino. The title limits what is done here, since Pacino probably asks Nolan more questions than Nolan asks Pacino. ...",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "N/A",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.6/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.6",
            "imdbVotes": "69",
            "imdbID": "tt0357402",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "The Disappearance of McKinley Nolan",
            "Year": "2010",
            "Rated": "Not Rated",
            "Released": "01 Oct 2010",
            "Runtime": "79 min",
            "Genre": "Documentary",
            "Director": "Henry Corra",
            "Writer": "N/A",
            "Actors": "N/A",
            "Plot": "Private McKinley Nolan vanished forty years ago in Vietnam on the Cambodian frontier. Some say he was captured, some say he was a traitor, some even say he was an American operative. The US Army officially claims he was radicalize...",
            "Language": "English",
            "Country": "United States",
            "Awards": "1 nomination",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAzOTcyNzk5M15BMl5BanBnXkFtZTgwMDUwMzA2MDE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.7/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.7",
            "imdbVotes": "43",
            "imdbID": "tt1335988",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Every Christopher Nolan Movie Ranked",
            "Year": "2024",
            "Rated": "N/A",
            "Released": "23 Apr 2024",
            "Runtime": "59 min",
            "Genre": "News",
            "Director": "James Phyrillas",
            "Writer": "James Phyrillas",
            "Actors": "James Phyrillas",
            "Plot": "Schaff goes down the rabbit hole of Christopher Nolan's filmography and discovers a dark secret",
            "Language": "N/A",
            "Country": "United States",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDA4OGU5OTEtOTAwYi00NTU4LWFiOGEtZTMxOWUzNDBjNTEwXkEyXkFqcGdeQXVyMTcwNTQ2ODE1._V1_SX300.jpg",
            "Ratings": [],
            "Metascore": "N/A",
            "imdbRating": "N/A",
            "imdbVotes": "15",
            "imdbID": "tt32204353",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Christopher Nolan & Richard Donner: A Conversation",
            "Year": "2013",
            "Rated": "N/A",
            "Released": "24 Sep 2013",
            "Runtime": "N/A",
            "Genre": "Documentary, Short",
            "Director": "N/A",
            "Writer": "N/A",
            "Actors": "Richard Donner, Christopher Nolan",
            "Plot": "N/A",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDY4YzNkOWUtN2U5NC00MTJiLWI3MmQtYmU4YjA5NzQ4MjU3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjE0OTE2MDY@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.3/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.3",
            "imdbVotes": "10",
            "imdbID": "tt3138288",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        }
    ];

    dataSource = new MatTableDataSource(this.omdbMovieData);

    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    announceSortChange(sortState: Sort) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    constructor(private appService: AppService) { }

}
