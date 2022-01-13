import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuiaService } from 'src/app/Services/guia.service';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

  guiaForm!: FormGroup;
  guias: any = [];
  constructor(
    public fb: FormBuilder,
    public guiaService: GuiaService
  ) {}

  ngOnInit() {
    // Listar los guias
    this.guiaService.getAllGuias().subscribe(
      (resp) => {
        this.guias = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  // Eliminar guias
  eliminar(guia: { id: any }) {
    confirm(`Esta seguro que quiere eliminar?`);
    this.guiaService.deleteGuia(guia.id).subscribe((resp: boolean) => {
      if (resp === true) {
        this.guias.pop(guia);
      } 
      window.location.reload();
    });
  }

}
