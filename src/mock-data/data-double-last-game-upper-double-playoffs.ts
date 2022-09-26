import { Match } from '../types';

const dataDoublePlayoffs: { upper: Match[]; lower: Match[] } = {
  upper: [
    {
      id: 'WB R1 M1',
      name: 'WB R1 M1',
      nextMatchId: 'WB R2 M1',
      nextLooserMatchId: 'LB R1 M1',
      startTime: null,
      tournamentRound: 'R1',
      state: 'WALK_OVER',
      participants: [
        {
          id: 'ddfee063-adde-4192-95d2-203eb2ebb8f7',
          resultText: '',
          isWinner: true,
          status: 'WALK_OVER',
          name: '#1',
        },
      ],
    },
    {
      id: 'WB R1 M2',
      name: 'WB R1 M2',
      nextMatchId: 'WB R2 M1',
      nextLooserMatchId: 'LB R1 M1',
      startTime: '2021-07-27T15:00:00+00:00',
      tournamentRound: 'R1',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'b4ecc604-1248-4265-895a-af918e27b6ff',
          resultText: '',
          isWinner: true,
          status: 'PLAYED',
          name: '#5',
        },
        {
          id: '19abab76-3c82-40e9-a334-4f57cb81bd08',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#4',
        },
      ],
    },
    {
      id: 'WB R1 M3',
      name: 'WB R1 M3',
      nextMatchId: 'WB R2 M2',
      nextLooserMatchId: 'LB R1 M2',
      startTime: '2021-07-27T15:00:00+00:00',
      tournamentRound: 'R1',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'ef66d820-1e28-4ef6-81e6-0835b2df5236',
          resultText: '',
          isWinner: true,
          status: 'PLAYED',
          name: '#3',
        },
        {
          id: '4c07d93a-f7e9-4b84-bda3-27c08c689f90',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#6',
        },
      ],
    },
    {
      id: 'WB R1 M4',
      name: 'WB R1 M4',
      nextMatchId: 'WB R2 M2',
      nextLooserMatchId: 'LB R1 M2',
      startTime: null,
      tournamentRound: 'R1',
      state: 'WALK_OVER',
      participants: [
        {
          id: '4a05a091-f7b6-4a9a-b6eb-b7ff8ea6dc87',
          resultText: '',
          isWinner: true,
          status: 'WALK_OVER',
          name: '#2',
        },
      ],
    },
    {
      id: 'WB R2 M1',
      name: 'WB R2 M1',
      nextMatchId: 'WB R3 M1',
      nextLooserMatchId: 'LB R2 M1',
      startTime: '2021-07-27T16:00:00+00:00',
      tournamentRound: 'R2',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'ddfee063-adde-4192-95d2-203eb2ebb8f7',
          resultText: '',
          isWinner: true,
          status: 'PLAYED',
          name: '#1',
        },
        {
          id: 'b4ecc604-1248-4265-895a-af918e27b6ff',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#5',
        },
      ],
    },
    {
      id: 'WB R2 M2',
      name: 'WB R2 M2',
      nextMatchId: 'WB R3 M1',
      nextLooserMatchId: 'LB R2 M2',
      startTime: '2021-07-27T16:00:00+00:00',
      tournamentRound: 'R2',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'ef66d820-1e28-4ef6-81e6-0835b2df5236',
          resultText: '',
          isWinner: true,
          status: 'PLAYED',
          name: '#3',
        },
        {
          id: '4a05a091-f7b6-4a9a-b6eb-b7ff8ea6dc87',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#2',
        },
      ],
    },
    {
      id: 'WB R3 M1',
      name: 'WB R3 M1',
      nextMatchId: 'WB R5 M1',
      nextLooserMatchId: 'LB R4 M1',
      startTime: '2021-07-27T17:00:00+00:00',
      tournamentRound: 'R3',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'ddfee063-adde-4192-95d2-203eb2ebb8f7',
          resultText: '',
          isWinner: true,
          status: 'PLAYED',
          name: '#1',
        },
        {
          id: 'ef66d820-1e28-4ef6-81e6-0835b2df5236',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#3',
        },
      ],
    },
    {
      id: 'WB R5 M1',
      name: 'WB R5 M1',
      nextMatchId: 'WB R6 M1',
      nextLooserMatchId: 'WB R6 M1',
      startTime: null,
      tournamentRound: 'R5',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'ddfee063-adde-4192-95d2-203eb2ebb8f7',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#1',
        },
      ],
    },
    {
      id: 'WB R6 M1',
      name: 'WB R6 M1',
      nextMatchId: null,
      nextLooserMatchId: null,
      startTime: null,
      tournamentRound: 'R6',
      state: 'SCORE_DONE',
      participants: [],
    },
  ],
  lower: [
    {
      id: 'LB R1 M1',
      name: 'LB R1 M1',
      nextMatchId: 'LB R2 M1',
      nextLooserMatchId: null,
      startTime: null,
      tournamentRound: 'R1',
      state: 'WALK_OVER',
      participants: [
        {
          id: '19abab76-3c82-40e9-a334-4f57cb81bd08',
          resultText: '',
          isWinner: true,
          status: 'WALK_OVER',
          name: '#4',
        },
      ],
    },
    {
      id: 'LB R1 M2',
      name: 'LB R1 M2',
      nextMatchId: 'LB R2 M2',
      nextLooserMatchId: null,
      startTime: null,
      tournamentRound: 'R1',
      state: 'WALK_OVER',
      participants: [
        {
          id: '4c07d93a-f7e9-4b84-bda3-27c08c689f90',
          resultText: '',
          isWinner: true,
          status: 'WALK_OVER',
          name: '#6',
        },
      ],
    },
    {
      id: 'LB R2 M1',
      name: 'LB R2 M1',
      nextMatchId: 'LB R3 M1',
      nextLooserMatchId: null,
      startTime: '2021-07-27T17:00:00+00:00',
      tournamentRound: 'R2',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'b4ecc604-1248-4265-895a-af918e27b6ff',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#5',
        },
        {
          id: '19abab76-3c82-40e9-a334-4f57cb81bd08',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#4',
        },
      ],
    },
    {
      id: 'LB R2 M2',
      name: 'LB R2 M2',
      nextMatchId: 'LB R3 M1',
      nextLooserMatchId: null,
      startTime: '2021-07-27T18:00:00+00:00',
      tournamentRound: 'R2',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '4c07d93a-f7e9-4b84-bda3-27c08c689f90',
          resultText: '',
          isWinner: true,
          status: 'PLAYED',
          name: '#6',
        },
        {
          id: '4a05a091-f7b6-4a9a-b6eb-b7ff8ea6dc87',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#2',
        },
      ],
    },
    {
      id: 'LB R3 M1',
      name: 'LB R3 M1',
      nextMatchId: 'LB R4 M1',
      nextLooserMatchId: null,
      startTime: null,
      tournamentRound: 'R3',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '4c07d93a-f7e9-4b84-bda3-27c08c689f90',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#6',
        },
      ],
    },
    {
      id: 'LB R4 M1',
      name: 'LB R4 M1',
      nextMatchId: 'WB R5 M1',
      nextLooserMatchId: null,
      startTime: null,
      tournamentRound: 'R4',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'ef66d820-1e28-4ef6-81e6-0835b2df5236',
          resultText: '',
          isWinner: false,
          status: 'PLAYED',
          name: '#3',
        },
      ],
    },
  ],
};
export default dataDoublePlayoffs;
