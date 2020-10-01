/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

import Arrow from "~components/svg/Arrow";
import Layout from "~components/Layout";

import SEO from "~components/SEO";

const IndexPage = ({ data, location }) => {
  const {
    seoDescription,
    seoKeywords,
    title
  } = data.markdownRemark.frontmatter;
  const cocktails = data.allMarkdownRemark.edges;

  return (
    <>
      <SEO
        customTitle={title}
        customDescription={seoDescription}
        customKeywords={seoKeywords}
        path={location.pathname}
      />

      <Layout className="index-page grid w-full relative py-16 xs:py-12">
        <section className="index-page__menu relative border-black border-2 p-8 sm:p-4 shadow-xl grid-end-6 md:grid-end-8 xs:grid-end-12 grid-start-4 md:grid-start-3 xs:grid-start-1">
          <h1 className="f2 uppercase my-8 xs:mt-4 w-full text-left animation-appear animation-delay-1 ">
            Menu - 02.10.20
          </h1>
          <ul>
            {cocktails.map((cocktail, index) => {
              const { slug } = cocktail.node.fields;
              const { title: cocktailTitle } = cocktail.node.frontmatter;
              return (
                <li
                  className="index-page__menu--item flex items-center sm:mx-0 animation-appear border-b-black"
                  key={slug}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <Link
                    className="flex items-center py-8 xs:py-4 w-full"
                    to={slug}
                  >
                    <span className="f5 mx-4">~</span>
                    <div className="f4 capitalize flex justify-between w-full items-center mr-8">
                      {` `}
                      {cocktailTitle}
                      <Arrow className="absolute right-0 mr-4 index-page__arrow" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($id: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "cocktail-page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        description
        title
        seoDescription
        seoKeywords
      }
    }
  }
`;
