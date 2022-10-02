import React from 'react';
import TimelineTable from '../../../components/TimelineTable';
import { fridayTimeline } from '../data/timelineData';

export default function Friday() {
  return (
    <TimelineTable data={fridayTimeline} />
  )
}