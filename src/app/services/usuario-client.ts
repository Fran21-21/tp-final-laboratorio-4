import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../modules/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioClient {
  protected readonly url = 'http://localhost:3000/usuarios';
  protected readonly http = inject(HttpClient);

  getUsuarios()
  {
    return this.http.get<Usuario[]>(this.url);
  }

  getUsuarioById(id : string | number)
  {
    return this.http.get<Usuario>(`${this.url}/${id}}`);
  }

  postUsuario(usuario : Usuario)
  {
    return this.http.post<Usuario>(this.url, usuario);
  }

  putUsuario(usuario : Usuario, id : string | number)
  {
    return this.http.put<Usuario>(`${this.url}/$id}`, usuario);
  }

  deleteUsuario(id : string | number)
  {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
