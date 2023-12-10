/*

  Author: Muhammad iar Hossain
  Project Name: CSS background image controller 
  Date of Creation:  17th July 2022
  Features: 
     => User can upload image
     => User can controll background image

*/

window.onload = () => {
  const inputFile = document.getElementById('file_input'),
        bgPreview = document.getElementById('bgPreview'),
        removeBtn = document.getElementById('remove_btn'),
        bgController = document.getElementById('bg_controller'),
        bgSizeOption = document.getElementById('select_bg_sz'),
        bgPostionOption = document.getElementById('select_bg_pos'),
        bgAttachOption = document.getElementById('select_bg_attach'),
        bgRepeatOption = document.getElementById('select_bg_repeat');       ;

  inputFile.addEventListener('input', handleInputFiles(inputFile, bgPreview, removeBtn, bgController))
  removeBtn.addEventListener('click', handleRemoveBtn(bgPreview, removeBtn, bgController, bgSizeOption, bgPostionOption, bgAttachOption, bgRepeatOption))
  bgSizeOption.addEventListener('change', bgPreferences(bgSizeOption, bgPostionOption, bgAttachOption, bgRepeatOption))
  bgPostionOption.addEventListener('change', bgPreferences(bgSizeOption, bgPostionOption, bgAttachOption, bgRepeatOption))
  bgAttachOption.addEventListener('change', bgPreferences(bgSizeOption, bgPostionOption, bgAttachOption, bgRepeatOption))
  bgRepeatOption.addEventListener('change', bgPreferences(bgSizeOption, bgPostionOption, bgAttachOption, bgRepeatOption))
}

// utils function
function show(a) {a.style.display = 'inline-block'}
function hide(a) {a.style.display = 'none'}

// handling user uploded image files
function handleInputFiles(inputFile, bgPreview, removeBtn, bgController) {
  return ()=> {
      if((inputFile.files[0].type == 'image/jpeg') || (inputFile.files[0].type == 'image/png') || (inputFile.files[0].type == 'image/webp') || (inputFile.files[0].type == 'image/svg+xml')) 
      {
        const imgUrl = URL.createObjectURL(inputFile.files[0]);
        bgPreview.style.backgroundImage = `url(${imgUrl})`;
        document.body.style.backgroundImage = `url(${imgUrl})`;
        show(bgController)
        show(removeBtn)
      } else {
        alert(`This file isn't a type of image. \n Make sure your file extensions are jpg, jpeg, png, svg, webp.`)
      }
  }
}

// remove bg preferences and remove button from UI
function handleRemoveBtn (bgPreview, removeBtn, bgController, bgSizeOption, bgPostionOption, bgAttachOption, bgRepeatOption) {
  return ()=> {
    bgPreview.style.backgroundImage = '';
    document.body.style.backgroundImage = '';
    hide(removeBtn)
    hide(bgController);

    // select default style of bg image
    document.body.style.backgroundSize = '';
    document.body.style.backgroundPosition = '';
    document.body.style.backgroundAttachment = '';
    document.body.style.backgroundRepeat = '';

    // select default value of the select element
    bgSizeOption[0].selected = true;
    bgPostionOption[0].selected = true;
    bgAttachOption[0].selected = true;
    bgRepeatOption[0].selected = true;
  }
}

// constroll bg preferences
function bgPreferences(bgSizeOption, bgPostionOption, bgAttachOption, bgRepeatOption) {
  return () => {
    document.body.style.backgroundSize = bgSizeOption.value;
    document.body.style.backgroundPosition = bgPostionOption.value;
    document.body.style.backgroundAttachment = bgAttachOption.value;
    document.body.style.backgroundRepeat = bgRepeatOption.value;
  }
}

