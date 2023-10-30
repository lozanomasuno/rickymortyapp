import { Component, OnInit, Input } from '@angular/core';
import { ApiPersonajesService } from '../../../app/services/apipersonajes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public keyword: string = '';
  constructor(private apiPersonajesService : ApiPersonajesService ) { }

  ngOnInit(): void {
    
  }

}
