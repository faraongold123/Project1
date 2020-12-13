"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilms1 = prompt('Один из последних просмотренных фильмов', '');
const mesures1 = +prompt('На сколько его оцените', '');

const lastFilms2 = prompt('Один из последних просмотренных фильмов', '');
const mesures2 = +prompt('На сколько его оцените', '');

personalMovieDB.movies[lastFilms1] = mesures1;
personalMovieDB.movies[lastFilms2] = mesures2;

console.log(personalMovieDB);
