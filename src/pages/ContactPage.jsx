import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Heading: "Contact" white, "Us" yellow */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span style={{ color: '#fff' }}>Contact </span>
              <span style={{ color: '#FFD700' }}>Us</span>
            </h1>
            <p className="text-xl">
              Get in touch with our team for any questions or assistance you need.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have a question about our loan products, need assistance with your application, or want to explore partnership opportunities, our team is here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Our Office</h3>
                    <p className="text-gray-600">
                      123, Hously Finserv Tower, MG Road, Pune, Maharashtra - 411001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +91 9876 543 210 <br />
                      +91 020 1234 5678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      info@houslyfinserv.com <br />
                      support@houslyfinserv.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday to Friday: 9:00 AM to 6:00 PM <br />
                      Saturday: 10:00 AM to 4:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {/* Social Icons (same as before) */}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <input type="text" placeholder="Your Name" className="px-4 py-3 border rounded-lg" />
                  <input type="email" placeholder="Your Email" className="px-4 py-3 border rounded-lg" />
                  <textarea placeholder="Your Message" className="px-4 py-3 border rounded-lg" rows="6"></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
