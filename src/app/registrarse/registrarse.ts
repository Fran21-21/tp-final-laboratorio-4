import { Component, effect, inject, input, output } from '@angular/core';
import { UsuarioClient } from '../services/usuario-client';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../modules/usuario';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registrarse.html',
  styleUrl: './registrarse.css',
})
export class Registrarse {
  protected readonly client = inject(UsuarioClient);
  protected readonly router = inject(Router); // Servira para el boton volver
  protected readonly fb = inject(FormBuilder);

  protected readonly usuario = input<Usuario>();
  protected readonly usuarioAgregadoEditado = output<Usuario>();

  protected readonly editando = input(false);
  

  protected readonly form = this.fb.nonNullable.group({
    nombre : ['',[Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    contrasenia: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(){
    effect(() => {
      if(this.editando() && this.usuario())
      {
        this.form.patchValue(this.usuario()!);
      }
    })
  }

  get nombre(){
    return this.form.controls.nombre;
  }

  get apellido()
  {
    return this.form.controls.apellido;
  }

  get email()
  {
    return this.form.controls.email;
  }

  get contrasenia()
  {
    return this.form.controls.contrasenia;
  }

  handledSubmit()
  {
    if(this.form.invalid)
    {
      alert("formulario invalido");
      return;
    }

    if(confirm("¿Desea confirmar los datos?"))
    {
      const formvalue = this.form.getRawValue();
      const usuario: Usuario = {
        ...formvalue,
        fechaRegistro: new Date(),
        activo: false
      }
      const id = this.usuario()?.id;

      if(!this.editando())
      {
        this.client.postUsuario(usuario).subscribe((j) => {
          this.usuarioAgregadoEditado.emit(j);
          this.form.reset();
        })
      }
    }
  }
}
