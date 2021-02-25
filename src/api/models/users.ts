import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import  { v4 as uuid } from 'uuid';

@Entity("users")
export class User {
    @PrimaryColumn()
    readonly id: String | undefined;
    
    @Column()
    name: String | undefined;
    
    @Column()
    email: String | undefined;

    @CreateDateColumn()
    created_at: Date | undefined;

    constructor() {
        if(!this.id) this.id = uuid();
    }
}