import JoinedMeetings from "../components/HomeView/joinedevents";
import FriendsDisplay from "../components/HomeView/friendsdisplay";
import ScheduleDisplay from "../components/HomeView/scheduledisplay.jsx";

import { Typography } from "@mui/material";
const sampleFriends = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' },
];
const sampleUser = "Matty_Userfdfdf"

export default function HomeView() {
    return (
      <div className='HomeView' style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        <Typography variant='h2' gutterBottom>Welcome, {sampleUser}!</Typography>
        <JoinedEvents events={[]}/>
        <ScheduleDisplay />
        <FriendsDisplay friends={sampleFriends}/>
      </div>
    );
  }