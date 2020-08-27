import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/NavBar/Navbar";
import Herosection from "./Component/HeroSection/Herosection";
import Showcourses from "./Component/ShowCourses/Showcourses";
import fakeData from "./fakeData";
import Cart from "./Component/Cart/Cart";

function App() {
  // slicing the courses data
  const showCourses = fakeData.slice(0, 16);
  const [courses] = useState(showCourses);
  const [cart, setCart] = useState([]);

  // enroll btn event handler
  function enrollBtn(course) {
    const newCourses = [...cart, course];
    setCart(newCourses);
  }
  return (
    <div>
      {/* nav component declare*/}
      <Navbar cart={cart}></Navbar>

      {/* hero component declare */}
      <Herosection></Herosection>
      <div className="container">
        <div className="row">
          {/* cart component declare for mobile */}
          <div className="col-lg-4 col-md-4 col-sm-12 text-center mobile">
            <Cart cart={cart}></Cart>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="container" id="courses">
              <div className="row  d-flex justify-content-center align-items-center">
                {/* Showcourse component declear. It genarate dynamic data. */}
                {courses.map((course) => (
                  <Showcourses courses={course} enrollBtn={enrollBtn} key={course.id}></Showcourses>
                ))}
              </div>
            </div>
          </div>

          {/* cart component declear for desktop */}
          <div className="col-lg-4 col-md-4 desktop">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
