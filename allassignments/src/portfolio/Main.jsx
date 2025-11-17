import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Main() {

    const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

    const projectsList = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully functional online store with cart and checkout",
      tech: "React, Tailwind CSS",
      imageColor: "bg-purple-500"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather information for any city",
      tech: "JavaScript, API",
      imageColor: "bg-blue-500"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Organize your daily tasks efficiently",
      tech: "React, Local Storage",
      imageColor: "bg-green-500"
    },
    {
      id: 4,
      title: "Portfolio Builder",
      description: "Create stunning portfolios in minutes",
      tech: "React, Tailwind",
      imageColor: "bg-orange-500"
    }
  ];

  const contactInfo = {
    message: "Feel free to reach out for collaborations or just a friendly hello!",
    email: "sumit@example.com",
    phone: "+919789473897",
    location: "Gwalior, India"
  };

  const socialLinks = ["GitHub", "LinkedIn", "Twitter", "Instagram"];


  return (
    <>
      <Navbar siteName="My Portfolio" links={navLinks} />

      {console.log(contactInfo)}

      <Routes>
        <Route path="/" element={<Home  userName="Sumit Baghel" 
            tagline="Hi! I'm a developer." />} />
        <Route path="/projects" element={<Projects projectsList={projectsList} />} />
        <Route path="/contact" element={<Contact contactInfo={contactInfo} />} />

       
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer  socialLinks={socialLinks} year={new Date().getFullYear()} />
    </>
  );
}

export default Main;
