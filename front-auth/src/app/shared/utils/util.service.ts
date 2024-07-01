import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  encryptMD5(data: string): string {
    return CryptoJS.MD5(data).toString();
  }

}
