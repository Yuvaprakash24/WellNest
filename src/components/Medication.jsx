import { Grid, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Medication = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = ()=>{
        const user= JSON.parse(localStorage.getItem('user'));

        if(user){
            navigate('/track-your-medication');
        }else{
            navigate('/login',{state: {from : '/track-your-medication'}});
        }
    }

    return (
        <Paper elevation={3} sx={{ p: 4, my: 2 }}>
            <Typography variant="h4" gutterBottom align='center'>
                Track your Medication
            </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={8} sx={{ px: 2,pt:2}}>
                    <Typography paragraph sx={{ px:5,pt:5 }}>
                    You&apos;ll record when you take your medications and receive medication reminders. You can use this to help manage numerous people&apos;s medication regimens, thanks to the ability to have multiple profiles. It also tracks your prescriptions and reminds you when it&apos;s time for a refill.
                    </Typography>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Button className='button' variant="outlined" sx={{ my:2 }} onClick={handleGetStartedClick}>Track</Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src="https://img.freepik.com/premium-vector/happy-woman-holding-pencil-giant-schedule-checklist-with-tick-marks-business-organization-achievements-goals-vector-concept_53562-6500.jpg?w=360" width={'100%'} height={'80%'} alt="" />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Medication;