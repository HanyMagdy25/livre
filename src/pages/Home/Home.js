import React from "react";
// Import Components
import Hero from "../../components/Hero/Hero";
import MostVisits from "../../components/MostVisits/MostVisits";
import About from "../../components/About/About";
import Partner from "../../components/Partner/Partner";
import Contact from "../../components/Contact/Contact";

const Home = ({token}) => {
  // const [regions, setRegions] = useState([]);
  // const [token, setToken] = useState(
  //   "opHqBzHqDukBFxdpY4g63K3S54dWD17ySlzBlAPqh1gj2DB0Vg3km7F09R17wK7Y"
  // );
  // useEffect(() => {
  //   fetch(`https://livre.softwarecloud2.com/api/v1/events/events`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Authorization": `${token}`,
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setRegions(data);
  //     });
  // }, [token]);

  // console.log("Home Page : ", regions);
  return (
    <>
      <Hero />
      <MostVisits />
      <About />
      <Partner />
      <Contact />
    </>
  );
};

export default Home;
