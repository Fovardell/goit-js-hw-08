import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(i => `		
		<li class="gallery__item">
			<a class="gallery__link" href="${i.original}">
				<img class="gallery__image" src="${i.preview}"
					alt="${i.description}" />
			</a>
		</li>`)
	.join('');

gallery.innerHTML = markup;

const options = {
	captions: true,
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,

};
var lightbox = new SimpleLightbox('.gallery a', options);
