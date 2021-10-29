import React from 'react';
import blog2 from '../../../images/why/why1.png';
import blog3 from '../../../images/why/why2.png';
import blog5 from '../../../images/why/why3.png';
import blog6 from '../../../images/why/why4.png';
import blog1 from '../../../images/why/why5.png';
import blog4 from '../../../images/why/why6.png';
import Blog from '../Blog/Blog';

const blogs = [
  {
    id: 1,
    img: blog1,
    name: 'Fastest Service',
    description:
      'Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.',
  },
  {
    id: 2,
    img: blog2,
    name: 'One Stop Solution',
    description:
      'We understand how to make logistics work for our merchant partners. Our job is to let our partners focus on their core business while we take care',
  },
  {
    id: 3,
    img: blog3,
    name: 'Wide Coverage',
    description:
      'We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises all over the country as well.',
  },
  {
    id: 4,
    img: blog4,
    name: 'Delivery confirmation with OTP',
    description:
      'Two factor authentications - OTP verification is implemented at the time of delivery to ensure an additional layer of security to the delivered package.',
  },
  {
    id: 5,
    img: blog5,
    name: 'Full Tracking',
    description:
      'Merchants have full access of tracking every step of the delivery. We provide end to end real time tracking facilities through email, sms and QR code.',
  },
  {
    id: 6,
    img: blog6,
    name: 'Cash on Delivery (COD)',
    description:
      'We collect cash from your customer and transfer it to you on time through a formal banking channel, and of course with all the detailed supporting information.',
  },
];

const Blogs = () => {
  return (
    <div id="doctors" className="container">
      <h2 className="text-primary mt-5">Why Aladin</h2>
      <div className="row">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
