import { Movie } from "./movie.model";

export interface OmdbResponse {
    Search: Movie[];
    totalResults: number,
    Response: boolean
}
