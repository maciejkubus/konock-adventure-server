import { DataSource } from "typeorm";
import { ExpeditionResult } from "./entities/expedition-result.entity";

export const expeditionsProviders = [
  {
    provide: 'EXPEDITION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ExpeditionResult),
    inject: ['DATA_SOURCE'],
  },
];
