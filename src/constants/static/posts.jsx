import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from 'constants/Date';

export const posts = [
  {
    id: 1,
    title: 'Первый немного текста',
    image: {
      src: 'dist/images/react.svg',
      alt: 'Alt 1',
      width: '100px',
      height: '100px'
    },
    meta: {
      author: 'Author 1',
      createdAt: moment().format(DEFAULT_DATE_FORMAT),
      updatedAt: moment().format(DEFAULT_DATE_FORMAT),
      likes: 1
    }
  },
  {
    id: 2,
    title: 'Второй немного текста',
    image: {
      src: 'dist/images/react.svg',
      alt: 'Alt 2',
      width: '100px',
      height: '100px'
    },
    meta: {
      author: 'Author 2',
      createdAt: moment().format(DEFAULT_DATE_FORMAT),
      updatedAt: moment().format(DEFAULT_DATE_FORMAT),
      likes: 2
    }
  },
  {
    id: 4,
    title: 'Четвертый немного текста',
    image: {
      src: 'dist/images/react.svg',
      alt: 'Alt 3',
      width: '100px',
      height: '100px'
    },
    meta: {
      author: 'Author 3',
      createdAt: moment().format(DEFAULT_DATE_FORMAT),
      updatedAt: moment().format(DEFAULT_DATE_FORMAT),
      likes: 1
    }
  }
];
