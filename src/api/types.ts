import type { FilmsAPI } from "@yp-mentor/films-server-types";

export type IGetFilmsRequest = Parameters<FilmsAPI["getFilms"]>[0];
export type IGetFilmsSuccessResponse = ReturnType<FilmsAPI["getFilms"]>;

export type ICreateFilmRequest = Parameters<FilmsAPI["createFilm"]>[0];
export type ICreateFilmSuccessResponse = ReturnType<FilmsAPI["createFilm"]>;

export type IUpdateFilmRequest = Parameters<FilmsAPI["updateFilm"]>[0];
export type IUpdateFilmSuccessResponse = ReturnType<FilmsAPI["updateFilm"]>;

export type IDeleteFilmSuccessResponse = ReturnType<FilmsAPI["deleteFilm"]>;

export type IChangeFilmStatusSuccessResponse = ReturnType<FilmsAPI["changeFilmStatus"]>;