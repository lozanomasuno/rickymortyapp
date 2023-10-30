import { Component, OnInit, Input } from '@angular/core';
import { ApiPersonajesService } from 'src/app/services/apipersonajes.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
@Input() public keyword: string = '';
         public urlImage: any;

  constructor(private apiPersonajesService : ApiPersonajesService ) { }

  ngOnInit(): void {
  }
 
 public search(){
    this.apiPersonajesService.getApiPersonajes(this.keyword).subscribe((data: any) => {
     this.keyword = data.results;
      console.log(this.urlImage);
    });
  }
}
