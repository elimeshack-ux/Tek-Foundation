export interface ProgramGallery {
  id: string;
  name: string;
  coverImage: string;
  photos: string[];
}

export const galleryData: Record<string, ProgramGallery> = {
  'aid-a-meal': {
    id: 'aid-a-meal',
    name: 'Aid-A-Meal Africa',
    coverImage: '/images/gallery/aid-a-meal/photo1.jpg',
    photos: Array.from({ length: 7 }, (_, i) => `/images/gallery/aid-a-meal/photo${i + 1}.jpg`)
  },
  'project-santa': {
    id: 'project-santa',
    name: 'Project Santa',
    coverImage: '/images/gallery/project-santa/photo1.jpg',
    photos: Array.from({ length: 9 }, (_, i) => `/images/gallery/project-santa/photo${i + 1}.jpg`)
  },
  'project-rack': {
    id: 'project-rack',
    name: 'Project RACK',
    coverImage: '/images/gallery/project-rack/photo1.jpg',
    photos: Array.from({ length: 8 }, (_, i) => `/images/gallery/project-rack/photo${i + 1}.jpg`)
  },
  'excelher': {
    id: 'excelher',
    name: 'ExcelHER Initiative',
    coverImage: 'https://lh3.googleusercontent.com/d/1svG-yehYtVYjDrCnTpGjGIPrLyjSXzl-',
    photos: ['https://lh3.googleusercontent.com/d/1svG-yehYtVYjDrCnTpGjGIPrLyjSXzl-']
  },
  'project-gfl': {
    id: 'project-gfl',
    name: 'Project GFL',
    coverImage: '/images/gallery/project-gfl/photo1.jpg',
    photos: Array.from({ length: 3 }, (_, i) => `/images/gallery/project-gfl/photo${i + 1}.jpg`)
  }
};

export const galleryList = Object.values(galleryData);
