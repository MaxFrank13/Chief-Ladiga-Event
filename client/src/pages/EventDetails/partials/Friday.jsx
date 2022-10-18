import React from 'react';
import TimelineTable from './TimelineTable';
import { fridayTimeline } from '../data/timelineData';

export default function Friday() {
  return (
    <TimelineTable data={fridayTimeline} />
  )
}