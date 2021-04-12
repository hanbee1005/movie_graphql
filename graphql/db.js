let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 10
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 9
    },
    {
        id: 3,
        name: "Logan",
        score: 4
    }
];

// 전체 영화 조회하기
export const getMovies = () => movies;

// id 로 영화 조회하기
export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

// 해당 id 영화 지우기
export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
}