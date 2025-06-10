import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Title from "./Title";

const portfolioData = [
  {
    title: "Web Layout-1",
    description: "Append-Web-Layout",
    img: "/img/image(6).png",
    url: "https://om6064.github.io/full-website/",
    category: "layout",
  },
  {
    title: "Web Layout-2",
    description: "interno-Web-Layout",
    img: "/img/image(5).png",
    url: "https://om6064.github.io/figma-web-layout/",
    category: "layout",
  },
  {
    title: "Web Layout-3",
    description: "BitCoin-Web-Layout",
    img: "/img/image.png",
    url: "https://om6064.github.io/Bitcoin-web/",
    category: "landing",
  },
  {
    title: "Admin Panel-1",
    description: "duralex-brand-admin-panel",
    img: "/img/Screenshot (1).png",
    url: "https://om6064.github.io/admin-panal-2/",
    category: "admin",
  },
  {
    title: "Admin Panel-2",
    description: "vristro-brand-admin-panel",
    img: "/img/Screenshot (2).png",
    url: "https://om6064.github.io/admin-panal/",
    category: "admin",
  },
  {
    title: "Landing-Page-1",
    description: "coffee-compony-landing-page",
    img: "/img/Screenshot (3).png",
    url: "https://om6064.github.io/coffee-web/",
    category: "landing",
  },
  {
    title: "Web Layout-4",
    description: "sandbox-layout",
    img: "/img/Screenshot (4).png",
    url: "https://om6064.github.io/sendbox/",
    category: "layout",
  },
  {
    title: "Web Layout-5",
    description: "homelisti-web-layout",
    img: "/img/Screenshot (5).png",
    url: "https://om6064.github.io/homlisti-web/",
    category: "layout",
  },
  {
    title: "Coming Soon",
    description: "",
    img: "",
    url: "",
    category: "",
    comingSoon: true,
  },
];

const PortfolioSec = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".grid", {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const filters = [
    { label: "ALL", key: "*" },
    { label: "ADMIN-PANEL", key: "admin" },
    { label: "LANDING-PAGE", key: "landing" },
    { label: "WEB-LAYOUT", key: "layout" },
  ];

  return (
    <section className="p-5" id="portfolio">
      <div className="container">
        <Title
          main="Portfolio"
          sub="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <ul className="d-flex list gap-4 my-5 list-unstyled justify-content-center flex-wrap">
          {filters.map(({ label, key }) => (
            <li key={key} onClick={() => setFilterKey(key)}>
              <p
                className={`text-body-secondary fw-semibold pointer ${
                  filterKey === key ? "active" : ""
                }`}
              >
                {label}
              </p>
            </li>
          ))}
        </ul>

        <div className="row grid g-4">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 grid-item ${item.category}`}
            >
              <div className="border rounded shadow-sm overflow-hidden h-100 d-flex flex-column justify-content-between">
                {item.comingSoon ? (
                  <div className="p-4 text-center">
                    <h4>Coming Soon</h4>
                  </div>
                ) : (
                  <>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="img-fluid w-100"
                        style={{ objectFit: "cover", height: "250px" }}
                      />
                    </a>
                    <div className="p-3">
                      <h5>{item.title}</h5>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSec;
