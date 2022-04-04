import React from "react";

const About = () => {
  return (
    <div className="container">
      <div>
        <h2 className="py-5">
          MacBook (Retina, 12-inch) - Technical Specifications
        </h2>
        <img
          className="py-5"
          src="https://www.bdstall.com/asset/product-image/giant_57817.jpg"
          alt=""
        />
      </div>
      <h3>Finish</h3>
      <ul>
        <li>Rose Gold Space Gray</li>
        <li>Gold</li>
        <li>Silver</li>
      </ul>
      <h3>Display</h3>
      <ul>
        <li>Retina display</li>
        <li>
          12-inch (diagonal) LED-backlit display with IPS technology
        </li>
        <li>
          2304-by-1440 resolution at 226 pixels per inch with support
          for millions of colors
        </li>
        <li>16:10 aspect ratio</li>
      </ul>
      <h3>Processor</h3>
      <ul>
        <li>1.2GHz</li>
        <p>
          1.2GHz dual-core Intel Core m3, Turbo Boost up to 3.0GHz,
          with 4MB L3 cache Configurable to 1.3GHz dual-core Intel
          Core i5, Turbo Boost up to 3.2GHz, with 4MB L3 cache; or
          1.4GHz dual-core Intel Core i7, Turbo Boost up to 3.6GHz,
          with 4MB shared L3 cache
        </p>
        <li>1.3GHz</li>
        <p>
          1.3GHz dual-core Intel Core i5, Turbo Boost up to 3.2GHz,
          with 4MB L3 cache Configurable to 1.4GHz dual-core Intel
          Core i7, Turbo Boost up to 3.6GHz, with 4MB L3 cache
        </p>
      </ul>
      <h3>Memory</h3>
      <ul>
        <li>8GB of 1866MHz LPDDR3 onboard memory</li>
        <p>Configurable to 16GB of memory</p>
      </ul>
      <h3>Storage</h3>
      <ul>
        <li>1.2GHz</li>
        <p>256GB PCIe-based onboard SSD1</p>
        <li>1.3GHz</li>
        <p>512GB PCIe-based onboard SSD1</p>
      </ul>
      <h3>Camera</h3>
      <ul>
        <li>480p FaceTime camera</li>
      </ul>
      <h3>Audio</h3>
      <ul>
        <li>Stereo speakers</li>
        <li>Dual microphones</li>
        <li>3.5 mm headphone jack</li>
      </ul>
      <a className="btn btn-secondary my-5" href="https://support.apple.com/kb/sp757?locale=en_US">See more</a>
    </div>
  );
};

export default About;
