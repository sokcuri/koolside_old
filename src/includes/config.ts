import dotProp from 'dot-prop'

export const set = {} as ConfigSet

// 게시판 관련 설정
set.live = {
  name: '실시간 게시판',
  set: {
    enabled: {
      name: '활성화',
      description: '실시간 게시판 기능을 활성화합니다',
      default: true
    },
    interval: {
      name: '새로고침 간격 (초)',
      description: '게시판을 새로 고칠 간격입니다, 간격이 짧다면 차단될 수 있습니다',
      default: 1,
      min: 0.5,
      max: 30
    },
    thread: {
      name: '미리보기 스레드',
      description: '미리보기 내용을 요청하는 스레드입니다, 너무 높게 설정하면 메모리 사용량이 증가할 수 있습니다',
      default: 3,
      min: 1,
      max: 10
    },
    retries: {
      name: '미리보기 재시도 횟수',
      description: '미리보기 내용을 불러올 때 시도 횟수를 선택합니다, 너무 높게 설정하면 메모리 사용량이 증가할 수 있습니다',
      default: 3,
      min: 1,
      max: 10
    },
    limit_cache: {
      name: '미리보기 캐시 수',
      description: '미리보기 내용 몇 개까지 캐시할 지 선택합니다, 너무 높게 설정하면 메모리 사용량이 증가할 수 있습니다',
      default: 1000,
      min: 1000,
      max: 100000
    },
    limit_items: {
      name: '최대 게시글 수',
      description: '한 페이지에 게시글을 몇 개까지 보일지 선택합니다, 너무 높게 설정하면 메모리 사용량이 증가할 수 있습니다',
      default: 50,
      min: 1,
      max: 1000
    }
  }
}

set.preview = {
  name: '미리보기',
  set: {
    offset: {
      name: '마우스 이격 거리',
      default: 10,
      step: 1,
      min: 10,
      max: 500
    }
  }
}

// 우 클릭 메뉴 설정
set.context = {
  name: '메뉴',
  description: '오른쪽 클릭 했을 때 출력되는 메뉴 관련 설정',
  set: {
    disable_selectors: {
      name: '비활성화 요소',
      description: '특정 요소에서 메뉴를 비활성화합니다',
      default: '',
      placeholder: 'img[src]\na[href]\n...',
      textarea: true
    },
    image_search_google: {
      name: '이미지 Google 검색',
      default: true
    },
    image_search_yandex: {
      name: '이미지 Yandex 검색',
      default: true
    },
    image_search_iqdb: {
      name: '이미지 IQDB 검색',
      default: true
    },
    image_search_saucenao: {
      name: '이미지 SauceNao 검색',
      default: true
    }
  }
}

// 요소 숨기기 설정
set.hide = {
  name: '요소',
  description: '페이지에서 숨길 요소를 선택합니다',
  set: {
    ad: {
      name: '광고',
      default: true
    },
    logo: {
      name: '웹 사이트 로고',
      default: false
    },
    gallery: {
      name: '갤러리',
      set: {
        title: {
          name: '제목',
          default: false
        },
        titlebar: {
          name: '정보',
          default: false
        },
        history: {
          name: '최근 방문 갤러리',
          default: false
        },
        notice: {
          name: '공지 게시글',
          default: true,
          onChange (value) {
            const notices = document.querySelectorAll('.icon_notice')

            for (let notice of notices) {
              const post = notice.closest('tr')

              if (value) {
                post.classList.remove('ks-none')
              } else {
                post.classList.add('ks-none')
              }
            }
          }
        }
      }
    },
    right: {
      name: '우측 사이드 바',
      set: {
        all: {
          name: '전체',
          default: false
        },
        login: {
          name: '사용자 정보',
          default: false
        },
        recommend: {
          name: '개념글',
          default: false
        },
        issuezoom: {
          name: '이슈 줌',
          default: false
        },
        news: {
          name: '뉴스',
          default: false
        },
        realtime: {
          name: '실시간 검색어',
          default: false
        },
        hit: {
          name: '힛',
          default: false
        },
        sec_recommend: {
          name: '초개념',
          default: false
        },
        wiki: {
          name: '디시위키',
          default: false
        }
      }
    }
  }
}

