import { Injectable } from '@angular/core';

import { isNull } from 'lodash';

/**
 * Class CookieService implement basic functions for dealing with Cookies
 */
@Injectable()
export class CookieService {

  public static get(name: string): string {
    const regexp: RegExp = new RegExp('(?:^|; )' + name + '=([^;]*)');
    const result: RegExpExecArray = regexp.exec(document.cookie);

    let value: string = null;

    if (!isNull(result)) {
      value = decodeURIComponent(result[1].replace(/\+/g, ' '));
      try {
        value = JSON.parse(value);
      } catch (e) {}
    }

    return value;
  }

  public static set(key: string, value: any, options?: any): void {
    let cookie = `${key}=${encodeURIComponent(JSON.stringify(value))};`;
    let path = '/';

    if (options && options.expires) {
      cookie += 'expires=' + options.expires.toUTCString() + ';';
    }

    if (options && options.domain) {
      cookie += 'domain=' + options.domain + ';';
    }

    if (options && options.path) {
      path = options.path;
    }

    cookie += 'path=' + path + ';';

    document.cookie = cookie;
  }

  public static remove(key: string): void {
    if (!this.get(key)) {
      return;
    }

    const date: Date = new Date();

    date.setFullYear(date.getFullYear() - 1);

    this.set(key, '', { path: '/', expires: date });
  }
}
