import React from "react";

const ServiceDetaipage = ({ params }) => {
  const data = [
    {
      id: "svc_a93jd8",
      service_name: "Web Development",
      service_image: "https://i.ibb.co/YT9Rgyp/web-development.jpg",
      service_description:
        "Responsive websites using modern technologies like React, Tailwind, and Node.js.",
    },
    {
      id: "svc_29djfw7",
      service_name: "Graphic Design",
      service_image: "https://i.ibb.co/ZYW3VTp/graphic-design.jpg",
      service_description:
        "Creative logos, posters, and branding materials with Adobe tools.",
    },
    {
      id: "svc_l09qwe8",
      service_name: "Digital Marketing",
      service_image: "https://i.ibb.co/YQf4Grs/digital-marketing.jpg",
      service_description:
        "SEO, SEM, and social media campaigns to grow your brand online.",
    },
    {
      id: "svc_8fk39df",
      service_name: "Content Writing",
      service_image: "https://i.ibb.co/nr0ddW8/content-writing.jpg",
      service_description:
        "Engaging articles, blogs, and website content tailored to your audience.",
    },
    {
      id: "svc_2kdlqp0",
      service_name: "Mobile App Development",
      service_image: "https://i.ibb.co/zr3w8Fv/mobile-app.jpg",
      service_description:
        "iOS and Android app development with seamless UI/UX.",
    },
    {
      id: "svc_x91kdop",
      service_name: "UI/UX Design",
      service_image: "https://i.ibb.co/t3TKxz9/ui-ux.jpg",
      service_description:
        "User-friendly interface design focused on user experience and accessibility.",
    },
    {
      id: "svc_m83kdy7",
      service_name: "Video Editing",
      service_image: "https://i.ibb.co/TKhK7qf/video-editing.jpg",
      service_description:
        "Professional video cuts, transitions, and effects for marketing or personal use.",
    },
    {
      id: "svc_49dlzz8",
      service_name: "Translation Service",
      service_image: "https://i.ibb.co/vkYc9Pb/translation.jpg",
      service_description:
        "Accurate translation between English, Bangla, Arabic, and more.",
    },
    {
      id: "svc_vdj2309",
      service_name: "Photography",
      service_image: "https://i.ibb.co/gW2LJFL/photography.jpg",
      service_description:
        "Event and product photography with editing and retouching.",
    },
    {
      id: "svc_nd01lsk",
      service_name: "Virtual Assistant",
      service_image: "https://i.ibb.co/mcYP7BG/virtual-assistant.jpg",
      service_description:
        "Remote support for email handling, scheduling, data entry, and more.",
    },
  ];
  const id = params?.id;
  const singleData = data?.find((item) => item.id == id);
  return (
    <div>
      <h1>Service Detail page</h1>
      <p>ID: {id}</p>
      <p>{singleData.service_name}</p>
      <img src={singleData.service_image} alt="" />
    </div>
  );
};

export default ServiceDetaipage;
