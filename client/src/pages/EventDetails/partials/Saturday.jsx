import React from 'react';
import TimelineTable from '../../../components/TimelineTable';
import { saturdayTimeline } from '../data/timelineData';

export default function Saturday() {
  return (
    <TimelineTable data={saturdayTimeline} />
  )
}