import {generateData} from './data.js';
import {renderPictures} from './pictures.js';
import {makeGalleryInteractive} from './gallery.js';

const pictures = generateData(25);
renderPictures(pictures);
makeGalleryInteractive(pictures);
