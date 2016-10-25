import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class FireEventService {

  private static emitters: Map<string, EventEmitter<any>> = new Map();

  constructor() { }

  public static off(name: string){
    this.emitters.delete(name);
  }

  public static on(name: string, callback: Function){
    let emitter: EventEmitter<any> = this.emitters.get('name');

    if (!emitter){
      emitter = new EventEmitter();
      this.emitters.set(name, emitter);
    }

    emitter.subscribe(callback);
  }

  public static trigger(name: string, arg: any){
    let emitter: EventEmitter<any> = this.emitters.get(name);
    emitter.emit(arg);
  }

}
