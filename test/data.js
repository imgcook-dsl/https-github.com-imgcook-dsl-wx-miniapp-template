module.exports = {
  "componentName": "Page",
  "id": "Block_745855",
  "rect": {
    "x": 0,
    "y": 0,
    "width": 342,
    "height": 534
  },
  "smart": {},
  "props": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-around",
      "alignItems": "flex-start",
      "height": "534px"
    },
    "className": "box"
  },
  "children": [{
    "componentName": "Div",
    "props": {
      "onClick": function onClick(e) {
        console.log(e.event)
      }
    },
    "children": [{
      "componentName": "Div",
      "id": "Block_644975",
      "rect": {
        "x": 0,
        "y": 0,
        "width": 342,
        "height": 342
      },
      "smart": {},
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "opacity": "1.00",
          "width": "342px",
          "height": "342px"
        },
        "className": "bd"
      },
      "children": [{
        "componentName": "Image",
        "id": "Image_7",
        "rect": {
          "x": 0,
          "y": 0,
          "width": 342,
          "height": 342
        },
        "smart": {},
        "props": {
          "style": {
            "position": "absolute",
            "top": "0px",
            "left": "0px",
            "width": "342px",
            "height": "342px",
            "overflow": "hidden"
          },
          "src": "https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png",
          "className": "layer"
        }
      }, {
        "componentName": "Image",
        "id": "Image_8",
        "rect": {
          "x": 0,
          "y": 0,
          "width": 342,
          "height": 342
        },
        "smart": {},
        "props": {
          "style": {
            "position": "absolute",
            "top": "0px",
            "left": "0px",
            "opacity": "1.00",
            "width": "342px",
            "height": "342px"
          },
          "className": "bg",
          "src": "{{this.item.coverImage}}"
        }
      }, {
        "componentName": "Div",
        "id": "Shape_9",
        "rect": {
          "x": 18,
          "y": 18,
          "width": 122,
          "height": 30
        },
        "smart": {},
        "props": {
          "style": {
            "boxSizing": "border-box",
            "display": "flex",
            "position": "relative",
            "alignItems": "center",
            "flexDirection": "row",
            "marginTop": "18px",
            "marginLeft": "18px",
            "borderRadius": "15px",
            "backgroundColor": "rgba(0,0,0,0.40)",
            "paddingRight": "9px",
            "paddingLeft": "10px",
            "height": "30px"
          },
          "className": "wrap"
        },
        "children": [{
          "componentName": "Image",
          "id": "Image_11",
          "rect": {
            "x": 28,
            "y": 24,
            "width": 14,
            "height": 18
          },
          "smart": {},
          "props": {
            "style": {
              "opacity": "1.00",
              "width": "14px",
              "height": "18px"
            },
            "src": "https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png",
            "className": "riverdinwei"
          },
          "loop": "{{this.state.data}}"
        }, {
          "componentName": "Text",
          "id": "Text_10_0",
          "rect": {
            "x": 46,
            "y": 22,
            "width": 84,
            "height": 22
          },
          "smart": {},
          "props": {
            "style": {
              "marginLeft": "4px",
              "width": "84px",
              "height": "22px",
              "lineHeight": "22px",
              "whiteSpace": "nowrap",
              "color": "#ffffff",
              "fontSize": "18px",
              "fontWeight": 400,
              "lines": 1
            },
            "text": "距离500m",
            "className": "distance"
          },
          "loop": [1, 2]
        }]
      }]
    }, {
      "componentName": "Div",
      "id": "Shape_5",
      "rect": {
        "x": 0,
        "y": 342,
        "width": 342,
        "height": 114
      },
      "smart": {},
      "props": {
        "style": {
          "display": "flex",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "justifyContent": "center",
          "backgroundColor": "#ffffff",
          "width": "342px",
          "height": "114px"
        },
        "className": "main"
      },
      "children": [{
        "componentName": "Text",
        "id": "Text_6_0",
        "rect": {
          "x": 18,
          "y": 364,
          "width": 300,
          "height": 88
        },
        "smart": {},
        "props": {
          "style": {
            "marginTop": "22px",
            "width": "300px",
            "height": "88px",
            "overflow": "hidden",
            "textOverflow": "ellipsis",
            "lineHeight": "44px",
            "color": "#333333",
            "fontSize": "30px",
            "fontWeight": 400,
            "lines": 2
          },
          "className": "title",
          "text": "{{this.item.title}}"
        }
      }]
    }, {
      "componentName": "Div",
      "id": "Shape_0",
      "rect": {
        "x": 0,
        "y": 456,
        "width": 342,
        "height": 78
      },
      "smart": {},
      "props": {
        "style": {
          "boxSizing": "border-box",
          "display": "flex",
          "alignItems": "center",
          "flexDirection": "row",
          "justifyContent": "space-between",
          "borderBottomLeftRadius": "12px",
          "borderBottomRightRadius": "12px",
          "backgroundColor": "#ffffff",
          "paddingRight": "17px",
          "paddingLeft": "18px",
          "width": "342px",
          "height": "78px",
          "overflow": "hidden"
        },
        "className": "ft"
      },
      "children": [{
        "componentName": "Div",
        "id": "Block_788015",
        "rect": {
          "x": 18,
          "y": 480,
          "width": 132,
          "height": 30
        },
        "smart": {},
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "height": "30px"
          },
          "className": "block"
        },
        "children": [{
          "componentName": "Image",
          "id": "Image_1",
          "rect": {
            "x": 18,
            "y": 480,
            "width": 30,
            "height": 30
          },
          "smart": {},
          "props": {
            "style": {
              "width": "30px",
              "height": "30px"
            },
            "src": "https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png",
            "className": "xianjin"
          }
        }, {
          "componentName": "Text",
          "id": "Text_2_0",
          "rect": {
            "x": 54,
            "y": 481,
            "width": 96,
            "height": 28
          },
          "smart": {},
          "props": {
            "style": {
              "marginLeft": "6px",
              "width": "96px",
              "height": "28px",
              "lineHeight": "28px",
              "whiteSpace": "nowrap",
              "color": "#666666",
              "fontSize": "24px",
              "fontWeight": 300,
              "lines": 1
            },
            "className": "fashionHome",
            "text": "{{this.item.user.userName}}"
          }
        }]
      }, {
        "componentName": "Div",
        "id": "Block_615383",
        "rect": {
          "x": 261,
          "y": 480,
          "width": 63,
          "height": 30
        },
        "smart": {},
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "height": "30px"
          },
          "className": "group"
        },
        "children": [{
          "componentName": "Image",
          "id": "Image_4",
          "rect": {
            "x": 261,
            "y": 484,
            "width": 22,
            "height": 22
          },
          "smart": {},
          "props": {
            "style": {
              "width": "22px",
              "height": "22px"
            },
            "src": "https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png",
            "className": "favorite"
          }
        }, {
          "componentName": "Text",
          "id": "Text_3_0",
          "rect": {
            "x": 288,
            "y": 482,
            "width": 36,
            "height": 26
          },
          "smart": {},
          "props": {
            "style": {
              "marginLeft": "5px",
              "width": "36px",
              "height": "26px",
              "lineHeight": "26px",
              "whiteSpace": "nowrap",
              "color": "#999999",
              "fontSize": "22px",
              "fontWeight": 400,
              "lines": 1
            },
            "className": "num",
            "text": "{{this.item.readCount}}"
          }
        }],
        "condition": "{{this.isReadCountShow(this.item.readCount)}}"
      }]
    }],
    "loop": [{
      "title": "小户型卫浴怎样才能装得高大上？",
      "coverImage": "https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png",
      "readCount": 200,
      "user": {
        "userImage": "https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png",
        "userName": "时尚家居"
      },
      "url": "https://www.imgcook.com"
    }, {
      "title": "拥有超多功能的40平米简约小公寓了解一下",
      "coverImage": "https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png",
      "readCount": 500,
      "user": {
        "userImage": "https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png",
        "userName": "花花设计工作"
      },
      "url": "https://www.imgcook.com/docs"
    }],
    "loopArgs": ["item", "index"]
  }],
  "fileName": "index",
  "methods": {
    "isReadCountShow": function isReadCountShow(readCount) {
      
      return readCount > 300;
    },
    "test": () => {
      console.log(123)
    }
  },
  "lifeCycles": {
    "componentDidUpdate": (prevProps, prevState, snapshot) => {
      console.log('aaa')
    }
  },
  "dataSource": {
    "list": [{
      "id": "example",
      "isInit": true,
      "type": "fetch",
      "options": {
        "method": "GET",
        "params": {
          "aaa": "bbb"
        },
        "uri": "https://jsonplaceholder.typicode.com/todos/1"
      }
    }],
    "dataHandler": function dataHandler(dataMap) {
      console.log(dataMap, 'dataMap')
      return dataMap;
    }
  },
  "state": {
    "ccc": "ddd",
    "data": [1, 2]
  }
}