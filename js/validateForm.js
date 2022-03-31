const form = document.querySelector('.img-upload__form');
const formHashtags = form.querySelector('.text__hashtags');
const description = form.querySelector('.text__description');
const HASHTAGS_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;
const HASHTAG_ERRORS = {
  hashtag: ['Хэштег должен начинаться с "#" и содержать буквы и числа (не более ', HASHTAG_MAX_LENGTH, ' символов)'].join(''),
  hashtagCount: ['Количество хэштегов должно быть не более', HASHTAGS_MAX_COUNT].join(' '),
  description: ['Длина комментария не может составлять больше ', MAX_DESCRIPTION_LENGTH,' символов'].join('')
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'hashtag__error'
}, true);

const convertHashtagsToArray = (element) => element.toLowerCase().split(' ').filter((el) => el);

const validateHashtag = (hashtags) => {
  const newHashtags = convertHashtagsToArray(hashtags);
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const isValid = (hashtag) => re.test(hashtag);
  return newHashtags.every(isValid);
};

const validateHashtagCount = (hashtags) => {
  const newHashtags = convertHashtagsToArray(hashtags);
  return newHashtags.length <= HASHTAGS_MAX_COUNT;
};

const validateDescription = (element) => element.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(formHashtags, validateHashtag, HASHTAG_ERRORS.hashtag);
pristine.addValidator(formHashtags, validateHashtagCount, HASHTAG_ERRORS.hashtagCount);
pristine.addValidator(description, validateDescription, HASHTAG_ERRORS.description);

const validateForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export {validateForm};
