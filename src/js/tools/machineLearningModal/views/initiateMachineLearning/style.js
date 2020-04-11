let isNoImagesFoundInfoDisplayed = false;

let checkmarkElement = null;
let nextButtonElement = null;
let modalParentElement = null;
let descriptionElement = null;
let loadingTextElement = null;
let loadingWheelElement = null;
let buttonsGroupElement = null;
let submitButtonElement = null;
let cancelButtonElement = null;
let infoMessagesElement = null;
let errorMessagesElement = null;
let checkmarkParentElement = null;
let allImagesButtonElement = null;
let newImagesButtonElement = null;
let progressMessagesElement = null;
let toolkitUploadImagesButton = null;

function removeProgressMessage() {
  progressMessagesElement.style.display = 'none';
  progressMessagesElement.style.color = '';
  progressMessagesElement.innerHTML = '';
}

function changeProgressMessageColor(colorHex) {
  progressMessagesElement.style.color = colorHex;
}

function displayCheckMarkWthAnimation() {
  checkmarkParentElement.style.display = '';
  checkmarkElement.classList.toggle('checkmark');
}

function removeCheckMark() {
  checkmarkParentElement.style.display = 'none';
  checkmarkElement.classList.toggle('checkmark');
}

function displayErrorMessage(errorMessage) {
  removeProgressMessage();
  errorMessagesElement.style.display = '';
  errorMessagesElement.innerHTML = errorMessage;
  buttonsGroupElement.style.marginTop = '4px';
}

function removeErrorMessage() {
  errorMessagesElement.style.display = 'none';
  errorMessagesElement.innerHTML = '';
  buttonsGroupElement.style.marginTop = '';
}

function displayRetryButton() {
  document.getElementById('machine-learning-modal-initiate-retry-button').style.display = '';
  descriptionElement.style.marginBottom = '6px';
}

function removeRetryButton() {
  document.getElementById('machine-learning-modal-initiate-retry-button').style.display = 'none';
  descriptionElement.style.marginBottom = '';
}

function updateProgressMessage(progressMessage) {
  removeErrorMessage();
  progressMessagesElement.innerHTML = progressMessage;
  progressMessagesElement.style.display = '';
}

function displayInfoMessage(message) {
  infoMessagesElement.innerHTML = message;
  buttonsGroupElement.style.marginTop = '4px';
}

function removeInfoMessage() {
  infoMessagesElement.innerHTML = '';
  buttonsGroupElement.style.marginTop = '';
}

function displayDescription() {
  descriptionElement.style.display = '';
}

function removeDescription() {
  descriptionElement.style.display = 'none';
}

function displayLoadingText() {
  loadingTextElement.style.display = '';
}

function removeLoadingText() {
  loadingTextElement.style.display = 'none';
}

function displayLoaderWheel() {
  removeErrorMessage();
  loadingWheelElement.style.display = '';
  cancelButtonElement.style.marginRight = '3px';
  descriptionElement.style.marginBottom = '2px';
}

function removeLoadingWheel() {
  loadingWheelElement.style.display = 'none';
  cancelButtonElement.style.marginRight = '';
  descriptionElement.style.marginBottom = '';
}

function removeLoadingContent() {
  removeLoadingWheel();
  removeLoadingText();
}

function displayMLCoverageSelectionButtons() {
  allImagesButtonElement.style.display = '';
  newImagesButtonElement.style.display = '';
}

function removeMLCoverageSelectionButtons() {
  allImagesButtonElement.style.display = 'none';
  newImagesButtonElement.style.display = 'none';
}

function displayNextButton() {
  nextButtonElement.style.display = '';
  descriptionElement.style.marginBottom = '7px';
}

function removeNextButton() {
  nextButtonElement.style.display = 'none';
  descriptionElement.style.marginBottom = '7px';
}

function displayCancelButton() {
  cancelButtonElement.style.display = '';
}

function removeCancelButton() {
  cancelButtonElement.style.display = 'none';
}

function displayStartButton() {
  submitButtonElement.style.display = '';
}

function removeStartButton() {
  submitButtonElement.style.display = 'none';
}

function replaceCancelButtonGreyClassToOriginal() {
  cancelButtonElement.classList.replace('popup-dimmed-cancel-button', 'popup-cancel-button');
  cancelButtonElement.removeEventListener('mouseover', replaceCancelButtonGreyClassToOriginal);
}

function disableImmediateCancelButtonHoverEffect() {
  cancelButtonElement.classList.replace('popup-cancel-button', 'popup-dimmed-cancel-button');
  setTimeout(() => {
    cancelButtonElement.addEventListener('mouseover', replaceCancelButtonGreyClassToOriginal);
  }, 100);
}

function disableStartButton() {
  setTimeout(() => {
    submitButtonElement.classList.replace('popup-label-button', 'popup-label-button-disabled');
  });
}

function enableStartButton() {
  submitButtonElement.classList.replace('popup-label-button-disabled', 'popup-label-button');
}

