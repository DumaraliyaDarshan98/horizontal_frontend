import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.localStorageService.clearStorage();
    this.router.navigate(['/login']);
  }
}
