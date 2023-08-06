
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