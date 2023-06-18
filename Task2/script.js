var image11 = document.createElement('img');
image11.src = 'bg1img1.png';
image11.id = 'bg1img1';
var image12 = document.createElement('img');
image12.src = 'bg1img2.png';
image12.id = 'bg1img2';
var image13 = document.createElement('img');
image13.src = 'bg1img3.png';
image13.id = 'bg1img3';
var image14 = document.createElement('img');
image14.src = 'bg1img4.png';
image14.id = 'bg1img4';
var image15 = document.createElement('img');
image15.src = 'bg1img5.png';
image15.id = 'bg1img5';
var image21 = document.createElement('img');
image21.src = 'bg2img1.png';
image21.id = 'bg2img1';
var image22 = document.createElement('img');
image22.src = 'bg2img2.jpg';
image22.id = 'bg2img2';
var image23 = document.createElement('img');
image23.src = 'bg2img3.jpg';
image23.id = 'bg2img3';
var image24 = document.createElement('img');
image24.src = 'bg2img4.png';
image24.id = 'bg2img4';
var image25 = document.createElement('img');
image25.src = 'bg2img5.jpg';
image25.id = 'bg2img5';

function removePlaceholder() {
  var selectElement = document.getElementById("unit");
  var placeholderOption = selectElement.querySelector('option[disabled]');
  placeholderOption.disabled = true;
  placeholderOption.selected = false;
}

function createNotification(message) {
  const container = document.getElementById('notificationContainer');
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  container.appendChild(notification);

  setTimeout(function() {
    container.removeChild(notification);
  }, 2000);
}

function removeImages(images) {
  images.forEach(function(image) {
    image.parentNode.removeChild(image);
  });
}

function addbg1() {
  var body = document.querySelector('body');
  body.style.backgroundColor = 'transparent';
  body.style.backgroundImage = 'none';
  document.body.appendChild(image11);
  document.body.appendChild(image12);
  document.body.appendChild(image13);
  document.body.appendChild(image14);
  document.body.appendChild(image15);
  removeImages([image21, image22, image23, image24, image25]);
}

function addbg2() {
  var body = document.querySelector('body');
  body.style.backgroundColor = 'transparent';
  body.style.backgroundImage = 'none';
  document.body.appendChild(image21);
  document.body.appendChild(image22);
  document.body.appendChild(image23);
  document.body.appendChild(image24);
  document.body.appendChild(image25);
  removeImages([image11, image12, image13, image14, image15]);
}

function convertTemp() {
  var temp = parseFloat(document.getElementById('temp').value);
  var unit = document.getElementById('unit').value;
  var result = document.getElementById('result');
  var inCel, inFar, inKel;
  if (isNaN(temp)) {
    createNotification('Please enter temperature');
  } else if (unit === 'nill') {
    createNotification('Please select units for the given temperature');
  } else {
    if (unit === 'celsius') {
      inCel = temp;
      inFar = (temp * 9 / 5) + 32;
      inKel = temp + 273.15;
      result.innerHTML = temp + ' °C = ' + inFar + ' °F<br>' + temp + ' °C = ' + inKel + ' K';
    } else if (unit === 'fahrenheit') {
      inCel = (temp - 32) * 5 / 9;
      inKel = inCel + 273.15;
      result.innerHTML = temp + ' °F = ' + inCel + ' °C<br>' + temp + ' °F = ' + inKel + ' K';
    } else if (unit === 'kelvin') {
      inCel = temp - 273.15;
      inFar = (inCel * 9 / 5) + 32;
      result.innerHTML = temp + ' K = ' + inCel + ' °C<br>' + temp + ' K = ' + inFar + ' °F';
    }
    if (inCel > 30) {
      addbg1();
    } else {
      addbg2();
    }
  }
}

function reset() {
  var body = document.querySelector('body');
  body.style.backgroundColor = '';
  body.style.backgroundImage = '';

  removeImages([image11, image12, image13, image14, image15]);
  removeImages([image21, image22, image23, image24, image25]);
  document.getElementById('temp').value = '';
  document.getElementById('unit').value = 'nill';
  document.getElementById('result').innerHTML = '';

  createNotification('Form reset successfully!');
}