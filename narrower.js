let wrapperEl = document.createElement('div')

while(document.body.childNodes.length) {
  wrapperEl.appendChild(document.body.childNodes[0])
}

document.body.appendChild(wrapperEl)

wrapperEl.style.marginLeft = 'auto'
wrapperEl.style.marginRight = 'auto'
wrapperEl.style.maxWidth = '30%'
