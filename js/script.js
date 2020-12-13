'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// const lastFilms2 = prompt('Один из последних просмотренных фильмов', '');
// const mesures2 = +prompt('На сколько его оцените', '');
// personalMovieDB.movies[lastFilms2] = mesures2;


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', '');
//     const b = prompt('На сколько его оцените', '');

//     if (a != null && a != '' && a.length < 50 && b != null && b != '' && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Все ок!');
//     } else {
//         console.log('Неправильно введены данные');
//         i--;
//     }
    
// }
// let count = 0;
// do { 
//     const a = prompt('Один из последних просмотренных фильмов', '');
//     const b = prompt('На сколько его оцените', '');
 

//     if (a != null && a != '' && a.length < 50 && b != null && b != '' && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         count++;
//         console.log('Все ок!');
//     } else {
//         console.log('Неправильно введены данные');
//         count--;
//     }
    
// } while (count < 2);

let count = 0;
while (count < 2) { 
    const a = prompt('Один из последних просмотренных фильмов', '');
    const b = prompt('На сколько его оцените', '');
 

    if (a != null && a != '' && a.length < 50 && b != null && b != '' && b.length < 50) {
        personalMovieDB.movies[a] = b;
        count++;
        console.log('Все ок!');
    } else {
        console.log('Неправильно введены данные');
        count = 0;
    }
    
} 



if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}



console.log(personalMovieDB);
