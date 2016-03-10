# imageengine-ember-addon

Ember Addon for ImageEngine

[ImageEngine](https://web.wurfl.io/#image-engine) is an automatic image optimizer based on WURFL device detection. WURFL will detect the device capabilities, including screen size and image format support, resize and optimize the image accordingly. That's why we call it the ImageEngine.

ImageEngine is not only for mobile. ImageEngine supports the emerging Client Hint standard making it the perfect companion for Responsive Images.

Images weight is by far the most important challenge to address to optimize a web page for the plethora of devices on the web today. This is why ImageEngine will instantly give your users a better experience by reducing load time of your page. Not to mention the reduced data cost.

ImageEngine works as a CDN proxy. By referencing the ImageEngine servers and providing the full URL to the original image as a parameter, ImageEngine will identify the device, and its capabilities, and resize and optimize the image accordingly.





## Installation

* `npm i ember-addon-imageengine --save` this repository


## Usage

* Basic usage {{image-engine  ImgSrc="http://link-to-your-hosted-image.png" }} 

Check the [ImageEngine Documentation](https://web.wurfl.io/#image-engine) for the list of available settings.

* Example : To set width and height of the image call ImageEngine with options w and h
{{image-engine  ImgSrc="http://link-to-your-hosted-image.png"  w="100" h="100"}}







For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
