import { EntityRepository, Repository } from 'typeorm';
import { Surveys } from '../models/surveys';

@EntityRepository(Surveys)
class SurveysRepository extends Repository<Surveys>{};
export { SurveysRepository };
