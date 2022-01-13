import { useState, useEffect } from "react";
import Head from "next/head";
import fire from "../config/fire-config";
import CreatePost from "../components/CreatePost";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogs);
      });
  }, []);
  
  return (
    <Layout home>
    
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      
      <hr />
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href="/blog/[id]" as={"/blog/" + blog.id}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <CreatePost />
      <Link href={"/mainSections/Resources"} passHref>
        <h3>Legal Help</h3>
        
      </Link>
      <Link href={"/mainSections/housingfood"} passHref>
        <h3>Housing And Food</h3>
        
      </Link>


      <Link href={"/mainSections/educationlanguage"} passHref>
        <h3>Education and Language</h3>
        
      </Link>
      
    </Layout>
  );
};
export default Home;
