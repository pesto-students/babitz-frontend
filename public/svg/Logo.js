import styled from "styled-components";
const Logostyle = styled.svg`
  margin: 10px 30px 0px 30px;
  width: 75px;
  height: 100%;
  @media (max-width: 768px) {
    width: 50px;
  }
`;

function Logo(){
  return(

      <Logostyle
    viewBox="0 0 90 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M62.088 51.6342L69.032 32.0182H62.44V28.7542H73.8V31.1862L66.568 51.4422H73.832V54.6742H62.088V51.6342Z"
      fill="black"
    />
    <path
      d="M2.952 28.7542H9.352C11.8053 28.7542 13.6827 29.2555 14.984 30.2582C16.2853 31.2609 16.936 32.9782 16.936 35.4102C16.936 36.9889 16.616 38.2262 15.976 39.1222C15.336 39.9969 14.408 40.5302 13.192 40.7222C16.1787 41.2982 17.672 43.4315 17.672 47.1222C17.672 49.6182 17.064 51.5062 15.848 52.7862C14.632 54.0449 12.8293 54.6742 10.44 54.6742H2.952V28.7542ZM9.288 39.3462C10.6533 39.3462 11.5813 39.0475 12.072 38.4502C12.584 37.8315 12.84 36.8395 12.84 35.4742C12.84 34.1515 12.5093 33.2555 11.848 32.7862C11.208 32.2955 10.1307 32.0502 8.616 32.0502H7.656V39.3462H9.288ZM9.48 51.3462C10.8667 51.3462 11.8267 51.0155 12.36 50.3542C12.8933 49.6929 13.16 48.6049 13.16 47.0902C13.16 45.5329 12.8613 44.4022 12.264 43.6982C11.688 42.9729 10.7067 42.6102 9.32 42.6102H7.656V51.3462H9.48Z"
      fill="black"
    />
    <path
      d="M1.3252 75.3485L74.6737 2.00002"
      stroke="black"
      strokeWidth="3"
    />
    <path
      d="M74.6738 75.3485L1.32533 2.00003"
      stroke="black"
      strokeWidth="3"
    />
        </Logostyle>)
}
export default Logo;