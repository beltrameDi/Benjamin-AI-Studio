
import React from 'react';
import { Icon } from './types';

const iconProps = {
  className: "w-10 h-10 md:w-12 md:h-12 text-slate-700",
  strokeWidth: "1.5"
};

export const ICONS: Icon[] = [
  { name: 'Tree', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-8"/><path d="M12 14l-4-4-4-4"/><path d="M12 14l4-4 4-4"/><path d="M12 14l-4 4"/><path d="M12 14l4 4"/></svg> },
  { name: 'Flower', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/></svg> },
  { name: 'Robot', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="12" x="4" y="4" rx="2" /><path d="M4 10h16" /><path d="M8 18v-4" /><path d="M16 18v-4" /><circle cx="8" cy="12" r="1" /><circle cx="16" cy="12" r="1" /></svg> },
  { name: 'Person', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><path d="M12 8v11" /><path d="M12 11l-4 4" /><path d="M12 11l4 4" /><path d="M6 22h12" /></svg> },
  { name: 'Cat', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5c-2 0-5 2-5 5v2c0 2 2 4 4 4h2c2 0 4-2 4-4v-2c0-3-3-5-5-5z" /><path d="M12 14v4" /><path d="M8 18v-2" /><path d="M16 18v-2" /><path d="M12 5a2 2 0 0 0-2-2 2 2 0 0 0-2 2" /><path d="M12 5a2 2 0 0 1 2-2 2 2 0 0 1 2 2" /></svg> },
  { name: 'Bug', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20v-4" /><path d="M16 20v-4" /><path d="M12 16h0" /><path d="M12 4a4 4 0 0 1 4 4v4H8v-4a4 4 0 0 1 4-4z" /><path d="M4 12h16" /><path d="M6 12l-2-4" /><path d="M18 12l2-4" /></svg> },
  { name: 'Sun', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg> },
  { name: 'Moon', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg> },
  { name: 'Cloud', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg> },
  { name: 'Anchor', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><circle cx="12" cy="5" r="3" /></svg> },
  { name: 'Car', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10h-3.26"/><path d="m10.13 10-2.3-4.14"/><path d="M5 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C4.7 10.6 2 10 2 10h3.26"/><path d="M7 10h3"/><path d="M14 10h3"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg> },
  { name: 'Rocket', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.66-1.07 1.34-2.22 2.03-3.48.34-.63.68-1.29 1.02-1.95.51-1 .93-2.16.5-3.5-.42-1.31-1.96-2-3.5-2-1.54 0-3.08.69-3.5 2-.43 1.34-.01 2.5.5 3.5.34.66.68 1.32 1.02 1.95.69 1.26 1.37 2.41 2.03 3.48-.65.81-2.27.76-3.11.05Z"/><path d="m9 15 1-1"/><path d="M14.5 17.5 12 15l1.5-1.5.5.5L12 12l2.5 2.5Z"/></svg> },
  { name: 'Heart', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
  { name: 'Star', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { name: 'Ghost', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg> },
  { name: 'Skull', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="M12.5 17.5c-.5.5-1.5.5-2 0l-2-2c-.5-.5-.5-1.5 0-2l2-2c.5-.5 1.5-.5 2 0l2 2c.5.5.5 1.5 0 2l-2 2Z"/><path d="M16 20a4 4 0 0 0-8 0"/></svg> },
  { name: 'Dog', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5c-2 0-5 2-5 5v2c0 2 2 4 4 4h2c2 0 4-2 4-4v-2c0-3-3-5-5-5Z"/><path d="M8 14v4"/><path d="M16 14v4"/><path d="M12 18v2"/><path d="M12 3v2"/></svg> },
  { name: 'Fish', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12s-4-3-4-3c-2 0-4 1-4 3s2 3 4 3 4-3 4-3Z"/><path d="M12 12s4-3 4-3c2 0 4 1 4 3s-2 3-4 3-4-3-4-3Z"/><path d="M12 12v-2"/><path d="M12 12v2"/><path d="M12 20v-4"/></svg> },
  { name: 'Bird', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7.5c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/><path d="M16 8c4 0 8 2 8 5s-4 5-8 5"/><path d="M12 11h0"/></svg> },
  { name: 'Butterfly', component: <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-2 0-5-2-5-5s3-5 5-5 5 2 5 5-3 5-5 5z"/><path d="M12 12c2 0 5 2 5 5s-3 5-5 5-5-2-5-5 3-5 5-5z"/><path d="M12 2v20"/></svg> },
];

export const PLAYER_1_KEYS = ['q', 'w', 'e', 'r', 't'];
export const PLAYER_2_KEYS = ['p', 'o', 'i', 'u', 'y'];
export const PLAYER_1_SHUFFLE_KEY = 's';
export const PLAYER_2_SHUFFLE_KEY = 'l';

export const DECK_SIZE = 20;

export const BACKGROUNDS = [
    "https://images.pexels.com/photos/3662843/pexels-photo-3662843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Kids Playground
    "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Galaxy
    "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Sea
    "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Beach
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // AI Agent
    "https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Kids doll
    "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Earth
    "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Night
    "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // ServiceNow
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Google Gemini
];
