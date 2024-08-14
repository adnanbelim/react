function renderReact(renderEle, renderPlace){
    
   /* const ele = document.createElement(renderEle.type);
    ele.innerHTML = renderEle.children;
    ele.setAttribute('href', renderEle.props.href);
    ele.setAttribute('href', renderEle.props.href);

    renderPlace.appendChild(ele); */

    //above code is reffer to one element but we need more one element

    const ele =  document.createElement(renderEle.type);
    ele.innerHTML = renderEle.children;

    for(prop in renderEle.props){
        if(prop === 'children') continue;

        ele.setAttribute(prop, renderEle.props[prop]);
    }

    renderPlace.appendChild(ele);
}

const container = document.getElementById('root');

//tree in react 

const htmlTag = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'click me to visit google'
}

renderReact(htmlTag, container);