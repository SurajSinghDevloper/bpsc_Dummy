import React from 'react';
import Layout from './LandingPages/Layout';

const ContactUs = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold p-2">Contact BPSC</h2>
        <div className="w-full max-w-6xl px-4 py-8">
          
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
              <iframe
                title="BPSC Map"
                src="https://maps.google.com/maps?width=100%&amp;height=300&amp;hl=en&amp;q=Bihar%20Public%20Service%20Commission%20Patna&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                className="rounded-md"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <p className="mb-4">
                For any query regarding filling out the online application form, please call us at:
              </p>
              <div>
                <h3 className="text-xl font-semibold">Bihar Public Service Commission</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:9297739013">9297739013</a>
                </p>
                <p className="text-gray-600">
                  15, Nehru Path (Bailey Road), <br />
                  Patna – 800 001 (BIHAR)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
