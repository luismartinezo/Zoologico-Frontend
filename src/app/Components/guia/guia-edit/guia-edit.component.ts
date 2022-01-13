import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuiaService } from 'src/app/Services/guia.service';
import { ItinerarioService } from 'src/app/Services/itinerario.service';

@Component({
  selector: 'app-guia-edit',
  templateUrl: './guia-edit.component.html',
  styleUrls: ['./guia-edit.component.css']
})
export class GuiaEditComponent implements OnInit {

  guiaForm!: FormGroup;
  form: any = {};
  guias: any = [];
  itinerarios: any = [];
  constructor(public fb: FormBuilder,
    public guiaService: GuiaService,
    public itinerarioService: ItinerarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.guiaService.detailGuia(id).subscribe(data => {
      this.form.id = data.id;
      this.form.nombre = data.nombre;
      this.form.direccion = data.direccion;
      this.form.telefono = data.telefono;
      this.form.fechaIngresoZoo = data.fechaIngresoZoo;
      this.form.itinerario_id = data.itinerario_id;
    },
    (err:any)=>{
      this.router.navigate(['/']);
    });

    this.guiaForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaIngresoZoo: ['', Validators.required],
      itinerario_id: ['', Validators.required]
    });

    // itinerarios
    this.itinerarioService.getAllItinerarios().subscribe(
      (resp) => {
        this.itinerarios = resp;
      },
      error => {
        console.error(error);
      }
    );
  }

  // Editar guias
  editar(): void {
    
    const id = this.activatedRoute.snapshot.params.id;
    this.guiaService.updateGuia(this.form).subscribe(data=>{
      this.guias = data;
      console.log(this.form);
      this.toastr.success('Registro Actualizado Correctamente!');
      this.router.navigate(['guia']);
    });
  }
  onItemChange(value: any){
    console.log(" Value is : ", value );
 }
}
