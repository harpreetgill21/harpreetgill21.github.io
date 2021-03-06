Image Slider Maker README
=========================
ImageSliderMaker.com


Using in your website
---------------------

Please first make sure you have fully extracted the contents of the zip file.
In Windows, right-click on imageslidermaker.zip and select Extract All...

To get your slider working in your web page, you must add
my-slider.css, ism-2.1-min.js and the slide images to your project
directory and paste the markup (included below) into your HTML.

The directory structure of this package:

  imageslidermaker/
    README.txt
    example.html
    ism/
      css/
        my-slider.css
      js/
        ism-2.1.js
        ism-2.1-min.js
      image/
        slides/
          _u/1457929560993_882101.jpg
          _u/1457929555255_212564.jpg
          _u/1457929554691_896684.jpg
          _u/1457929552478_909870.jpeg
          _u/1457929552189_182264.jpg

For a working example, open example.html in your web browser or
follow the instructions below to integrate the slider into your
project.


Step by step instructions
-------------------------

1. Paste the following into the head of your HTML file:

<link rel="stylesheet" href="ism/css/my-slider.css"/>
<script src="ism/js/ism-2.1.js"></script>


2. Paste this into the body of your HTML file (at the location where:
   you would like your slider to appear in the page):

<div class="ism-slider" data-buttons="false" id="batsignal">
  <ol>
    <li>
      <img src="ism/image/slides/_u/1457929560993_882101.jpg">
    </li>
    <li>
      <img src="ism/image/slides/_u/1457929555255_212564.jpg">
    </li>
    <li>
      <img src="ism/image/slides/_u/1457929554691_896684.jpg">
    </li>
    <li>
      <img src="ism/image/slides/_u/1457929552478_909870.jpeg">
    </li>
    <li>
      <img src="ism/image/slides/_u/1457929552189_182264.jpg">
    </li>
  </ol>
</div>
<p class="ism-badge" id="batsignal-ism-badge"><a class="ism-link" href="http://imageslidermaker.com">generated with ISM</a></p>


3. Copy the ism/ directory into the root directory of your project.

   The css, js and image paths are relative, meaning the ism/
   directory should be in the same directory (path) as your HTML
   file containing the slider.


Support
-------

If you need support or have a suggestion please get in touch using
the contact form at ImageSliderMaker.com/contact or send an email
to support@imageslidermaker.com

