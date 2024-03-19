import{u as a,j as e,r as c,i as m,a as g,b as d,f,L as u}from"./index-9d6c57bf.js";import{s as b,a as w,b as y}from"./cars.selectors-7fbfb125.js";const k=a.li`
  margin-bottom: 40px;
  border-radius: 8px;
  max-width: 274px;
  @media (min-width: 768px) {
    margin-bottom: 80px;
    width: calc(150% - 20px);
  }

  @media (min-width: 1280px) {
    width: calc(100% - 60px);
  }

  .custom-image {
    display: block;
    object-fit: cover;
    margin-bottom: 14px;
    border-radius: 14px;
    width: 274px;
    height: 268px;
  }

  .carDetails {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .details {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .model {
    font-weight: bold;
    color: #3470ff;
  }

  .cost {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
  }

  .additionalInfo {
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: var(--additionalInfo-color);
    max-width: 270px;
    max-height: 40px;
    overflow: hidden;
    word-spacing: 2px;

    margin-bottom: 28px;
  }

  .LearnMoreLink {
    cursor: pointer;

    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    text-align: center;

    background: #3470ff;
    border-radius: 12px;
    padding: 12px;
    width: 274px;
    height: 44px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    .seeMoreLink {
      font-size: 16px;
      line-height: 1.125;
    }
  }
`,L=o=>{if(o){const s=o.split(", "),[i,r]=s.slice(-2);return`${i} | ${r}`}return null},j=({id:o,img:s,brand:i,model:r,year:t,cost:n,functionalities:l,rentalCompany:p,address:x,type:h})=>e.jsxs(k,{children:[e.jsx("img",{src:s,alt:`${i} ${r}`,className:"custom-image"}),e.jsxs("div",{className:"carDetails",children:[e.jsxs("p",{className:"details",children:[i," ",e.jsxs("span",{className:"model",children:[r,","]})," ",t]}),e.jsx("p",{className:"cost",children:n})]}),e.jsxs("p",{className:"additionalInfo",children:[L(x)," | ",p," | ",h," | ",r," | ",o," |"," ",l[0]]}),e.jsx("a",{href:"https://www.youtube.com/watch?v=XQHu4UUc9-A&list=PLViULGko0FdhZ99yYnqB64F_4nVyvOPH5&index=8",target:"_blank",rel:"noopener noreferrer",className:"LearnMoreLink",children:"Learn More"})]}),v=a.div`
    .carsList {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media (min-width: 768px) {
      gap: 20px;
    }

    @media (min-width: 1280px) {
      gap: 40px;
    }
  }
`,z=({cars:o})=>{const[s,i]=c.useState(4);c.useEffect(()=>{const t=()=>{const n=window.innerWidth;n>=1280?i(4):n>=768?i(2):i(1)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[]);const r=o.slice(0,s*3);return e.jsx(v,{children:e.jsx("ul",{className:"carsList",children:r.map(t=>e.jsx(j,{id:t.id,className:"carsListItem",img:t.img,brand:t.make,model:t.model,year:t.year,cost:t.rentalPrice,functionalities:t.functionalities,rentalCompany:t.rentalCompany,address:t.address,type:t.type},t.id))})})},C=a.div`

    /* background-image: url(${m.center_blur_desktop});
    background-size: 549px 543px;
    background-repeat: no-repeat;
    background-position: top 343px right;
    background-clip: content-box; */
  
  .categoryListsContainer {
    margin-bottom: 60px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .otherDrinksLink {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 42px;
    padding: 14px 40px;
    width: 167px;
    height: 46px;
    background: var(--link-bg);

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--link-text);

    margin-left: auto;
    margin-right: auto;

    transition:
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border-radius 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    @media (min-width: 768px) {
      padding: 18px 44px;
      width: 187px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;

      margin-bottom: 60px;
    }
  }

  .otherDrinksLink:hover,
  .otherDrinksLink:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
    background-color: var(--link-bg-hover);
  }
`,N=a.p`
font-weight: 500;
font-size: 16px;
line-height: 150%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #3470ff;

text-align: center;

`,E=()=>e.jsx(N,{children:e.jsx("a",{href:"https://www.youtube.com/watch?v=XQHu4UUc9-A&list=PLViULGko0FdhZ99yYnqB64F_4nVyvOPH5&index=8",className:"loadMoreBtn",children:"Load More "})}),I=()=>{const o=g(),s=d(b),i=d(w),r=d(y);return c.useEffect(()=>{s||o(f())},[s,o]),e.jsxs(C,{className:"container",children:[i&&e.jsx(u,{}),r&&e.jsxs("p",{children:["Error: ",r]}),e.jsx(z,{cars:s}),e.jsx(E,{})]})};export{I as default};
