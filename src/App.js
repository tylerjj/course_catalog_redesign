import React from "react";
import "./App.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Cart from "./Cart/Cart";
import Catalog from "./Catalog/Catalog";

const PAGEVIEWS = {
  CARTVIEW: "cartView",
  CATALOGVIEW: "catalogView"
}

const HOST = {
  WEB: "https://cs571.cs.wisc.edu/api/react/classes",
  LOCAL: "http://localhost:5000/api/react/classes"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: PAGEVIEWS.CATALOGVIEW,
      allCourses: [],
      filteredCourses: [],
      subjects: [],
      cartContents: [],
    };
    this.addToCartContents = this.addToCartContents.bind(this);
    this.removeFromCartContents = this.removeFromCartContents.bind(this);
    this.viewCart = this.viewCart.bind(this);
    this.viewCatalog = this.viewCatalog.bind(this);
  }

  getView() {
    if (this.state.view === PAGEVIEWS.CATALOGVIEW) {
      return (
        <Catalog
          setCourses={(courses) => this.setCourses(courses)}
          courses={this.state.allCourses}
          subjects={this.state.subjects}
          data={this.state.filteredCourses}
          allData={this.state.allCourses}
          cartMode={false}
          cartContents={this.state.cartContents}
          add={this.addToCartContents}
          viewCart={this.viewCart}
        />);
    }
    if (this.state.view === PAGEVIEWS.CARTVIEW) {

      return (
        <>         <Cart
          setCourses={(courses) => this.setCourses(courses)}
          courses={this.state.allCourses}
          subjects={this.state.subjects}
          data={this.state.filteredCourses}
          allData={this.state.allCourses}
          cartMode={false}
          cartContents={this.state.cartContents}
          remove={this.removeFromCartContents}
          viewCatalog={this.viewCatalog}
        /></>
      )
    }
  }


  async componentDidMount() {
    const response = await fetch(HOST.WEB)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          allCourses: data,
          filteredCourses: data,
          subjects: this.getSubjects(data),
          cartContents: this.getCartContents(data),
        })
      );
  }

  viewCart() {
    console.log("We should be viewing the cart now...");
    this.setState({ filteredCourses: this.state.allCourses, view: PAGEVIEWS.CARTVIEW })
  }

  viewCatalog() {
    this.setState({ filteredCourses: this.state.allCourses, view: PAGEVIEWS.CATALOGVIEW });
  }

  getCartContents(data) {

    let cartContents = [];

    for (let course of Object.values(data)) {
      let cartCourse = {
        number: course.number,
        name: course.name,
        description: course.description,
        inCart: false,
        requisites: course.requisites,
        subject: course.subject,
        credits: course.credits,
        keywords: course.keywords,
        sections: [],
      }
      for (let section of course.sections) {
        let cartSection = {
          number: section.number,
          inCart: false,
          subsections: [],
          instructor: section.instructor,
          location: section.location,
          time: section.time,
        }
        for (let subsection of section.subsections) {
          let cartSubsection = {
            number: subsection.number,
            inCart: false,
            location: subsection.location,
            time: subsection.time,
          }
          cartSection.subsections.push(cartSubsection);
        }
        cartCourse.sections.push(cartSection);
      }
      cartContents.push(cartCourse);
    }
    return cartContents;
  }

  // This is super gross. 
  addToCartContents(courseNumber, sectionNumber, subsectionNumber) {

    if (!courseNumber) {
      return;
    }
    let cartContents = [];

    for (let course of Object.values(this.state.cartContents)) {
      if (course.number === courseNumber) {
        course.inCart = true;
        let sections = [];
        if (!sectionNumber) {
          for (let section of course.sections) {
            section.inCart = true;
            let subsections = [];
            for (let subsection of section.subsections) {
              subsection.inCart = true;
              subsections.push(subsection);
            }
            section.subsections = subsections;
            sections.push(section);
          }
        } else {
          for (let section of course.sections) {
            if (section.number === sectionNumber) {
              section.inCart = true;
              let subsections = [];
              for (let subsection of section.subsections) {
                if (!subsectionNumber) {
                  subsection.inCart = true;
                } else if (subsection.number === subsectionNumber) {
                  subsection.inCart = true;
                }
                subsections.push(subsection);
              }
              section.subsections = subsections;
            }
            sections.push(section);
          }
        }
        course.sections = sections;
      }
      cartContents.push(course);
    }

    console.log(cartContents);
    this.setState({ "cartContents": cartContents });
  }

  removeFromCartContents(courseNumber, sectionNumber, subsectionNumber) {
    if (!courseNumber) {
      return;
    }
    let cartContents = [];
    for (let course of Object.values(this.state.cartContents)) {
      if (course.number === courseNumber) {
        let sections = [];
        if (!sectionNumber) {
          course.inCart = false;
          for (let section of course.sections) {
            section.inCart = false;
            let subsections = [];
            for (let subsection of section.subsections) {
              subsection.inCart = false;
              subsections.push(subsection);
            }
            section.subsections = subsections;
            sections.push(section);
          }
        } else {
          for (let section of course.sections) {
            if (section.number === sectionNumber) {
              if (!subsectionNumber) {
                section.inCart = false;
                let subsections = [];
                for (let subsection of section.subsections) {
                  subsection.inCart = false;
                  subsections.push(subsection);
                }
                section.subsections = subsections;
                sections.push(section);
              }
              else {
                let subsections = [];
                for (let subsection of section.subsections) {
                  if (subsection.number === subsectionNumber) {
                    subsection.inCart = false;
                  }
                  subsections.push(subsection);
                }
                sections.push(section);
              }
            } else {
              let subsections = [];
              for (let subsection of section.subsections) {
                if (subsection.number === subsectionNumber) {
                  subsection.inCart = false;
                }
                subsections.push(subsection);
              }
              section.subsections = subsections;
              sections.push(section);
            }
          }
        }
        course.sections = sections;
      }
      cartContents.push(course);
    }

    this.setState({ "cartContents": cartContents });
  }

  getSubjects(data) {
    let subjects = [];
    subjects.push("All");

    for (const course of Object.values(data)) {
      if (subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }


    return subjects;
  }

  setCourses(courses) {
    this.setState({ filteredCourses: courses });
  }

  render() {

    return (
      <>
        {
          this.getView()
          // <Catalog
          //   setCourses={(courses) => this.setCourses(courses)}
          //   courses={this.state.allCourses}
          //   subjects={this.state.subjects}
          //   data={this.state.filteredCourses}
          //   allData={this.state.allCourses}
          //   cartMode={false}
          //   cartContents={this.state.cartContents}
          //   add={this.addToCartContents}
          //   viewCart={this.viewCart}
          // />

          //     <Tabs
          //       defaultActiveKey="search"
          //       style={{
          //         position: "fixed",
          //         zIndex: 1,
          //         width: "100%",
          //         backgroundColor: "white",
          //       }}
          //     >
          //       <Tab eventKey="search" title="Search" style={{ paddingTop: "5vh" }}>

          //         <Sidebar
          //           setCourses={(courses) => this.setCourses(courses)}
          //           courses={this.state.allCourses}
          //           subjects={this.state.subjects}
          //         />
          //         <div style={{ marginLeft: "20vw" }}>
          //           <CourseArea
          //             data={this.state.filteredCourses}
          //             allData={this.state.allCourses}
          //             cartMode={false}
          //             cartContents={this.state.cartContents}
          //             add={this.addToCartContents}
          //             remove={this.removeFromCartContents}
          //           />
          //         </div>
          //       </Tab>

          //       <Tab eventKey="cart" title="Cart" style={{ paddingTop: "5vh" }}>
          //         <div style={{ marginLeft: "5vw", marginTop: "5vh" }}>
          //           <Cart allCourses={this.state.cartContents} remove={this.removeFromCartContents} />
          //         </div>
          //       </Tab>
          //     </Tabs>
        }
      </>
    );
  }
}

export default App;
