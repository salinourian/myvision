let descriptionElement = null;
let startButtonElement = null;
let cancelButtonElement = null;
let buttonsGroupElement = null;

function displayCancelButtonElement() {
  cancelButtonElement.style.display = '';
}

function hideCancelButtonElement() {
  cancelButtonElement.style.display = 'none';
}

function displayStartButtonElement() {
  startButtonElement.style.display = '';
}

function moveButtonsGroupElementToLowerPosition() {
  buttonsGroupElement.style.marginTop = '18px';
}

function hideStartButtonElement() {
  startButtonElement.style.display = 'none';
}

function displayDescription() {
  descriptionElement.style.display = '';
}

function hideDescriptionElement() {
  descriptionElement.style.display = 'none';
}

function moveDescriptionToLowerPosition() {
  descriptionElement.style.marginTop = '20px';
}

function getDefaultDescriptionMarkup() {
  return `
    Upload existing images/datasets and continue working on them in MyLabel.
    <br>
    <div class="upload-datasets-modal-description-break"></div>
    It is important to note that everything you upload here will never leave the privacy of your computer.`;
}

function prepareDescriptionView() {
  descriptionElement.innerHTML = getDefaultDescriptionMarkup();
  displayDescription();
  moveDescriptionToLowerPosition();
  displayStartButtonElement();
  moveButtonsGroupElementToLowerPosition();
  displayCancelButtonElement();
}

function hideDescriptionViewAssets() {
  hideStartButtonElement();
  // this is temporary to fit the upload datasets view
  hideDescriptionElement();
  hideCancelButtonElement();
}

function assignDescriptionViewLocalVariables() {
  descriptionElement = document.getElementById('upload-datasets-modal-description');
  startButtonElement = document.getElementById('upload-datasets-modal-start-button');
  cancelButtonElement = document.getElementById('upload-datasets-modal-cancel-button');
  buttonsGroupElement = document.getElementById('upload-datasets-modal-buttons');
}

export {
  assignDescriptionViewLocalVariables, prepareDescriptionView, hideDescriptionViewAssets,
};
