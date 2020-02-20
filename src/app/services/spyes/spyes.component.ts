import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-spyes',
  templateUrl: './spyes.component.html',
  styleUrls: ['./spyes.component.css']
})
export class SpyesComponent implements OnInit {

  constructor(private service: TestService) { }

  ngOnInit(): void {
  }
    testMethod() {
        return this.service.getValue() + ' anover value';
    }
}
