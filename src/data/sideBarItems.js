import { Flight, Headset, LocalBar, MoodBad, Mood, Movie } from '@mui/icons-material';

export const sideBarItems = [
    {
        text: 'flight movies',
        icon: () => <Flight />
    },
    {
        text: 'movies to watch when drunk',
        icon: () => <LocalBar />
    },
    {
        text: 'silent movies',
        icon: () => <Headset />
    },
    {
        text: 'happy movies',
        icon: () => <Mood />
    },
    {
        text: 'sad movies',
        icon: () => <MoodBad />
    },
    {
        text: 'movies about movies',
        icon: () => <Movie />
    }
]