import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Skill } from '../models/types';
import { CallModuleApi } from '../modules/call.api.module';
import { ArticlesFakeApiService } from '../services/articles-fake-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CallModuleApi,
    CardComponent
  ],
})
export class DashboardPage implements OnInit{
  timer:number = 0;
  interval:any;
  modalText:string|null = null;
  cards: Skill[] = [];

  constructor(private skillService:ArticlesFakeApiService) {}

  ngOnInit() {
    this.modalText = 'Por favor, aguarde';
    this.timer = 5;
    this.interval = setInterval(()=> {
      this.timer--;
    }, 1000);

    this.loadSkills();
  }

  public loadSkills() {
    this.skillService.getSkills().subscribe({
      next: (result) => {
        console.log(result);
        this.cards = result;
        this.modalText = null;
      },
      error: (error) => {
        console.log(error);
        this.modalText = 'Erro ao obter os artivos :(';
        setTimeout(()=> {
          this.modalText = null;
        }, 2000);
      },
      complete: () =>  {
        clearInterval(this.interval)
        this.timer = -1;
      }
    });
  }
}
