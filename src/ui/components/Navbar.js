
export class NavigationHeader extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        console.log("Hello from navigation header web component")
        let nav = document.createElement('nav');
        let navIntro = document.createElement('p')
        let ul = document.createElement('ul');
        
        this.appendChild(nav)
        nav.setAttribute('class', 'nav-header')
        ul.setAttribute('class', 'links-ctn')
        
        navIntro.textContent = "Navigation bar"
        nav.appendChild(navIntro)
        ul.innerHTML = `
        <li><a href='#'>Home</a></li> 
        <li><a href='#'>Projects</a></li> 
        <li><a href='#'>Blog</a></li> 
        `
        nav.appendChild(ul)
        let aTags = document.getElementsByTagName('a')
        console.log(aTags)
        Array.from(aTags).forEach((x)=>{
            x.setAttribute('class', 'nav-link')
            console.log(x)
        })
    }
}

customElements.define('wc-nav-header', NavigationHeader)


function clickHello(){
    alert("hello")
}