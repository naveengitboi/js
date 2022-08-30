const tl = gsap.timeline({default:{duration:.2, ease:'power1.out'} })
tl.from('h1, p', {opacity:0, x:600, duration:.9})
  .from('button', {opacity:0} , '<50%')