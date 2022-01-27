import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckMobile } from 'src/app/check-mobile';
import { GetAlertMessage } from '../modal/modal-alerts-message/modal-alerts-message';
import { AlertMessageModel } from '../modal/modal-alerts-message/modal-alerts-message-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  display: boolean = false
  displayAlertMessage: boolean = false
  mobile: boolean = false;
  hiddenButton: boolean = false
  alertMesssage: AlertMessageModel = {} as AlertMessageModel


  itensMenu: any = [
    {
      title: "Cadastros",
      items: [
        { icon: "bi bi-ui-checks", text: "Categoria de Receita", routerLink: '/joinspay/revenuecategory' },
        { icon: "bi bi-ui-radios", text: "Categoria de Despesa", routerLink: '/joinspay/expensecategory' },
      ]
    },
    {
      title: "Sub-Menu 2",
      items: [
        { icon: "pi pi-comments", text: "Texto 3",  routerLink: '' },
        { icon: "pi pi-comments", text: "Texto 4",  routerLink: '' }
      ]
    }
  ]

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  onSelectionRouterLink(item: any){
    this.router.navigateByUrl(item.routerLink);
  }

  eventEmmiter(event: Event){
    console.log(event)
    this.displayAlertMessage = false
  }


  showAlertMessage(){
    this.alertMesssage = GetAlertMessage(
      "Teste Titulo",
      "Texto do body",
      false,
      false,
      undefined,
      true,
      "Sim",
      {text: "Teste objeto"},
      "Não",
      {text: "Teste objeto Não"},
    )
    this.displayAlertMessage = true
  }

  showMenuToolbar() {
    this.display = true
  }

  closeMenuToolbar() {
    this.display = false
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 768) {
      this.mobile = true;
      this.hiddenButton = true
    } else {
      this.mobile = false;
      this.hiddenButton = false
    }

  }

  ngOnInit(): void {
    this.mobile = CheckMobile()
    this.hiddenButton = this.mobile ? true : false
  }

}
