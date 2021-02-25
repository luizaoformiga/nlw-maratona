import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import  { v4 as uuid } from 'uuid';

@Entity("surveys")
export class Surveys {
    @PrimaryGeneratedColumn()
    readonly id: String | undefined;
    
    @Column()
    title: String | undefined;
    
    @Column()
    description: String | undefined;

    @CreateDateColumn()
    created_at: Date | undefined;

    constructor() {
        if(!this.id) this.id = uuid();
    }
}



