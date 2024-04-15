import React from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/footer';

const DMCA = () => {
  return (
    <div className="dmca-container">
      <Head>
        <title>DMCA Notice - Sabizone</title>
        <meta name="description" content="DMCA Notice for Sabizone Movie Website" />
      </Head>
      <NavBar/>
      <h1>DMCA Notice for Sabizone</h1>

      <p>Sabizone respects the intellectual property rights of others. If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement on our website, please notify us by providing our copyright agent with a written notice containing the following information:</p>
      <ul>
        <li>
          An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;
        </li>
        <li>A description of the copyrighted work that you claim has been infringed, including, where applicable, a title and/or a copy of the copyrighted work;</li>
        <li>
          A description of where the material that you claim is infringing is located on our site, including a URL or a specific description of its location;
        </li>
        <li>Your address, telephone number, and email address;</li>
        <li>
          A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and
        </li>
        <li>
          A statement by you, made under penalty of perjury, that the information in the notification is accurate and that you are the copyright owner or authorized to act on the copyright owners behalf.
        </li>
      </ul>
      <p>Our copyright agent for notice of claims of copyright infringement on our site is: DMCA Agent, Sabizone Movies.</p>
      <p>You can contact our copyright agent via email at dmca@sabizone.com.</p>
      <p>
        Please be aware that upon receipt of a proper DMCA notification, we will promptly remove or disable access to the material that is alleged to be infringing and will initiate a process to try to resolve the issue with the party who provided the allegedly infringing material.
      </p>
      <p>Thank you for your cooperation.</p>
    <Footer/>

    </div>
  );
};

export default DMCA;
