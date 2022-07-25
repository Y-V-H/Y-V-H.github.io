import React from "react";


const RCEHeader = React.createElement('h1', {key: '2'}, "Teast header")
const paragraf = React.createElement('p', {className: 'paragraf', key: '1'}, 'text')
export const TeatContainer = () => React.createElement('div', {className: 'sidebar'}, [RCEHeader, paragraf])