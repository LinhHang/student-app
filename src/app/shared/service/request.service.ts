import {Injectable} from '@angular/core';

@Injectable()
export class RequestService {
  constructor() {}

  public getApiAddress(): string {
    return 'http://localhost:8080';
  }
}
