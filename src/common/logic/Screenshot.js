import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export const saveImage = (idElement) => {
  let element = document.querySelector(`#${idElement}`)
    html2canvas(element).then(canvas => {
      canvas.toBlob(function (blob) {
        saveAs(blob, 'my_image.jpg');
      });
    });
  }
  
  export const previewSite = (idElement) => {
    let element = document.querySelector(`#${idElement}`)
    html2canvas(element).then(canvas => {
      document.querySelector("#to_preview").appendChild(canvas)
  });
  }
  
  export const resetPreview = () => {
    let parent = document.getElementById("to_preview")
    parent.textContent = "";
  }
