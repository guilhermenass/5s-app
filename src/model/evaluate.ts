import { Enviroment } from "./enviroment";
import { Audit } from "./audit";
import { User } from "./user";

export class Evaluate {
  id: number;
  enviroment: Enviroment;
  audit: Audit;
  date: Date;
  status: string; 
  user: User;

  constructor(id: number,
              enviroment: Enviroment,
              audit: Audit,
              date: Date,
              status: string,
              user: User) {
    this.id = id;
    this.enviroment = enviroment;
    this.audit = audit;
    this.date = date;
    this.status = status;
    this.user = user;
  }
}
