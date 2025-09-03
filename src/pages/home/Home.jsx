import React from "react";
import BlogCard from "../../components/module/BlogCard"
import Contact from "../contact/Contact"
import blogData from '../../data/blogData.json'
import Button from "../../components/module/Button"
import { useNavigate } from 'react-router-dom';
import PageSectionLayout from "../../components/pageSection/PageSectionLayout";
import logo from '../../assets/images/rr_logo.png'
import AccordionItem from "../../components/accordionItem/AccordionItem";
import accordionData from '../../data/accordionItem.json'
import TestimonialCardLayout from "../../components/pageSection/TestimonialCardLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import service1 from '../../assets/images/servicesImg/Entertainment_and_Artist Management1.jpg'
import service2 from '../../assets/images/servicesImg/Venueselectionbooking1.jpg'
import service3 from '../../assets/images/servicesImg/Designdecor2.jpg'
import service4 from '../../assets/images/servicesImg/Designdecor1.jpg'
import service5 from '../../assets/images/servicesImg/Guest_Management3.jpg'
import service6 from '../../assets/images/servicesImg/Vendor&Supplier3.jpg'
import service7 from '../../assets/images/servicesImg/Entertainment_and_Artist Management3.jpg'
import service8 from '../../assets/images/servicesImg/Gifting2.jpg'
import service9 from '../../assets/images/servicesImg/Vendor&Supplier2.jpg'
import service10 from '../../assets/images/servicesImg/Guest_Management1.jpg'

// Vite's import.meta.glob automatically imports all files from folder
const images = import.meta.glob("../../assets/images/gallery/*.{png,jpg,jpeg,gif}", { eager: true });

