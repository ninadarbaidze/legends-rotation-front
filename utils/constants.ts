export const actionOptions = [
  {
    value: 1,
    label: 'Double ultimate',
    shortened: '2x ultimate',
    emoji: '2x🏹',
  },
  { value: 2, label: 'Ultimate', shortened: 'ultimate', emoji: '🏹' },
  { value: 3, label: 'Ability', shortened: 'ability', emoji: '💥' },
  {
    value: 4,
    label: 'Build and save ultimate',
    shortened: 'B&S ultimate',
    emoji: 'B&S 🏹',
  },
  {
    value: 5,
    label: 'barrel',
    shortened: 'barrel',
    emoji: '🧨',
  },
];

export const objectiveOptions = [
  { value: 1, label: '20 ranged kills', shortened: '20 ranged k.' },
  { value: 2, label: '25 head shots', shortened: '25 headshots' },
  { value: 3, label: '10 critical hits', shortened: '10 critical h.' },
  {
    value: 4,
    label: '5 assassinations from above',
    shortened: '5 ass. from above',
  },
  { value: 5, label: '20 outside kills', shortened: ' 20 outside k.' },
  { value: 6, label: '25 inside kills', shortened: '25 inside k.' },
  { value: 7, label: '5 ghost weapon kills', shortened: '5 ghost weapon k.' },
  {
    value: 8,
    label: '15 perfect parry counter attacks',
    shortened: '15 perfect parry',
  },
  { value: 9, label: '15 fire damage kills', shortened: '15 fire dmg k.' },
];

export const dummyData = {
  id: 53,
  initialState: {
    id: 53,
    author: 'Ninela',
    date: '2023-03-07',
    version: '2.1',
    weeklyModifier: 'reduced healing',
    isPublic: false,
    weeklyRotationId: 53,
    initialClasses: [
      {
        id: 171,
        classId: 1,
        title: 'Hunter',
        image: '/images/hunter.png',
        color: 'red',
        initialStateId: 53,
      },
      {
        id: 172,
        classId: 2,
        title: 'Hunter',
        image: '/images/hunter.png',
        color: 'blue',
        initialStateId: 53,
      },
      {
        id: 173,
        classId: 3,
        title: 'Samurai',
        image: '/images/samurai.png',
        color: 'green',
        initialStateId: 53,
      },
      {
        id: 174,
        classId: 4,
        title: 'Samurai',
        image: '/images/samurai.png',
        color: 'black',
        initialStateId: 53,
      },
    ],
  },
  waves: [
    {
      id: 818,
      initialStateId: 53,
      spawn1: {
        id: 818,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 818,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 818,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      objective: { id: 817, name: 0, waveId: 818 },
    },
    {
      id: 819,
      initialStateId: 53,
      spawn1: {
        id: 819,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 819,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [{ value: 3 }],
      },
      spawn3: {
        id: 819,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [{ value: 3 }],
      },
      objective: { id: 818, name: 0, waveId: 819 },
    },
    {
      id: 820,
      initialStateId: 53,
      spawn1: {
        id: 820,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 820,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 820,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      objective: { id: 819, name: 3, waveId: 820 },
    },
    {
      id: 821,
      initialStateId: 53,
      spawn1: {
        id: 821,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [{ value: 1 }],
      },
      spawn2: {
        id: 821,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [{ value: 2 }],
      },
      spawn3: {
        id: 821,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
        ],
        actions: [{ value: 2 }],
      },
      objective: { id: 820, name: 0, waveId: 821 },
    },
    {
      id: 822,
      initialStateId: 53,
      spawn1: {
        id: 822,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 822,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [{ value: 3 }],
      },
      spawn3: {
        id: 822,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [{ value: 3 }],
      },
      objective: { id: 821, name: 4, waveId: 822 },
    },
    {
      id: 823,
      initialStateId: 53,
      spawn1: {
        id: 823,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 823,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 823,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      objective: { id: 822, name: 0, waveId: 823 },
    },
    {
      id: 824,
      initialStateId: 53,
      spawn1: {
        id: 824,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 824,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 824,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      objective: { id: 823, name: 0, waveId: 824 },
    },
    {
      id: 825,
      initialStateId: 53,
      spawn1: {
        id: 825,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 825,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 825,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      objective: { id: 824, name: 4, waveId: 825 },
    },
    {
      id: 826,
      initialStateId: 53,
      spawn1: {
        id: 826,
        spawnLocation: 'Hut (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [{ value: 3 }],
      },
      spawn2: {
        id: 826,
        spawnLocation: 'Hut (cliff)',
        selectedOptions: [
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 826,
        spawnLocation: 'Hut (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      objective: { id: 825, name: 0, waveId: 826 },
    },
    {
      id: 827,
      initialStateId: 53,
      spawn1: {
        id: 827,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 827,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 827,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      objective: { id: 826, name: 0, waveId: 827 },
    },
    {
      id: 828,
      initialStateId: 53,
      spawn1: {
        id: 828,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 828,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 828,
        spawnLocation: 'Forest M (cliff)',
        selectedOptions: [
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      objective: { id: 827, name: 7, waveId: 828 },
    },
    {
      id: 829,
      initialStateId: 53,
      spawn1: {
        id: 829,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 829,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [{ value: 2 }],
      },
      spawn3: {
        id: 829,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [{ value: 2 }],
      },
      objective: { id: 828, name: 0, waveId: 829 },
    },
    {
      id: 830,
      initialStateId: 53,
      spawn1: {
        id: 830,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 830,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 830,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      objective: { id: 829, name: 0, waveId: 830 },
    },
    {
      id: 831,
      initialStateId: 53,
      spawn1: {
        id: 831,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 831,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 831,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      objective: { id: 830, name: 3, waveId: 831 },
    },
    {
      id: 832,
      initialStateId: 53,
      spawn1: {
        id: 832,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 832,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 4,
            title: 'Samurai',
            color: 'black',
            image: '/images/samurai.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [{ value: 3 }],
      },
      spawn3: {
        id: 832,
        spawnLocation: 'Forest R (cliff)',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [{ value: 3 }],
      },
      objective: { id: 831, name: 0, waveId: 832 },
    },
    {
      id: 833,
      initialStateId: 53,
      spawn1: {
        id: 833,
        spawnLocation: 'Boat',
        selectedOptions: [
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn2: {
        id: 833,
        spawnLocation: 'Boat',
        selectedOptions: [
          {
            classId: 1,
            title: 'Hunter',
            color: 'red',
            image: '/images/hunter.png',
          },
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
        ],
        actions: [],
      },
      spawn3: {
        id: 833,
        spawnLocation: 'Boat',
        selectedOptions: [
          {
            classId: 2,
            title: 'Hunter',
            color: 'blue',
            image: '/images/hunter.png',
          },
          {
            classId: 3,
            title: 'Samurai',
            color: 'green',
            image: '/images/samurai.png',
          },
        ],
        actions: [],
      },
      objective: { id: 832, name: 0, waveId: 833 },
    },
  ],
};
