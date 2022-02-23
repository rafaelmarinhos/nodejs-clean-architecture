import { Repository } from "../base/repository";
import { CarEntity } from "../domain/entities/car/car.entity";

export abstract class CarRepository extends Repository<CarEntity>{
}