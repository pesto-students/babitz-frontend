import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import withAuth from "../../helpers/withAuth";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import styled from "styled-components";
import styles from "../../styles/Choosetemplate.module.css";
import { useRouter } from "next/router";
import SigninLogo from "../../public/svg/Login/singinlogo";
import Arrow from "../../public/svg/Template/savearrow";

//---------styling-starts----------

const Navbar = styled.div`
  width: 100%;
  height: 250px; /* as the half of the width */
  background-color: #ffc535;
  border-bottom-left-radius: 50%; /* 100px of height + 10px of border */
  border-bottom-right-radius: 50%; /* 100px of height + 10px of border */
`;

const Heading1 = styled.p`
  text-align: center;
  font-family: "Oswald";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 59px;
  text-align: center;
  letter-spacing: 0.07em;
`;

const Input = styled.input`
  display: none;
  @media (max-width: 768px) {
    /* display:block; */
  }
`;
const Box = styled.div`
  margin-top: -400px;
  @media (max-width: 992px) {
    margin-top: 100px;
  }
`;
const Template_name = styled.p`
  font-family: Oswald;
  font-style: normal;
  font-weight: 500;
  font-size: 65px;
  line-height: 40px;
  letter-spacing: 0.03em;
  color: grey;
  text-shadow: 0px 0px 6.5px rgba(0, 0, 0, 0.25);
`;
const Template_descr = styled.p`
  font-family: Oswald;
  font-size: 29px;
  margin-top: 40px;
  /* text-align: justify; */
  color: #000000;
`;

const Button = styled.div`
  background: #ffc535;
  float: right;
  margin-top: -120px;
  padding: 15px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  cursor: pointer;
  font-family: Oswald;
  font-size: 25px;
  color: #000000;
  @media (max-width: 650px) {
    margin-top: 0px;
  }
`;
//---------styling-ends----------

function ChooseTemplate() {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [template_id, setTemplate_id] = useState("1");
  const [template_name, setTemplate_name] = useState("Template 1");
  const [template_descr, setTemplate_descr] = useState(
    "An elite and classy template to showcase your brand in a unique yet elegant way."
  );
  const user = firebase.auth().currentUser;

  const choose_Template = (event) => {
    let value = event.target.value;
    setTemplate_id(value);
    if (value == 1) {
      setTemplate_name("Template 1");
      setTemplate_descr(
        "An elite and classy template to showcase your brand in a unique yet elegant way."
      );
    } else if (value == 2) {
      setTemplate_name("Coming Soon");
      setTemplate_descr(
        "A perfect template to make your customers as comfortable and homely virtually as you make them feel physically."
      );
    } else if (value == 3) {
      setTemplate_name("Coming Soon");
      setTemplate_descr(
        " If you have a lot to offer to your customers, then this is the perfect template for your and your customers’ needs."
      );
    }
  };

  const save_Template = () => {
    if (template_id == 1) {
      setloading(true);
      var formdata = new FormData();
      formdata["templateId"] = template_id;

      var requestOptions = {
        method: "PATCH",
        body: JSON.stringify(formdata),
        redirect: "follow",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: user.Aa,
        },
      };
      fetch("https://babitz-backend.herokuapp.com/myrestaurant", requestOptions)
        .then((response) => response.json())
        .then((json) => {
          router.push("/Template/edittemplate");
          setloading(false);
        })
        .catch((error) => {
          setloading(false);
          alert(error);
        });
    } else {
      alert("This template is not avaiable currently");
    }
  };
  if (loading == true) {
    return <Loader />;
  }
  return (
    <div>
      <Head>
        <title>Babitz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <div style={{ padding: "20px 0px 0px 20px" }}>
          <SigninLogo />
        </div>

        <Heading1>Pick Your Taste</Heading1>
      </Navbar>
      <div className="container" id={styles.container}>
        <Input
          className={styles.item1}
          type="radio"
          onClick={choose_Template}
          value={"1"}
          name="slider"
          id="item1"
          defaultChecked
        />
        <Input
          className={styles.item2}
          type="radio"
          onClick={choose_Template}
          value={"2"}
          name="slider"
          id="item2"
        />
        <Input
          className={styles.item3}
          type="radio"
          onClick={choose_Template}
          value={"3"}
          name="slider"
          id="item3"
        />
        <div className={styles.cards}>
          <label className={styles.card} htmlFor="item1" id={styles.song1}>
            <Image
              id={styles.img}
              layout="intrinsic"
              width="300px"
              height="400px"
              src="/Template 1.jpg"
              alt="song"
            />
          </label>
          <label className={styles.card} htmlFor="item2" id={styles.song2}>
            <Image
              id={styles.img}
              layout="intrinsic"
              width="300px"
              height="400px"
              src="/Template 2.jpg"
              alt="song"
            />
          </label>
          <label className={styles.card} htmlFor="item3" id={styles.song3}>
            <Image
              id={styles.img}
              layout="intrinsic"
              width="300px"
              height="400px"
              src="/Template 3.jpg"
              alt="song"
            />
          </label>
        </div>
      </div>
      <Button onClick={save_Template}>
        {" "}
        Save and Next <Arrow />
      </Button>
      <div className="container">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <Box>
              <Template_name>{template_name}</Template_name>
              <Template_descr> {template_descr}</Template_descr>
            </Box>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default withAuth(ChooseTemplate);
