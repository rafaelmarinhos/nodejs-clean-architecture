import { Entity } from "../../../base/entity";

export class CarEntity extends Entity {
    public plate: string;
    public color: string;
    public price: string;
    public seats: number;
}