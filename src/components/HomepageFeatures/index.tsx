import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '11DGT',
    image: '/img/undraw_robot_taxi-removebg-preview.png',
    description: (
      <>
        Year 11 Digital Technologies — programming fundamentals, game development,
        and the development process.
      </>
    ),
    link: '/docs/11DGT/',
  },
  {
    title: '12DGT',
    image: '/img/undraw_robot_farm-removebg-preview.png',
    description: (
      <>
        Year 12 Digital Technologies — advanced programming, web design,
        and full-stack development.
      </>
    ),
    link: '/docs/12DGT/',
  },
  {
    title: '13DGT',
    image: '/img/undraw_robot_drone-removebg-preview.png',
    description: (
      <>
        Year 13 Digital Technologies — UX design, user research,
        and professional web development.
      </>
    ),
    link: '/docs/13DGT/',
  },
];

function Feature({title, image, description, link}: FeatureItem) {
  const img = (
    <img src={image} alt={title} className={styles.featureSvg} />
  );
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureImageWrapper)}>
        {link ? <Link to={link}>{img}</Link> : img}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
