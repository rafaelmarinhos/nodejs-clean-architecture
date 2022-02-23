import { Observable } from "rxjs";
import { Entity } from "./entity";

export abstract class Repository<TEntity extends Entity>{
    abstract create(data: TEntity): Observable<TEntity>;
    abstract getById(id: number): Observable<TEntity>;
    abstract getAll(): Observable<TEntity[]>;
}
