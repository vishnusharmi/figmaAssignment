import "./App.css";
import img1 from "./image 37.png";
import avatar1 from "./avatar.png";
import avatar2 from "./avatar (1).png";
import avatar3 from "./avatar (2).png";
import card1 from "./card-image.png";
import card2 from "./card-image (1).png";
import card3 from "./card-image (2).png";
import card4 from "./card-image (3).png";
import img40 from "./image 40.png";
import gimg from "./girlimg.png";
import pimg1 from "./Ellipse 1.png";
import pimg2 from "./Ellipse 1 (1).png";
import pimg3 from "./Ellipse 1 (2).png";

function App() {
  return (
    <div className="layout">
      <div className="header">
        <ul className="headerMenu">
          <li className="menus">Home</li>
          <li className="menus">About</li>
          <li className="menus">Schedules</li>
          <li className="menus">Membership</li>
          <li className="menus">Pricing</li>
        </ul>
        <ul className="headerOfBtn">
          <li className="offers">Offers</li>
          <li>
            <button className="coursebtn">Courses</button>
          </li>
        </ul>
      </div>
      <div className="contents">
        <span className="cross">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z"
              fill="#BE554B"
            />
          </svg>
        </span>
        <span className="greensimbel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M14 2.03465e-06C14 1.83851 13.6379 3.65901 12.9343 5.35757C12.2307 7.05613 11.1995 8.59948 9.89949 9.8995C8.59947 11.1995 7.05612 12.2308 5.35756 12.9343C3.65901 13.6379 1.8385 14 -3.8147e-06 14L-4.13185e-07 -4.13186e-07L14 2.03465e-06Z"
              fill="#87CC81"
            />
          </svg>
        </span>
        <div className="tropical">
          <div className="discover">
            Discover the beauty of the tropics
            <h1 className="tropi">
              Tropical
              <br /> Destinations
              <br />
              <span className="student">For Student</span>
            </h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
              bibendum integer <br /> rutrum nisi. A nec nisl vitae
            </p>
            <span className="curcle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.83352 10.3335C8.76652 10.3335 10.3335 8.76652 10.3335 6.83352C10.3335 4.90053 8.76652 3.33352 6.83352 3.33352C4.90053 3.33352 3.33352 4.90053 3.33352 6.83352C3.33352 8.76652 4.90053 10.3335 6.83352 10.3335Z"
                  fill="#505C59"
                />
              </svg>
            </span>
            <br />
            <button className="signup">SIGN UP</button>
            <div className="yellow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M21 7.34351e-06C21 2.75777 20.4568 5.48852 19.4015 8.03636C18.3461 10.5842 16.7993 12.8992 14.8492 14.8492C12.8992 16.7993 10.5842 18.3461 8.03635 19.4015C5.48851 20.4568 2.75776 21 0 21L3.67176e-06 3.67176e-06L21 7.34351e-06Z"
                  fill="#F8E27E"
                />
              </svg>
            </div>
          </div>
          <div className="dmcross">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M35 35C35 30.4037 34.0947 25.8525 32.3358 21.6061C30.5769 17.3597 27.9988 13.5013 24.7487 10.2513C21.4987 7.00121 17.6403 4.42313 13.3939 2.66422C9.14752 0.905301 4.59626 -2.00909e-07 0 0V14C2.75776 14 5.48851 14.5432 8.03635 15.5985C10.5842 16.6539 12.8992 18.2007 14.8492 20.1508C16.7993 22.1008 18.3461 24.4158 19.4015 26.9636C20.4568 29.5115 21 32.2422 21 35H35Z"
                fill="#BE554B"
              />
            </svg>
          </div>
          <div className="person">
            <img className="person1" src={img1} alt="" />
            <div className="green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM16.5957 25.0957C21.2901 25.0957 25.0957 21.2901 25.0957 16.5957C25.0957 11.9013 21.2901 8.0957 16.5957 8.0957C11.9013 8.0957 8.0957 11.9013 8.0957 16.5957C8.0957 21.2901 11.9013 25.0957 16.5957 25.0957Z"
                  fill="#87CC81"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content2">
        <div className="bigcircle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 168 168"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z"
              fill="#87CC81"
              fill-opacity="0.2"
            />
          </svg>
        </div>
        <div className="svgimg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
          >
            <path
              d="M0 46.5C0 40.3935 1.20276 34.3469 3.5396 28.7052C5.87645 23.0636 9.30161 17.9375 13.6195 13.6195C17.9375 9.30161 23.0636 5.87644 28.7052 3.5396C34.3469 1.20276 40.3935 -2.66922e-07 46.5 0L46.5 13.95C42.2255 13.95 37.9928 14.7919 34.0437 16.4277C30.0945 18.0635 26.5062 20.4611 23.4837 23.4837C20.4611 26.5062 18.0635 30.0945 16.4277 34.0437C14.7919 37.9928 13.95 42.2255 13.95 46.5H0Z"
              fill="#BE554B"
            />
          </svg>
        </div>
        <div className="girlimg">
          <ul className="girls">
            <li className="girlContent">
              <span className="imgspan">
                <img className="avatar" src={avatar1} alt="" />
              </span>
              <span className="span">
                <span className="Jenny">Jenny Wilson</span>
                <br />
                <span className="amet">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing...
                </span>
              </span>
            </li>
            <li className="girlContent">
              <span className="imgspan">
                <img className="avatar" src={avatar2} alt="" />
              </span>
              <span className="span">
                <span className="Jenny">Jenny Wilson</span>
                <br />
                <span className="amet">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing...
                </span>
              </span>
            </li>
            <li className="girlContent">
              <span className="imgspan">
                <img className="avatar" src={avatar3} alt="" />
              </span>
              <span className="span">
                <span className="Jenny">Jenny Wilson</span>
                <br />
                <span className="amet">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing...
                </span>
              </span>
            </li>
          </ul>
          <div className="frame">
            <p>
              <span className="adventure">Tropical Adventure</span> <br />
              <span className="advent"> for Students.</span>
              <br />
              <span>Student Tropical Vacation: Relax and Recharge</span>
            </p>
            <ul className="items">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit </li>
              <li>tortor id euismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>

            <button className="explore">Explore More</button>
          </div>
        </div>
      </div>
      <div className="our">
        <h1 className="Destinations">Our Destinations</h1>
        <div className="allimgs">
          <div className="figureimg">
            <figure class="figure">
              <img src={card1} class="figure-img img-fluid rounded" alt="..." />
              <figcaption class="figure-caption">Harvard University</figcaption>
              <br />
              <br />
              <span className="singapura">Cambridge, Massachusetts, UK</span>
              <span>
                <img
                  className="dots"
                  src=" https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ-AR-RwnjjleyknpMBhk3h50l9i3lzcsKCB_lb0VvYEcPN8Td"
                  alt=""
                />
              </span>
              <br />
              <br />
            </figure>
          </div>

          <div className="figureimg">
            <figure class="figure">
              <img src={card2} class="figure-img img-fluid rounded" alt="..." />
              <figcaption class="figure-caption">Oxford University</figcaption>
              <br />
              <br />
              <span className="singapura">Oxford, England</span>
              <span>
                <img
                  className="dots"
                  src=" https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ-AR-RwnjjleyknpMBhk3h50l9i3lzcsKCB_lb0VvYEcPN8Td"
                  alt=""
                />
              </span>
              <br />
              <br />
            </figure>
          </div>

          <div className="figureimg">
            <figure class="figure">
              <img src={card3} class="figure-img img-fluid rounded" alt="..." />
              <figcaption class="figure-caption">
                Stanford University
              </figcaption>
              <br />
              <br />
              <span className="singapura">Stanford, California</span>
              <span>
                <img
                  className="dots"
                  src=" https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ-AR-RwnjjleyknpMBhk3h50l9i3lzcsKCB_lb0VvYEcPN8Td"
                  alt=""
                />
              </span>
              <br />
              <br />
            </figure>
          </div>

          <div className="figureimg">
            <figure class="figure">
              <img src={card4} class="figure-img img-fluid rounded" alt="..." />
              <figcaption class="figure-caption">Nanyang University</figcaption>
              <br />
              <br />
              <span className="singapura">Nanyang Ave, Singapura</span>
              <span>
                <img
                  className="dots"
                  src=" https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ-AR-RwnjjleyknpMBhk3h50l9i3lzcsKCB_lb0VvYEcPN8Td"
                  alt=""
                />
              </span>
              <br />
              <br />
            </figure>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="numbersym">
        <span>⟵ </span>
        <span className="two">
          2 /<span className="symb">140</span>
        </span>
        <span className="right"> ⟶</span>
      </div>
      <div style={{ display: "flex" }}>
        <div className="discount">
          <span className="Dcross">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M8.61466e-06 38C9.48718e-06 33.0098 0.982913 28.0684 2.89259 23.458C4.80227 18.8476 7.60133 14.6586 11.13 11.1299C14.6586 7.60131 18.8477 4.80225 23.458 2.89257C28.0684 0.98289 33.0098 -7.73478e-06 38 -6.64413e-06L38 13.4895C34.7812 13.4895 31.594 14.1235 28.6202 15.3552C25.6465 16.587 22.9445 18.3924 20.6685 20.6684C18.3924 22.9445 16.587 25.6465 15.3552 28.6202C14.1235 31.594 13.4895 34.7812 13.4895 38L8.61466e-06 38Z"
                fill="#BE554B"
              />
            </svg>
          </span>
          <span className="Dcurcile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 59 59"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59ZM29.5 45.6548C38.422 45.6548 45.6548 38.422 45.6548 29.5C45.6548 20.578 38.422 13.3452 29.5 13.3452C20.578 13.3452 13.3452 20.578 13.3452 29.5C13.3452 38.422 20.578 45.6548 29.5 45.6548Z"
                fill="#F8E27E"
                fill-opacity="0.25"
              />
            </svg>
          </span>
          <div className="Dcontent">
            <p className="percentage">Get 20% off for student</p>
            <span className="Dcross2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M26 25.5C26 22.1513 25.3404 18.8354 24.0589 15.7416C22.7774 12.6478 20.8991 9.83666 18.5312 7.46877C16.1633 5.10088 13.3522 3.22256 10.2584 1.94107C7.16462 0.659571 3.8487 -5.19044e-06 0.499994 -4.45856e-06L0.499998 9.05215C2.65996 9.05215 4.79877 9.47759 6.79432 10.3042C8.78986 11.1307 10.6031 12.3423 12.1304 13.8696C13.6577 15.3969 14.8692 17.2101 15.6958 19.2057C16.5224 21.2012 16.9478 23.34 16.9478 25.5L26 25.5Z"
                  fill="#BE554B"
                />
              </svg>
            </span>
            <p>
              <span className="Stdis">Student discounts available.</span>
              <br /> Get ready for some fun in the sun!
            </p>
            <ul className="items">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit </li>
              <li>tortor id euismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>
            <br />
            <br />
            <button className="explore">Explore More</button>
            <br />
            <span className="dots3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.92452e-06 16C3.29189e-06 13.8988 0.413856 11.8183 1.21793 9.87706C2.02201 7.93585 3.20056 6.17202 4.6863 4.68629C6.17203 3.20055 7.93586 2.022 9.87707 1.21792C11.8183 0.413849 13.8989 -3.25675e-06 16 -2.79753e-06L16 16L2.92452e-06 16Z"
                  fill="#505C59"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="Dimg">
          <p className="bgcolor"></p>
          <br />
          <p className="bgblock"></p>
          <img className="girlBook" src={img40} alt="" />
          <span className="Gcurcile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              viewBox="0 0 168 168"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z"
                fill="#87CC81"
                fill-opacity="0.2"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="content3">
        <div className="Gimg">
          <img style={{ width: "450px", height: "500px" }} src={gimg} alt="" />
        </div>
        <div className="forms">
          <div className="formbg">
            <p className="book">Book now</p>
            <p className="elit">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit
            </p>
            <div className="place">
              <span className="city">city</span>
              <br />
              <input
                style={{ width: "200px" }}
                className="holder"
                placeholder="placeholder"
              />
            </div>
            <br />
            <div className="place" style={{ display: "flex" }}>
              <div style={{ flex: "1" }}>
                <span className="city">Arrival</span>
                <br />
                <input className="arival" placeholder="10 October" />
              </div>
              <div style={{ flex: "1" }}>
                <span className="city">Departure</span>
                <br />
                <input className="arival" placeholder="11 October" />
              </div>
            </div>
            <br />
            <div className="pmbtn">
              <div style={{ flex: "1" }}>
                <span className="city">STAR</span>
                <br />
                <button>-</button>
                <span className="one">4</span>
                <button>+</button>
              </div>
              <div style={{ flex: "1" }}>
                <span className="city">ROOM</span>
                <br />
                <button>-</button>
                <span className="one">1</span>
                <button>+</button>
              </div>
            </div>
            <br />
            <br />
            <button className="now">BOOK NOW</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="Testimonials">
        <h2>Testimonials</h2>
        <br />
        <ul className="ulimags">
          <il className="Pimgs">
            <img src={pimg1} />
            <p className="imgtitle">Corey Korsgaard</p>
            <hr style={{ width: "100px" }} />
            <br />
            <p className="page">
              It is a long established fact that a<br />
              reader will be distracted by the
              <br />
              readable content of a page when <br />
              looking at its layout.
            </p>
          </il>
          <li className="Pimgs">
            <img src={pimg2} />
            <p className="imgtitle">Jakob Aminoff</p>
            <hr style={{ width: "100px" }} />
            <br />
            <p className="page">
              It is a long established fact that a<br />
              reader will be distracted by the
              <br />
              readable content of a page when <br />
              looking at its layout.
            </p>
          </li>
          <li className="Pimgs">
            <img src={pimg3} />
            <p className="imgtitle">Carla Press</p>
            <hr style={{ width: "100px" }} />
            <br />
            <p className="page">
              It is a long established fact that a<br />
              reader will be distracted by the
              <br />
              readable content of a page when <br />
              looking at its layout.
            </p>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p className="special">
          Student Special: Discounted rates <br /> on tropical getaways!
        </p>
        <p className="embody">
          Let’s embody your beautiful ideas together, simplify the <br />
          way you visualize your next big things.
        </p>
        <br />
        <div className="lFooter">
          <ul className="ulfooter1">
            <li className="footeritem">Privacy Policy</li>
            <li className="footeritem">Terms of Use</li>
            <li className="footeritem">Sales and Refunds</li>
            <li className="footeritem">Legal</li>
            <li className="footeritem1">About</li>
            <li className="footeritem1">Schedules</li>
            <li className="footeritem1">Pricing</li>
            <li className="footeritem1">Membership</li>
            <li className="footeritem1">Joins</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
