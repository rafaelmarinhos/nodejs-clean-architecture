import { CreateCarDto } from "../../../../shared/dtos/car/create-car.dto";
import { Mapper } from "../../../base/mapper";
import { CarEntity } from "../../entities/car/car.entity";

export class UserCreateMapper extends Mapper<CreateCarDto, CarEntity>{

    public mapFrom(data: CreateCarDto): CarEntity {
        const entity = new CarEntity();
        entity.plate = data.plate;
        entity.color = data.color;
        entity.price = data.price;
        entity.seats = data.seats;
        return entity;
    }

    public mapTo(entity: CarEntity): CreateCarDto {
        const data = new CreateCarDto();
        data.plate = entity.plate;
        data.color = entity.color;
        data.price = entity.price;
        data.seats = entity.seats;
        return data;
    }
}