import type { FilmsAPI } from "@yp-mentor/films-server-types";
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
import {
  EGenre,
  EStatus,
  ESortOrder,
  ESortField,
} from "@yp-mentor/films-server-types";


const BASE_URL = "http://localhost:3000";

export default class FilmsService implements FilmsAPI {
  
  async getFilms({ body }: IGetFilmsRequest): IGetFilmsSuccessResponse{
      const response: Response = await fetch(BASE_URL + "/getFilms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      return checkResponse<IGetFilmsSuccessResponse>(response)
    }

  async createFilm({ body }: ICreateFilmRequest): ICreateFilmSuccessResponse {
    try {
      const response = await fetch(BASE_URL + "/createFilm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        alert("Ошибка сервера");
      }
      return response.json();
    } catch (err) {
      const message = getErrorMessage(err);
      throw new Error(`Не удалось создать фильм ${message}`, { cause: err });
    }
  }

  async updateFilm({
    body,
    id,
  }: IUpdateFilmRequest): IUpdateFilmSuccessResponse {
    try {
      const response = await fetch(BASE_URL + `/updateFilm/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        alert("Ошибка сервера");
      }
      return response.json();
    } catch (err) {
      const message = getErrorMessage(err);
      throw new Error(`Не удалось обновить фильм ${id}, ${message}`, {
        cause: err,
      });
    }
  }

  async deleteFilm({ id }: { id: string }): IDeleteFilmSuccessResponse {
    try {
      const response = await fetch(BASE_URL + `/deleteFilm/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        alert("Ошибка сервера");
      }
      return response.json();
    } catch (err) {
      const message = getErrorMessage(err);
      throw new Error(`Не удалось удалить фильм ${id}, ${message}`, {
        cause: err,
      });
    }
  }

  async changeFilmStatus({
    body,
    id,
  }: {
    body: { status: EStatus };
    id: string;
  }): IChangeFilmStatusSuccessResponse {
    try {
      const response = await fetch(BASE_URL + `/changeFilmStatus/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        alert("Ошибка сервера");
      }
      return response.json();
    } catch (err) {
      const message = getErrorMessage(err);
      throw new Error(`Не удалось поменять фильм ${id}, ${message}`, {
        cause: err,
      });
    }
  }


  async checkResponse<T>(response: Response): Promise<T>{
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.errorMessage);
      }
      return data as T
  }}

export default new FilmsService();
