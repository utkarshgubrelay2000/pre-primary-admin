
import Home from "./components/Home/Home";

import Contact from "./components/Contact/Contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Checkout from "./components/Checkout/Checkout";

import Register from "./components/Login/Register/Register";
import Login from "./components/Login/Register/Login";


import ScrollToTop from "react-router-scroll-top";

import PaymentSuccessfull from './components/PaymentSuccessfull/PaymentSuccessfull';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pre-primaryCheckout" component={Checkout} />
          <Route exact path="/paymentsuccessfull" component={PaymentSuccessfull} />
          <Route exact path="/contact" component={Contact} />
          
          {/* <Switch>
            <Route exact path="/Classes" component={Classes} />

            <Route exact path="/courselist" component={CourseList} />
            <Route exact path="/cart" component={Cart} />
         
            <Route
              exact
              path="/subjectdetail/:subjectId"
              component={SubjectDetail}
            />
            <Route
              exact
              path="/classsubjectlist/:classId"
              component={ClassSubjectList}
            />
            <Route
              exact
              path="/subscribe/:classId/:nameOfClass"
              component={Subscribe}
            />

            <Route exact path="/dashboard" component={StudentDashboard} />
            <Route
              exact
              path="/dashboard/upcomingSessions/:studentId"
              component={UpcomingSessions}
            />
            {/* <Route exact path="/upcomingsessiondetail/:sessionId" component={UpcomingSessionDetail}/> 
            <Route
              exact
              path="/dashboard/studentsubjectlist/:className/:classID"
              component={StudentSubjectList}
            />
            <Route
              exact
              path="/dashboard/studentsubjectschedule/:subjectId/:classID"
              component={StudentSubjectSchedule}
            />
            <Route exact path="/paymenttest" component={PaymentTest} />
            <Route exact path="/payment" component={Payment} />

            <Route exact path="/createmeeting" component={Classes} />
          </Switch>

         */}


        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;