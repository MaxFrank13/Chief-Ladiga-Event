import React from 'react';
import TimelineTable from './TimelineTable';
import { sundayTimeline } from '../data/timelineData';

export default function Sunday() {
  return (
    <TimelineTable data={sundayTimeline}/>
  )
}