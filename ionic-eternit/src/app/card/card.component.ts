import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArticlesFakeApiService } from '../services/articles-fake-api.service';
import { Skill } from '../models/types';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: any;
  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  constructor(private skillService:ArticlesFakeApiService) { }

  onLike(card: Skill) {
    // TODO: incrementar o like, salvar via rest
    this.card.likes++;
    // salvar
    this.updateDebounced(card);
  }

  // função de timeout, pra evitar que a cada click simultâneo mande request
  updateDebounced(card: Skill) {
    if (this.debounceTimeout) clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(() => {
      this.skillService.updateSkill(card).subscribe({
        next: () => console.log(`Atualizando artigo do id ${card.id}`, card),
        error: (err) => console.log(err)
      });

      this.debounceTimeout = null;
    }, 500);
  }

  onShare() {
    // TODO: abrir o link do seu linkedin
    window.open('https://www.linkedin.com/in/brayan-apeles-06833b1b8/', '_blank');
  }

}
