import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import  { v4 as uuid } from 'uuid';

@Entity("users")
export class User {
    @PrimaryColumn()
    readonly id: String;
    
    @Column()
    public name: String;
    
    @Column()
    public email: String;

    @CreateDateColumn()
    public created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

