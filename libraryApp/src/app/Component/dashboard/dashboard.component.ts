import { environment } from 'src/app/environments/environment';
import { Movie } from './../../Model/movie';
import { DataService } from './../../Service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  latestMovie: any;
  popularMovies !: Movie;
  nowPlayingMovies !: Movie;
  topRatedMovies !: Movie;
  upComingMovies !: Movie;
  trendingMovies !: Movie;
  originals !: Movie; 
 
  constructor(private DataService: DataService) { }

  ngOnInit(): void {

  }

  getLatestMovie() {
    this.DataService.getLatestMovie().subscribe(res => {
      this.latestMovie = res;
    }, err => {
      console.log('Not able to get latest movie.', err);
    })
  }

  getPopularMovies() {
    this.DataService.getPopularMovies().subscribe(res => {
      this.popularMovies = this.modifyData(res);
    }, err => {
      console.log('Error while fetching popular movies.', err);
    })
  }

  modifyData(movies: Movie) : Movie {
    if(movies.results) {
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+element.backdrop_path+'api_key?'+environment.api_key
        if(!element.title) {
          element.title = element?.name;
        }
      })
    }
    return movies;
  }
}