function highlightCancelButton() {
  cancelButtonElement.style.backgroundColor = '#e2acac';
}

function displayUploadImagesButton() {
  toolkitUploadImagesButton.style.zIndex = 3;
  toolkitUploadImagesButton.style.border = '2px solid rgb(73, 178, 218)';
}

function hideUploadImagesButton() {
  toolkitUploadImagesButton.style.zIndex = 1;
  toolkitUploadImagesButton.style.border = '';
}

function increasePopUpHeight(height) {
  modalParentElement.style.height = height;
}

function setDefaultPopUpHeight() {
  modalParentElement.style.height = '';
}

function setDescriptionElementMarginBottom(height) {
  descriptionElement.style.marginBottom = height;
}

function setDefaultDescriptionElementMarginBottom() {
  descriptionElement.style.marginBottom = '';
}

function changeToLoadingStyle() {
  displayLoadingText();
  removeDescription();
  disableImmediateCancelButtonHoverEffect();
  displayLoaderWheel();
  removeStartButton();
}

function changeToMLCompleteStyle() {
  displayCheckMarkWthAnimation();
  changeProgressMessageColor('#1e6d1e');
  updateProgressMessage('Finished!');
}

function changeToNoImagesFoundStyle() {
  displayUploadImagesButton();
  disableStartButton();
  displayInfoMessage('Please upload an image to get started.');
  setDescriptionElementMarginBottom('3px');
  // need to change here
  increasePopUpHeight('259px');
  isNoImagesFoundInfoDisplayed = true;
}

function removeNoImagesFoundOnMLModalStyle() {
  if (isNoImagesFoundInfoDisplayed) {
    hideUploadImagesButton();
    removeInfoMessage();
    enableStartButton();
    setDefaultPopUpHeight();
    setDefaultDescriptionElementMarginBottom();
    isNoImagesFoundInfoDisplayed = false;
  }
}

function hideInitiateMachineLearningViewAssets() {
  removeNextButton();
  removeProgressMessage();
  removeCheckMark();
  buttonsGroupElement.style.display = 'none';
  descriptionElement.style.marginBottom = '';
}

function getDefaultDescriptionMarkup() {
  return `
    You can use a pre-trained Machine Learning model to automatically annotate objects with bounding boxes!
    <div class="upload-datasets-modal-description-break"></div>
    Click 'Start' to download the 'COCO-SSD' model and use it to generate bounding boxes for your images.
    <div class="upload-datasets-modal-description-break"></div>
    In addition, because this model operates locally on the browser, your data will never leave the privacy of your computer.`;
}

function prepareInstantiateMachineLearningView() {
  setDefaultDescriptionElementMarginBottom();
  descriptionElement.innerHTML = getDefaultDescriptionMarkup();
  displayDescription();
  buttonsGroupElement.style.display = '';
  cancelButtonElement.style.marginRight = '';
  displayStartButton();
  displayCancelButton();
  removeLoadingContent();
}

function assignInitiateMachineLearningViewLocalVariables() {
  toolkitUploadImagesButton = document.getElementById('uploadImagesButton');
  modalParentElement = document.getElementById('machine-learning-modal-parent');
  checkmarkElement = document.getElementById('machine-learning-modal-check-mark');
  loadingWheelElement = document.getElementById('machine-learning-modal-loading-wheel');
  loadingTextElement = document.getElementById('machine-learning-modal-loading-text');
  descriptionElement = document.getElementById('machine-learning-modal-description');
  submitButtonElement = document.getElementById('machine-learning-modal-initiate-start-button');
  nextButtonElement = document.getElementById('machine-learning-modal-initiate-next-button');
  cancelButtonElement = document.getElementById('machine-learning-modal-initiate-cancel-button');
  buttonsGroupElement = document.getElementById('machine-learning-modal-initiate-machine-learning-buttons');
  errorMessagesElement = document.getElementById('machine-learning-modal-error-messages');
  infoMessagesElement = document.getElementById('machine-learning-modal-info-messages');
  checkmarkParentElement = document.getElementById('machine-learning-modal-check-mark-parent');
  progressMessagesElement = document.getElementById('machine-learning-modal-progress-messages');
  allImagesButtonElement = document.getElementById('machine-learning-modal-initiate-all-images-button');
  newImagesButtonElement = document.getElementById('machine-learning-modal-initiate-new-images-button');
}

export {
  hideInitiateMachineLearningViewAssets, displayNextButton,
  removeNoImagesFoundOnMLModalStyle, removeErrorMessage,
  changeToLoadingStyle, removeCancelButton, removeRetryButton,
  displayLoaderWheel, removeLoadingContent, displayRetryButton,
  removeStartButton, disableStartButton, changeToNoImagesFoundStyle,
  prepareInstantiateMachineLearningView, displayUploadImagesButton,
  assignInitiateMachineLearningViewLocalVariables, enableStartButton,
  displayMLCoverageSelectionButtons, removeMLCoverageSelectionButtons,
  displayErrorMessage, changeToMLCompleteStyle, highlightCancelButton,
};
