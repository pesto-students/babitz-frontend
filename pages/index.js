import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useRef } from "react";
import HomeFood from "../public/svg/LandingPage/HomeFood";
import StartedButton from "../public/svg/LandingPage/StartedButton";
import TestCheeze from "../public/svg/LandingPage/TestCheeze";
import Colors from "../constants/colors";
import Logo from "../public/svg/Logo";

import Button from "../components/Button";
import Navlink from "../components/LandingPage/Navlink";
import Title from "../components/LandingPage/Title";
import Heading1 from "../components/LandingPage/Heading1";
import Heading2 from "../components/LandingPage/Heading2";
import NormalText from "../components/LandingPage/NormalText";
import ButtonWrapper from "../components/LandingPage/ButtonWrapper";
import Heading3 from "../components/LandingPage/Heading3";
import StartedItems from "../components/LandingPage/StartedItems";
import StartedList from "../components/LandingPage/StartedList";

//---------styling-starts----------

const ImageDiv = styled.div`
  margin-top: -200px;
  @media (max-width: 950px) {
    display: none;
  }
`;

//------------styling-ends----------

export default function Home() {
  let refAbout = useRef(null);
  let refContact = useRef(null);
  const aboutClick = () =>
    refAbout.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const contactClick = () =>
    refContact.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      <Head>
        <title>Babitz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --------------Navbar-Start---------------*/}
      <div className="Navbar" style={{ position: "relative" }}>
        <Image
          alt=""
          src="/svg/LandingPage/homebg.svg"
          layout="responsive"
          height="100%"
          width="363%"
        />
        <center>
          <div
            className="center"
            style={{ position: "absolute", width: "100%", top: "0" }}
          >
            <Navlink>Home</Navlink>
            <Navlink onClick={aboutClick}>About Us</Navlink>
            <Logo />
            <Navlink onClick={contactClick}>Contact Us</Navlink>
            <Navlink href="#news">SignIn</Navlink>
          </div>
        </center>
      </div>
      {/* --------------Navbar-End---------------*/}

      {/* --------------Home-Start---------------*/}
      <div className="container-fluid">
        <center>
          <div id="Home" style={{ position: "relative" }}>
            <HomeFood />
            <Title>Babitz</Title>
            <Heading1>ORDER, EAT, REPEAT.</Heading1>
            <Button
              style={{
                position: "absolute",
                left: "50%",
                top: 130,
                transform: "translate(-50%)",
              }}
            >
              Start Now
            </Button>
          </div>
          <div
            style={{
              borderBottom: "2px solid rgba(0, 0, 0, 0.35)",
              width: "90%",
            }}
          ></div>
        </center>
      </div>
      {/* --------------Home-End---------------*/}

      {/* --------------About-Start---------------*/}
      <div className="container-fluid">
        <center>
          <div
            ref={refAbout}
            id="About"
            style={{ marginTop: "30px", position: "relative" }}
          >
            <Heading2>About Us</Heading2>
            <NormalText style={{ marginTop: "50px" }}>
              We Give Restaurants The Ability To Make Thier Our Websites, So
              That They Can Potray Thier Brand In A Better Way.
            </NormalText>
            <ImageDiv>
              <Image
                src="/Landing-About.png"
                alt="Landing About"
                layout="responsive"
                width="90%"
                height="35px"
                objectFit="contain"
              />
            </ImageDiv>
            <ButtonWrapper>
              <Button
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%)",
                  marginTop: "-150px",
                }}
              >
                Start Now
              </Button>
            </ButtonWrapper>
            <div
              style={{
                borderBottom: "2px solid rgba(0, 0, 0, 0.35)",
                width: "90%",
              }}
            ></div>
          </div>
        </center>
      </div>
      {/* --------------About-End---------------*/}

      {/* --------------Offer-Start---------------*/}
      <center>
        <div
          id="Offer"
          style={{
            marginTop: "30px",
            background: "#FFC535",
            position: "relative",
          }}
        >
          <Image
            alt=""
            src="/svg/LandingPage/OfferBg.svg"
            layout="responsive"
            height="100%"
            width="395%"
          />
          <div className="container">
            <Heading2
              style={{ position: "absolute", top: -20, width: "100%", left: 0 }}
            >
              What We Offer
            </Heading2>
            <div className="row">
              <div className="col-sm-4" style={{ marginBottom: "50px" }}>
                <Image
                  alt=""
                  src="/svg/LandingPage/offertemp.svg"
                  layout="fixed"
                  height="60px"
                  width="100%"
                />
                <Heading3 style={{ marginTop: "15px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                    Multiple Templates
                  </span>
                  <br /> We offer restaurants an option to choose from multiple
                  templates so that you represent your food the way you want to.
                </Heading3>
              </div>
              <div className="col-sm-4" style={{ marginBottom: "50px" }}>
                <Image
                  alt=""
                  src="/svg/LandingPage/offerdash.svg"
                  layout="fixed"
                  height="60px"
                  width="100%"
                />
                <Heading3 style={{ marginTop: "15px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                    Personalised Dashboard
                  </span>
                  <br /> Get to know your daily progress, payment logs and all
                  the other information about your customers in no time.
                </Heading3>
              </div>
              <div className="col-sm-4" style={{ marginBottom: "50px" }}>
                <Image
                  alt=""
                  src="/svg/LandingPage/offerlive.svg"
                  layout="fixed"
                  height="60px"
                  width="100%"
                />
                <Heading3 style={{ marginTop: "15px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                    Live Edit
                  </span>
                  <br />
                  Edit the tempelate of your choice easily and get to see all
                  the changes being made live.
                </Heading3>
              </div>
            </div>
            <Button style={{ background: "white", marginBottom: "40px" }}>
              Start Now
            </Button>

            <div
              style={{
                borderBottom: "2px solid rgba(0, 0, 0, 0.35)",
                width: "90%",
                marginBottom: "30px",
              }}
            ></div>
          </div>
        </div>
      </center>
      {/* --------------Offer-End---------------*/}

      {/* --------------Started-Start---------------*/}
      <center>
        <div id="Started" style={{ position: "relative" }}>
          <Heading2
            style={{
              position: "absolute",
              top: -15,
              width: "100%",
              left: 0,
              zIndex: 1,
            }}
          >
            How to Get Started
          </Heading2>
          <Image
            alt=""
            src="/svg/LandingPage/startedbg.svg"
            layout="responsive"
            height="100%"
            width="194%"
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <ImageDiv style={{ marginTop: "-350px" }}>
                  <Image
                    src="/Landing-Started.png"
                    alt="Landing About"
                    layout="responsive"
                    width="100%"
                    height="90px"
                    objectFit="contain"
                  />
                </ImageDiv>
              </div>
              <div className="col-sm-7">
                <StartedList>
                  <StartedItems>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sit amet quam ac mi
                  </StartedItems>
                  <StartedItems>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sit amet quam ac mi
                  </StartedItems>
                  <StartedItems>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sit amet quam ac mi
                  </StartedItems>
                </StartedList>
                <Button>Start Now</Button>
                <br />
                <StartedButton />
              </div>
            </div>
          </div>
        </div>
      </center>
      {/* --------------Started-End---------------*/}

      {/* --------------Testimonies-Start---------------*/}
      <center>
        <div id="Testimonies" style={{ marginTop: "70px" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <Heading2>Testimonies</Heading2>
                <div
                  className="box"
                  style={{
                    padding: "20px",
                    background: "rgba(255, 197, 53, 0.2)",
                    borderRadius: "25px",
                    marginTop: "40px",
                  }}
                >
                  <Image
                    className="testimony"
                    src="/Landing-Testimonies2.png"
                    alt="Landing Testimonies2"
                    layout="fixed"
                    width="200px"
                    height="200px"
                    objectFit="contain"
                  />
                  <Heading3 style={{ marginTop: "20px", padding: "20px" }}>
                    ‘Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sit amet quam ac mi Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nunc sit amet quam ac mi’{" "}
                  </Heading3>
                </div>
                <Button style={{ marginTop: "50px" }}>Start Now</Button>
              </div>
              <div className="col-sm-6">
                <TestCheeze />
                <div
                  className="pizza"
                  style={{ marginLeft: "-100px", marginTop: "-100px" }}
                >
                  <Image
                    className="testimony"
                    src="/Landing-Testimonies.png"
                    alt="Landing Testimonies"
                    layout="responsive"
                    width="90%"
                    height="50px"
                    objectFit="contain"
                  />
                  <style jsx>{`
                    @media (max-width: 768px) {
                      .pizza {
                        display: none;
                      }
                    }
                    .testimony {
                      border-radius: 50%;
                    }
                  `}</style>
                </div>
              </div>
            </div>
            <div
              style={{
                borderBottom: "2px solid rgba(0, 0, 0, 0.35)",
                width: "90%",
                marginTop: "30px",
              }}
            ></div>
          </div>
        </div>
      </center>
      {/* --------------Testimonies-End---------------*/}

      {/* --------------Contact-Start---------------*/}
      <center>
        <div className="container">
          <div ref={refContact} id="Contact" style={{ marginTop: "30px" }}>
            <Heading2>Contact Us</Heading2>
            <Heading3 style={{ marginTop: "30px", marginBottom: "20px" }}>
              ‘Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet quam ac mi Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nunc sit amet quam ac mi’{" "}
            </Heading3>
          </div>
        </div>
      </center>
      {/* --------------Contact-End---------------*/}
    </div>
  );
}
