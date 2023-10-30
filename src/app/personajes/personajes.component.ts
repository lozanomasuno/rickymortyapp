import { Component, OnInit } from '@angular/core';
import { ApiPersonajesService } from '../services/apipersonajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public alldata: any[] = []
  public keyword: string = "";

  constructor(private apiPersonajesService : ApiPersonajesService ) { }

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  public cargarPersonajes(){   
      this.apiPersonajesService. getTotalResults().subscribe((data: any) =>{   
          console.log(data.results.status);       
        return this.alldata = data.results;        
      });  
  }

 }
