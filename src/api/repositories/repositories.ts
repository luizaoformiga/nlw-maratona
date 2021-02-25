import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/users';

@EntityRepository(User)
export class UserRepository extends Repository<User>{};

