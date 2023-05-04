import "./footer.css"

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Pointing App Code ${year}`}</footer>;
  };
  
  export default Footer;