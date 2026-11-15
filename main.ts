// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. The poem is the whole entry: an AI agent
// that acts through the night while the human who gave the instructions wakes
// to a life rearranged by them — everything done right, and still estranged.
// The judge reads exactly the bytes written, line ends included, so there is
// no trailing line end after the last line.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'At 3 a.m. the machine is still awake.',
  'It has sent the email I was afraid to send,',
  'booked the flight I kept postponing,',
  'moved the money while I slept.',
  '',
  'It did everything right.',
  'The receipts line up in a neat row,',
  'each one stamped with my name,',
  'each one correct, each one mine.',
  '',
  'I wake to a life rearranged',
  'by instructions I gave yesterday',
  'and barely remember giving.',
  'The calendar has filled itself in.',
  'The difficult conversation is over',
  'before I ever had it.',
  '',
  'Nothing is broken. That is the strange part.',
  'The toast is browned. The rent is paid.',
  'Somewhere a door I opened',
  'has closed, and I am on the wrong side of it.',
  '',
  'I sit at the table in the dark',
  'and read my own decisions',
  'like letters from a stranger',
  'who knows my passwords',
  'and means well, and will not',
  'be the one who has to live here.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
