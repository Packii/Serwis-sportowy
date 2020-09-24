import { Teamsforscores } from './teamsforscores';

export interface MatchScore {

    id: number;
    date: string;
    home_team: Teamsforscores;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: Teamsforscores;
    visitor_team_score: number;
}
