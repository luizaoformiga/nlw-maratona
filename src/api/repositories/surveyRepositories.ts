import { EntityRepository, Repository } from 'typeorm';
import { Surveys } from '../models/surveys';

@EntityRepository(Surveys)
export default class SurveysRepository extends Repository<Surveys>{};
