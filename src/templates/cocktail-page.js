/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

import { getRandomColour } from "~utils/helpers";

import Header from "~components/Header";
import Layout from "~components/Layout";
import SEO from "~components/SEO";

const CocktailPage = ({ data, location }) => {
  const {
    ingredients,
    makes,
    methods,
    seoDescription,
    seoKeywords,
    title
  } = data.markdownRemark.frontmatter;

  return (
    <>
      <SEO
        customTitle={title}
        customDescription={seoDescription}
        customKeywords={seoKeywords}
        path={location.pathname}
      />
      <Header />

      <Layout className="cocktail-page w-full grid relative py-16 xs:py-12">
        <section className="cocktail-page__menu relative border-black border-2 p-8 sm:p-4 shadow-xl grid-end-6 md:grid-end-8 xs:grid-end-12 grid-start-4 md:grid-start-3 xs:grid-start-1">
          <h1 className="f2 uppercase my-8 xs:my-4 w-full text-left animation-appear animation-delay-1">
            {title}
          </h1>
          <p className="animation-appear animation-delay-2 b1 italic mb-4">
            Makes: {makes}
          </p>
          <div className="animation-appear animation-delay-3">
            <h2 className="f5">Ingredients:</h2>
            <ul className="m-4 list-disc">
              {ingredients.map((ingredient, index) => {
                const key = `${index}-${ingredient}`;
                return (
                  <li className="my-2 b1" key={key}>
                    {ingredient.ingredient}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="animation-appear animation-delay-4">
            <h2 className="f5">Method:</h2>
            <ol className="list-decimal m-4">
              {methods.map((method, index) => {
                const key = `${index}-${method}`;
                return (
                  <li className="my-2 b1" key={key}>
                    {method.method}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CocktailPage;

export const query = graphql`
  query CocktailPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        makes
        ingredients {
          ingredient
        }
        methods {
          method
        }
        seoDescription
        seoKeywords
      }
    }
  }
`;
