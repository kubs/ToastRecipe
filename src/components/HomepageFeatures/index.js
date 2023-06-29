import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '湯種',
    Svg: require('@site/static/img/a.svg').default,
    description: (
      <>
      <ul>
       <li>鮮奶        70克</li>
       <li>奶油        30克</li>
       <li> 糖          3克</li>
      <li>鹽            1/8茶匙</li>
       <li>高筋麵粉  70克</li>
     
       </ul>
       煮開後離火加入高筋麵粉攪拌至均勻成團，密封室溫放涼後冷藏16小時。

      </>
    ),
  },
  {
    title: '中種 ',
    Svg: require('@site/static/img/b.svg').default,
    description: (
      <>
        <ul>
          <li>高筋麵粉    700克</li>
          <li>速溶酵母        2克</li>
          <li> 鮮奶           430克 </li>
          <li>細砂糖          20克</li>
        </ul>
        先用30克鮮奶（配方內的鮮奶浸泡活化）將速溶酵母浸泡活化。將A湯種撕成小塊加入，再一同攪拌至捲起階段即材料均勻不粘缸狀態（攪拌好麵溫爲27°C-28°C）。28°C室溫發酵60分鐘後密封冷藏發酵48小時（最好是用膠袋紮緊麪糰不留空隙）
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/c.svg').default,
    description: (
      <>
      <ul>
        <li>高筋麵粉   300克</li>
        <li>鹽                12克</li>
        <li> 糖              100克（可以根據個人情況調整） </li>
        <li>速溶酵母       5克</li>
        <li>鮮奶           100克+10克</li>
        <li> 蛋               140克 </li>
        <li>奶油            100克</li>
      </ul>
      
    </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/d.svg').default,
    description: (
      <>
      <ol>
        <li>先將中種麵糰取出撕成小塊放入攪拌缸中，與C料攪拌至有彈性，在加入奶油，打至完成階段即可（拉起成薄膜狀）；</li>
        <li>延續發酵 15 - 20分鐘； </li>
        <li> 分割麵糰200克 x 10個分別滾圓； </li>
        <li>中間發酵10-15分鐘</li>
        <li>擀捲兩次入烤模（24兩模各裝5個）</li>
        <li> 最後發酵7.5 - 8 分滿（不能超過） </li>
        <li>入爐烤，烤溫不帶蓋。上火150°C/下火200°C。約烤35 - 40分鐘。</li>
      </ol>
    

    </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
