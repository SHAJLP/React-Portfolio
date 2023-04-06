import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Sophia Altaf",
    location: "West Midlands, UK",
    email: "sophiaaltaf73@gmail.com",
    availability: "Open for work experience",
    brand:
      "Hello! I'm Sophia. Im currently a a student developer through the University of Birmingham, UK.  Before I started this course, I barely used my expensive laptop now its heaving under all of my downloads, installations and files!  I am looking forward to exploring roles in this field in the coming months and challenge myself further.  ",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
