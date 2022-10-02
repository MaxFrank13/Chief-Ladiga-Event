const fridayTimeline = {
  thisDay: {
    number: 1,
    miles: 38,
  },
  timeline:
    [
      {
        header: '8:00am',
        subheaders: [],
        todos: [
          'Shuttle LEAVES Hotel to',
          'Silver Comet Parking Lot - 4625 Camp Highland Rd, Smyrna, GA 30082',
        ],
      },
      {
        header: '9:00am',
        subheaders: [],
        todos: [
          'Pre-ride Meeting at 4625 Camp Highland Rd, Smyrna, GA 30082',
        ],
      },
      {
        header: '9:45am',
        subheaders: [],
        todos: [
          'Rolling start to trail head',
          'Personal Food and Drinks can be shuttled to aid stations along the way',
          'Gear will be transported to Rockmart',
        ],
      },
      {
        header: '10:00am',
        subheaders: [
          {
            text: 'mile 20',
            task: 'Drink & snack - Tara Drummond Trail Head',
          },
        ],
        todos: [
          'START at Mile Marker 0 at Mavell Road Trail Head',
        ],
      },
      {
        header: '4:00pm',
        subheaders: [],
        todos: [
          'FINISH at Rockmart Trail Head',
          'Drink & snack',
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
          'Option 1: Hotel 105 GTM Pkwy, Rockmart, GA 30153 Rockmart, GA 30153 1-770-684-9955',
          'Option 2: Free Accommodations offered by the City of Rockmart. A large room at the community center. Showers, bathrooms, air conditioning available. Bring a sleeping bag or air mattress',
        ],
      },
    ],
};

const saturdayTimeline = {
  thisDay: {
    number: 2,
    miles: 56,
  },
  timeline:
    [
      {
        header: '8:00am',
        subheaders: [],
        todos: [
          'Shuttle LEAVES Hotel to Rockmart Trail Head',
          'Personal Food and Drinks can be shuttled to aid stations along the way',
          'Gear will be transported to Anniston',
        ],
      },
      {
        header: '9:00am',
        subheaders: [
          {
            text: 'mile 52',
            task: 'Drink at Cedartown Depot, ~14 miles from the START',
          },
          {
            text: 'mile 61',
            task: 'Cross into Alabama. Timezone change to Central Standard Time (CST, 1 hour BEHIND) and the MILE MARKERS WILL RESET to 0',
            note: 'CAUTION: this is NOT a pitstop. This is actually the most remote section of the trail. Be safe!',
          },
          {
            text: 'mile 13',
            task: 'Drink & Snack at Eubanks Welcome Center, ~37 miles from the START',
          },
        ],
        todos: [
          'START at Mile Marker 38 in Rockmart, GA',
        ],
      },
      {
        header: '4:00pm CST',
        subheaders: [],
        todos: [
          'FINISH (5pm EST, time changes at Alabama border)',
          'Drink & Snack (Mile marker 33)',
        ],
      },
      {
        header: 'Lodging',
        subheaders: [],
        todos: [
          'Hotel stay at in Oxford. Again a shuttle will take you from the trail head to the hotel.',
          'Econo Lodge 25 Elm St, Oxford, AL 36203 1-256-770-4212',
          'Other hotels are available in the area and can be purchased on your own. Just be sure to reflect this on your registration page.',
          'Note that transportation will only be provided to and from the main hotel.',
        ],
      },
    ],
};

const sundayTimeline ={
  thisDay: {
    number: 3,
    miles: 94,
  },
  timeline:
    [
      {
        header: '5:30am CST',
        subheaders: [],
        todos: [
          '(6:30am EST) - Shuttle LEAVES Hotel',
          'Personal Food and Drinks can be shuttled to aid stations along the way',
          'Gear will be transported to Smyrna',
        ],
      },
      {
        header: '6:30am CST',
        subheaders: [
          {
            text: 'mile 13',
            task: 'Drink at Eubanks Welcome Center, ~20 miles from START',
          },
          {
            text: 'mile 61',
            task: 'Cross into Georgia. Timezone change to Eastern Standard Time (EST, 1 hour AHEAD) and the MILE MARKERS WILL COUNT DOWN from 61.',
            note: 'CAUTION: this is NOT a pitstop. This is actually the most remote section of the trail. Be safe!',
          },
          {
            text: 'mile 52',
            task: 'Drink at Cedartown Depot, ~43 miles from START',
          },
          {
            text: 'mile 38',
            task: 'Drink & Snack at Rockmart, ~56 miles from START',
          },
          {
            text: 'mile 20',
            task: 'Drink at Tara Drummond, ~74 miles from START',
          },
        ],
        todos: [
          'START at Mile marker 33',
        ],
      },
      {
        header: '5:30pm EST',
        subheaders: [],
        todos: [
          'CUTOFF at Mile marker 20 (for rider safety) - Tara Drummond',
          'You MUST be at mile marker 20 (the last feed/ check-in station) by 5:30pm to be allowed to continue.',
          'If you don\'t reach this point by 5:30pm you\'ll be pulled from the event & driven to the finish line for your own safety.',
          'This pace is an average of 7.5mph or 8 minutes per mile.',
          '*By registering you agree to this and understand it\'s not a personal option.*',
        ],
      },
      {
        header: 'Last rider',
        subheaders: [],
        todos: [
          'FINISH - Snack at Finish Line & Dinner at Hotel',
          'Recommend staying Sunday night at La Quinta (or other TBD) as well.',
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
          'Same as Thursday.'
        ],
      },
    ],
};

export {
  fridayTimeline,
  saturdayTimeline,
  sundayTimeline,
}