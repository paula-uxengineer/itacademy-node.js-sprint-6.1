import { IPlayer } from '../entities/iPlayer';

export interface IRankingUseCase {
  listRanking(): Promise<IPlayer[]>;
  getLoser(): Promise<IPlayer | null>;
  getWinner(): Promise<IPlayer | null>;
  getAverageSuccessRate(): Promise<number>;
}
