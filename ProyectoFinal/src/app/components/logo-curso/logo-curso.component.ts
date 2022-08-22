import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-curso',
  templateUrl: './logo-curso.component.html',
  styleUrls: ['./logo-curso.component.css']
})
export class LogoCursoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }

}
