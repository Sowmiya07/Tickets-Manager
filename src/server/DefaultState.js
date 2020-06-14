export const defaultState = {
  users: [{
    id: 'U1',
    name: 'Developer'
  },
  {
    id: 'U2',
    name: 'Tester'
  }
  ],
  groups: [{
    name: 'ToDo',
    id: 'G1',
    owner: 'U1'
  },
  {
    name: 'Doing',
    id: 'G2',
    owner: 'U1'
  },
  {
    name: 'DOne',
    id: 'G3',
    owner: 'U1'
  }],
  tasks: [{
    name: 'Do tests',
    id: 'T1',
    group: 'G1',
    owner: 'U1',
    isComplete: false
  },
  {
    name: 'requirement gathering',
    id: 'T2',
    group: 'G1',
    owner: 'U1',
    isComplete: false
  },
  {
    name: 'knowledge transfer',
    id: 'T3',
    group: 'G2',
    owner: 'U2',
    isComplete: false
  },
  {
    name: 'Do document',
    id: 'T4',
    group: 'G2',
    owner: 'U2',
    isComplete: false
  },
  {
    name: 'Do code',
    id: 'T5',
    group: 'G3',
    owner: 'U2',
    isComplete: false
  }],
  comments: [{
    owner: 'U1',
    id: 'C1',
    task: 'T1',
    content: 'Great Work'
  }]
};