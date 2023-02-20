const galleryData = [
  {
    id: 1,
    src: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/10421479_10203027206019355_793172320993226605_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=VS22tNaNzMUAX8zvHdj&_nc_ht=scontent-lga3-2.xx&oh=00_AfADHvfEDukrbvge-30ntZVDwK6ccsLRR6ABHsV0s210Ow&oe=64199D6C',
    altText: 'top three riders at the start of day 3',
    caption: '[left to right] Andy Andras, Kaspar Heinrici, Kyle Yan sit in the top three positions at the start of the third day (2014)',
  },
  {
    id: 2,
    src: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/10306473_10203027208339413_195564568336928060_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=OSCR2Y-U4TYAX_VG4UO&_nc_oc=AQm4wfvKwqm3tBYEO60Uaqxzxyo8v3f661cwQRXFe2Oe1ZfPSffnUlqOXaVAz0H7IVW2a_qmlN2fUNedfSPllAb0&tn=EGWBso2oP_s-iHeE&_nc_ht=scontent-lga3-2.xx&oh=00_AfBpSMUdoOV_6NWAZ92FqJdIlS5pzmajC0jMp2s5FfJ5sw&oe=6419B11B',
    altText: 'four skateboarders racing in a pack',
    caption: '[front to back] Kaspar Heinrici, Andy Andras, Will Frank, Kyle Yan leading the charge in the early morning of day 3 (2014)',
  },
  {
    id: 3,
    src: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/10256330_10203027209099432_8899782011106735387_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=KZ8Yt7ggu-4AX8uCdok&_nc_ht=scontent-lga3-2.xx&oh=00_AfApet7TO12gPjhnMS_VFN26IJ1EuaNlGnbmLVb-tskOXg&oe=6419CB0A',
    altText: 'Skateboarder riding solo on trail',
    caption: 'Mathew Phillips riding solo on day three currently in 5th place (2014)',
  },
  {
    id: 4,
    src: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/10155156_10203027210019455_6741332456472755979_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=4oT9b7MVGD8AX-tx_-w&tn=EGWBso2oP_s-iHeE&_nc_ht=scontent-lga3-2.xx&oh=00_AfCuwXdVDnkQqEuyxB406cavhbhg-pWRKUhz2TUtHKXcNA&oe=6419B960',
    altText: 'top three riders at the start of day 3',
    caption: '[front to back] Juan Molina, William Coale, Alexandre Bangnoi battle it out on day three (2014)',
  },
  {
    id: 5,
    src: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/10427234_10203027210779474_300745772653975995_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=mrvkjUi22QYAX-4FX7u&_nc_oc=AQnTSlW2jQXq3oHyzU2WOo9H5YKPdsOfl5NgmjwJQY3wcHu5J_z4-_brV3-7Ld4sJTqehIW97hYBktGDQno0Ecn2&_nc_ht=scontent-lga3-2.xx&oh=00_AfD2jo7a3Y9_xMv_JzmdRUAfdDST0jzQT8iI9OomU-PG8Q&oe=6419E69D',
    altText: 'skateboarder waving to camera',
    caption: 'Carlos Montalvo pushing switch to spread the pain (2014)',
  },
  {
    id: 6,
    src: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/10368216_10203027212779524_1368972935680935490_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=hyKIzJOELm4AX-ksNlJ&_nc_ht=scontent-lga3-2.xx&oh=00_AfB9ITCD836QBck4fmxLPQQ_UPfd6R7gr86ihf3g8VIyBw&oe=641AEB1F',
    altText: 'paddle boarders riding in a group',
    caption: '[Left to right] Jeremiah Pascua, Daniel Cambay, Deejay Pascua ride to complete the entire challenge without pushing (2014)',
  },
  {
    id: 7,
    src: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/10441337_10203027323382289_2820805290566871379_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=kekXLZYzOV0AX8sAQDC&tn=EGWBso2oP_s-iHeE&_nc_ht=scontent-lga3-2.xx&oh=00_AfBhxAS1bzNtNYiBl1cR6kFJbLgKzz1O10dY254Ir4MCVg&oe=641ADE79',
    altText: 'Two skateboarders riding through rolling hills',
    caption: 'Kaspar Heinrici trying to get a gap on Andy Andras during the rolling hill section of day three (2014)',
  },
  {
    id: 8,
    src: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/1526140_10203027220139708_6566680697162738941_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=bPRXFYrHtWIAX81-jug&_nc_ht=scontent-lga3-2.xx&oh=00_AfDOM2gX3lryRCD2xGIe940h6T_7hwUKSZi-0zQyv-Fibw&oe=641AF8FA',
    altText: 'Smyrna trailhead',
    caption: 'Smyrna trailhead, the start of day one and the finish line for day three',
  },
];

export default galleryData;