
const crayola = {
  black: {
    normal: 'hsl(220,6%,20%)',
    bright: 'hsl(228,2%,40%)'
  },
  red: {
    normal: 'hsl(345,92%,48%)',
    bright: 'hsl(4,99%,62%)'
  },
  green: {
    normal: 'hsl(135,48%,44%)',
    bright: 'hsl(149,54%,72%)'
  },
  yellow: {
    normal: 'hsl(52,94%,71%)',
    bright: 'hsl(44,96%,70%)'
  },
  blue: {
    normal: 'hsl(224,76%,59%)',
    bright: 'hsl(205,59%,55%)'
  },
  magenta: {
    normal: 'hsl(329,90%,64%)',
    bright: 'hsl(330,100%,60%)'
  },
  cyan: {
    normal: 'hsl(190,73%,69%)',
    bright: 'hsl(180,100%,40%)'
  },
  white: {
    normal: 'hsl(228,4%,76%)',
    bright: 'hsl(222,24%,92%)'
  }
}

export const theme = {
  colors: {
    // tokens
    background: crayola.black.normal,
    // ansi - crayola
    ...crayola,
    // text
    text: {
      normal: 'hsl(223,100%,99%)',
      bright: 'hsl(230,11%,89%)',
      selection: 'hsl(213,100%,82%)'
    }
  }
}
