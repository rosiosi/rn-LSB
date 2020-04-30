import Category from '../models/category';
import Sign from '../models/sign';

export const CATEGORIES = [
    new Category('c1', 
                 'Familia', 
                 'https://steemitimages.com/DQmU3cRCbmNnVE63mrQxx7LjykRPTL324s964qwjDuKQRVm/familia900.jpg'),
    new Category('c2', 
                 'Comida', 
                 'https://conceptodefinicion.de/wp-content/uploads/2011/06/Alimento-2.jpg'),
    new Category('c3', 
                 'Lugares', 
                 'https://www.pequeocio.com/wp-content/uploads/2014/03/minopolis-viena.jpg')
];

export const SIGNS = [
    new Sign('s11',
    'Madre',
    'c1',
    'https://github.com/rosiosi/LSBImages/blob/master/mama.jpg?raw=true',
    'https://github.com/rosiosi/LSBImages/blob/master/mama.gif?raw=true',
    '8'
    ),
    new Sign('s12',
    'Padre',
    'c1',
    'https://github.com/rosiosi/LSBImages/blob/master/papa.jpg?raw=true',
    'https://github.com/rosiosi/LSBImages/blob/master/papa.gif?raw=true',
    '8'
    ),
    new Sign('s21',
    'Arroz',
    'c2',
    'https://github.com/rosiosi/LSBImages/blob/master/arroz.jpg?raw=true',
    'https://github.com/rosiosi/LSBImages/blob/master/arroz.gif?raw=true',
    '5'
    ),
    new Sign('s22',
    'Pan',
    'c2',
    'https://github.com/rosiosi/LSBImages/blob/master/pan.jpg?raw=true',
    'https://github.com/rosiosi/LSBImages/blob/master/pan.gif?raw=true',
    '9'
    ),
    new Sign('s23',
    'Lechuga',
    'c2',
    'https://github.com/rosiosi/LSBImages/blob/master/lechuga.jpg?raw=true',
    'https://github.com/rosiosi/LSBImages/blob/master/lechuga.gif?raw=true',
    '8'
    ),
    new Sign('s24',
    'Tomate',
    'c2',
    'https://github.com/rosiosi/LSBImages/blob/master/tomate.jpg?raw=true',
    'https://github.com/rosiosi/LSBImages/blob/master/tomate.gif?raw=true',
    '9'
    ),
    new Sign('s31',
    'Casa',
    'c3',
    'https://github.com/rosiosi/LSBImages/blob/master/casa.jpg?raw=true',
    'https://github.com/rosiosi/LSBImages/blob/master/casa.gif?raw=true',
    '9'
    )
];

