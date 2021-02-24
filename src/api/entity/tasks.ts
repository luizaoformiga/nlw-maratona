import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import  { v4 as uuid } from 'uuid';

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    readonly id: String | undefined;
    
    @Column()
    name: String | undefined;
    
    @Column()
    email: String | undefined;
    
    @Column({
        default: false
    })
    finished: Boolean | undefined;

    @CreateDateColumn()
    created_at: Date | undefined;

    constructor() {
        if(!this.id) this.id = uuid();
    }
}