const express = require('express');
const router = express.Router();

const { addMeeting, getInvitedMeetings, getJoinedMeetings, getMeetingById, leaveMeeting, deleteMeeting, joinMeeting, rejectMeeting } = require("../controllers/meeting.controller");
// Create all meeting routes from controller
router.post('/create', addMeeting);
router.get('/joined', getJoinedMeetings);
router.get('/invited', getInvitedMeetings);
router.put('/join', joinMeeting);
router.put('/leave', leaveMeeting);
router.delete('/delete', deleteMeeting);
router.get('', getMeetingById);
router.post('/reject', rejectMeeting);
  
module.exports = router;
