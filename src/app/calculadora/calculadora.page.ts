import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  num1: number;
  num2: number;

  private sub: any;

  constructor(private alertController: AlertController,
    private url: ActivatedRoute
    ) { }

  ngOnInit() {
    this.sub = this.url.params.subscribe(params => {
      this.num1 = parseInt(params.num1);
      this.num2 = parseInt(params.num2);

    });
  }

async suma(){
  const resul = this.num1 + this.num2;

  const alert = await this.alertController.create({
    header: 'La suma es: ',
    subHeader: resul.toString(),
    message: 'This is an alert!',
    buttons: ['OK'],
  });
  await alert.present();
}


}
