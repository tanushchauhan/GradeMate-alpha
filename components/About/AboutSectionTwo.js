import Image from "next/image";
import Link from "next/link";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="mb-9">
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-center">
              If you have any questions, bug reports or feature requests please
              fill out{" "}
              <Link href="/contact">
                <span className="text-primary underline underline-offset-4">
                  this quick form
                </span>
              </Link>{" "}
              and I will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
