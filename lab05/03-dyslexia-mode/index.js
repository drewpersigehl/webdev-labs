/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

dyslexiaToggle = () => {
  if (document.querySelector("body").className === "") {
    document.querySelector("body").className = "dyslexia-mode";
  } else {
    document.querySelector("body").className = "";
  }
}

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaToggle);
