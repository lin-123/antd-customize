(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"9kvl":function(e,t,n){"use strict";var r=n("FfOG");n.d(t,"a",(function(){return r["b"]}));n("bCY9")},A3ot:function(e,t,n){e.exports={"preview-wrapper":"preview-wrapper___1vh2y"}},TFQZ:function(e,t,n){"use strict";n.r(t);var r=n("J9RX"),a=n("ahKI"),o=n.n(a),l=n("Mexa"),u=n("A3ot"),c=n.n(u),i=["children"];t["default"]=e=>{var t=e.children,n=Object(r["a"])(e,i);return o.a.createElement(l["a"],n,o.a.createElement("div",{className:c.a["preview-wrapper"]},t))}},afA6:function(e,t,n){"use strict";n.r(t);var r=n("mn0l"),a=n("ahKI"),o=n.n(a),l=n("q3YX"),u=n("DBVu"),c=n("GAyR"),i=n("wMDr"),m={"gallery-demo":{component:Object(i["dynamic"])({loader:function(){var e=Object(c["a"])(Object(u["a"])().mark((function e(){var t,r,a,o;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("uKmp")["default"],e.t0=t,e.next=4,Promise.resolve().then(n.t.bind(null,"ahKI",7));case 4:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.next=8,Promise.all([n.e(0),n.e(3),n.e(4),n.e(5)]).then(n.bind(null,"/7QA"));case 8:return a=e.sent,a.ConfigProvider.config({prefixCls:"ant"}),o=function(){return r["default"].createElement(a.ConfigProvider,{prefixCls:"ant"},r["default"].createElement(a.Button,null,"\u81ea\u5b9a\u4e49button"))},e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:"import React from 'react';\nimport { Button, ConfigProvider } from 'antd-customize';\n\nConfigProvider.config({\n  prefixCls: 'ant',\n});\nexport default () => {\n  return (\n    <ConfigProvider prefixCls=\"ant\">\n      <Button>\u81ea\u5b9a\u4e49button</Button>\n    </ConfigProvider>\n  );\n};"}},dependencies:{react:{version:"18.2.0"},"antd-customize":{version:"0.1.0"}},title:"Button",description:'<div class="markdown"><p>\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6309\u94ae\u7684\u6837\u4f8b\uff0c \u4fee\u6539\u4e86 classname \u524d\u7f00\uff0c button \u8fb9\u6846\u53d8\u7ea2\u8272</p></div>',identifier:"gallery-demo"}},"gallery-demo-1":{component:Object(i["dynamic"])({loader:function(){var e=Object(c["a"])(Object(u["a"])().mark((function e(){var t,r,a,o,l,c,i;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("P/vu")["default"],r=n("uKmp")["default"],e.t0=r,e.next=5,Promise.resolve().then(n.bind(null,"iojd"));case 5:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.next=9,Promise.all([n.e(0),n.e(3),n.e(13)]).then(n.bind(null,"CCuy"));case 9:return o=e.sent,e.t2=t,e.next=13,Promise.resolve().then(n.t.bind(null,"ahKI",7));case 13:return e.t3=e.sent,l=(0,e.t2)(e.t3),c=function(){var e=(0,l.useState)(10),t=(0,a["default"])(e,2),n=t[0],r=t[1],u=(0,l.useState)(10),c=(0,a["default"])(u,2),i=c[0],m=c[1];return l["default"].createElement(l["default"].Fragment,null,l["default"].createElement(o.Affix,{offsetTop:n},l["default"].createElement(o.Button,{type:"primary",onClick:function(){return r(n+10)}},"Affix top")),l["default"].createElement("br",null),l["default"].createElement(o.Affix,{offsetBottom:i},l["default"].createElement(o.Button,{type:"primary",onClick:function(){return m(i+10)}},"Affix bottom")))},i=c,e.abrupt("return",i);case 18:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:"import { Affix, Button } from 'antd';\nimport React, { useState } from 'react';\n\nconst App: React.FC = () => {\n  const [top, setTop] = useState(10);\n  const [bottom, setBottom] = useState(10);\n\n  return (\n    <>\n      <Affix offsetTop={top}>\n        <Button type=\"primary\" onClick={() => setTop(top + 10)}>\n          Affix top\n        </Button>\n      </Affix>\n      <br />\n      <Affix offsetBottom={bottom}>\n        <Button type=\"primary\" onClick={() => setBottom(bottom + 10)}>\n          Affix bottom\n        </Button>\n      </Affix>\n    </>\n  );\n};\n\nexport default App;"}},dependencies:{antd:{version:"4.23.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},title:"Affix",identifier:"gallery-demo-1"}},"gallery-demo-2":{component:Object(i["dynamic"])({loader:function(){var e=Object(c["a"])(Object(u["a"])().mark((function e(){var t,r,a,o,l;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("uKmp")["default"],e.next=3,Promise.all([n.e(0),n.e(3),n.e(4),n.e(5)]).then(n.bind(null,"/7QA"));case 3:return r=e.sent,e.t0=t,e.next=7,Promise.resolve().then(n.t.bind(null,"ahKI",7));case 7:return e.t1=e.sent,a=(0,e.t0)(e.t1),o=function(){return a["default"].createElement(r.Breadcrumb,null,a["default"].createElement(r.Breadcrumb.Item,null,"Home"),a["default"].createElement(r.Breadcrumb.Item,null,a["default"].createElement("a",{href:""},"Application Center")),a["default"].createElement(r.Breadcrumb.Item,null,a["default"].createElement("a",{href:""},"Application List")),a["default"].createElement(r.Breadcrumb.Item,null,"An Application"))},l=o,e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:"import { Breadcrumb } from 'antd-customize';\nimport React from 'react';\n\nconst App: React.FC = () => (\n  <Breadcrumb>\n    <Breadcrumb.Item>Home</Breadcrumb.Item>\n    <Breadcrumb.Item>\n      <a href=\"\">Application Center</a>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item>\n      <a href=\"\">Application List</a>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item>An Application</Breadcrumb.Item>\n  </Breadcrumb>\n);\n\nexport default App;"}},dependencies:{"antd-customize":{version:"0.1.0"},react:{version:"18.2.0"}},title:"Breadcrumb",identifier:"gallery-demo-2"}},"gallery-demo-3":{component:Object(i["dynamic"])({loader:function(){var e=Object(c["a"])(Object(u["a"])().mark((function e(){var t,r,a,o,l,c;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("uKmp")["default"],e.next=3,Promise.all([n.e(0),n.e(3),n.e(4),n.e(5)]).then(n.bind(null,"/7QA"));case 3:return r=e.sent,e.t0=t,e.next=7,Promise.resolve().then(n.t.bind(null,"ahKI",7));case 7:return e.t1=e.sent,a=(0,e.t0)(e.t1),o=a["default"].createElement(r.Menu,{items:[{key:"1",label:a["default"].createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:a["default"].createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item")},{key:"3",label:a["default"].createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item")}]}),l=function(){return a["default"].createElement(r.Space,{direction:"vertical"},a["default"].createElement(r.Space,{wrap:!0},a["default"].createElement(r.Dropdown,{overlay:o,placement:"bottomLeft"},a["default"].createElement(r.Button,null,"bottomLeft")),a["default"].createElement(r.Dropdown,{overlay:o,placement:"bottom"},a["default"].createElement(r.Button,null,"bottom")),a["default"].createElement(r.Dropdown,{overlay:o,placement:"bottomRight"},a["default"].createElement(r.Button,null,"bottomRight"))),a["default"].createElement(r.Space,{wrap:!0},a["default"].createElement(r.Dropdown,{overlay:o,placement:"topLeft"},a["default"].createElement(r.Button,null,"topLeft")),a["default"].createElement(r.Dropdown,{overlay:o,placement:"top"},a["default"].createElement(r.Button,null,"top")),a["default"].createElement(r.Dropdown,{overlay:o,placement:"topRight"},a["default"].createElement(r.Button,null,"topRight"))))},c=l,e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:'import { Button, Dropdown, Menu, Space } from \'antd-customize\';\nimport React from \'react\';\n\nconst menu = (\n  <Menu\n    items={[\n      {\n        key: \'1\',\n        label: (\n          <a\n            target="_blank"\n            rel="noopener noreferrer"\n            href="https://www.antgroup.com"\n          >\n            1st menu item\n          </a>\n        ),\n      },\n      {\n        key: \'2\',\n        label: (\n          <a\n            target="_blank"\n            rel="noopener noreferrer"\n            href="https://www.aliyun.com"\n          >\n            2nd menu item\n          </a>\n        ),\n      },\n      {\n        key: \'3\',\n        label: (\n          <a\n            target="_blank"\n            rel="noopener noreferrer"\n            href="https://www.luohanacademy.com"\n          >\n            3rd menu item\n          </a>\n        ),\n      },\n    ]}\n  />\n);\n\nconst App: React.FC = () => (\n  <Space direction="vertical">\n    <Space wrap>\n      <Dropdown overlay={menu} placement="bottomLeft">\n        <Button>bottomLeft</Button>\n      </Dropdown>\n      <Dropdown overlay={menu} placement="bottom">\n        <Button>bottom</Button>\n      </Dropdown>\n      <Dropdown overlay={menu} placement="bottomRight">\n        <Button>bottomRight</Button>\n      </Dropdown>\n    </Space>\n    <Space wrap>\n      <Dropdown overlay={menu} placement="topLeft">\n        <Button>topLeft</Button>\n      </Dropdown>\n      <Dropdown overlay={menu} placement="top">\n        <Button>top</Button>\n      </Dropdown>\n      <Dropdown overlay={menu} placement="topRight">\n        <Button>topRight</Button>\n      </Dropdown>\n    </Space>\n  </Space>\n);\n\nexport default App;'}},dependencies:{"antd-customize":{version:"0.1.0"},react:{version:"18.2.0"}},title:"Dropdown",identifier:"gallery-demo-3"}}},p=n("x2v5"),d=n("BXQl"),s=n.n(d);t["default"]=e=>o.a.createElement(s.a,Object(r["a"])({},e,{config:l,demos:m,apis:p}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"antd-customize","meta":{"order":null}},{"path":"/gallery","title":"\u7ec4\u4ef6\u6982\u89c8","meta":{"order":1}},{"path":"/changelog","title":"\u66f4\u65b0\u65e5\u5fd7","meta":{"order":2}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{},"title":"antd-customize","logo":"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg","mode":"doc","repository":{"url":"","branch":"master"},"theme":{}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);