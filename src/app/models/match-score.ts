import { Team } from './team';

export interface MatchScore {
    id: number;
    date: string;
    home_team: Team;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: Team;
    visitor_team_score: number;
}
