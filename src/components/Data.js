import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import tg from "../assets/telegram.png";
import yt from "../assets/youtube.png";
import tr from "../assets/twitter.png";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"; // Import specific icons

// socialMedia.js
export const socialMedia = [
  {
    name: "Instagram",
    logo: faInstagram, // Assuming FontAwesome icons
    url: "https://instagram.com",
  },
  {
    name: "Facebook",
    logo: faFacebookF,
    url: "https://facebook.com",
  },
  {
    name: "Twitter",
    logo: faTwitter,
    url: "https://twitter.com",
  },
  {
    name: "Telegram",
    logo: faLinkedinIn, // Adjust if using Telegram icon
    url: "https://telegram.org",
  },
];
