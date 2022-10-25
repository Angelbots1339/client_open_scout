import {Card, CardProps} from "@mui/material";


export interface ITeamCard {
    sampleTextProp: string;
    teamNumber: number;
    teamName: string
}

const TeamCard: React.FC<ITeamCard & CardProps> = ({sampleTextProp, teamNumber, teamName, ...card}) => {
    return(
        <Card {...card}>
            {`${sampleTextProp}: ${teamNumber} :${teamName}`}
        </Card>
    ) ;
};

export default TeamCard;