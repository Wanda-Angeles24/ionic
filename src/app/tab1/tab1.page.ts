import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']

})
export class Tab1Page {

  public entrada: string;
  public salida: string;
  public seleccionf: string;
  public carrera: any[];
  public secundario = [

{
      valor: 1,
      nombre: "este es el valor 1",
      idCarrera: 1
}, 
{
  valor: 2,
  nombre: "este es el valor 2",
  idCarrera: 2
}, 
{
  valor: 3,
  nombre: "este es el valor 3",
  idCarrera: 3
}

  ];
  private sub: any;

  constructor(private alertController: AlertController,
    private route: Router
    ) {

    this.carrera = [
      {
        valor: 1,
        nombre: "este es el valor 1"
      },
      {
        valor: 2,
        nombre: "este es el valor 2"

      }
    ]

  }

ngOnInit(){
  this.entrada ='hola'
  this.salida = this.entrada;
  this.seleccionf = "";
}


  async presentAlert() {

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
   
  }

  imprimirSelect(){
    console.log(this.seleccionf);
  }

IraSumar(){
  const numero =3;
  this.route.navigateByUrl('tabs/calculadora/'+numero);
  
  }

  

}
