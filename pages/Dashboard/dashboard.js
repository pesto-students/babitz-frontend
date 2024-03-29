import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import withAuth from "../../helpers/withAuth";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Sidenav from "../../components/Sidenav";
import Profile from "../../components/Profile";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
//-------style

const Box = styled.div`
  background: #f8ebd1;
  border-radius: 25px;
  padding: 5px 10px 10px 10px;
  margin-bottom: 20px;
`;

const Heading = styled.h6`
  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #000000;
`;

const NormalText = styled.p`
  font-family: Oswald;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  color: #000000;
  letter-spacing: 2px;
`;
function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  var chartdata = {
    options: {
      colors: ["#FFC535", "#FFC535"],
      chart: {
        height: 380,
        width: "100%",
        type: "area",
        animations: {
          initialAnimation: {
            enabled: true,
          },
        },
        zoom: {
          enabled: true,
          type: "x",
          resetIcon: {
            offsetX: -10,
            offsetY: 0,
            fillColor: "#fff",
            strokeColor: "#37474F",
          },
        },
      },
      stroke: {
        show: false,
        curve: "smooth",
      },
      yaxis: {
        title: {
          text: "Amount in Rupees",
        },
      },
      grid: {
        show: false,
      },

      dataLabels: {
        style: {
          colors: ["#EA7A26", "#E91E63", "#9C27B0"],
        },
      },
      xaxis: {
        categories: [0, 1, 2, 3, 4, 5, 6, 7],
        title: {
          text: "Number of Days",
        },
      },
    },
    series: [
      {
        name: "",
        data: [300, 200, 700, 600, 1000, 500],
      },
    ],
  };
  if (loading == true) {
    return <Loader />;
  }
  return (
    <div>
      <Head>
        <title>Babtiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidenav />
          </div>
          <div className="col-md-9">
            <div style={{ paddingBottom: "20px" }}>
              <Profile />
            </div>
            <div className="row" style={{ marginTop: "100px" }}>
              <div className="col-sm-3">
                <Box>
                  <Heading>Best Selling Item</Heading>
                  <NormalText>Pepperoni Pizza</NormalText>
                </Box>
              </div>
              <div className="col-sm-3">
                <Box>
                  <Heading>New Orders</Heading>
                  <NormalText>10</NormalText>
                </Box>
              </div>
              <div className="col-sm-3">
                <Box>
                  <Heading>Total Sales</Heading>
                  <NormalText>120</NormalText>
                </Box>
              </div>
              <div className="col-sm-3">
                <Box>
                  <Heading>Total Income</Heading>
                  <NormalText>₹ 10000</NormalText>
                </Box>
              </div>
            </div>
            <div
              style={{ overflowX: "auto", overflowY: "hidden", zIndex: "0" }}
            >
              {" "}
              <Chart
                options={chartdata.options}
                series={chartdata.series}
                type="area"
                width="95%"
                height="400px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
