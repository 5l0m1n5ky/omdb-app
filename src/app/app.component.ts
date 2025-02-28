import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { AppService } from './app.service';
import { OmdbDetailsResponse } from '../models/omdb-details-response.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { environmet } from '../environments/environment';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MatTableModule, MatSortModule, CdkDropList, CdkDrag],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

    private _liveAnnouncer = inject(LiveAnnouncer);

    query: string = 'nolan';
    movies: any[] = [];
    isLoading: boolean = false;
    tableColumns = ['Poster', 'Title', 'Year', 'Runtime', 'Genre', 'Director', 'Plot'];

    isProcessing: boolean = false;

    searchResultsSubscription: Subscription | undefined;

    omdbMovieData: OmdbDetailsResponse[] = [];

    dataSource = new MatTableDataSource(this.omdbMovieData);

    @ViewChild(MatSort) sort!: MatSort;

    constructor(private appService: AppService) { }

    ngOnInit(): void {
        if (environmet.apiKey === '') {
            alert('Please provide valid OMDB API KEY');
        }
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
    }

    announceSortChange(sortState: Sort) {

        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.tableColumns, event.previousIndex, event.currentIndex);
    }

    onSearchbarChange(event: Event) {

        this.searchResultsSubscription?.unsubscribe();

        this.isLoading = true;

        this.dataSource = new MatTableDataSource();
        this.omdbMovieData = [];

        this.searchResultsSubscription = this.appService.searchResults((event.target as HTMLInputElement).value).subscribe(results => {
            this.dataSource = new MatTableDataSource(results);
            this.omdbMovieData = results;
            this.dataSource.sort = this.sort;
            this.isLoading = false;
        });
    }

    ngOnDestroy(): void {
        this.searchResultsSubscription?.unsubscribe();
    }
}