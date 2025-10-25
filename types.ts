import React from 'react';

export enum GameStatus {
  Intro = 'Intro',
  Setup = 'Setup',
  Playing = 'Playing',
  Player1Wins = 'Player1Wins',
  Player2Wins = 'Player2Wins',
}

export type Icon = {
  name: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve the 'Cannot find namespace JSX' error.
  component: React.ReactElement;
};

export type CardType = Icon[];

export type HighScores = Record<string, number>;
