import styled from "styled-components";

const Images = styled.svg`
  @media (max-width: 768px) {
    display: none;
  }
`;
function StartedButton(){
  return(      <Images
      style={{
        margin: "-10px 0px 0px -150px",
        zIndex: "-1",
        position: "absolute",
      }}
      width="300px"
      height="300px"
      viewBox="0 0 313 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.2007 0C59.6099 2.33423 59.2959 4.77856 59.2959 7.29639V10.6926C53.86 4.34204 45.7851 0.317139 36.7702 0.317139C20.4014 0.317139 7.13184 13.5867 7.13184 29.9556V299.236C7.13184 315.604 20.4014 328.874 36.7702 328.874C53.139 328.874 66.4085 315.604 66.4085 299.236V184.81C71.8444 191.161 79.9193 195.186 88.9343 195.186C105.258 195.186 118.499 181.989 118.572 165.683V226.253C118.572 248.515 136.619 266.562 158.88 266.562C177.781 266.562 193.643 253.553 198.002 236.001V344.726C198.002 366.005 215.252 383.256 236.532 383.256C257.811 383.256 275.062 366.005 275.062 344.726V212.184C278.974 217.019 284.956 220.11 291.66 220.11C303.445 220.11 313 210.556 313 198.771V0H270.32V20.3149C263.769 8.39526 251.094 0.317139 236.532 0.317139C218.54 0.317139 203.429 12.6487 199.189 29.3208V6.63672C199.189 4.37622 199.002 2.15918 198.645 0H119.116C118.758 2.15918 118.572 4.37622 118.572 6.63672V7.16064C118.561 4.69067 118.248 2.29224 117.668 0H60.2007Z"
        fill="#FBB300"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.35583 0C3.18365 5.33545 0 12.6096 0 20.6274V289.907C0 306.276 13.2695 319.546 29.6384 319.546C46.0071 319.546 59.2767 306.276 59.2767 289.907V175.482C64.7126 181.833 72.7875 185.857 81.8024 185.857C98.078 185.857 111.289 172.739 111.439 156.498V216.925C111.439 239.187 129.486 257.233 151.748 257.233C170.649 257.233 186.512 244.223 190.87 226.669V335.398C190.87 356.677 208.12 373.927 229.4 373.927C250.679 373.927 267.93 356.677 267.93 335.398V202.855C271.842 207.691 277.824 210.782 284.528 210.782C296.314 210.782 305.868 201.228 305.868 189.443V0H263.188V10.9868C260.879 6.7854 257.809 3.06128 254.164 0H204.636C198.554 5.10791 194.073 12.0608 192.056 19.9968V0H52.1641V1.3645C51.7637 0.896729 51.3491 0.44165 50.9208 0H8.35583Z"
        fill="#FFC535"
      />
    </Images>)
}
export default StartedButton;
