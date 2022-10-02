import React from 'react';
import TimelineTable from '../../../components/TimelineTable';
import { sundayTimeline } from '../data/timelineData';

export default function Sunday() {
  return (
    <TimelineTable data={sundayTimeline}/>
  )
}