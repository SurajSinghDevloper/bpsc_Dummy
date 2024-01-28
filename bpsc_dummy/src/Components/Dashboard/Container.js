import React from "react";
import Profile from "./Profile";
import Navbar from "./Navbar";
import EventList from "./EventList";
import PaymentForm from "./PaymentForm";
import FormCriteria from "./FormCriteria";
import SubmittedForm from "./SubmittedForm";

const Container = ({ activePage, setActivePage }) => {
  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Profile />;
      case "Event List":
        return <EventList setActivePage={setActivePage} />;
      case "Submitted Form":
        return <SubmittedForm setActivePage={setActivePage} />;
      case "Payment":
        return <PaymentForm setActivePage={setActivePage} />;
      case "FormCriteria":
        return <FormCriteria setActivePage={setActivePage} />;
      case "Admit-Card":
        return <div>OOPS Admit-Card Form is Under Construction</div>;
      case "Submitted Form Status":
        return <div>OOPS Submitted Form Status is Under Construction</div>;
      case "Help":
        return <div>OOPS Help Form is Under Construction</div>;
      case "FAQs":
        return <div>OOPS FAQs Form is Under Construction</div>;
      // Add cases for other pages
      default:
        return <div>OOPS! Page Not Found</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="ml-64 h-full overflow-y-auto px-4 py-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Container;
