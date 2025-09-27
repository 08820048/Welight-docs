import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import LottieAnimation from '@site/src/components/LottieAnimation';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  lottieSource: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '简单易用',
    lottieSource: '/lottie/2.lottie',
    description: (
      <>
        Welight 专为公众号文章排版而设计，界面简洁直观，
        让您能够快速上手并创建美观的文章排版。
      </>
    ),
  },
  {
    title: '专注内容',
    lottieSource: '/lottie/3.lottie',
    description: (
      <>
        专注于您的文章内容创作，Welight 提供丰富的排版样式和主题，
        让您的文章在公众号中脱颖而出。
      </>
    ),
  },
  {
    title: '功能丰富',
    lottieSource: '/lottie/Development.lottie',
    description: (
      <>
        支持多种排版主题、AI 服务集成、云端存储同步等功能，
        为您的内容创作提供全方位的支持。
      </>
    ),
  },
];

function Feature({title, lottieSource, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <LottieAnimation 
          src={lottieSource} 
          className={styles.featureSvg} 
          width={200} 
          height={200} 
        />
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
