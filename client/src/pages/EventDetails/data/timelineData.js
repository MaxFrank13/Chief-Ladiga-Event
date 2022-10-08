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
          'Shuttle departs Hotel to',
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
          'START at mile marker 0 at Mavell Road Trail Head',
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
          'Option 1: Western Inn 105 GTM Pkwy, Rockmart, GA 30153',
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
          'Shuttle departs Hotel to Rockmart Trail Head',
          'Personal Food and Drinks can be shuttled to aid stations along the way',
          'Gear will be transported to Anniston',
        ],
      },
      {
        header: '9:00am',
        subheaders: [
          {
            text: 'mile 14',
            task: 'Drink at Cedartown Depot, mile marker 52',
          },
          {
            text: 'mile 24',
            task: 'Cross into Alabama at mile marker 62. Timezone change to Central Standard Time (CST, 1 hour BEHIND) and the mile markers will reset to 0',
            note: 'CAUTION: this is NOT a pitstop. This is actually the most remote section of the trail. Be safe!',
          },
          {
            text: 'mile 37',
            task: 'Drink & snack at Eubanks Welcome Center, mile marker 13.6',
          },
        ],
        todos: [
          'START at mile marker 38.76 in Rockmart, GA',
        ],
      },
      {
        header: '4:00pm CST',
        subheaders: [],
        todos: [
          'FINISH (5pm EST)',
          'Drink & Snack, mile marker 32.5',
        ],
      },
      {
        header: 'Lodging',
        subheaders: [],
        todos: [
          'Hotel stay at in Oxford. Again a shuttle will take you from the trail head to the hotel.',
          'Econo Lodge 25 Elm St, Oxford, AL 36203',
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
          'Shuttle departs Hotel (6:30am EST)',
          'Personal food and drinks can be shuttled to aid stations along the way',
          'Gear will be transported to Smyrna',
        ],
      },
      {
        header: '6:30am CST',
        subheaders: [
          {
            text: 'mile 20',
            task: 'Drink at Eubanks Welcome Center, mile marker 13',
          },
          {
            text: 'mile 33',
            task: 'Cross into Georgia. Timezone change to Eastern Standard Time (EST, 1 hour AHEAD) and the mile markers will count down from 62.',
            note: 'CAUTION: this is NOT a pitstop. This is actually the most remote section of the trail. Be safe!',
          },
          {
            text: 'mile 43',
            task: 'Drink at Cedartown Depot, mile marker 52',
          },
          {
            text: 'mile 56',
            task: 'Drink & snack at Rockmart, mile marker 38.76',
          },
          {
            text: 'mile 74',
            task: 'Drink at Tara Drummond Trailhead, mile marker 20.23',
          },
        ],
        todos: [
          'START at mile marker 32.5 (counting down)',
        ],
      },
      {
        header: '5:30pm EST',
        subheaders: [],
        todos: [
          'CUTOFF at mile marker 20.23 (for rider safety) - Tara Drummond Trailhead',
          'You MUST be at mile marker 20.23 (the last feed/ check-in station) by 5:30pm to be allowed to continue.',
          'If you don\'t reach this point by 5:30pm you\'ll be pulled from the event & driven to the finish line for your own safety.',
          'This pace is an average of 7.5mph or 8 minutes per mile.',
        ],
        alert: 'By registering you have agreed to this and understand it\'s not a personal option.',
      },
      {
        header: 'Last rider',
        subheaders: [],
        todos: [
          'FINISH - Snack at finish line & dinner at La Quinta hotel',

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