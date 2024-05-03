import { useState } from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <span>Geeks FOOD</span>
      </div>
      <div className="items">
        <span>Home</span>
        <span>Quotes</span>
        <span>Restaurants</span>
        <span>Foods</span>
        <span>Contacts</span>
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </nav>
  );
};

const Section = () => (
  <div className="img">
    <div className="box">
      <h1>Let us find your</h1>
      <h1 className="h2">Forever Food.</h1>
      <h3 className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem
        debitis cumque natus odio mollitia.
      </h3>
      <button className="b1">Search Now</button>
      <button className="b2">Know more</button>
    </div>
  </div>
);

const Section2 = (props) => (
  <div className="content">
    <div className="info">
      <p>{props.text}</p>
    </div>
    <div className="person">
      <img
        src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
        alt=""
      />
      <div>
        <p>Gladis Lennon</p>
        <p>Head of SEO</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Section></Section>
      <div className="main">
        <div className="left"></div>
        <div className="right">
          <div className="rightBox">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
      <div className="section2">
        <Section2 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis." />
        <Section2 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores." />
        <Section2 text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt." />
        <Section2 text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
        <Section2 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />
        <Section2 text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima." />
      </div>

      <footer>
        <div className="footerContent">
          <div></div>
          <p style={{ fontWeight: 200 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
          <div className="endInfo">
            <span>About</span>
            <span>Careers</span>
            <span>History</span>
            <span>Services</span>
            <span>Projects</span>
            <span>Blog</span>
          </div>
          <div className="icons">
          <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
