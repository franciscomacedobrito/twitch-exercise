import { Injectable } from '@angular/core';

@Injectable()
export class CommonsService {

  constructor() {
  }

  public getStorageItem(storage: Storage, itemName: string) {
    let item = storage[itemName];
    if (typeof item !== 'undefined') {
      return JSON.parse(item);
    }
  }

}
