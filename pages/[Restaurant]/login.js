import { useRouter } from "next/router";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader.js";
import initFirebase from "../../services/firebase.js";
import styled from "styled-components";
import Image from "next/image";

initFirebase();
const provider = new firebase.auth.GoogleAuthProvider();

// -----------style
const Box = styled.div`
  margin-top: 150px;
  background: #f6f5f7;
  box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 20px;
  max-width: 600px;
`;
const Heading = styled.p`
  font-family: "Oswald";
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 40px;
  /* or 62% */
  text-align: center;
  color: #000000;
`;

function Userlogin() {
  const router = useRouter();
  const obj = router.query;
  const restname = obj.Restaurant;
  const [loading, setLoading] = useState(false);
  const [authorizing, setAuthorizing] = useState(false);
  const [rest, setRest] = useState("");
  const myLoader = ({ src }) => {
    return `https://babitz-s3.s3.ap-south-1.amazonaws.com/root/${rest.id}/${src}`;
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        if (restname != undefined) {
          router.push(`/${restname}/main`);
        }
      } else {
        setLoading(false);
      }
    });
    if (restname) {
      var requestOptions = {
        redirect: "follow",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      fetch(
        "https://babitz-backend.herokuapp.com/getRestaurantByName?restautantName=" +
          restname,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          setRest(json);
        });
    }
  }, [restname]);

  const handleAuthentication = async () => {
    setAuthorizing(true);

    const result = await firebase.auth().signInWithPopup(provider);

    const { user } = result;
    if (!user) {
      throw new Error("There was an issue authorizing");
    }
    if (restname != undefined) {
      router.push(`/${restname}/main`);
    }
    var formdata = {
      displayName: user.displayName,
    };
    var requestOptions = {
      method: "POST",
      body: JSON.stringify(formdata),
      redirect: "follow",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: user.Aa,
      },
    };
    fetch("https://babitz-backend.herokuapp.com/registerUser", requestOptions)
      .then((response) => response.json())
      .then((json) => {});
  };

  if (loading == true) {
    return <Loader />;
  }
  return (
    <div>
      <div
        className="container-fluid"
        style={{ background: "#AFDFFF", height: "100vh" }}
      >
        <center>
          <Box>
            {rest ? (
              <Image
                loader={myLoader}
                width={120}
                height={120}
                src="logo"
                alt=""
              />
            ) : null}

            <Heading style={{ marginTop: "10px" }}>{rest.name}</Heading>
            <svg
              onClick={handleAuthentication}
              style={{ marginTop: "50px", cursor: "pointer" }}
              width="100%"
              height="50"
              viewBox="0 0 367 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g filter="url(#filter0_d)">
                <rect x="4" width="359" height="65" rx="25" fill="#AFDFFF" />
                <rect
                  x="11"
                  y="8"
                  width="48"
                  height="48"
                  rx="24"
                  fill="url(#pattern0)"
                />
                <path
                  d="M82.512 42.288C79.952 42.288 78.1493 41.5307 77.104 40.016C76.0587 38.48 75.536 36.368 75.536 33.68V24.528C75.536 21.6907 76.048 19.536 77.072 18.064C78.096 16.592 79.9093 15.856 82.512 15.856C84.8373 15.856 86.5013 16.4853 87.504 17.744C88.528 19.0027 89.04 20.8587 89.04 23.312V25.36H85.616V23.536C85.616 22.3413 85.5627 21.424 85.456 20.784C85.3493 20.144 85.072 19.632 84.624 19.248C84.1973 18.864 83.504 18.672 82.544 18.672C81.5627 18.672 80.8267 18.8853 80.336 19.312C79.8667 19.7173 79.5573 20.2933 79.408 21.04C79.2587 21.7653 79.184 22.7467 79.184 23.984V34.256C79.184 35.5787 79.2907 36.6133 79.504 37.36C79.7173 38.1067 80.0587 38.64 80.528 38.96C81.0187 39.28 81.6907 39.44 82.544 39.44C83.4613 39.44 84.144 39.2373 84.592 38.832C85.04 38.4267 85.3173 37.872 85.424 37.168C85.552 36.464 85.616 35.504 85.616 34.288V32.368H89.04V34.288C89.04 36.8693 88.5493 38.8533 87.568 40.24C86.608 41.6053 84.9227 42.288 82.512 42.288ZM97.2848 42.256C95.3221 42.256 93.9248 41.68 93.0928 40.528C92.2821 39.3547 91.8768 37.6587 91.8768 35.44V30.064C91.8768 27.8453 92.2821 26.16 93.0928 25.008C93.9248 23.8347 95.3221 23.248 97.2848 23.248C99.2261 23.248 100.602 23.8347 101.413 25.008C102.245 26.16 102.661 27.8453 102.661 30.064V35.44C102.661 37.6587 102.245 39.3547 101.413 40.528C100.602 41.68 99.2261 42.256 97.2848 42.256ZM97.2848 39.728C97.9034 39.728 98.3514 39.5467 98.6288 39.184C98.9061 38.8213 99.0768 38.3733 99.1408 37.84C99.2048 37.3067 99.2368 36.5813 99.2368 35.664V29.872C99.2368 28.9547 99.2048 28.2293 99.1408 27.696C99.0768 27.1413 98.9061 26.6827 98.6288 26.32C98.3514 25.9573 97.9034 25.776 97.2848 25.776C96.6661 25.776 96.2074 25.9573 95.9088 26.32C95.6314 26.6827 95.4608 27.1413 95.3968 27.696C95.3328 28.2293 95.3008 28.9547 95.3008 29.872V35.664C95.3008 36.5813 95.3328 37.3067 95.3968 37.84C95.4608 38.3733 95.6314 38.8213 95.9088 39.184C96.2074 39.5467 96.6661 39.728 97.2848 39.728ZM105.791 23.504H109.215V25.328C110.687 23.9413 112.191 23.248 113.727 23.248C114.729 23.248 115.444 23.6107 115.871 24.336C116.297 25.0613 116.511 25.9573 116.511 27.024V42H113.087V28.016C113.087 27.312 112.98 26.7893 112.767 26.448C112.553 26.1067 112.169 25.936 111.615 25.936C110.932 25.936 110.132 26.32 109.215 27.088V42H105.791V23.504ZM124.781 42.256C122.114 42.256 120.781 40.784 120.781 37.84V25.776H118.829V23.504H120.781V18.096H124.205V23.504H127.181V25.776H124.205V37.616C124.205 38.3627 124.322 38.8853 124.557 39.184C124.792 39.4827 125.24 39.632 125.901 39.632C126.328 39.632 126.744 39.6 127.149 39.536V42.064C126.296 42.192 125.506 42.256 124.781 42.256ZM129.921 17.168H133.345V20.752H129.921V17.168ZM129.921 23.504H133.345V42H129.921V23.504ZM137.009 23.504H140.433V25.328C141.905 23.9413 143.409 23.248 144.945 23.248C145.948 23.248 146.663 23.6107 147.089 24.336C147.516 25.0613 147.729 25.9573 147.729 27.024V42H144.305V28.016C144.305 27.312 144.199 26.7893 143.985 26.448C143.772 26.1067 143.388 25.936 142.833 25.936C142.151 25.936 141.351 26.32 140.433 27.088V42H137.009V23.504ZM153.728 42.256C152.725 42.256 152.01 41.8933 151.584 41.168C151.157 40.4427 150.944 39.5467 150.944 38.48V23.504H154.368V37.456C154.368 38.16 154.474 38.6933 154.688 39.056C154.901 39.3973 155.285 39.568 155.84 39.568C156.522 39.568 157.322 39.184 158.24 38.416V23.504H161.664V42H158.24V40.176C156.768 41.5627 155.264 42.256 153.728 42.256ZM170.286 42.256C168.856 42.256 167.747 41.9893 166.958 41.456C166.168 40.9013 165.614 40.0907 165.294 39.024C164.974 37.9573 164.814 36.5707 164.814 34.864V30.64C164.814 28.08 165.208 26.2133 165.998 25.04C166.808 23.8453 168.238 23.248 170.286 23.248C171.779 23.248 172.899 23.5573 173.646 24.176C174.414 24.7947 174.915 25.6693 175.15 26.8C175.406 27.9093 175.534 29.4133 175.534 31.312V32.816H168.238V36.528C168.238 37.6587 168.398 38.48 168.718 38.992C169.059 39.4827 169.592 39.728 170.318 39.728C171.043 39.728 171.534 39.4827 171.79 38.992C172.046 38.48 172.174 37.712 172.174 36.688V35.568H175.502V36.272C175.502 38.2133 175.086 39.696 174.254 40.72C173.422 41.744 172.099 42.256 170.286 42.256ZM172.174 30.96V29.296C172.174 28.0373 172.046 27.1413 171.79 26.608C171.555 26.0533 171.043 25.776 170.254 25.776C169.699 25.776 169.272 25.904 168.974 26.16C168.696 26.416 168.504 26.8427 168.398 27.44C168.291 28.016 168.238 28.8587 168.238 29.968V30.96H172.174ZM185.115 23.504H187.931L189.851 37.136L192.315 23.504H194.939L197.403 37.072L199.323 23.504H202.139L199.067 42H196.187L193.659 28.944L191.163 42H188.091L185.115 23.504ZM204.983 17.168H208.407V20.752H204.983V17.168ZM204.983 23.504H208.407V42H204.983V23.504ZM217 42.256C214.333 42.256 213 40.784 213 37.84V25.776H211.048V23.504H213V18.096H216.424V23.504H219.4V25.776H216.424V37.616C216.424 38.3627 216.541 38.8853 216.776 39.184C217.01 39.4827 217.458 39.632 218.12 39.632C218.546 39.632 218.962 39.6 219.368 39.536V42.064C218.514 42.192 217.725 42.256 217 42.256ZM222.012 16.08H225.436V25.424C226.972 23.9733 228.518 23.248 230.076 23.248C231.078 23.248 231.782 23.6107 232.188 24.336C232.614 25.0613 232.828 25.9573 232.828 27.024V42H229.404V28.016C229.404 27.312 229.297 26.7893 229.084 26.448C228.87 26.1067 228.486 25.936 227.932 25.936C227.185 25.936 226.353 26.3413 225.436 27.152V42H222.012V16.08ZM249.942 42.32C247.595 42.32 245.899 41.584 244.854 40.112C243.809 38.6187 243.286 36.4107 243.286 33.488V24.816C243.286 22.8107 243.489 21.168 243.894 19.888C244.321 18.5867 245.035 17.5947 246.038 16.912C247.062 16.208 248.459 15.856 250.23 15.856C252.619 15.856 254.337 16.464 255.382 17.68C256.449 18.896 256.982 20.8053 256.982 23.408V24.368H253.59V23.568C253.59 22.3307 253.515 21.3813 253.366 20.72C253.217 20.0373 252.897 19.5253 252.406 19.184C251.937 18.8427 251.233 18.672 250.294 18.672C249.291 18.672 248.545 18.9067 248.054 19.376C247.563 19.824 247.243 20.432 247.094 21.2C246.966 21.968 246.902 22.992 246.902 24.272V33.872C246.902 35.856 247.137 37.2853 247.606 38.16C248.097 39.0133 249.025 39.44 250.39 39.44C251.734 39.44 252.651 38.9707 253.142 38.032C253.654 37.0933 253.91 35.5893 253.91 33.52V31.728H250.614V29.168H257.174V42H254.902L254.55 39.024C253.739 41.2213 252.203 42.32 249.942 42.32ZM265.691 42.256C263.728 42.256 262.331 41.68 261.499 40.528C260.688 39.3547 260.283 37.6587 260.283 35.44V30.064C260.283 27.8453 260.688 26.16 261.499 25.008C262.331 23.8347 263.728 23.248 265.691 23.248C267.632 23.248 269.008 23.8347 269.819 25.008C270.651 26.16 271.067 27.8453 271.067 30.064V35.44C271.067 37.6587 270.651 39.3547 269.819 40.528C269.008 41.68 267.632 42.256 265.691 42.256ZM265.691 39.728C266.31 39.728 266.758 39.5467 267.035 39.184C267.312 38.8213 267.483 38.3733 267.547 37.84C267.611 37.3067 267.643 36.5813 267.643 35.664V29.872C267.643 28.9547 267.611 28.2293 267.547 27.696C267.483 27.1413 267.312 26.6827 267.035 26.32C266.758 25.9573 266.31 25.776 265.691 25.776C265.072 25.776 264.614 25.9573 264.315 26.32C264.038 26.6827 263.867 27.1413 263.803 27.696C263.739 28.2293 263.707 28.9547 263.707 29.872V35.664C263.707 36.5813 263.739 37.3067 263.803 37.84C263.867 38.3733 264.038 38.8213 264.315 39.184C264.614 39.5467 265.072 39.728 265.691 39.728ZM279.285 42.256C277.322 42.256 275.925 41.68 275.093 40.528C274.282 39.3547 273.877 37.6587 273.877 35.44V30.064C273.877 27.8453 274.282 26.16 275.093 25.008C275.925 23.8347 277.322 23.248 279.285 23.248C281.226 23.248 282.602 23.8347 283.413 25.008C284.245 26.16 284.661 27.8453 284.661 30.064V35.44C284.661 37.6587 284.245 39.3547 283.413 40.528C282.602 41.68 281.226 42.256 279.285 42.256ZM279.285 39.728C279.903 39.728 280.351 39.5467 280.629 39.184C280.906 38.8213 281.077 38.3733 281.141 37.84C281.205 37.3067 281.237 36.5813 281.237 35.664V29.872C281.237 28.9547 281.205 28.2293 281.141 27.696C281.077 27.1413 280.906 26.6827 280.629 26.32C280.351 25.9573 279.903 25.776 279.285 25.776C278.666 25.776 278.207 25.9573 277.909 26.32C277.631 26.6827 277.461 27.1413 277.397 27.696C277.333 28.2293 277.301 28.9547 277.301 29.872V35.664C277.301 36.5813 277.333 37.3067 277.397 37.84C277.461 38.3733 277.631 38.8213 277.909 39.184C278.207 39.5467 278.666 39.728 279.285 39.728ZM292.591 47.728C290.799 47.728 289.369 47.44 288.303 46.864C287.236 46.3093 286.703 45.4347 286.703 44.24C286.703 43.4293 286.948 42.7253 287.439 42.128C287.951 41.5307 288.591 41.0507 289.359 40.688C288.783 40.5173 288.335 40.2507 288.015 39.888C287.716 39.5253 287.567 39.1307 287.567 38.704C287.567 38.064 287.727 37.5093 288.047 37.04C288.367 36.5707 288.889 36.0053 289.615 35.344C288.889 34.7893 288.345 34.096 287.983 33.264C287.641 32.4107 287.471 31.2693 287.471 29.84C287.471 27.6853 287.908 26.0533 288.783 24.944C289.679 23.8133 290.98 23.248 292.687 23.248C293.668 23.248 294.468 23.4187 295.087 23.76C295.705 24.1013 296.175 24.6133 296.495 25.296C296.644 25.0613 296.953 24.752 297.423 24.368C297.913 23.9627 298.436 23.632 298.991 23.376L299.503 23.152L300.367 25.36C299.94 25.4453 299.343 25.6267 298.575 25.904C297.828 26.1813 297.38 26.3947 297.231 26.544C297.38 26.928 297.508 27.4613 297.615 28.144C297.743 28.8267 297.807 29.424 297.807 29.936C297.807 31.9627 297.412 33.5413 296.623 34.672C295.833 35.7813 294.521 36.336 292.687 36.336C292.111 36.336 291.524 36.2613 290.927 36.112C290.521 36.7093 290.319 37.1787 290.319 37.52C290.319 37.7547 290.436 37.9467 290.671 38.096C290.927 38.224 291.321 38.3093 291.855 38.352L294.735 38.608C296.185 38.736 297.263 39.1733 297.967 39.92C298.671 40.6667 299.023 41.7333 299.023 43.12C299.023 46.192 296.879 47.728 292.591 47.728ZM292.687 33.936C293.604 33.936 294.201 33.616 294.479 32.976C294.756 32.336 294.895 31.2907 294.895 29.84C294.895 28.368 294.756 27.3013 294.479 26.64C294.201 25.9573 293.615 25.616 292.719 25.616C291.823 25.616 291.215 25.9573 290.895 26.64C290.596 27.3013 290.447 28.368 290.447 29.84C290.447 31.1627 290.596 32.176 290.895 32.88C291.215 33.584 291.812 33.936 292.687 33.936ZM292.847 45.04C294.063 45.04 294.959 44.8907 295.535 44.592C296.111 44.3147 296.399 43.856 296.399 43.216C296.399 42.6187 296.217 42.1813 295.855 41.904C295.492 41.6053 294.831 41.4133 293.871 41.328L290.959 41.072C290.511 41.52 290.169 41.9147 289.935 42.256C289.7 42.5973 289.583 42.9707 289.583 43.376C289.583 43.952 289.817 44.368 290.286 44.624C290.777 44.9013 291.631 45.04 292.847 45.04ZM302.017 16.08H305.441V42H302.017V16.08ZM314.129 42.256C312.7 42.256 311.591 41.9893 310.801 41.456C310.012 40.9013 309.457 40.0907 309.137 39.024C308.817 37.9573 308.657 36.5707 308.657 34.864V30.64C308.657 28.08 309.052 26.2133 309.841 25.04C310.652 23.8453 312.081 23.248 314.129 23.248C315.623 23.248 316.743 23.5573 317.489 24.176C318.257 24.7947 318.759 25.6693 318.993 26.8C319.249 27.9093 319.377 29.4133 319.377 31.312V32.816H312.081V36.528C312.081 37.6587 312.241 38.48 312.561 38.992C312.903 39.4827 313.436 39.728 314.161 39.728C314.887 39.728 315.377 39.4827 315.633 38.992C315.889 38.48 316.017 37.712 316.017 36.688V35.568H319.345V36.272C319.345 38.2133 318.929 39.696 318.097 40.72C317.265 41.744 315.943 42.256 314.129 42.256ZM316.017 30.96V29.296C316.017 28.0373 315.889 27.1413 315.633 26.608C315.399 26.0533 314.887 25.776 314.097 25.776C313.543 25.776 313.116 25.904 312.817 26.16C312.54 26.416 312.348 26.8427 312.241 27.44C312.135 28.016 312.081 28.8587 312.081 29.968V30.96H316.017Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="367"
                  height="73"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0"
                    transform="translate(-0.00181159) scale(0.00362319)"
                  />
                </pattern>
                <image
                  id="image0"
                  width="277"
                  height="276"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </Box>
        </center>
      </div>
    </div>
  );
}

export default Userlogin;
