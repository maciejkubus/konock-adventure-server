import { FightLog, FightLogStatus } from "../interface/fight-log";

export default class FightLogger {

  logs: FightLog[] = [];

  constructor() {

  }

  add(status: FightLogStatus, entity, message: string, data?: any) {
    const log: FightLog = {
      status,
      entityName: entity,
      message,
      data
    }
    this.logs.push(log)
  }

  getAll() {
    return this.logs;
  }
}