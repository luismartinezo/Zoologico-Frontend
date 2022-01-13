import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuiaService } from 'src/app/Services/guia.service';
import { ItinerarioService } from 'src/app/Services/itinerario.service';

@Component({
  selector: 'app-guia-add',
  templateUrl: './guia-add.component.html',
  styleUrls: ['./guia-add.component.css']
})
export class GuiaAddComponent implements OnInit {

  guiaForm!: FormGroup;
  guias: any = [];
  itinerarios: any = [];

  constructor(
    public fb: FormBuilder,
    public guiaService: GuiaService,
    public itinerarioService: ItinerarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.guiaForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaIngresoZoo: ['', Validators.required],
      itinerario_id: ['', Validators.required]
    });

    // Itinerario
    this.itinerarioService.getAllItinerarios().subscribe(
      (resp) => {
        this.itinerarios = resp;
        console.log(resp);
      },
      error => {
        console.error(error);
      }
    );
  }
  // Guardar Guia
  guardar(): void {
    this.guiaService.saveGuia(this.guiaForm.value).subscribe(
      (resp) => {
        this.guiaForm.reset();
        this.guias = this.guias.filter(
          (guia: { id: any }) => resp.id !== guia.id
        );
        this.guias.push(resp);
        this.router.navigate(['guia']);
        this.toastr.success("Guia Creado con exito!")
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
