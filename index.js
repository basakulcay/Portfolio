window.onload = function() {

    const easeInCubic = function (t) { return t*t*t }   
    const scrollElems = document.getElementsByClassName('scroll');
    
    
    //console.log(scrollElems);
    const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
        //debugger;
        const runtime = stamp - start;
        let progress = runtime / duration;
        const ease = easeInCubic(progress);
        
        progress = Math.min(progress, 1);
        console.log(startScrollOffset,startScrollOffset + (scrollEndElemTop * ease));
        
        const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
        window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
    
        if(runtime < duration){
          requestAnimationFrame((timestamp) => {
            const stamp = new Date().getTime();
            scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
          })
        }
      }
    
    for(let i=0; i<scrollElems.length; i++){
      const elem = scrollElems[i];
      
      elem.addEventListener('click',function(e) {
        e.preventDefault();
        const scrollElemId = e.target.href.split('#')[1];
        const scrollEndElem = document.getElementById(scrollElemId);
        
        const anim = requestAnimationFrame(() => {
          const stamp = new Date().getTime();
          const duration = 1200;
          const start = stamp;
              
          const startScrollOffset = window.pageYOffset;
    
          const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
                
          scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
          // scrollToElem(scrollEndElemTop);
          })
        })
      }}

      //OnClick

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//For button functionality
function switchVisible() {
  if (document.querySelector(".fancy").style.display == "none") {
    document.querySelector(".fancy").style.display = "block";
    document.querySelector(".skill_list").style.display = "none";
  } else {
    document.querySelector(".fancy").style.display = "none";
    document.querySelector(".skill_list").style.display = "block";
  }
}