import React from 'react';
import TimelineTable from './TimelineTable';
import { saturdayTimeline } from '../data/timelineData';

export default function Saturday() {
  return (
    <TimelineTable data={saturdayTimeline} />
  )
}