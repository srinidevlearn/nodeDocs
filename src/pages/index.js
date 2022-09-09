import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const imgStyle = {
    height:'200px',width:'500px'
  };
  const textStyle = {
    textTransform:'capitalize'
  };
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <div className={styles.buttons}>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399__480.png" style={imgStyle}></img>
        </div>
        <p className="hero__subtitle" style={textStyle}>{siteConfig.tagline.toLowerCase().replace('node js','')}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
