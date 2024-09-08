import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [];

function Feature({ Svg, title, description }) {
  return <div></div>;
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <img src="/note/img/my-photo.png" className={styles.photo}/>
        <div></div>
        <div className={styles.intro}>
          <p>Andy 曾翊洋 | Frontend engineer</p>
          {/* <a>2024/4 - 2024/9 擔任前端工程師 於數字科技</a> */}
          {/* <a>2022/9 - 2024/4 擔任前端工程師 於磊山保險經紀公司</a> */}
          <p>目前專注在網站開發(Javascript, Vue, React)，樂於研究新技術，重視使用者體驗，平常喜歡重訓、打球、聽 Podcast。</p>
          <p>這個網站的誕生是源自個人想法：若我沒辦法將一個知識內化出自己的觀點就還沒有真的理解，因為我不能用自己的話去解釋它，所以透過寫文章的方式梳理自己的脈絡，若有幸幫助任何人是我最大的期待，如果有任何問題歡迎與我聯絡。</p>
          <p></p>
        </div>
      </div>
    </section>
  );
}
