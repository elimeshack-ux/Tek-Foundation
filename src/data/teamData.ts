/**
 * TEK Foundation Team Data
 * Update member names, titles, photos, and bios when ready
 */

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  photo1: string;
  photo2: string;
  shortBio: string;
  fullBio: string[];
}

export interface TeamData {
  id: string;
  name: string;
  type: 'flip' | 'simple';
  members: TeamMember[];
}

const photo1 = 'https://placehold.co/400x500/CCCCCC/555555?text=Photo';
const photo2 = 'https://placehold.co/400x500/AAAAAA/333333?text=Photo+2';

export const teamData: Record<string, TeamData> = {
  board: {
    id: 'board',
    name: 'The Board',
    type: 'flip',
    members: [
      {
        id: 'board-1',
        name: 'Board Member Name',
        title: 'Board Chairman',
        photo1,
        photo2,
        shortBio: 'A visionary leader dedicated to driving TEK Foundation\'s mission of eliminating hunger across Africa.',
        fullBio: [
          'Full biography paragraph one goes here. This will be updated with the real story of this board member.',
          'Full biography paragraph two goes here. Include background, experience, and passion for the cause.',
          'Full biography paragraph three goes here. Include their vision for TEK Foundation.',
        ],
      },
      {
        id: 'board-2',
        name: 'Board Member Name',
        title: 'Board Member',
        photo1,
        photo2,
        shortBio: 'Bringing strategic insight and decades of experience to guide TEK Foundation\'s growth.',
        fullBio: [
          'Full biography paragraph one goes here.',
          'Full biography paragraph two goes here.',
          'Full biography paragraph three goes here.',
        ],
      },
      {
        id: 'board-3',
        name: 'Board Member Name',
        title: 'Board Secretary',
        photo1,
        photo2,
        shortBio: 'Committed to accountability and transparency in all of TEK Foundation\'s operations.',
        fullBio: [
          'Full biography paragraph one goes here.',
          'Full biography paragraph two goes here.',
          'Full biography paragraph three goes here.',
        ],
      },
    ],
  },
  executive: {
    id: 'executive',
    name: 'Executive Team',
    type: 'flip',
    members: [
      {
        id: 'exec-1',
        name: 'Executive Name',
        title: 'Chief Executive Officer',
        photo1,
        photo2,
        shortBio: 'Leading TEK Foundation with passion, purpose, and a deep commitment to ending food insecurity.',
        fullBio: [
          'Full biography paragraph one goes here.',
          'Full biography paragraph two goes here.',
          'Full biography paragraph three goes here.',
        ],
      },
      {
        id: 'exec-2',
        name: 'Executive Name',
        title: 'Chief Operations Officer',
        photo1,
        photo2,
        shortBio: 'Driving operational excellence and ensuring every programme delivers maximum impact.',
        fullBio: [
          'Full biography paragraph one goes here.',
          'Full biography paragraph two goes here.',
          'Full biography paragraph three goes here.',
        ],
      },
      {
        id: 'exec-3',
        name: 'Executive Name',
        title: 'Chief Finance Officer',
        photo1,
        photo2,
        shortBio: 'Ensuring financial accountability and sustainable growth for TEK Foundation.',
        fullBio: [
          'Full biography paragraph one goes here.',
          'Full biography paragraph two goes here.',
          'Full biography paragraph three goes here.',
        ],
      },
    ],
  },
  programs: {
    id: 'programs',
    name: 'Programs Team',
    type: 'simple',
    members: [
      { id: 'prog-1', name: 'Team Member Name', title: 'Programs Manager', photo1, photo2: '', shortBio: '', fullBio: [] },
      { id: 'prog-2', name: 'Team Member Name', title: 'Programs Officer', photo1, photo2: '', shortBio: '', fullBio: [] },
      { id: 'prog-3', name: 'Team Member Name', title: 'Programs Coordinator', photo1, photo2: '', shortBio: '', fullBio: [] },
    ],
  },
  media: {
    id: 'media',
    name: 'Media & Publicity Team',
    type: 'simple',
    members: [
      { id: 'media-1', name: 'Team Member Name', title: 'Media Manager', photo1, photo2: '', shortBio: '', fullBio: [] },
      { id: 'media-2', name: 'Team Member Name', title: 'Content Creator', photo1, photo2: '', shortBio: '', fullBio: [] },
      { id: 'media-3', name: 'Team Member Name', title: 'Social Media Officer', photo1, photo2: '', shortBio: '', fullBio: [] },
    ],
  },
  product: {
    id: 'product',
    name: 'Product Team',
    type: 'simple',
    members: [
      { id: 'prod-1', name: 'Team Member Name', title: 'Product Manager', photo1, photo2: '', shortBio: '', fullBio: [] },
      { id: 'prod-2', name: 'Team Member Name', title: 'UI/UX Designer', photo1, photo2: '', shortBio: '', fullBio: [] },
      { id: 'prod-3', name: 'Team Member Name', title: 'Developer', photo1, photo2: '', shortBio: '', fullBio: [] },
    ],
  },
  operations: {
    id: 'operations',
    name: 'Operations Team',
    type: 'simple',
    members: [
      { id: 'ops-1', name: 'Team Member Name', title: 'Operations Manager', photo1, photo2: '', shortBio: '', fullBio: [] },
      { id: 'ops-2', name: 'Team Member Name', title: 'Logistics Officer', photo1, photo2: '', shortBio: '', fullBio: [] },
      { id: 'ops-3', name: 'Team Member Name', title: 'Field Coordinator', photo1, photo2: '', shortBio: '', fullBio: [] },
    ],
  },
};
