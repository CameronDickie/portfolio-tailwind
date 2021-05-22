import { useState, useEffect } from "react";
import "../styles/main.css";

import "../styles/winbox.min.css";
import WinBox from "../components/winbox.js";


const Main = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  let aboutOpen = false;
  let contactOpen = false;
  let projectOpen = false;
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  let isMobile = width <= 768;
  let w = isMobile ? `${width * 0.8}px` : `${width * 0.4}px`;
  let h = isMobile ? height * 0.8 : height * 0.6;
  let xPos = isMobile
    ? width / 2 - (width * 0.8) / 2
    : width / 2 - (width * 0.4) / 2;
  let yPos = isMobile
    ? height / 2 - (height * 0.8) / 2
    : height / 2 - (height * 0.6) / 2 + height * 0.025;
  function initLinkWindow() {
    const linkContent = document.getElementById("link-content");
    const linkBox = new WinBox({
      title: "my-links",
      width: w,
      height: h,
      x: xPos,
      y: yPos,
      background: "#4B5563",
      mount: linkContent,
      class: ["no-min", "no-max", "no-full", "no-resize", "no-close", "no-move"],
      onfocus: function () {
        this.setBackground("#4B5563");
      },
      onblur: function () {
        this.setBackground("#374151");
      },
    });
    //body gradient styling
    linkBox.body.classList.add("bg-gradient-to-t");
    linkBox.body.classList.add("from-gray-900");
    linkBox.body.classList.add("to-gray-800");
    return linkBox;
  }
  function initAboutWindow() {
    if(aboutOpen) return;
    aboutOpen = true;
    const aboutContent = document.getElementById("about-content");
    const aboutBox = new WinBox({
      title: "about-me",
      width: w,
      height: h,
      x: xPos,
      y: yPos,
      background: "#4B5563",
      mount: aboutContent,
      class: ["no-full"],
      onfocus: function () {
        this.setBackground("#4B5563");
      },
      onblur: function () {
        this.setBackground("#374151");
      },
      onclose: function () {
        aboutOpen = false;
      }
    });

    aboutBox.body.classList.add("bg-gradient-to-t");
    aboutBox.body.classList.add("from-gray-900");
    aboutBox.body.classList.add("to-gray-800");
    return aboutBox;
  }
  function initContactWindow() {
    if(contactOpen) return;
    contactOpen = true;
    const contactContent = document.getElementById("contact-content");
    const contactBox = new WinBox({
      title: "contact-me",
      width: w,
      height: h,
      x: xPos,
      y: yPos,
      background: "#4B5563",
      mount: contactContent,
      class: ["no-full"],
      onfocus: function () {
        this.setBackground("#4B5563");
      },
      onblur: function () {
        this.setBackground("#374151");
      },
      onclose: function() {
        contactOpen = false;
      }
    });

    contactBox.body.classList.add("bg-gradient-to-t");
    contactBox.body.classList.add("from-gray-900");
    contactBox.body.classList.add("to-gray-800");
    return contactBox;
  }

  function initProjectWindow() {
    if(projectOpen) return;
    projectOpen = true;
    const projectContent = document.getElementById("project-content");
    const projectBox = new WinBox({
      title: "my-projects",
      width: w,
      height: h,
      x: xPos,
      y: yPos,
      background: "#4B5563",
      mount: projectContent,
      class: ["no-full"],
      onfocus: function () {
        this.setBackground("#4B5563");
      },
      onblur: function () {
        this.setBackground("#374151");
      },
      onclose: function () {
        projectOpen = false;
      }
    });

    projectBox.body.classList.add("bg-gradient-to-t");
    projectBox.body.classList.add("from-gray-900");
    projectBox.body.classList.add("to-gray-800");
    return projectBox;
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    const linkBox = initLinkWindow();

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      // linkBox.close();
    };
  }, []);

  return (
    <div>
      <div class="container">
        <nav className="flex w-screen text-green-400 text-xl pt-8 md:pt-32 justify-center flex-row">
          <button
            className="px-2 md:px-16"
            id="about"
            onClick={() => initAboutWindow()}
          >
            /about
          </button>
          <button
            className="px-2 md:px-16"
            id="contact"
            onClick={() => initContactWindow()}
          >
            /contact
          </button>
          <button
            className="px-2 md:px-16"
            id="projects"
            onClick={() => initProjectWindow()}
          >
            /projects
          </button>
        </nav>
      </div>
      <div className="hidden">
        {/* link contents */}
        <main
          id="link-content"
          className="divide-y-4 divide-gray-200 divide-solid text-green-400"
        >
          <h1 className="text-2xl mb-1 text-center">
            camerondickie:$<span class="animate-blink">|</span>
          </h1>
          <div className="text-center text-lg">
            {/* <h3>find my socials:</h3> */}
            <ul className="my-3">
              <li>
                <a href="https://github.com/CameronDickie">github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cameron-dickie-62b715157/">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://twitter.com/cam_dickie_">twitter</a>
              </li>
            </ul>
          </div>
        </main>
        {/* about content */}
        <div
          id="about-content"
          className="divide-y-4 divide-gray-200 divide-solid text-green-400"
        >
          <h2 className="text-2xl mb-1 text-center">
            about-me:$<span class="animate-blink">|</span>
          </h2>
          {/* <hr></hr> */}
          <main className="text-left">
            <div className="mx-8 mt-3">
              <p>
                my name is cameron dickie. i am a student based out of ottawa,
                ontario studying computer science with a minor in mathematics at
                carleton university. i expect to graduate in april of 2022, but
                the skills i have learned in my time during my undergrad have
                revolutionized how i code.
                <br />
                <br />
                i am eager to learn new things. i find great interest in
                learning what technology is cutting edge, and how these
                technologies can change how i approach problem solving in
                regards to both front- and back-end development.
                <br />
                <br />
                some of my interests include artificial intelligence,
                neuroscience, philosophy, video games, skiing, and wakeboarding.
                <br />
                <br />
                some technologies i have expertise in (in no particular order):
                <ul class="list-disc ml-4">
                  <li>reactjs</li>
                  <li>react native</li>
                  <li>nodejs</li>
                  <li>expressjs</li>
                  <li>firebase-tools</li>
                  <li>flutter</li>
                  <li>spring</li>
                  <li>vuejs</li>
                  <li>nuxtjs</li>
                  <li>web-sockets</li>
                </ul>
                <br></br>
                some technologies i am actively using and learning:
                <ul class="list-disc ml-4">
                  <li>reactjs</li>
                  <li>flutter</li>
                  <li>nextjs</li>
                  <li>web-sockets</li>
                  <li>firebase-tools</li>
                  <li>aws</li>
                </ul>
              </p>
            </div>
          </main>
        </div>
        {/* contact content */}
        <div
          id="contact-content"
          className="divide-y-4 divide-gray-200 divide-solid text-green-400"
        >
          <h2 className="text-2xl mb-1 text-center">
            contact-me:$<span class="animate-blink">|</span>
          </h2>
          <main>
            <div className="mx-4 md:mx-8 mt-3">
              <p>you can contact me at the email and phone number below:</p>
              <ul>
                <li className="py-2">
                  <div className="inline-block px-2 md:px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#34D399"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                    </svg>
                  </div>
                  +1 (905) 462-1566
                </li>
                <li>
                  <div className="inline-block px-2 md:px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#34D399"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                    </svg>
                  </div>
                  cameronbdickie@gmail.com
                </li>
              </ul>
            </div>
          </main>
        </div>
        {/* project content */}
        <div
          id="project-content"
          className="divide-y-4 divide-gray-200 divide-solid text-green-400"
        >
          <h2 className="text-2xl mb-1 text-center">
            my-projects:$<span class="animate-blink">|</span>
          </h2>
          <main className="text-left divide-y-2 divide-gray-200 divide-solid">
            <div className="my-3 mx-4 md:mx-8">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl">Course Management System</h4>
                  <a
                    className="text-gray-200 underline"
                    href="https://github.com/CameronDickie/comp3004-team6"
                  >
                    github repository
                  </a>
                </div>
                <div className="text-xs">
                  <h6>front-end: react</h6>
                  <h6>back-end: spring</h6>
                </div>
              </div>
              <p className="mt-6">
                a full-stack project completed with three of my other
                classmates.
                <br />
                the project objective was to allow for three types of users: an
                administrator, professors, and students.
                <br />
                <br />
                these users can do some of the following things:
                <ul class="list-disc ml-4">
                  <li>creating courses</li>
                  <li>register in courses</li>
                  <li>uploading files for course content</li>
                  <li>grading student submissions</li>
                  <li>provide final grades for students in a course</li>
                  <li>and much more</li>
                </ul>
                <br />
                noteworthy features include:
                <ul class="list-disc ml-4">
                  <li>
                    implementation of design patterns on the back-end including:
                    observer, factory, strategy, decorator, and composite
                  </li>
                  <li>
                    the use of a web-socket to ensure the real-time updating of
                    users associated with a course (determined by the
                    observer/subject)
                  </li>
                  <li>
                    recursive front-end implementation to allow for professor
                    modification of course-content and its structure
                  </li>
                </ul>
              </p>
            </div>
            {/* start of second project */}
            <div>
              <div className="mx-4 md:mx-8 mb-3">
                <div class="my-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-xl">Climate Action Carleton Blog</h4>
                      <a
                        className="text-gray-200 underline"
                        href="https://github.com/CameronDickie/cac-react"
                      >
                        github repository
                      </a>
                      <br />
                      <a
                        className="text-gray-200 underline"
                        href="https://climateactioncarleton.ca"
                      >
                        website link
                      </a>
                    </div>
                    <div>
                      <h6 className="text-xs">front-end: react</h6>
                    </div>
                  </div>
                </div>
                <p>
                  a project to provide the campus organization 'climate action
                  carleton' with a digital front to organize their most relevant
                  content.
                  <br></br>
                  this helped their organization reach out to students,
                  especially first years, during the pandemic when it was not
                  possible to meet new people on campus.
                  <br></br>
                  <br></br>
                  this project includes:
                  <ul class="list-disc ml-5">
                    <li>
                      a home page consisting of a splash page of the most
                      important content.
                    </li>
                    <li>
                      an about page describing the organization and what their
                      goals are.
                    </li>
                    <li>
                      a contact page containing two forms: one to send an email
                      to the organization, and the other to join.
                    </li>
                    <li>
                      a page to explain their ongoing movement, and help educate
                      users on the issue with containerized pieces of
                      information.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            {/* start of third project */}
            <div>
              <div className="mx-4 md:mx-8 mb-3">
                <div className="my-3">
                  <div class="flex justify-between">
                    <div>
                      <h4 className="text-xl">CMXX Website</h4>
                      <a
                        className="text-gray-200 underline"
                        href="https://github.com/JaxsonHood/cmxx"
                      >
                        github repository
                      </a>
                      <br />
                      <a
                        className="text-gray-200 underline"
                        href="https://cmxx.ca"
                      >
                        website link
                      </a>
                    </div>
                    <div className="text-xs">
                      <h6>front-end: vue/nuxt.js</h6>
                    </div>
                  </div>
                </div>
                <p>
                  a simple project to provide a webpage for myself and my
                  roommate to show off our web development skills.
                  <br></br>
                  this project is currently ongoing and requires much more work,
                  but was a proof of concept for our vuejs and nuxtjs setup.
                  <br></br>
                  <br></br>
                  this project includes:
                  <ul class="list-disc ml-5">
                    <li>
                      a home page providing a general overview of what cmxx is.
                    </li>
                    <li>an about page describing who we as members are.</li>
                  </ul>
                </p>
              </div>
            </div>
            {/* start of fourth project */}
            <div>
              <div className="mx-4 md:mx-8 mb-3">
                <div class="my-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-xl">Lunartree Website</h4>
                      <a className="text-gray-200 underline" href="https://lunartree.ca">website link</a>
                    </div>
                    <div>
                      <h6 className="text-xs">front-end: javascript/wordpress</h6>
                    </div>
                  </div>
                </div>
                <p>
                  a project made in 2017 with a team of two other partners to
                  attract new clients.
                  <br></br>
                  this was for our film and media production company during my
                  time in high school.
                  <br></br>
                  <br></br>
                  this project includes:
                  <ul class="list-disc ml-5">
                    <li>
                      a landing page where a general overview of our company can
                      be seen, including some of our photography.
                    </li>
                    <li>
                      an 'our services' page which shows what skills our company
                      was willing to offer to potential clients.
                    </li>
                    <li>
                      a 'technology' page which overviews the technology we used
                      at the time (2017) to show that we had the resources
                      available to match our skills.
                    </li>
                    <li>
                      an 'about' page which describes our company and what we
                      offer to clients, giving background into who we are.
                    </li>
                    <li>
                      a 'contact' page which allows users to email our company
                      to determine what they are looking for.
                    </li>
                  </ul>
                  <br></br>
                  the results of this project attracted new clients, such as
                  <ul class="list-disc ml-5">
                    <li>the town of milton, ontario.</li>
                    <li>hitherfield private school</li>
                    <li>hawthorne public school</li>
                  </ul>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Main;
