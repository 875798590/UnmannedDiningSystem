import {Component, OnInit} from '@angular/core';
import {NbMenuService} from "@nebular/theme";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private menuService: NbMenuService) {
  }

  ngOnInit() {
    console.log("404 not foundddddd");
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
