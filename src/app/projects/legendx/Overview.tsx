import React from "react";

export default function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div>
          <h1 className="text-white text-xl font-tenor mb-2">My Role</h1>
          <p>
            <span className="text-white font-tenor">
              Full Stack Development &mdash;
            </span>
            <span className="text-sm text-white/40">
              {" "}
              visual design and backend engineering.
            </span>
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-white text-xl font-tenor mb-2">Team</h1>
          <p className=" text-white/40 font-tenor text-md">
            Amanuel Workneh, IS
          </p>
          <p className=" text-white/40 font-tenor text-md">
            Temesgen Getye, Mobile Development
          </p>
          <p className=" text-white/40 font-tenor text-md">
            Natnael Yonas, QA Tester
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-white text-xl font-tenor mb-2">
            Timeline & status
          </h1>
          <p className=" text-white/40 font-tenor text-md">
            5 months, Launched in August 2024
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-tenor text-white text-xl">Overview</h1>
        <p className="text-white/40 font-tenor py-4">
          LegendX is a modern, feature-rich gym management platform designed to
          streamline operations, enhance member engagement, and improve
          efficiency for gyms of all sizes. Built with Prisma and PostgreSQL, it
          supports multi-gym management, allowing owners to oversee multiple
          branches seamlessly. The platform offers automated membership
          management, class scheduling, billing automation, and payment
          integration to ensure a smooth experience for both administrators and
          members. With AI-powered analytics, gym owners gain valuable insights
          into member activity, retention rates, and overall business
          performance. LegendX prioritizes security with role-based access
          control, ensuring that owners, trainers, and members have access to
          the right information. Designed with a modern and intuitive UI, it
          simplifies complex gym operations, replacing outdated systems with an
          all-in-one, scalable solution. Whether managing memberships, tracking
          revenue, or organizing workouts, LegendX empowers fitness businesses
          to operate more efficiently and provide a seamless experience for
          their members.
        </p>
      </div>
    </div>
  );
}
