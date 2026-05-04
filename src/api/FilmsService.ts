import type { FilmsAPI, EStatus } from "@yp-mentor/films-server-types";
import type {
  IGetFilmsRequest,
  IGetFilmsSuccessResponse,
  ICreateFilmRequest,
  ICreateFilmSuccessResponse,
  IUpdateFilmRequest,
  IUpdateFilmSuccessResponse,
  IDeleteFilmSuccessResponse,
  IChangeFilmStatusSuccessResponse,
} from "./types";

const BASE_URL = "http://localhost:3000";



class FilmsService implements FilmsAPI {
  async getFilms({ body }: IGetFilmsRequest): IGetFilmsSuccessResponse {
    const response = await fetch(BASE_URL + "/getFilms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  async createFilm({ body }: ICreateFilmRequest): ICreateFilmSuccessResponse {
    const response = await fetch(BASE_URL + "/createFilm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  async updateFilm({
    body,
    id,
  }: IUpdateFilmRequest): IUpdateFilmSuccessResponse {
    const response = await fetch(BASE_URL + `/updateFilm/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  async deleteFilm({ id }: { id: string }): IDeleteFilmSuccessResponse {
    const response = await fetch(BASE_URL + `/deleteFilm/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }

  async changeFilmStatus({
    body,
    id,
  }: {
    body: { status: EStatus };
    id: string;
  }): IChangeFilmStatusSuccessResponse{
    const response = await fetch(BASE_URL + `/changeFilmStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return response.json();
  }
}
