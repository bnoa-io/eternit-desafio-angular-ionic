import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeApiService } from '../services/fake-api.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ArticlesFakeApiService } from '../services/articles-fake-api.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeApiService, {delay:5000})
  ],
  providers: [ArticlesFakeApiService]
})
export class CallModuleApi { }
