import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

private __albumUrl = "../assets/album.json";
 
constructor(private _http: Http) { }

   getAlbum(id: number) 
   {

    return this._http.get(this.__albumUrl).map((Response) => Response.json);

    
   }  
}
