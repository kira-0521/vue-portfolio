<template>
  <div id="content">
    <section class="home">

      <div class="home__title side">
        <img src="../assets/images/code.png" alt="">
        <h2>Frontend Engineer</h2>
      </div>

      <div class="home__contents">
        <div class="name side">
          <h3>田中 輝良</h3>
          <img src="#" alt="">
        </div>

        <div class="social">
          <ul class="social__inner">
            <li
              class="social__item"
              v-for="social in socials"
              :key="social">
                <img :src="social.img" alt="">
                <a :href="social.url">{{ social.name }}</a>
            </li>
          </ul>
        </div>

        <div class="home__allow" @click="change">
          <img src="../assets/images/down_allow.svg" alt="" class="downArrow">
          <span class="appearText">もっと詳しく</span>
        </div>

        <div class="home__detail" v-if="appear">
          <h2>ABOUT</h2>
          <ul>
            <li v-for="list in lists" :key="list">
              {{ list }}
            </li>
          </ul>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      appear: false,
      lists: ['24 / 男性 / 長崎県', '好きなもの: 米津玄師、マコなり社長、お酒'],
      socials: [
        {
          img: '../assets/images/github.png',
          url: 'https://github.com/kira-0521?tab=repositories',
          name: 'Github'
        },
        {
          img: '../assets/images/qiita.png',
          url: 'https://qiita.com/kira-0521',
          name: 'Qiita'
        },
        {
          img: '../assets/images/twitter.png',
          url: 'https://twitter.com/progLog88',
          name: 'Twitter'
        }
      ]
    }
  },
  methods: {
    change () {
      this.appear = !this.appear
    }
  }

}
</script>

<style lang="scss" scoped>
#content{
  margin: 0 auto;
  text-align: center;
  height: 100%;
}
.home{
  padding: 72px 0;

  & .side{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    padding-top: 32px;
    margin: 0 auto 16px;

    & > img {
      width: 50px;
      height: 40px;
      padding-right: 4px;
    }
    & > h2 {
      font-size: 38px;
      padding-left: 4px;
    }
  }

  &__contents{
    margin: 16px auto;

    & .name {
      margin-bottom: 12px;
      & > img {
        width: 60px;
        height: 60px;
      }
      & > h3 {
        font-size: 32px;
      }
    }

    & > p {
      font-size: 24px;
    }

    & .social {
      &__inner {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__item {
        &:hover {
          cursor: pointer;
        }
        & > img {
          width: 15px;
          height: 15px;
        }

        & > a {
          color: #fb6b3a;
          text-decoration: none !important;
        }
      }
    }
  }

  &__allow {
    cursor: pointer;
    display: inline-block;
  }
}
</style>
