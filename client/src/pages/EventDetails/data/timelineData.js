// TODO: make more constants - especially with addresses for pit stops

const fridayTimeline = {
  thisDay: {
    number: 1,
    miles: 38,
    cityInfo: ['Smyrna, GA', 'Rockmart, GA'],
  },
  timeline:
    [
      {
        header: '7:00am',
        subheaders: [],
        todos: [
          'Shuttle departs to Silver Comet Parking Lot',
          '4625 Camp Highland Rd, Smyrna, GA 30082',
        ],
      },
      {
        header: '8:00am',
        subheaders: [],
        todos: [
          'Pre-ride meeting at 4625 Camp Highland Rd, Smyrna, GA 30082',
        ],
      },
      {
        header: '8:30am',
        subheaders: [],
        todos: [
          'Rolling start to trailhead',
          'Personal food and drinks can be shuttled to aid stations along the way',
          'Gear will be transported to Rockmart Trailhead',
        ],
      },
      {
        header: '9:00am',
        subheaders: [
          {
            text: 'mile 20',
            task: 'Tara Drummond Trailhead 588 Seaboard Ave, Dallas, GA 30157',
            mileMarker: '20.23',
          },
          {
            text: 'mile 38',
            task: 'Rockmart Trailhead 100 E Church St, Rockmart, GA 30153',
            mileMarker: '38.76'
          },
        ],
        todos: [
          'START',
          'at Mavell Road Trailhead',
        ],
        mileMarker: '0',
      },
      {
        header: '4:00pm',
        subheaders: [],
        todos: [
          'Rockmart Trailhead',
          'drinks & snacks',
        ],
      },
      {
        header: '5:30pm',
        subheaders: [],
        todos: [
          'Dinner',
        ],
      },
      {
        header: 'Lodging',
        subheaders: [],
        todos: [
          'There are two lodging options in Rockmart, GA (Shuttles will be provided to both options):',
          'Option 1: Shuttle back to the main hotel',
          'Option 2: Free Accommodations offered by the City of Rockmart. A large room at the community center. Showers, bathrooms, air conditioning available. Bring a sleeping bag or air mattress',
        ],
      },
    ],
};

const saturdayTimeline = {
  thisDay: {
    number: 2,
    miles: 56,
    cityInfo: ['Rockmart, GA', 'Anniston, AL'],
  },
  timeline:
    [
      {
        header: '7:00am',
        subheaders: [],
        todos: [
          'Shuttle departs to Rockmart Trailhead',
          'Personal food and drinks can be shuttled to aid stations along the way',
          'Gear will be transported to Anniston',
        ],
      },
      {
        header: '8:00am',
        subheaders: [
          {
            text: 'mile 14',
            task: 'Cedartown Depot 609 S Main St, Cedartown, GA 30125',
            mileMarker: '52.00',
          },
          {
            text: 'mile 24',
            task: 'Cross into Alabama at mile marker 62. Timezone change to Central Standard Time (CST, 1 hour BEHIND) and the mile markers will reset to 0',
            note: 'CAUTION: this is NOT a pitstop. This is actually the most remote section of the trail. Be safe!',
            mileMarker: '62.00 | 0',
          },
          {
            text: 'mile 37',
            task: 'Eubanks Welcome Center 202 Dailey Street, Chief Ladiga Trail, Piedmont, AL 36272',
            mileMarker: '13.60'
          },
          {
            text: 'mile 56',
            task: 'Anniston Trailhead 6514 Weaver Rd, Anniston, AL 36206',
            mileMarker: '32.5'
          },
        ],
        todos: [
          'START',
          'Rockmart Trailhead 100 E Church St, Rockmart, GA 30153'
        ],
        mileMarker: '38.76',
      },
      {
        header: '4:00pm CST',
        subheaders: [],
        todos: [
          'Anniston Trailhead',
          'drinks & snacks',
        ],
      },
      {
        header: 'Lodging',
        subheaders: [],
        todos: [
          'Shuttle back to the main hotel',
        ],
      },
    ],
};

const sundayTimeline ={
  thisDay: {
    number: 3,
    miles: 94,
    cityInfo: ['Anniston, AL', 'Smyrna, GA'],
  },
  timeline:
    [
      {
        header: '5:30am CST',
        subheaders: [],
        todos: [
          'Shuttle departs to 6514 Weaver Rd, Anniston, AL 36206',
          'Personal food and drinks can be shuttled to aid stations along the way',
          'Gear will be transported to Smyrna',
        ],
      },
      {
        header: '6:30am CST',
        subheaders: [
          {
            text: 'mile 20',
            task: 'Eubanks Welcome Center 202 Dailey Street, Chief Ladiga Trail, Piedmont, AL 36272',
            mileMarker: '13.60',
          },
          {
            text: 'mile 33',
            task: 'Cross into Georgia. Timezone change to Eastern Standard Time (EST, 1 hour AHEAD) and the mile markers will count down from 62.',
            note: 'CAUTION: this is NOT a pitstop. This is actually the most remote section of the trail. Be safe!',
            mileMarker: '0 | 62.00'
          },
          {
            text: 'mile 43',
            task: 'Cedartown Depot 609 S Main St, Cedartown, GA 30125',
            mileMarker: '52.00',
          },
          {
            text: 'mile 56',
            task: 'Rockmart 100 E Church St, Rockmart, GA 30153',
            mileMarker: '38.76',
          },
          {
            text: 'mile 74',
            task: 'Tara Drummond Trailhead 588 Seaboard Ave, Dallas, GA 30157',
            mileMarker: '20.23',
          },
          {
            text: 'mile 94',
            task: 'Mavell Road Trailhead',
            mileMarker: '0',
          },
        ],
        todos: [
          'START',
          '6514 Weaver Rd, Anniston, AL 36206'
        ],
        mileMarker: '32.5',
      },
      {
        header: '5:30pm EST',
        subheaders: [],
        todos: [
          'CUTOFF at mile marker 20.23 (for rider safety) - Tara Drummond Trailhead',
          'You MUST be at mile marker 20.23 (the last feed/check-in station) by 5:30pm to be allowed to continue.',
          'If you don\'t reach this point by 5:30pm you\'ll be pulled from the event & driven to the finish line for your own safety.',
          'This pace is an average of 7.5mph or 8 minutes per mile.',
        ],
        alert: 'By registering you have agreed to this and understand it\'s not a personal option.',
      },
      {
        header: 'Last rider',
        subheaders: [],
        todos: [
          'Drinks & snacks at finish line & dinner at La Quinta hotel',
        ],
      },
      {
        header: '8:30pm',
        subheaders: [],
        todos: [
          'Awards, gathering and dinner for all riders, volunteers, & support crew at main Smyrna hotel',
        ],
      },
      {
        header: 'Lodging',
        subheaders: [],
        todos: [
          'It is recommended to stay at La Quinta on Sunday night.',
        ],
      },
    ],
};

export {
  fridayTimeline,
  saturdayTimeline,
  sundayTimeline,
}