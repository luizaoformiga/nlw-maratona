import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/users';

@EntityRepository(User)
class UserRepository extends Repository<User>{};
export { UserRepository };
