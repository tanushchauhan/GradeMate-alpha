import Image from "next/image";
import Link from "next/link";

const blogPostData = {
  "version-update-0.2.0": {
    title: "Version update 0.2.0!",
    author: "Tanush Chauhan",
    imgSrc: "/images/blog/tc.jpeg",
    date: "30 Mar 2024",
    tags: ["Version Update"],
    content: (
      <>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[75/44]">
            <Image
              src="/images/blog/blog-03.png"
              alt="image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          This is the version 0.2.0 of GradeMate. I have added the much
          requested feature,{" "}
          <strong className="text-primary dark:text-white">What If</strong>.
          Using this feature, you can estimate the effect of each assignment on
          your overall grade in any class. You can also add new temporary
          assignments and assign grades to them to see the effect of future
          assessments that are not even assigned to you yet.
        </p>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          I hope you like this new update and if you have any questions or new
          feature requests, fill out{" "}
          <Link href="/contact">
            <span className="text-primary underline underline-offset-4">
              this quick form
            </span>
          </Link>{" "}
          and I will try to reply to you as soon as possible.
        </p>
      </>
    ),
  },
  "version-update-0.1.1": {
    title: "Version update 0.1.1!",
    author: "Tanush Chauhan",
    imgSrc: "/images/blog/tc.jpeg",
    date: "19 Mar 2024",
    tags: ["Version Update"],
    content: (
      <>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[75/44]">
            <Image
              src="/images/blog/blog-01.png"
              alt="image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          This is the version 0.1.1 of GradeMate. This update contains some
          minor fixes that were reported to me by some users and also some UI
          improvements mainly in the assignment view of a subject.
        </p>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          I hope you like this the new design that I have implemented and if you
          have any questions or new feature requests, fill out{" "}
          <Link href="/contact">
            <span className="text-primary underline underline-offset-4">
              this quick form
            </span>
          </Link>{" "}
          and I will try to reply to you as soon as possible.
        </p>
      </>
    ),
  },
  "alpha-version-is-out": {
    title: "Alpha version is out!",
    author: "Tanush Chauhan",
    imgSrc: "/images/blog/tc.jpeg",
    date: "16 Mar 2024",
    tags: ["Version Update"],
    content: (
      <>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[75/44]">
            <Image
              src="/images/blog/blog-02.png"
              alt="image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          This is the version 0.1.0 of GradeMate. I am exited to annouse that
          GradeMate is now live for public testing. Anyone in Frisco ISD can now
          login with their HAC username and password and use the application. If
          you are not a Frisco ISD student then I have added a demo account
          which you can use to see a demo of the application. The credentials
          for the demo account are visible on the{" "}
          <Link
            className="text-primary underline underline-offset-4"
            href="/signin"
          >
            sign in page
          </Link>
          .
        </p>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          I hope you would like the application and if you have any questions or
          new feature requests, fill out{" "}
          <Link href="/contact">
            <span className="text-primary underline underline-offset-4">
              this quick form
            </span>
          </Link>{" "}
          and I will try to reply to you as soon as possible.
        </p>
      </>
    ),
  },
};

export default blogPostData;