// 스타일시트 관련 설정
set.style = {
  name: '모양',
  set: {
    animation_speed: {
      name: '애니메이션 속도 (초)',
      description: '애니메이션 속도를 지정합니다, 값이 0 이라면 비활성화합니다',
      default: 0.25,
      min: 0,
      max: 2
    },
    font_family_sans: {
      name: '산세리프 글꼴',
      default: '"나눔스퀘어", "나눔바른고딕", "나눔고딕", "맑은 고딕", sans-serif'
    },
    font_family_serif: {
      name: '세리프 글꼴',
      default: '"나눔명조", serif'
    },
    font_family_monospace: {
      name: '고정폭 글꼴',
      default: '"D2Coding ligature", "D2Coding", "나눔고딕코딩", monospace'
    },
    font_size: {
      name: '글자 크기',
      description: '사이트 전반적인 글자의 크기입니다',
      default: '13px'
    },
    font_size_preview: {
      name: '미리보기 글자 크기',
      description: '미리보기 속 글자 크기입니다',
      default: '1.5em'
    }
  }
}

// 디버그 관련 설정
set.debug = {
  name: '디버깅',
  set: {
    less: {
      name :'Less',
      default: false
    }
  }
}

/**
 * 
 * @param set 설정 데이터
 */
function defaultValues (set: ConfigSet) {
  const result = {} as LooseObject

  for (let k in set) {
    const config = set[k]
    result[k] = 'set' in config ? defaultValues(config.set) : config.default
  }

  return result
}

class Config {
  private static storage: LooseObject = {}
  private static defaultValues = defaultValues(set)

  /**
   * 설정을 초기화합니다
   */
  static reset () {
    GM_setValue('config', this.defaultValues)

    this.storage = this.defaultValues
  }

  /**
   * 런타임으로 돌아가는 설정을 저장소와 동기화합니다
   */
  static sync () {
    GM_setValue('config', this.storage)

    const classes = []

    if (this.get('hide.ad')) classes.push('ks-hide-ad')
    if (this.get('hide.logo')) classes.push('ks-hide-logo')

    if (location.href.startsWith('https://gall.dcinside.com/')) {
      if (this.get('hide.gallery.title')) classes.push('ks-hide-title')
      if (this.get('hide.gallery.titlebar')) classes.push('ks-hide-titlebar')
      if (this.get('hide.gallery.history')) classes.push('ks-hide-history')

      if (this.get('hide.right.all')) {
        classes.push('ks-hide-right')
      } else {
        if (this.get('hide.right.login')) classes.push('ks-hide-right-login')
        if (this.get('hide.right.recommend')) classes.push('ks-hide-right-recommend')
        if (this.get('hide.right.issuezoom')) classes.push('ks-hide-right-issuezoom')
        if (this.get('hide.right.news')) classes.push('ks-hide-right-news')
        if (this.get('hide.right.realtime')) classes.push('ks-hide-right-realtime')
        if (this.get('hide.right.hit')) classes.push('ks-hide-right-hit')
        if (this.get('hide.right.sec_recommend')) classes.push('ks-hide-right-sec-recommend')
        if (this.get('hide.right.wiki')) classes.push('ks-hide-right-wiki')
      }
    }

    document.body.setAttribute('class', classes.join(' '))
  }

  /**
   * 설정의 옵션을 가져옵니다
   * @param key 키
   * @param opt 옵션명
   */
  static getOpt<T = Storable> (key: string, opt: string) {
    key = `${key.replace(/\./g, '.set.')}.${opt}`
    return dotProp.get<T>(set, key)
  }

  /**
   * 설정 값을 가져옵니다
   * @param key 키
   */
  static get<T = Storable> (key: string) {
    const value = dotProp.get<T>(this.storage, key)
    const defaultValue = dotProp.get<T>(this.defaultValues, key)

    // 값이 설정되지 않았다면 기본 값 반환하기
    if ([undefined, null].includes(value)) {
      return defaultValue
    }

    // 기본 값과 자료형이 일치하지 않는다면 기본 값으로 설정하고 반환하기
    if (typeof value !== typeof defaultValue) {
      console.warn(`Storage ${key} mismatched, set to default (${value} !== ${defaultValue})`)
      this.set(key, defaultValue)
      return defaultValue
    }

    return value
  }

  /**
   * 설정을 정의합니다
   * @param key 키
   * @param value 값
   */
  static set (key: string, value: Storable) {
    dotProp.set(this.storage, key, value)
    this.sync()
  }

  /**
   * 런타임으로 돌아가는 설정을 반환합니다
   */
  static export () {
    return this.storage
  }

  /**
   * 설정을 불러옵니다
   * @param storage 새 설정 값
   */
  static import (storage: LooseObject) {
    this.storage = storage
    this.sync()
  }
}

export default Config