const Home = () => {
  const navigate = useNavigate();
  const visibleBlogs = blogData.slice(0, 2);

  // Convert object into array of image paths
  const imageList = Object.values(images);

  const testimonials = [
    {
      name: 'Alice Johnson',
      title: 'CEO, TechCorp',
      message: 'This service transformed our business. Incredible support and fast delivery!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Bob Smith',
      title: 'Founder, StartupX',
      message: 'Highly professional team. Couldn’t ask for better collaboration!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Carla Gomez',
      title: 'CTO, InnovateNow',
      message: 'Their solutions are reliable and scalable. We saw immediate results.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'Alice Johnson',
      title: 'CEO, TechCorp',
      message: 'This service transformed our business. Incredible support and fast delivery!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Bob Smith',
      title: 'Founder, StartupX',
      message: 'Highly professional team. Couldn’t ask for better collaboration!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];

  // Helper to chunk array
  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  const slides = chunkArray(testimonials, 3); // 3 testimonials per slide

  return (
    <div className="">
      {/* About */}
      <PageSectionLayout id='about' bgClass="bg-gray-50" title="About" subTitle="RR Global Event">
        <div className="flex flex-col md:flex-row justify-between gap-8 py-8">

          {/* Left Content */}
          <div className="md:w-3/5 text-left space-y-4 px-2">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              RR Global Events — <span className="text-orange-500">Where Elegance Meets Excellence</span>
            </h2>

            <p className="sm:text-lg sm:leading-relaxed">
              At <span className="font-semibold text-orange-600">RR Global Events</span>, our logo isn’t just a symbol — it's a statement.
              The twin <strong className="text-orange-500">“R”s</strong> represent more than just our name; they embody the heart of our values:
            </p>

            {/* Highlights */}
            <div className="flex flex-col md:flex-row gap-6 text-base md:text-lg">
              <div className="flex items-start space-x-2">
                <span className="text-orange-500 text-xl">🔹</span>
                <p><span className="font-semibold">Refinement</span> in execution</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-orange-500 text-xl">🔹</span>
                <p><span className="font-semibold">Reliability</span> in service</p>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Our branding reflects a presence that is <strong>timeless, bold, and sophisticated</strong>.
              Whether it’s a <span className="text-orange-500 font-medium">high-profile corporate summit</span>,
              a <span className="text-orange-500 font-medium">luxurious wedding</span>, or a <span className="text-orange-500 font-medium">global MICE experience</span>,
              we deliver with:
            </p>

            <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
              <li><strong>🎯 Precision</strong></li>
              <li><strong>🧩 Personalization</strong></li>
              <li><strong>🌐 Global standards</strong></li>
            </ul>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The elegant serif of our initials reflects our <strong>artistic sensibility</strong> and <strong>attention to detail</strong>,
              while the modern font of <span className="font-semibold tracking-wide">“GLOBAL EVENTS”</span> captures our
              <strong> forward-thinking approach</strong> and <strong> international reach</strong>.
            </p>

            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Whether you're planning an <span className="text-orange-500">intimate celebration</span> or a
              <span className="text-orange-500"> grand destination event</span>, we don’t just execute — we <span className="italic">elevate</span>.
            </p>

            <h3 className="text-center sm:text-2xl font-bold text-orange-600">
              Welcome to RR Global Events — <br className="hidden md:block" />
              Where Every Event is a <span className="underline underline-offset-4">Signature Experience</span>
            </h3>
          </div>

          {/* Right Logo Image */}
          <div className="md:w-2/5 flex justify-center">
            <div className="py-4 text-center space-y-4">
              <img className="w-full mx-auto max-w-xs" src={logo} alt="RR Global Events Logo" />
            </div>
          </div>

        </div>
      </PageSectionLayout>
      {/* Our Services */}
      <PageSectionLayout id='our_services' bgClass="bg-white" title="Our Services" subTitle="Our Unique Services to Event Planning">
        <div className="space-y-2.5">
          <p className="w-full sm:w-3/4 mx-auto">We feel honoured to present you with premier event management skills where you can shape your special occasions according to your style, reflecting your uniqueness. We are here to help you transform your thoughts into something remarkable. We plan to achieve this through</p>

          <div className="flex gap-y-4 justify-evenly flex-wrap sm:p-2">
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service1} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Event Planning & Conceptualization</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Understanding client requirements
                  • Creating themes & concepts
                  • Preparing proposals & presentations
                  • Cost estimation & allocation
                  • Vendor negotiations
                  • Expense tracking & reporting
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service2} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Venue Selection & Booking</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Finding suitable locations
                  • Negotiating with venues
                  • Managing site visits & approvals
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service3} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Design & Décor</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Stage design
                  • Thematic décor & branding
                  • Lighting, sound, and ambience setup

                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service4} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Vendor & Supplier Management</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Catering
                  • Photography & videography
                  • Florists, fabricators, and rental services
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service5} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Entertainment & Artist Management</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Celebrity appearances
                  • Live bands, DJs, performers
                  • Cultural/traditional shows
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service6} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Guest Management</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Invitations & RSVP handling
                  • Registration & check-in counters
                  • Hosting, anchors, ushers
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service7} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Food & Beverages (Catering)</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Menu planning
                  • Buffet or sit-down meals
                  • Special dietary requirements
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service8} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Gifting</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Single or combo
                  • Customized with logo and name
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service9} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">On-Site Management</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Event flow coordination
                  • Troubleshooting & crisis handling
                  • Ensuring smooth execution
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full aspect-[4/3] sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover group-hover:blur-sm" src={service10} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Post-Event Services</p>
                <p className="p-1.5 overflow-auto text-sm">
                  • Feedback collection
                  • Payments & settlements
                  • Post-event reporting
                  • Thank-you notes & follow-ups
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSectionLayout >

      {/* Our Approach */}
      {/*<PageSectionLayout id='our_approach' bgClass="bg-white" title="Our Approach" subTitle="Our Unique Approach to Event Planning">
        <div className="space-y-2.5">
          <p className="w-full sm:w-3/4 mx-auto">We feel honoured to present you with premier event management skills where you can shape your special occasions according to your style, reflecting your uniqueness. We are here to help you transform your thoughts into something remarkable. We plan to achieve this through</p>

          <div className="flex gap-y-4 justify-between flex-wrap sm:p-2">
            <div className="border border-orange-200 shadow-xl relative w-full sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover" src={logo} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Detailed Planning</p>
                <p className="p-1.5 overflow-auto text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi inventore tempore dolorem numquam nesciunt dolores, totam quis dignissimos itaque architecto iusto voluptates illum necessitatibus et officiis consequuntur odio adipisci. Cumque, iste ad doloribus amet facere eaque exercitationem aperiam ipsa velit voluptatum numquam saepe, tenetur alias? Corrupti voluptatibus quae at dicta unde? Temporibus molestiae sunt, delectus pariatur deserunt eaque aliquid similique modi. Repellat fuga reiciendis saepe iure magni! Totam rem quod consectetur natus consequatur nam vero obcaecati, velit veniam pariatur eaque suscipit aliquam ipsum, accusantium architecto deleniti molestiae repudiandae iure sit aut laboriosam eius nobis saepe! Praesentium, culpa modi non, accusantium totam porro atque illo placeat, quam est tempore incidunt cum voluptatibus. Error libero obcaecati sequi officia ratione tempore placeat tempora quisquam commodi ad fugit, cupiditate nulla deleniti possimus sit cum eos, unde a at eum dignissimos consequuntur? Dolores impedit ipsa, optio hic veritatis enim tempora laudantium nostrum eaque officia perspiciatis commodi facere ad, perferendis temporibus nemo deleniti corrupti quia rerum, nesciunt harum ipsum! Minima tempore ea nam aperiam inventore molestiae iusto reprehenderit sunt quo asperiores est, dicta modi ducimus veritatis tenetur placeat eum aut incidunt et eos. Nemo soluta similique enim omnis, expedita consequuntur maiores necessitatibus quibusdam iusto itaque repudiandae architecto quos numquam consectetur reprehenderit sit reiciendis qui porro sunt fuga corporis iste excepturi accusantium provident. Consectetur nihil recusandae architecto, quos sapiente porro eos eveniet tempora fugiat voluptatem dignissimos saepe nisi non, perferendis odio! Dolores, quasi? Dolorem placeat delectus, dicta obcaecati sapiente neque enim, rerum libero quisquam fugiat voluptatem.                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover" src={logo} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Creative Event Design</p>
                <p className="p-1.5 overflow-auto text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi inventore tempore dolorem numquam nesciunt dolores, totam quis dignissimos itaque architecto iusto voluptates illum necessitatibus et officiis consequuntur odio adipisci. Cumque, iste ad doloribus amet facere eaque exercitationem aperiam ipsa velit voluptatum numquam saepe, tenetur alias? Corrupti voluptatibus quae at dicta unde? Temporibus molestiae sunt, delectus pariatur deserunt eaque aliquid similique modi. Repellat fuga reiciendis saepe iure magni! Totam rem quod consectetur natus consequatur nam vero obcaecati, velit veniam pariatur eaque suscipit aliquam ipsum, accusantium architecto deleniti molestiae repudiandae iure sit aut laboriosam eius nobis saepe! Praesentium, culpa modi non, accusantium totam porro atque illo placeat, quam est tempore incidunt cum voluptatibus. Error libero obcaecati sequi officia ratione tempore placeat tempora quisquam commodi ad fugit, cupiditate nulla deleniti possimus sit cum eos, unde a at eum dignissimos consequuntur? Dolores impedit ipsa, optio hic veritatis enim tempora laudantium nostrum eaque officia perspiciatis commodi facere ad, perferendis temporibus nemo deleniti corrupti quia rerum, nesciunt harum ipsum! Minima tempore ea nam aperiam inventore molestiae iusto reprehenderit sunt quo asperiores est, dicta modi ducimus veritatis tenetur placeat eum aut incidunt et eos. Nemo soluta similique enim omnis, expedita consequuntur maiores necessitatibus quibusdam iusto itaque repudiandae architecto quos numquam consectetur reprehenderit sit reiciendis qui porro sunt fuga corporis iste excepturi accusantium provident. Consectetur nihil recusandae architecto, quos sapiente porro eos eveniet tempora fugiat voluptatem dignissimos saepe nisi non, perferendis odio! Dolores, quasi? Dolorem placeat delectus, dicta obcaecati sapiente neque enim, rerum libero quisquam fugiat voluptatem.                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover" src={logo} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Stress-Free Execution</p>
                <p className="p-1.5 overflow-auto text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit at necessitatibus et reiciendis, temporibus animi voluptates dignissimos quis qui libero. Doloremque in nihil minima consequuntur quae necessitatibus alias cum rerum magni odit. Soluta ullam, in voluptates iste iusto, quibusdam repellendus non vitae nostrum dolorum magnam repudiandae fugit rerum magni.
                </p>
              </div>
            </div>
            <div className="border border-orange-200 shadow-xl relative w-full sm:w-[31%] rounded overflow-hidden group">
              <img className="w-full h-full object-cover" src={logo} alt="logo" />
              <div className="py-2.5 px-2 absolute h-full overflow-y-auto bottom-0 left-0 w-full bg-orange-500/80 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <p className="sm:text-3xl font-semibold ">Detailed Planning</p>
                <p className="p-1.5 overflow-auto text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi inventore tempore dolorem numquam nesciunt dolores, totam quis dignissimos itaque architecto iusto voluptates illum necessitatibus et officiis consequuntur odio adipisci. Cumque, iste ad doloribus amet facere eaque exercitationem aperiam ipsa velit voluptatum numquam saepe, tenetur alias? Corrupti voluptatibus quae at dicta unde? Temporibus molestiae sunt, delectus pariatur deserunt eaque aliquid similique modi. Repellat fuga reiciendis saepe iure magni! Totam rem quod consectetur natus consequatur nam vero obcaecati, velit veniam pariatur eaque suscipit aliquam ipsum, accusantium architecto deleniti molestiae repudiandae iure sit aut laboriosam eius nobis saepe! Praesentium, culpa modi non, accusantium totam porro atque illo placeat, quam est tempore incidunt cum voluptatibus. Error libero obcaecati sequi officia ratione tempore placeat tempora quisquam commodi ad fugit, cupiditate nulla deleniti possimus sit cum eos, unde a at eum dignissimos consequuntur? Dolores impedit ipsa, optio hic veritatis enim tempora laudantium nostrum eaque officia perspiciatis commodi facere ad, perferendis temporibus nemo deleniti corrupti quia rerum, nesciunt harum ipsum! Minima tempore ea nam aperiam inventore molestiae iusto reprehenderit sunt quo asperiores est, dicta modi ducimus veritatis tenetur placeat eum aut incidunt et eos. Nemo soluta similique enim omnis, expedita consequuntur maiores necessitatibus quibusdam iusto itaque repudiandae architecto quos numquam consectetur reprehenderit sit reiciendis qui porro sunt fuga corporis iste excepturi accusantium provident. Consectetur nihil recusandae architecto, quos sapiente porro eos eveniet tempora fugiat voluptatem dignissimos saepe nisi non, perferendis odio! Dolores, quasi? Dolorem placeat delectus, dicta obcaecati sapiente neque enim, rerum libero quisquam fugiat voluptatem.                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSectionLayout>*/}

      {/* Clients */}
      {/* <PageSectionLayout id='clients' bgClass="bg-gray-50" title="Clients" subTitle="Our Valuable Clients">

      </PageSectionLayout> */}

      {/* Gallery */}
      <PageSectionLayout id='gallery' bgClass="" title="Gallery" subTitle="Our work">
        <div className="flex justify-evenly flex-wrap gap-2">
          {imageList.map((img, index) => (
            <div
              key={index}
              className="w-full rounded xs:w-[48%] md:w-[32%] lg:w-[24%] border border-orange-100 overflow-hidden aspect-[4/3]"
            >
              <img
                className="w-full h-full scale-125 object-cover transform transition-transform duration-500 hover:scale-100"
                src={img.default}
                alt={`Gallery ${index}`}
              />
            </div>
          ))}
        </div>

      </PageSectionLayout>

      {/* Our Blog */}
      {/* <PageSectionLayout id='blog' bgClass="bg-gray-100" title="blog" subTitle="Our Blog">
        <div className="text-center">
          <div className="gap-6 flex flex-wrap justify-start my-4">
            {visibleBlogs?.map((blog, index) => (
              <BlogCard
                key={index}
                route={blog.route}
                title={blog.title}
                date={blog.date}
                image={blog.image}
              />
            ))}
          </div>
          <Button name={'View More'} onClick={() => { navigate('/blog') }} />
        </div>
      </PageSectionLayout> */}

      {/* Testimonials */}
      <PageSectionLayout id='testimonials' bgClass="bg-white" title="What they say" subTitle="Our Testimonials">
        <div className="max-w-6xl mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            stopOnHover={false}
            showIndicators={false}
            interval={3000}
            transitionTime={600}
          >
            {slides.map((group, index) => (
              <div key={index}>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-3">
                  {group.map((testimonial, i) => (
                    <TestimonialCardLayout key={i} {...testimonial} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </PageSectionLayout>

      {/* FAQs */}
      <PageSectionLayout id='faqs' bgClass="bg-gray-50" title="FAQs" subTitle="FAQs About event planners in delhi ncr">
        <div className="border border-orange-200 w-full sm:w-[85%] mx-auto">
          {accordionData.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>
      </PageSectionLayout>

      {/* <div className="bg-white text-center p-4 sm:p-12">
        <p className="text-orange-400 my-6">Our Blog</p>
        <div className="gap-6 flex flex-wrap justify-start my-4">
          {visibleBlogs?.map((blog, index) => (
            <BlogCard
              key={index}
              route={blog.route}
              title={blog.title}
              date={blog.date}
              image={blog.image}
            />
          ))}
        </div>
        <Button name={'View More'} onClick={() => { navigate('/blog') }} />
      </div> */}
      {/* Contact */}
      <PageSectionLayout id='contact' bgClass="bg-white" title="Contact" subTitle="">
        <Contact />
      </PageSectionLayout>

    </div>
  )
}

export default Home
