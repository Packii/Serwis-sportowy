import { Team } from './team';

export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    height_feet: number;
    height_inch: number;
    weight_pounds: number;
    team: Team;
}
