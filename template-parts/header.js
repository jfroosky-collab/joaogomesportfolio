class MyHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav class="justifiedcenter custom-header">
        <div class="menuwrapper">
        <div class="justifiedcenter" style="width: 33%; align-items:center;">
        <ul class="menu">
        <li class="menu-item"> <a href="about.html"> About Me </a> </li>
        <li class="menu-item"> <a href="portfolio.html"> Websites Made </a> </li>
        </ul>
        </div>
        <div class="justifiedcenter" style="width:20%;">
        <a href="index.html" class="name"> João Gomes </a>
        </div>
        <div class="justifiedcenter" style="width:33%; align-items:center;">
        <ul class="menu">
        <li class="menu-item"> <a href="resume.html"> Resume </a> </li>
        <li class="menu-item"> <a href="contacts.html"> Contact </a> </li>
        </ul>
        </div>
        </div>
        </nav>
        </header>
        
        <style>
        .menuwrapper{
            display:flex;
            flex-direction:row;
            justify-content: space-evenly;
            border-radius: 999px;
            width:85%;
            max-width: 900px;
            background: linear-gradient(145deg, rgba(255,255,255,0.58), rgba(255,255,255,0.22));
            border: 1px solid rgba(255,255,255,0.68);
            padding: 12px 10px;
            z-index: 999999;
            -webkit-backdrop-filter: blur(26px) saturate(1.35);
            backdrop-filter: blur(26px) saturate(1.35);
        }
        

        .menu{
        display: flex;
        flex-direction:row;
        align-items: center;
        column-gap: 40px;
        margin:0;
        padding:0;

        li{
        list-style-type:none;
        }
        }

        .justifiedcenter{
        display:flex;
        flex-direction: row;
        justify-content: center;
        padding:0;
        margin:0;
        }

        a.name{
        text-align: center;
        font-size: 1.2rem;
        font-weight: 900;
        color: var(--color2);
        }

        .justifiedcentercolumn{
         display:flex;
        flex-direction: column;
        justify-content: center;
        padding:0;
        margin:0;
        }

        .menuwrapper{
        position:fixed;
        top:5%;
        transition: 0.2s ease-in-out;
        box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.72),
        0 22px 70px rgba(64,78,59,0.18);

        }

        .menuwrapper.scroll-down{
        transform: translateY(-150%);
        }

        .menu-item a{
        font-size: 0.9rem;
        text-transform: uppercase;
        transition: 0.1s ease-in;
        color: var(--color2);
        padding: 10px 14px;
        border-radius: 999px;
        }

        .menu-item a:hover{
        font-size: 0.95rem;
        background-color: rgba(255,255,255,0.52);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.72), 0 12px 30px rgba(64,78,59,0.12);
        color: var(--color2);
        }

        .menuwrapper.scroll-up{
        transform: translateY(0)}
        </style>
        `;
    }
} 
    customElements.define('my-header', MyHeader);
