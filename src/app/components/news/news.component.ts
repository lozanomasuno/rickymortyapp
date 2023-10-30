import { Component, OnInit, Input } from '@angular/core';
import { ApiPersonajesService } from 'src/app/services/apipersonajes.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  //Padre
  public totalPersonajes: number = 0;
  constructor(private ApiPersonajesService : ApiPersonajesService) { }

  ngOnInit(): void {
    this.cargaPersonajes();
  }

  public cargaPersonajes(){
    this.ApiPersonajesService.getTotalResults().subscribe((data:any) =>{
      return this.totalPersonajes =  data.results.length;
    })
  }


}
