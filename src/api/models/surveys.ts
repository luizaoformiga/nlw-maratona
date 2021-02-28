import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import  { v4 as uuid } from 'uuid';

@Entity("surveys")
export class Surveys {
    @PrimaryGeneratedColumn()
    readonly id: String;
    
    @Column()
    title: String;
    
    @Column()
    description: String;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        } 
    }
}



