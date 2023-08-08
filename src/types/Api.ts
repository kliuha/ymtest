export interface Movie {
    additional: string;
    description: string;
    genre: number;
    id: number;
    image: string;
    name: string;
}

export interface MoviesList {
    data: Movie[];
    error_code: number;
    error_message: string
}

export interface MovieSessions {
    daytime: string;
    showdate: string
}

export interface MovieSessionsList {
    [key: string]: MovieSessions[];
}

export interface MovieShows {
    data: MovieSessionsList;
    error_code: number;
    error_message: string
}

export interface BookingData {
    movie_id: number;
    row: number;
    seat: number;
    showdate: string;
    daytime: string;
}

export interface BookingResponse {
    data: BookingData & { ticketkey: string };
    error_code: number;
    error_message: string
}

export interface SeatRow {
    row: number;
}

export interface SeatPlace {
    seat: number;
    is_free: boolean;
}

export interface SeatsAndRow {
    [key: string]: SeatRow | SeatPlace[];
}

export interface SessionSeats {
    data: SeatsAndRow[];
    error_code: number;
    error_message: string

}