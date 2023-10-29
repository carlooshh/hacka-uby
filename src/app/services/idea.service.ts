import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  constructor(private http: HttpClient) {}

  createIdea(idea: {
    name: string;
    email: string;
    challenge: string;
    solution: string;
    gain: string;
  }): Promise<string | undefined> {
    const { name, email, challenge, solution, gain } = idea;

    return firstValueFrom(
      this.http.post<string>(`${environment.apiUrl}/api/idea`, {
        userName: name,
        userEmail: email,
        challenge,
        solution,
        gain,
      })
    );
  }
  getIds(challenge: string, status: string): Promise<string | undefined> {
    let params = new HttpParams();
    params = params.set('challenge', challenge);
    params = params.set('status', status);
    return firstValueFrom(
      this.http.get<string>(`${environment.apiUrl}/api/idea`,{ params: params })
    );
  }
}
