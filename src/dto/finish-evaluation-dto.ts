import { Answer } from '../model/answer';
import { Question } from '../model/question';
import { EvaluationDto } from './evaluation-dto';

export class FinishEvaluationDto {

    answers: Answer[];
    questions: Question[];
    evaluation: EvaluationDto;

    constructor(answers: Answer[], questions: Question[], evaluation: EvaluationDto) {
        this.answers = answers;
        this.questions = questions;
        this.evaluation = evaluation;
    }
}