import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_FAKE_API } from '../../environments/environments';
import { Skill } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class ArticlesFakeApiService {
  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.get<Skill[]>(URL_FAKE_API);
  }

  getSkillById(id:number) {
    return this.http.get<Skill>(`${URL_FAKE_API}/${id}`);
  }

  createSkill(skill:Skill) {
    return this.http.post<Skill>(`${URL_FAKE_API}`, skill);
  }

  updateSkill(skill:Skill) {
    return this.http.post<Skill>(`${URL_FAKE_API}/${skill.id}`, skill);
  }

  deleteSkill(id:number) {
    return this.http.delete<any>(`${URL_FAKE_API}/${id}`);
  }
}
