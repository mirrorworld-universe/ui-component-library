import { SystemStyleObject } from "@chakra-ui/system"

export const globalStyles: SystemStyleObject = {
  "body, html": {
    fontFamily: "Poppins",
    textRendering: "geometricprecision",
    textSizeAdjust: "100%",
    WebkitFontSmoothing: "antialiased",
    bg: "#000",
    color: "white",
  },
 "input:focus-visible, input[data-focus-visible], input:focus": {
  'box-shadow': 'none !important',

 },
  '.chakra-toast': {
   '.chakra-alert__desc': {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px'
   },
     // 绿色
     '.css-1szwkqe': {
      backgroundColor:'#00FFC2 !important',
      color:'#000000',
      '.css-fi0ww0': {
        color:'#000000',
      }
     },
     // 橙色
     '.css-1avdxle': {
      backgroundColor:'#FF891C'
     },
      // 红色
      '.css-15cm8pl': {
        backgroundColor:'#FF4747 !important'
       },
        // 黄色
     '.css-8zqf8h': {
      backgroundColor:'#DCFF1C !important',
      color:'#000000',
      '.css-fi0ww0': {
        color:'#000000',
      }
     },
  },
  'ul#chakra-toast-manager-bottom': {
    // 橙色
    '.css-1avdxle': {
     backgroundColor:'#FFE7D0  !important',
     borderTop: "4px solid #FF891C !important",
     boxSizing: 'border-box',
     color:'#000000',
     '.css-fi0ww0': {
       color:'#FF891C',
     }
    },
     // 红色
     '.css-15cm8pl': {
       backgroundColor:'#FED7D7 !important',
       borderTop: "4px solid #FF4747 !important",
       boxSizing: 'border-box',
       color:'#000000',
       '.css-fi0ww0': {
         color:'#FF4747',
       }
      },
       // 黄色
    '.css-8zqf8h': {
     backgroundColor:'#FBFFE6 !important',
     borderTop: "4px solid #DCFF1C !important",
     color:'#000000',
     '.css-fi0ww0': {
       color:'#000000',
     }
    },
    // 绿色
    '.css-1szwkqe': {
      backgroundColor:'#EBFFFA !important',
      borderTop: "4px solid #00FFC2 !important",
      color:'#000000',
      '.css-fi0ww0': {
        color:'#000000',
      }
     },
  },
  'ul#chakra-toast-manager-top-right, #chakra-toast-manager-bottom-right': {
    // 橙色
    '.css-1avdxle': {
     backgroundColor:'#FFE7D0  !important',
     borderLeft: "4px solid #FF891C !important",
     boxSizing: 'border-box',
     color:'#000000',
     '.css-fi0ww0': {
       color:'#FF891C',
     }
    },
     // 红色
     '.css-15cm8pl': {
       backgroundColor:'#FED7D7 !important',
       borderLeft: "4px solid #FF4747 !important",
       boxSizing: 'border-box',
       color:'#000000',
       '.css-fi0ww0': {
         color:'#FF4747',
       }
      },
       // 黄色
    '.css-8zqf8h': {
     backgroundColor:'#FBFFE6 !important',
     borderLeft: "4px solid #DCFF1C !important",
     color:'#000000',
     '.css-fi0ww0': {
       color:'#000000',
     }
    },
    // 绿色
    '.css-1szwkqe': {
      backgroundColor:'#EBFFFA !important',
      borderLeft: "4px solid #00FFC2 !important",
      color:'#000000',
      '.css-fi0ww0': {
        color:'#000000',
      }
     },
  },
  '.css-huugg3': {
    backgroundColor: '#dcff1c',
    borderRadius:' 0px !important'
   },
   '.css-ol3i12': {
    stroke: "rgba(255, 255, 255, 0.16) !important"
   },
   '.chakra-switch': {
      '.css-p27qcy': {
        background: '#DCFF1C'
      },
      '.chakra-switch__thumb': {
        background: '#000'
      }
   },
  "button": {
    background: '#DCFF1C !important',
    fontWeight: '600 !important'
  },
  "button:active": {
    background: '#DCFF1C !important',
  },
  "button:hover": {
    background: '#F1FFA5 !important'
  },
  "button:disabled": {
    opacity: "0.3 !important",
    background: '#DCFF1C !important',
  },
  "button.css-12ap6pn": {
    border: '1px solid #8E9800 !important',
    background: "transparent !important",
    color: '#DCFF1C !important'
  },
 "button[aria-label=Close]": {
    background: "transparent !important",
  },
  "button.css-12ap6pn:hover": {
    background: 'rgba(220, 255, 28, 0.15) !important',
  },
  "button.css-12ap6pn:active": {
    background: 'rgba(220, 255, 28, 0.4) !important'
  },
  "button.css-riqbfd": {
    background: "transparent !important",
    fontWeight: '600 !important',
    color: '#DCFF1C !important'
  },
  "button.css-riqbfd:hover": {
    background: "rgba(220, 255, 28, 0.15) !important",
  },
  "button.css-riqbfd:active": {
    background: "rgba(220, 255, 28, 0.3) !important",
  },
  textarea: {
    background:' #000000 !important',
    borderRadius: '6px !important',
    border: '1px solid rgba(255, 255, 255, 0.16) !important',
    fontWeight:' 400 !important',
    fontSize: '14px !important',
    lineHeight:' 20px !important'
   },
  table: {
    width: "100%",
    opacity: 1,
    position: 'relative',
    zIndex: 99,
    background: 'transparent !important',

    th: {
      background: 'transparent !important',
      borderTop: "none",
      borderColor: 'rgba(255, 255, 255, 0.08) !important',
    },
    td: {
      // bg: 'transparent !important',
      textAlign: "start",
      borderColor: "rgba(255, 255, 255, 0.08) !important"
    }
  },
  '.css-1qpztfi[aria-selected=true], .css-1qpztfi[data-selected]': {
    color: '#DCFF1C !important',
    background: 'rgba(220, 255, 28, 0.15) !important'
  },
  '.css-ke55n[aria-selected=true], .css-ke55n[data-selected]': {
    background: '#DCFF1C !important',
    color: '#000000 !important',
    fontWeight: '600 !important',
  },
  '.css-4fctk8[aria-selected=true], .css-4fctk8[data-selected]': {
    color: '#DCFF1C !important',
  },
  '.css-1xhq01z': {
    border: 'none !important'
  },
  '.css-4fctk8:active, .css-4fctk8[data-active]': {
   background: 'none !important'
  },
  mark: {
    bg: "transparent",
  },
  h2: {
    marginTop: "4px !important",
  },
  ".chakra-checkbox__control": {
    borderRadius: '2px !important',
    background: '#000 !important',
    border: '2px solid rgba(255, 255, 255, 0.16) !important',
  },
  "span.chakra-checkbox__control[data-checked]": {
    background: 'mirror.base !important',
    color: '#000 !important',
    border: "none !important"
  },
  "span.chakra-checkbox__label": {
    fontWeight: "400 !important",
    color: "#fff !important"
    // fontSize: "18px !important",
    // lineHeight: "28px !important",
  },
  ".chakra-checkbox[data-disabled]": {
    opacity: '0.5 !important'
  },
  "input::placeholder": {
    color: "rgba(255, 255, 255, 0.36) !important"
  },
  input: {
    border: '1px solid rgba(255, 255, 255, 0.36) !important',
    background: '#000000 !important',
    
  },
  '.chakra-numberinput': {
    background: '#000 !important',
    borderColor: '#292929 !important',
    ".chakra-icon": {
      color: "mirror.base !important",
      // border: "none !important",
      borderColor: '#292929 !important',
    },
    'div[role="button"]': {
      // border: "none !important",
      borderColor: '#292929 !important',
    }
  },
  "input:focus": {
    borderColor: 'mirror.base !important',
  },
  "input:[aria-invalid=true]": {
    border: '1px solid #FF4747 !important'
  },
  "input[disabled]": {
    opacity: '0.5 !important'
  },
  '.chakra-radio': {
    ".chakra-radio__control[data-checked]":{
      background: 'mirror.base !important',
      color: "#000 !important",
      borderColor: 'mirror.base !important',
    },
    ".chakra-radio__control[data-checked]:hover": {
      background: '#F1FFA5 !important',
      borderColor: '#F1FFA5 !important',
      color: "#000 !important",
    },
    "[data-disabled]": {
      opacity: '0.3 !important'
    }
  },
    '.chakra-modal__content':{
      background: '#141414 !important'
    },
    "select": {
      border: "1px solid rgba(255, 255, 255, 0.16) !important",
      borderRadius: '6px',
    },
    "select:hover": {
      borderColor: "rgba(255, 255, 255, 0.36) !important",
      borderRadius: '6px',
    },
    "select:focus": {
      borderColor: "#DCFF1C !important",
      paddingInlineEnd: "#DCFF1C !important",
    },
    'select:focus-visible': {
      boxShadow: '0 0 0 1px #DCFF1C !important'
    },
   '.dropdown': {
    "padding": "6px 0px !important",
    'border-radius': '6px !important',
      'backdrop-filter': 'blur(20px)',
      '.chakra-checkbox:active': {
        background: "transparent !important",
      },
      '.chakra-checkbox:hover':{
        background:' rgba(255, 255, 255, 0.08) !important',
        ".chakra-checkbox__control": {
          border: '2px solid #DCFF1C !important',
        },
      },
      
   },
  ':focus-visible': {
    outline:'none !important'
  },
}
