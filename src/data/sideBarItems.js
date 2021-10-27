import { Flight, Headset, LocalBar, MoodBad, Mood, Movie } from '@mui/icons-material';

export const sideBarItems = [
    {
        text: 'flight movies',
        icon: (color) => <Flight sx={{color: color}}/>
    },
    {
        text: 'movies to watch when drunk',
        icon: (color) => <LocalBar sx={{color: color}}/>
    },
    {
        text: 'silent movies',
        icon: (color) => <Headset sx={{color: color}}/>
    },
    {
        text: 'happy movies',
        icon: (color) => <Mood sx={{color: color}}/>
    },
    {
        text: 'sad movies',
        icon: (color) => <MoodBad sx={{color: color}}/>
    },
    {
        text: 'movies about movies',
        icon: (color) => <Movie sx={{color: color}}/>
    }
]