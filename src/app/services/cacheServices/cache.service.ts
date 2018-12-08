import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  
  public enableOtp : boolean = false;
  public isLogedIn : boolean = false;

  constructor() { }
}
