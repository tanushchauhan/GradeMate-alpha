import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Page | GradeMate",
  description: "This is Contact Page for GradeMate",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </>
  );
};

export default ContactPage;
