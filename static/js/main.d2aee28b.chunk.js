(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{10:function(e,n,c){},11:function(e,n,c){},12:function(e,n,c){"use strict";c.r(n);var i=c(0),t=c(1),l=c.n(t),s=c(4),u=c.n(s),a=(c(10),c(2));c(11);var d=function(e){function n(n){"player"===e.playTurn&&e.handleClick(n)}var c=e.buttons.map((function(e){return Object(i.jsx)("button",{id:e.id,style:{backgroundImage:e.bg},className:"button",onClick:n},e.id)}));return Object(i.jsxs)("div",{className:"buttons_div",children:[c.slice(0,3),Object(i.jsx)("br",{}),c.slice(3,6),Object(i.jsx)("br",{}),c.slice(6,9)]})};var r=function(e){return Object(i.jsxs)("div",{className:"scoreboard_div",children:[Object(i.jsx)("div",{className:"you_div",children:Object(i.jsx)("p",{children:"you"})}),Object(i.jsx)("div",{className:"cpu_div",children:Object(i.jsx)("p",{children:"cpu"})}),Object(i.jsx)("p",{className:"score_text",children:e.playerScore.toString()+":"+e.cpuScore.toString()})]})};var o=function(e){return Object(i.jsx)("div",{style:{display:e.display},className:"popup_div",children:Object(i.jsxs)("div",{className:"popup",children:[Object(i.jsx)("p",{className:"popup_text",children:e.text}),Object(i.jsx)("button",{onClick:function(){e.playAgain()},className:"popup_button",style:{backgroundColor:e.buttonBg},children:"Play Again!"})]})})};var b=function(){var e=Object(t.useState)([{id:"1",bg:"",player:""},{id:"2",bg:"",player:""},{id:"3",bg:"",player:""},{id:"4",bg:"",player:""},{id:"5",bg:"",player:""},{id:"6",bg:"",player:""},{id:"7",bg:"",player:""},{id:"8",bg:"",player:""},{id:"9",bg:"",player:""}]),n=Object(a.a)(e,2),c=n[0],l=n[1],s="player",u=!1,b=Object(t.useState)("player"),p=Object(a.a)(b,2),j=p[0],g=p[1],A=Object(t.useState)("none"),f=Object(a.a)(A,2),y=f[0],x=f[1],O=Object(t.useState)(""),h=Object(a.a)(O,2),m=h[0],S=h[1],v=Object(t.useState)(""),Y=Object(a.a)(v,2),N=Y[0],L=Y[1],E=Object(t.useState)(0),J=Object(a.a)(E,2),k=J[0],W=J[1],X=Object(t.useState)(0),T=Object(a.a)(X,2),I=T[0],R=T[1];function K(){if("cpu"===s&&!1===u){var e=[],n=Math.round((i=1,t=10,Math.random()*(t-i)+i));c.map((function(n){return""===n.bg&&e.push(n.id),n})),0!==e.length?e.includes(n.toString())?l(c.map((function(e){return e.id===n.toString()&&(e.bg=e.bg="url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAAD/klEQVRoge3aW4jVVRTH8Y8m4zTdMbSL5YNFUmLZhaCsUIIge8jAqIcoopcehQh6LXqo1y5QgQ/VUz4EUhJRdiG7YeQopWQ2jY2XTk41GeOlnNPDHkOdvc45//0/Zx6iL/yZYZ1zfmut/39f1t77z3+E06bR11zMwNFeiM/ogeaZuAVLcS0WYA4O43T8jV+wC5uwAbt7EEcxl+I5DOFPNDu4JrAXG7HK9LaQKSzGOozpLPjoOoQtuHN6w088i30Vgu3kGsPL05nEeqnjdjOJE6/NGOh1Ep9WCOgwDqCBvyomMygNEG0pGbXex4o239mNbzCMbfhJGqkWYCEuwh2Yj/42Wh/jtoI4W/KaNNJEd3A/3sXtHWidhwfwNg620JzAU91MYjX+aOFwKx4s1F4jPcVIu4ElNWL/l9nY08LRF7iypo9rpD4R+figpj54vYWDLZNBdIMbMRL4+W3y82KWS20/Jz6E6+qIZ3hMXBm8Wkd4QyB6BM/UEW7B14HPPaWCi8WdcBDn1Is35HH5p3JQaiGVeT4j1sQoHqkfb8gSbA98P1lV7HzsDMQGuxNvS94JfL+R+/LMFkL3SKX5qYzj6XoxdsR4YJ+fM7ZKZBX6MvZhfFYxqBL2B/Zzc8YokbOkmijHLql26jWRj9mYdaoxSuRqnJ2xj+PNsrgqMxLYx2XK+yiRmzEvY9+HT8riqszFgb1fWhqcRJTI0sA+ju8KgiphTmBvyuzERIlcEdgbJREVkmvapFYxhVwis3AsEPmxIKBSomr6UM6YS6RffDf2lkRUSFTpDuWMuUT6pDonx/clERWwDL8Gn23NGXOJ/C6YdHBBQVAlrJIfNUcEk3EukQlxebCgLK7K3BXYG9JCbgrRqDUW2C+pGlEBN8m3iKa0o1mJdfKV57YaAXbKxsD3MK6KfhQ9keHA3ocLy2NsywppMZfj+F5ZJe6V3w4d1YPNshP4MOOzKTX1+0sE50pzRk60cjvtkJVSZ8753FxHeFMgukPa8uwmC6U5KufvgJpHDY+Kt0fX1xHO8G3gpyk1t1rMkxY30V16oq6DSdZLtV3Oz8/SLF+btYGDptSH7quhPR8fSZNvTn8CL9XQP4kBrfd89+NF1Q9kVuJL8ZNoCmbwOqyWdhUjh8ekxdYaLGqjtRyvSPNUpNeURq+oAs/S6UHPWjzU5vvHpD61Qyo8j/+/CJdJQ/rlk39b0cDderhT87nWd7Eb16j2p2G1mSnNLb06AG0o3Nct5QXdPZI+IhWKs6czieMsk87+2nXadgkMqjeEd43rpZcGtotrsxOvo9Ka+y08LO1odoVuvlRzg/Qyza3S6DQgjV5nSEvUnXgPX+GHLvrtOQPitf//RPwDeOgq/nVgcIAAAAAASUVORK5CYII=",")"),e.player="o",g("player"),function(){var e=[];c.map((function(n){return"o"===n.player&&e.push(n.id),n})),(e.includes("1")&&e.includes("2")&&e.includes("3")||e.includes("4")&&e.includes("5")&&e.includes("6")||e.includes("7")&&e.includes("8")&&e.includes("9")||e.includes("1")&&e.includes("4")&&e.includes("7")||e.includes("2")&&e.includes("5")&&e.includes("8")||e.includes("3")&&e.includes("6")&&e.includes("9")||e.includes("1")&&e.includes("5")&&e.includes("9")||e.includes("3")&&e.includes("5")&&e.includes("7"))&&setTimeout(C,200)}()),e}))):K():alert("all fields are full")}var i,t}function V(){S("You Won!"),L("green"),W((function(e){return e+1})),u=!0,x("flex")}function C(){S("You Lost!"),L("red"),R((function(e){return e+1})),x("flex")}return Object(i.jsxs)("div",{className:"main_div",children:[Object(i.jsx)("h1",{className:"heading",children:"Tic-Tac-Toe"}),Object(i.jsx)("p",{className:"signature",children:"by Simon"}),Object(i.jsx)(r,{playerScore:k,cpuScore:I}),Object(i.jsx)(d,{playTurn:j,handleClick:function(e){if(e.preventDefault(),"player"===j){var n=e.target.id;l(c.map((function(e){return e.id===n&&""===e.bg?(e.bg="url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAADiUlEQVRoge3ZT4hWVRjH8Q8atDAhpDLB/tCqiCiK3EhJFEYQFboIJSL6X4aEC4koiaKNbZJwFRGUiyBsVUjWIqgI+g9ZaUxjyDgjpc7oOEo5421xZnR8554z973nvd5Z+IW7eu/5Pb/73vOc85zncp65xfyK9y3CiSaNRLgOq/EPjuQIXYbt+BafY1W2tWpcgM8wigLD2FhXbB76JoWmrsN4Kdvm7HzSEbcQ3sjVdcRW41SJ4Chey/ca5QlhKnXGLbC+juA65Q9SCPmyOdvyTK7Bz5GYY7ivjugN2B0RLfAftmQa7+RjTETi/YKFdYVXCokWe5hxvJlhfDrrsC8SZxj35gbYgIFIgAL/4o3MGNeLT6kC72fqn2Y9/kwEOo7XM/S/SmgPZuiW8gx+SwQcxdoauptwLKI5hntyjZfxJHZFgk7tMw93obccexN67/TKeBlPmblRTr/24dYKOouwJ6HT12vjZTwnvQD0TRpN8XVi/N9Y1oTxMp7HgYSZHxNjtwqrXWwVfLUx1xHeEk/UCXxYMuZR8RKkwM7GXUfYLl7KHHP2v3sT+iP3FsISv+BcGS/j1xJT0+f7g7hQOrkHnMO8iHGF9Ib5l3Ryjwj71JzgbmEXjpmNXeMa3i/qsBFHdfcg37fitALbxEvxsuS+tB2b1fjB7A8xiDvaMliVhdLJP47HW3PXBe8JJ8jUG9ndmruKbFIt4U8Jm+mcZA2GVF+xRvFiK04TLJM+W6SSfmULfku5XLr8GJJO/r5JjdZJ1VpHhelzJ/Yn7mt9Y9whXv2exLvT7n3BmX5u2b2tlSpbha5j7F/+omTMR+IPfhjPNm26k6dxKGJoat7H+GOWcbc05rqD+6Xnez+uTIy/VijtY+N3NeT7LGY75Q1gRQWdtTgY0ZjQTJP8NJdIL7OH8FgXelvES5lh3Nwr452kltnjeKWG5qcJzT3ZjkvYmQgY65hU4Ubphl9Pp9jb4n2oAt9k6r8snNvLtEdwVaY+wq58JBKkEEqPeT2I810ixpe54muku4n9QgelF9wmfrI8gUfqCi/G7xHhqWV2eX3fpWwWL2H2qvnpbZV4E+EgHsp1XcIC/BSJOZ6KmZrbiyO/jwk93201zaYYE1qsQyW/zcfFdUSXmFlLdVazTfGBmW9kREY+PiDUVIOTV+5Hz27Y4UwJMyx8lM3mdlzUC6EuuUtoGy1tIfZ5svgfAKVyo005ZuoAAAAASUVORK5CYII=",")"),e.player="x",s="cpu",g("cpu"),function(){var e=[];c.map((function(n){return"x"===n.player&&e.push(n.id),n})),(e.includes("1")&&e.includes("2")&&e.includes("3")||e.includes("4")&&e.includes("5")&&e.includes("6")||e.includes("7")&&e.includes("8")&&e.includes("9")||e.includes("1")&&e.includes("4")&&e.includes("7")||e.includes("2")&&e.includes("5")&&e.includes("8")||e.includes("3")&&e.includes("6")&&e.includes("9")||e.includes("1")&&e.includes("5")&&e.includes("9")||e.includes("3")&&e.includes("5")&&e.includes("7"))&&setTimeout(V,200)}(),setTimeout(K,1e3)):e.id===n&&""!==e.bg&&alert("Please secelt another field"),e})))}},buttons:c}),Object(i.jsx)(o,{display:y,text:m,buttonBg:N,playAgain:function(){x("none"),g("player"),l([{id:"1",bg:"",player:""},{id:"2",bg:"",player:""},{id:"3",bg:"",player:""},{id:"4",bg:"",player:""},{id:"5",bg:"",player:""},{id:"6",bg:"",player:""},{id:"7",bg:"",player:""},{id:"8",bg:"",player:""},{id:"9",bg:"",player:""}])}})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(n){var c=n.getCLS,i=n.getFID,t=n.getFCP,l=n.getLCP,s=n.getTTFB;c(e),i(e),t(e),l(e),s(e)}))};u.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),p()}},[[12,1,2]]]);
//# sourceMappingURL=main.d2aee28b.chunk.js.map