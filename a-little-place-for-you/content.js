/*
 * 这个文件专门用来放你们的故事。以后修改这里就好。
 * 用引号包起来的文字可以随意替换；多行文字可以用反引号 `...`。
 * 照片：先放进 assets/photos 文件夹，再在 image 中写路径，例如：
 * image: "assets/photos/our-trip.jpg"
 * 不填 image（留空字符串 ""）就会出现温柔的占位图。
 * 注意：发布到公开的 GitHub Pages 后，照片与文字也可以被其他人看到。
 */
window.PLACE_CONTENT = {
  welcome: {
    emoji: '🚪', title: '欢迎回家', subtitle: 'a little place to land',
    intro: '小宇宙的大门已经打开啦。\n在这里，没有任务，没有必须完成的事。',
    noteTitle: '给你的一个小小约定',
    note: '不管外面的世界有多忙，\n这里永远留一盏灯。\n\n（这段欢迎语以后也可以改成你自己的话。）'
  },
  letters: {
    emoji: '💌', title: '藏在桌上的信', subtitle: 'letters, just for you',
    intro: '有些话想认真地写下来，留给未来的某一天。',
    notes: [
      {title:'第一封 · 新的开始', body:'[这里留给你写第一封信。]'},
      {title:'第二封 · 当你很累的时候', body:'[这里留给你写给疲惫时的他的信。]'},
      {title:'第三封 · 当你想我的时候', body:'[这里留给你写一封很私人的小信。]'},
      {title:'第四封 · 给未来的我们', body:'[这里可以写你们对未来的期待。]'}
    ]
  },
  memories: {
    emoji: '📷', title: '回忆收藏柜', subtitle: 'little things worth keeping',
    intro: '24 张悄悄存下的小日子。点开任何一张，就可以好好看一眼。以后还会有更多。',
    photos: [
      {caption:'我们的小日子 · 01', image:'assets/photos/01.jpg'},
      {caption:'我们的小日子 · 02', image:'assets/photos/02.jpg'},
      {caption:'我们的小日子 · 03', image:'assets/photos/03.jpg'},
      {caption:'我们的小日子 · 04', image:'assets/photos/04.jpg'},
      {caption:'我们的小日子 · 05', image:'assets/photos/05.jpg'},
      {caption:'我们的小日子 · 06', image:'assets/photos/06.jpg'},
      {caption:'我们的小日子 · 07', image:'assets/photos/07.jpg'},
      {caption:'我们的小日子 · 08', image:'assets/photos/08.jpg'},
      {caption:'我们的小日子 · 09', image:'assets/photos/09.jpg'},
      {caption:'我们的小日子 · 10', image:'assets/photos/10.jpg'},
      {caption:'我们的小日子 · 11', image:'assets/photos/11.jpg'},
      {caption:'我们的小日子 · 12', image:'assets/photos/12.jpg'},
      {caption:'我们的小日子 · 13', image:'assets/photos/13.jpg'},
      {caption:'我们的小日子 · 14', image:'assets/photos/14.jpg'},
      {caption:'我们的小日子 · 15', image:'assets/photos/15.jpg'},
      {caption:'我们的小日子 · 16', image:'assets/photos/16.jpg'},
      {caption:'我们的小日子 · 17', image:'assets/photos/17.jpg'},
      {caption:'我们的小日子 · 18', image:'assets/photos/18.jpg'},
      {caption:'我们的小日子 · 19', image:'assets/photos/19.jpg'},
      {caption:'我们的小日子 · 20', image:'assets/photos/20.jpg'},
      {caption:'我们的小日子 · 21', image:'assets/photos/21.jpg'},
      {caption:'我们的小日子 · 22', image:'assets/photos/22.jpg'},
      {caption:'我们的小日子 · 23', image:'assets/photos/23.jpg'},
      {caption:'我们的小日子 · 24', image:'assets/photos/24.jpg'}
    ]
  },
  future: {
    emoji: '🌙', title: '窗外还有很多星星', subtitle: 'all the tomorrows to come',
    intro: '不着急，我们还有很多未来可以慢慢抵达。',
    wishes: [
      '一起去一个还没去过的地方',
      '有一个能晒到太阳的小家',
      '一起养一只小猫',
      '有许多个慢悠悠的周末',
      '[写上你们自己的一个愿望]'
    ]
  },
  mood: {
    emoji: '🛋️', title: '先在沙发上坐一会儿', subtitle: 'how was your day?',
    intro: '今天过得怎么样？选一个心情就好，不用解释。',
    moods: [
      {emoji:'☀️', label:'开心', reply:'那就把快乐放在这里一点点，\n下次回来还能捡到。'},
      {emoji:'☁️', label:'普普通通', reply:'普通的一天也很好。\n我们的小日子，本来就是一天天拼起来的。'},
      {emoji:'🧸', label:'有点累', reply:'那就先什么都不做吧。\n坐一会儿，喝点水，慢慢来。'},
      {emoji:'🌧️', label:'有点委屈', reply:'如果今天有一点难过，\n先把难过放在这里，给你一个抱抱。'},
      {emoji:'💗', label:'想抱抱', reply:'收到！一份长长的抱抱正在派送中。\n（这句以后可以换成你自己的话。）'}
    ]
  },
  cat: {
    emoji: '🐈', title: '未来猫猫的小窝', subtitle: 'our maybe-someday cat',
    intro: '这张小床先空着，等未来某个毛茸茸的家人。',
    cards: [
      {emoji:'🎀', title:'猫猫名字备选', body:'[以后可以写你们喜欢的名字]'},
      {emoji:'🐾', title:'想象中的猫猫', body:'[它是什么性格？喜欢做什么？]'},
      {emoji:'🧶', title:'一起养猫的日常', body:'[留给你们未来的小计划]'},
      {emoji:'🏠', title:'我们和猫的家', body:'[这里可以放一张想象中的家]'}
    ]
  },
  gallery: {
    emoji: '🎨', title: '一起画画的地方', subtitle: 'made by our little hands',
    intro: '画得好不好都没关系，重要的是一起画过。',
    photos: [
      {caption:'你画的', image:''},
      {caption:'我画的', image:''},
      {caption:'我们一起画的', image:''}
    ]
  },
  goodnight: {
    emoji: '🕯️', title: '留给你的这一盏灯', subtitle: 'the light is always on',
    intro: '天黑了，房间静下来了。',
    noteTitle: '晚安呀',
    note: '一天结束之后，\n可以把那些没有做完的事情先放在门外。\n\n这里有柔软的灯光。\n还有一个人在期待和你一起过明天。'
  },
  fridge: {
    emoji: '🍮', title: '冰箱里的幸福库存', subtitle: 'stocked with tiny joys',
    intro: '这里专门收藏那些看起来很小、但会让人心情变好的东西。',
    cards: [
      {emoji:'🍜', title:'想一起吃的', body:'[填你们喜欢的一道菜]'},
      {emoji:'🍓', title:'喜欢的小零食', body:'[填一个小零食]'},
      {emoji:'🍳', title:'一起做饭计划', body:'[填一道以后想做的菜]'},
      {emoji:'🧋', title:'小小的奖励', body:'[填一个属于你们的小奖励]'}
    ]
  },
  capsule: {
    emoji: '⏳', title: '写给未来的几句话', subtitle: 'open whenever you like',
    intro: '不需要倒计时，也不需要一定在哪天打开。想看的时候，就来看看。',
    cards: [
      {emoji:'✉️', title:'给刚开始工作的你', body:'[待写入]'},
      {emoji:'🌿', title:'给越来越熟悉新生活的你', body:'[待写入]'},
      {emoji:'✨', title:'给很久很久以后的我们', body:'[待写入]'}
    ]
  },
  stars: {
    emoji: '⭐', title: '接住一颗小星星', subtitle: 'a tiny surprise, every time',
    intro: '每次点亮星星，都可能捡到一句不一样的话。',
    phrases: [
      '世界这么大，能一起过小日子真好。',
      '希望今天有一点点好事发生。',
      '要不要先休息十分钟？',
      '以后一起去看更多更多的风景。',
      '就算什么都没发生，也很喜欢今天。',
      '你的小宇宙正在给你发射一个抱抱。'
    ]
  }
};