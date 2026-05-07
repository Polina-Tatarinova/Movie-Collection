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

const BASE_URL = "http://localhost:3000/api-docs";
export class FilmsService implements FilmsAPI {
  async getFilms({ body }: IGetFilmsRequest): IGetFilmsSuccessResponse {
    const response: Response = await fetch(BASE_URL + "/getFilms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return this.checkResponse(response);
  }

  async createFilm({ body }: ICreateFilmRequest): ICreateFilmSuccessResponse {
    const response = await fetch(BASE_URL + "/createFilm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return this.checkResponse(response);
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
    return this.checkResponse(response);
  }

  async deleteFilm({ id }: { id: string }): IDeleteFilmSuccessResponse {
    const response = await fetch(BASE_URL + `/deleteFilm/${id}`, {
      method: "DELETE",
    });
    return this.checkResponse(response);
  }

  async changeFilmStatus({
    body,
    id,
  }: {
    body: { status: EStatus };
    id: string;
  }): IChangeFilmStatusSuccessResponse {
    const response = await fetch(BASE_URL + `/changeFilmStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return this.checkResponse(response);
  }

  private async checkResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errorMessage);
    }
    return data as T;
  }
}

export default new FilmsService();
