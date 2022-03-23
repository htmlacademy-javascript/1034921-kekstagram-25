import {generateData} from './data.js';
import {renderPhotos} from './pictures.js';
import {makeGalleryInteractive} from './gallery.js';

const pictures = generateData(25);
renderPhotos(pictures);
makeGalleryInteractive(pictures);
