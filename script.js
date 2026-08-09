// ===== ANTI-DEBUG =====
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault(); return false;
    }
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's')) {
        e.preventDefault(); return false;
    }
});
document.addEventListener('selectstart', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    e.preventDefault();
});
document.addEventListener('dragstart', e => e.preventDefault());

// ===== DATA =====
const DEVS = [
    { id: 'seven', name: 'Seven戚', role: '网站站主· 独立开发', bio: '我在单打独斗吗？整个网站的运营只有我一人......', avatar: 'https://i.ibb.co/Y4rD6F2Y/b-8ee0f1b16f3c823eeff690735ca17e1f.jpg' },
];

const GAMES = [
  {
    "id": 0,
    "title": "植物大战僵尸",
    "devId": "seven",
    "cat": "strategy",
    "icon": "https://img1.ali213.net/shouyou/cover/c/28217_m.jpg",
    "hero": "http://img1.ali213.net/shouyou/tyxwj/2026/03/17/202603175120954.png",
    "shots": [
      "https://img1.ali213.net/shouyou/cutpics/c/28217_0.jpg"
    ],
    "rating": 4.7,
    "ratings": "12万",
    "size": "10MB",
    "hot": true,
    "featured": 1,
    "detail": {
      "network": false,
      "multiplayer": false,
      "platform": "Android",
      "controller": false,
      "voice": false,
      "cloud": false,
      "age": "全年龄",
      "lang": "中文",
      "update": "断更",
      "engine": "未知"
    },
    "desc": "植物大战僵尸是一款经典塔防类手机游戏，丰富关卡不同地形各具特色，植物组合运用策略搭配，感兴趣的小伙伴快来下载植物大战僵尸体验吧。",
    "tags": ["策略", "官方"],
    "dl": {
      "web": null,
      "pc": "https://dd.soft9527.com/ali213/Ake2V7wruRcskvYXHeK1Wg",
      "android": "https://dd.soft9527.com/ali213/AhDlAux5vhMskvURH+a2XQ",
      "ios": null
    }
  },
  {
    "id": 1,
    "title": "植物大战僵尸2（全图鉴版）",
    "devId": "seven",
    "cat": "strategy",
    "icon": "https://img1.ali213.net/shouyou/cover/1/10602825.jpg",
    "hero": "",
    "shots": [
      "https://img1.ali213.net/shouyou/upload/image/2024/02/26/584_20240226112436187.jpg"
    ],
    "rating": 4.5,
    "ratings": "29万",
    "size": "10MB",
    "hot": true,
    "featured": 0,
    "detail": {
      "network": false,
      "multiplayer": false,
      "platform": "Android",
      "controller": false,
      "voice": false,
      "cloud": false,
      "age": "全年龄",
      "lang": "中文",
      "update": "断更",
      "engine": "未知"
    },
    "desc": "暂无描述",
    "tags": [
      "策略",
      "外挂"
    ],
    "dl": {
      "web": "https://dd.soft9527.com/ali213/Ake2V7wruRcskvYXHeK1Wg",
      "pc": null,
      "android": "https://dd.soft9527.com/ali213/UxTmB7wmu0UskvUXFOO1Xg",
      "ios": null
    }
  },

  {
    "id": 3,
    "title": "足球经理人",
    "devId": "seven",
    "cat": "sim",
    "icon": "https://i.ibb.co/SwHJpt9N/QQ20260804-155657.png",
    "hero": "",
    "shots": [
      "https://i.ibb.co/n2qsM1M/QQ20260804-155946.png",
      "https://i.ibb.co/RTPXtqpQ/QQ20260804-160005.png",
      "https://i.ibb.co/Q7X0rT6y/QQ20260804-160019.png"
    ],
    "rating": 4.5,
    "ratings": "5万",
    "size": "10MB",
    "hot": true,
    "featured": 2,
    "detail": {
      "network": false,
      "multiplayer": false,
      "platform": "Web,Android,IOS,PC",
      "controller": false,
      "voice": true,
      "cloud": false,
      "age": "全年龄",
      "lang": "中文",
      "update": "不定时更新",
      "engine": "HTML"
    },
    "desc": "足球经理人是Seven戚个人创作的真实模拟当教练和经理人的游戏。游戏为网页游戏，体积小，适配所有设备游玩\n主要玩法：\n• 购买转会球员\n• 炒作和吸粉\n• 建立自己的俱乐部\n• 带领队伍拿下超多奖项",
    "tags": [
      "策略",
      "体育",
      "足球",
      "Seven戚"
    ],
    "dl": {
      "web": "https://sevenseven712.github.io/QQ-football-game/",
      "pc": "https://sevenseven712.github.io/QQ-football-game/",
      "android": "https://sevenseven712.github.io/QQ-football-game/",
      "ios": "https://sevenseven712.github.io/QQ-football-game/"
    }
  },
  {
    "id": 2,
    "title": "三角洲行动国际服",
    "devId": "seven",
    "cat": "action",
    "icon": "https://img.ddooo.com/logo/20250114/7996c01df10f1ecf22e732aed7ee233b.png",
    "hero": "https://img.ddooo.com/uppic/20260806/db5c4b7ac82e341eb7d05dd6d6e66876.jpg",
    "shots": [
      "https://picsum.photos/seed/default/300/600"
    ],
    "rating": 3.9,
    "ratings": "0",
    "size": "1.32G",
    "hot": true,
    "featured": 1,
    "detail": {
      "network": false,
      "multiplayer": true,
      "platform": "Android",
      "controller": false,
      "voice": true,
      "cloud": true,
      "age": "16＋",
      "lang": "多语言",
      "update": "每周更新",
      "engine": "虚幻4"
    },
    "desc": "三角洲行动国际服是腾讯旗下琳琅天上工作室打造的一款第一人称战术射击类手游，英文名叫Delta Force，其采用了最顶尖的物理引擎打造，游戏画面细腻精致，呈现出真实感十足的战场氛围，让玩家沉浸于引人入胜的游戏世界中。\n\n在三角洲行动游戏中玩家将化身特战干员，前往神秘的阿萨拉大陆调查哈夫克公司的非法活动。在这个充满危机的战场中，运用战斗道具与技能，与队友紧密协作，灵活制定战术，挑战强大的AI，完成各种极限行动。\n\n另外，三角洲行动游戏的玩法十分丰富，包括烽火地带、全面战场、黑鹰行动三大类，而全面战场模式下又有着多种玩法，如占领模式、攻防模式、危险行动等，前两种模式玩法分为进攻方和防守方，前者是占领敌方据点，后者则在一个地图中击败一切眼前敌人，击败它们获得分数，过程中玩家们可以合理利用各种战术道具、地形优势和沟通才是制胜的关键，有兴趣的朋友快来下载体验吧。",
    "tags": [
      "PVE",
      "搜打撤"
    ],
    "dl": {
      "web": null,
      "pc": null,
      "android": "https://api.ddooo.com/down/244973",
      "ios": null
    }
  },
];

const CATLIST = [{ c: 'all', l: '全部' }, { c: 'rpg', l: '角色扮演' }, { c: 'action', l: '动作冒险' }, { c: 'strategy', l: '策略' }, { c: 'casual', l: '休闲益智' }, { c: 'sim', l: '模拟经营' }];

// ===== HELPERS =====
const getDev = id => DEVS.find(d => d.id === id);
const getGame = id => GAMES.find(g => g.id === id);
const gamesByDev = devId => GAMES.filter(g => g.devId === devId);
const gamesByCat = cat => GAMES.filter(g => g.cat === cat);

// ===== NAV STATE =====
let pageStack = ['home'];
let curTab = 'home';
let curCat = 'all';
let carouselIdx = 0;
let carouselTimer = null;
let lbShots = [], lbIdx = 0;
let isHashChange = false;

// ===== TAB BAR VISIBILITY =====
function updateTabBar() {
    const top = pageStack[pageStack.length - 1];
    const tabBar = document.getElementById('tabBar');
    if (!tabBar) return;
    const hidden = ['pageDetail', 'pageContrib', 'pageSearch'];
    tabBar.style.display = hidden.includes(top) ? 'none' : '';
}

// ===== URL 路由 =====
function updateURL(pageId, params) {
    let hash = '#home';
    if (pageId === 'pageHome') hash = '#home';
    else if (pageId === 'pageCategory') hash = '#category';
    else if (pageId === 'pageDev') hash = '#dev';
    else if (pageId === 'pageDetail') hash = '#detail/' + params;
    else if (pageId === 'pageContrib') hash = '#contrib/' + params;
    else if (pageId === 'pageSearch') hash = '#search';
    if (location.hash !== hash) {
        isHashChange = true;
        location.hash = hash;
        setTimeout(() => isHashChange = false, 10);
    }
}

function parseHash() {
    if (isHashChange) return;
    const hash = location.hash.slice(1) || 'home';
    const parts = hash.split('/');
    const page = parts[0];
    const id = parts[1] || '';
    switch (page) {
        case 'home': navigateTo('home'); break;
        case 'category': navigateTo('category'); break;
        case 'dev': navigateTo('dev'); break;
        case 'detail':
            if (id !== '' && !isNaN(parseInt(id)) && getGame(parseInt(id))) {
                openDetailDirect(parseInt(id));
            } else navigateTo('home');
            break;
        case 'contrib':
            if (id !== '' && getDev(id)) openContribDirect(id);
            else navigateTo('home');
            break;
        case 'search': openSearchDirect(); break;
        default: navigateTo('home');
    }
}

function navigateTo(tab) {
    document.querySelectorAll('.page.slide').forEach(p => p.classList.remove('active'));
    while (pageStack.length > 1) {
        const old = pageStack.pop();
        const el = document.getElementById(old);
        if (el) el.classList.remove('active');
    }
    switchTab(tab, true);
}

// ===== 切换 Tab =====
function switchTab(tab, fromRoute = false) {
    curTab = tab;
    document.querySelectorAll('.tab-item').forEach(t => t.classList.toggle('active', t.dataset.t === tab));
    document.querySelectorAll('.content-area>.page:not(.slide)').forEach(p => p.classList.remove('active'));
    const pageId = 'page' + tab.charAt(0).toUpperCase() + tab.slice(1);
    const pageEl = document.getElementById(pageId);
    if (pageEl) pageEl.classList.add('active');
    pageStack = [pageId];
    updateTabBar();
    if (!fromRoute) updateURL(pageId, '');
    if (tab === 'category') renderCatGames();
    // 切换tab时停止轮播（若离开首页）
    if (tab !== 'home') clearInterval(carouselTimer);
    else if (tab === 'home') {
        const featured = GAMES.filter(g => g.featured).sort((a, b) => a.featured - b.featured);
        if (featured.length > 1) startCarousel(featured.length);
    }
}

// ===== 直接打开详情/贡献者/搜索 =====
function openDetailDirect(id) {
    document.querySelectorAll('.page.slide').forEach(p => p.classList.remove('active'));
    // 确保有一个非 slide 页面作为基底
    if (pageStack.length === 0 || ['pageDetail', 'pageContrib', 'pageSearch'].includes(pageStack[0])) {
        pageStack = ['pageHome'];
        document.querySelectorAll('.content-area>.page:not(.slide)').forEach(p => p.classList.remove('active'));
        const home = document.getElementById('pageHome');
        if (home) home.classList.add('active');
        document.querySelectorAll('.tab-item').forEach(t => t.classList.toggle('active', t.dataset.t === 'home'));
        curTab = 'home';
        // 停止轮播
        clearInterval(carouselTimer);
    }
    renderDetail(id);
    const p = document.getElementById('pageDetail');
    if (p) {
        p.classList.add('active');
        p.style.zIndex = 20;
        pageStack.push('pageDetail');
        updateTabBar();
        updateURL('pageDetail', id);
    }
}

function openContribDirect(devId) {
    document.querySelectorAll('.page.slide').forEach(p => p.classList.remove('active'));
    if (pageStack.length === 0 || ['pageDetail', 'pageContrib', 'pageSearch'].includes(pageStack[0])) {
        pageStack = ['pageHome'];
        document.querySelectorAll('.content-area>.page:not(.slide)').forEach(p => p.classList.remove('active'));
        const home = document.getElementById('pageHome');
        if (home) home.classList.add('active');
        document.querySelectorAll('.tab-item').forEach(t => t.classList.toggle('active', t.dataset.t === 'home'));
        curTab = 'home';
        clearInterval(carouselTimer);
    }
    renderContrib(devId);
    const p = document.getElementById('pageContrib');
    if (p) {
        p.classList.add('active');
        p.style.zIndex = 20;
        pageStack.push('pageContrib');
        updateTabBar();
        updateURL('pageContrib', devId);
    }
}

function openSearchDirect() {
    document.querySelectorAll('.page.slide').forEach(p => p.classList.remove('active'));
    if (pageStack.length === 0 || ['pageDetail', 'pageContrib', 'pageSearch'].includes(pageStack[0])) {
        pageStack = ['pageHome'];
        document.querySelectorAll('.content-area>.page:not(.slide)').forEach(p => p.classList.remove('active'));
        const home = document.getElementById('pageHome');
        if (home) home.classList.add('active');
        document.querySelectorAll('.tab-item').forEach(t => t.classList.toggle('active', t.dataset.t === 'home'));
        curTab = 'home';
        clearInterval(carouselTimer);
    }
    const p = document.getElementById('pageSearch');
    if (p) {
        p.classList.add('active');
        p.style.zIndex = 20;
        pageStack.push('pageSearch');
        updateTabBar();
        updateURL('pageSearch', '');
        // 清空输入框和结果
        const input = document.getElementById('searchInput');
        if (input) input.value = '';
        document.getElementById('searchResults').innerHTML = `<div class="empty-state"><div class="em-icon">🔍</div><div class="em-text">输入关键词搜索游戏或开发者</div></div>`;
        setTimeout(() => { if (input) input.focus(); }, 400);
    }
}

function pushPage(pageId, params) {
    pageStack.push(pageId);
    const p = document.getElementById(pageId);
    if (p) {
        p.classList.add('active');
        p.style.zIndex = pageStack.length + 10;
        updateTabBar();
        updateURL(pageId, params || '');
    }
}

function goBack() {
    if (pageStack.length <= 1) return;
    const old = pageStack.pop();
    const el = document.getElementById(old);
    if (el) el.classList.remove('active');
    const top = pageStack[pageStack.length - 1];
    if (top === 'pageHome') updateURL('pageHome', '');
    else if (top === 'pageCategory') updateURL('pageCategory', '');
    else if (top === 'pageDev') updateURL('pageDev', '');
    else if (top === 'pageSearch') updateURL('pageSearch', '');
    updateTabBar();
    // 如果回到首页，重新启动轮播
    if (top === 'pageHome') {
        const featured = GAMES.filter(g => g.featured).sort((a, b) => a.featured - b.featured);
        if (featured.length > 1) startCarousel(featured.length);
    }
}

// ===== 公开调用函数 =====
function openDetail(id) {
    renderDetail(id);
    pushPage('pageDetail', id);
    clearInterval(carouselTimer); // 暂停轮播
}

function openContrib(devId) {
    renderContrib(devId);
    pushPage('pageContrib', devId);
    clearInterval(carouselTimer);
}

function openSearch() {
    pushPage('pageSearch', '');
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    document.getElementById('searchResults').innerHTML = `<div class="empty-state"><div class="em-icon">🔍</div><div class="em-text">输入关键词搜索游戏或开发者</div></div>`;
    setTimeout(() => { if (input) input.focus(); }, 400);
    clearInterval(carouselTimer);
}

// ===== RENDER FUNCTIONS =====
function renderDetail(id) {
    const g = getGame(id); if (!g) return;
    const d = getDev(g.devId);
    const det = g.detail || {};
    document.getElementById('dTitle').textContent = g.title;
    const dlKeys = [{ key: 'web', label: '网站直达', icon: '🌐', sub: '浏览器打开' }, { key: 'pc', label: '电脑程序', icon: '💻', sub: 'Windows / Mac' }, { key: 'android', label: '安卓软件', icon: '🤖', sub: 'Android 安装包' }, { key: 'ios', label: '苹果软件', icon: '🍎', sub: 'App Store' }];
    const similar = gamesByCat(g.cat).filter(x => x.id !== g.id);
    const byDev = gamesByDev(g.devId).filter(x => x.id !== g.id);

    // 生成截图HTML，使用 data-* 存储，避免内联传参
    const shotsHtml = g.shots.map((s, i) => `<div class="dl-shot" data-shots='${JSON.stringify(g.shots)}' data-index="${i}"><img src="${s}" alt=""></div>`).join('');

    document.getElementById('detailScroll').innerHTML = `
    <div class="dl-info-top"><div class="dl-icon"><img src="${g.icon}" alt=""></div><div class="dl-meta"><div class="name">${g.title}</div><div class="dev">${d.name}</div><div class="stat-row"><span class="stars">★★★★★</span><span>${g.rating}</span><span>·</span><span>${g.ratings}个评分</span><span>·</span><span>${g.size}</span></div></div></div>
    <div class="dl-sec"><div class="dl-sec-title">预览</div><div class="dl-shots">${shotsHtml}</div></div>
    <div class="dl-sec"><div class="dl-sec-title">贡献者</div><div class="contrib-list"><div class="contrib-item" onclick="openContrib('${d.id}')"><img src="${d.avatar}" alt=""><div><div class="ci-name">${d.name}</div><div class="ci-role">${d.role}</div></div></div></div></div>
    <div class="dl-sec"><div class="dl-sec-title">游戏详情</div><div class="dl-detail-grid">
      <div class="dl-detail-cell"><span class="dd-icon">${det.network ? '🌐' : '📶'}</span><span class="dd-val">${det.network ? '需要网络' : '离线可玩'}</span><span class="dd-label">网络需求</span></div>
      <div class="dl-detail-cell"><span class="dd-icon">${det.multiplayer ? '👥' : '👤'}</span><span class="dd-val">${det.multiplayer ? '支持联机' : '纯单机'}</span><span class="dd-label">联机模式</span></div>
      <div class="dl-detail-cell"><span class="dd-icon">🖥️</span><span class="dd-val">${det.platform || '未知'}</span><span class="dd-label">平台</span></div>
      <div class="dl-detail-cell"><span class="dd-icon">${det.controller ? '🎮' : '📱'}</span><span class="dd-val">${det.controller ? '支持手柄' : '触屏操作'}</span><span class="dd-label">操控方式</span></div>
      <div class="dl-detail-cell"><span class="dd-icon">${det.cloud ? '☁️' : '💾'}</span><span class="dd-val">${det.cloud ? '云存档' : '本地存储'}</span><span class="dd-label">存档方式</span></div>
      <div class="dl-detail-cell"><span class="dd-icon">🌐</span><span class="dd-val">${det.lang || '中文'}</span><span class="dd-label">语言支持</span></div>
      <div class="dl-detail-cell"><span class="dd-icon">🔊</span><span class="dd-val">${det.voice ? '支持语音' : '无语音'}</span><span class="dd-label">语音系统</span></div>
      <div class="dl-detail-cell"><span class="dd-icon">🔄</span><span class="dd-val">${det.update || '不定期'}</span><span class="dd-label">更新频率</span></div>
      <div class="dl-detail-cell"><span class="dd-icon">⚙️</span><span class="dd-val">${det.engine || '未知'}</span><span class="dd-label">游戏引擎</span></div>
    </div></div>
    <div class="dl-sec"><div class="dl-sec-title">简介</div><div class="dl-desc collapsed" id="dDesc">${g.desc}</div><span class="dl-desc-toggle" id="dToggle" onclick="toggleDesc()">展开更多</span></div>
    <div class="dl-sec"><div class="dl-sec-title">标签</div><div class="dl-tags">${g.tags.map(t => `<span class="dl-tag">${t}</span>`).join('')}</div></div>
    <div class="dl-sec"><div class="dl-sec-title">下载方式</div><div class="dl-downloads">${dlKeys.map(k => {
        // 修复：排除 javascript:void(0) 以及空值
        const val = g.dl[k.key];
        const has = val && val !== 'javascript:void(0)';
        return `<div class="dl-btn${has ? '' : ' disabled'}" onclick="${has ? `window.open('${val}','_blank')` : `showToast('${k.label}')`}"><span class="dl-icon-sm">${k.icon}</span><span class="dl-label">${k.label}</span><span class="dl-sub">${has ? k.sub : '暂未开通'}</span></div>`
    }).join('')}</div></div>
    ${byDev.length ? `<div class="dl-sec"><div class="dl-sec-title">创作者其他作品</div><div class="rec-scroll">${byDev.map(x => `<div class="rec-card" onclick="openDetail(${x.id})"><div class="rec-card-img"><img src="${x.icon}" alt=""></div><div class="rc-name">${x.title}</div><div class="rc-meta"><span class="stars">★${x.rating}</span> ${x.size}</div></div>`).join('')}</div></div>` : ''}
    ${similar.length ? `<div class="dl-sec"><div class="dl-sec-title">同类型推荐</div><div class="rec-scroll">${similar.map(x => `<div class="rec-card" onclick="openDetail(${x.id})"><div class="rec-card-img"><img src="${x.icon}" alt=""></div><div class="rc-name">${x.title}</div><div class="rc-meta"><span class="stars">★${x.rating}</span> ${x.size}</div></div>`).join('')}</div></div>` : ''}
    <div style="height:20px"></div>`;
    document.getElementById('detailScroll').scrollTop = 0;

    // 绑定截图点击事件（事件委托）
    const shotsContainer = document.querySelector('#detailScroll .dl-shots');
    if (shotsContainer) {
        shotsContainer.addEventListener('click', function(e) {
            const shot = e.target.closest('.dl-shot');
            if (!shot) return;
            const shotsData = shot.dataset.shots;
            const index = parseInt(shot.dataset.index);
            if (shotsData) {
                try {
                    const shots = JSON.parse(shotsData);
                    openLightbox(shots, index);
                } catch (err) {
                    console.warn('解析截图数据失败', err);
                }
            }
        });
    }
}

function renderContrib(devId) {
    const d = getDev(devId); if (!d) return;
    document.getElementById('cpTitle').textContent = d.name;
    const games = gamesByDev(devId);
    document.getElementById('contribScroll').innerHTML = `
    <div class="cp-header"><img class="cp-ava" src="${d.avatar}" alt=""><div class="cp-name">${d.name}</div><div class="cp-role">${d.role}</div><div class="cp-bio">${d.bio}</div><div class="cp-stat"><div class="cp-stat-item"><div class="num">${games.length}</div><div class="lbl">贡献游戏</div></div><div class="cp-stat-item"><div class="num">${games.filter(g => g.hot).length}</div><div class="lbl">热门作品</div></div><div class="cp-stat-item"><div class="num">${games.length ? (games.reduce((a, b) => a + b.rating, 0) / games.length).toFixed(1) : '-'}</div><div class="lbl">平均评分</div></div></div></div>
    <div class="cp-label">贡献的游戏</div>
    <div class="game-list" style="padding:0 16px 16px">${games.map(g => `<div class="gl-item" onclick="openDetail(${g.id})"><div class="gl-icon"><img src="${g.icon}" alt=""></div><div class="gl-info"><div class="gi-name">${g.title}</div><div class="gi-dev">${CATLIST.find(c => c.c === g.cat)?.l || g.cat}</div><div class="gi-meta"><span class="stars">★${g.rating}</span><span class="rating">${g.ratings}评分</span><span class="size">${g.size}</span></div></div><button class="gl-btn" onclick="event.stopPropagation();openDetail(${g.id})">获取</button></div>`).join('')}</div><div style="height:16px"></div>`;
    document.getElementById('contribScroll').scrollTop = 0;
}

// ===== CAROUSEL =====
function initCarousel() {
    const featured = GAMES.filter(g => g.featured).sort((a, b) => a.featured - b.featured);
    const el = document.getElementById('carousel');
    if (!el) return;
    if (featured.length === 0) {
        el.innerHTML = '<div style="padding:20px;text-align:center;color:#999;">暂无精选游戏</div>';
        return;
    }
    el.innerHTML = `<div class="carousel-track" id="cTrack">${featured.map(g => `<div class="carousel-slide" onclick="openDetail(${g.id})"><img src="${g.hero || g.icon}" alt=""><div class="c-overlay"><div class="c-tag">编辑精选</div><div class="c-title">${g.title}</div><div class="c-desc">${getDev(g.devId).name} · ★${g.rating}</div></div></div>`).join('')}</div><div class="carousel-dots" id="cDots">${featured.map((_, i) => `<i${i === 0 ? ' class="on"' : ''}></i>`).join('')}</div>`;
    carouselIdx = 0;
    startCarousel(featured.length);
}

function startCarousel(count) {
    clearInterval(carouselTimer);
    if (count > 1) carouselTimer = setInterval(() => moveCarousel(1, count), 3500);
}

function moveCarousel(dir, count) {
    carouselIdx = (carouselIdx + dir + count) % count;
    const track = document.getElementById('cTrack');
    if (track) track.style.transform = `translateX(-${carouselIdx * 100}%)`;
    const dots = document.querySelectorAll('#cDots i');
    if (dots.length) dots.forEach((d, i) => d.classList.toggle('on', i === carouselIdx));
}

// ===== COLLECTIONS =====
function renderCollection(containerId, gameIds) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `<div class="collection-scroll">${gameIds.map(id => {
        const g = getGame(id); if (!g) return '';
        return `<div class="collection-card" onclick="openDetail(${g.id})"><div class="collection-card-img"><img src="${g.icon}" alt=""></div><div class="cc-name">${g.title}</div><div class="cc-meta"><span class="stars">★${g.rating}</span><span>${g.size}</span></div></div>`
    }).join('')}</div>`;
}

function initHome() {
    initCarousel();
    const featured = GAMES.filter(g => g.featured).sort((a, b) => a.featured - b.featured).map(g => g.id);
    renderCollection('hotCol', featured);
    renderCollection('rpgCol', GAMES.filter(g => g.cat === 'rpg').map(g => g.id));
    renderCollection('casualCol', GAMES.filter(g => g.cat === 'casual').map(g => g.id));
    renderCollection('actionCol', GAMES.filter(g => g.cat === 'action').map(g => g.id));
}

// ===== CATEGORY =====
function initCat() {
    const el = document.getElementById('catTags');
    if (!el) return;
    el.innerHTML = CATLIST.map(c => `<button class="cat-tag${c.c === 'all' ? ' active' : ''}" data-c="${c.c}">${c.l}</button>`).join('');
    el.addEventListener('click', e => {
        const btn = e.target.closest('.cat-tag');
        if (!btn) return;
        document.querySelectorAll('.cat-tag').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        curCat = btn.dataset.c;
        renderCatGames();
    });
}

function renderCatGames() {
    const list = curCat === 'all' ? GAMES : GAMES.filter(g => g.cat === curCat);
    const container = document.getElementById('catGameList');
    if (!container) return;
    container.innerHTML = list.map(g => {
        const d = getDev(g.devId);
        return `<div class="gl-item" onclick="openDetail(${g.id})"><div class="gl-icon"><img src="${g.icon}" alt=""></div><div class="gl-info"><div class="gi-name">${g.title}</div><div class="gi-dev">${d.name}</div><div class="gi-meta"><span class="stars">★${g.rating}</span><span class="rating">${g.ratings}评分</span><span class="size">${g.size}</span></div></div><button class="gl-btn" onclick="event.stopPropagation();openDetail(${g.id})">获取</button></div>`
    }).join('');
}

// ===== DEVELOPER =====
function initDev() {
    const container = document.getElementById('devGrid');
    if (!container) return;
    container.innerHTML = DEVS.map(d => {
        const count = gamesByDev(d.id).length;
        return `<div class="dev-card" onclick="openContrib('${d.id}')"><img class="dev-ava" src="${d.avatar}" alt=""><div class="dev-card-info"><div class="d-name">${d.name}</div><div class="d-role">${d.role}</div><div class="d-games">已贡献 ${count} 款游戏</div></div><span class="dev-arrow">›</span></div>`
    }).join('');
}

// ===== SEARCH =====
function closeSearch() {
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    goBack();
}

function doSearch(q) {
    q = q.trim().toLowerCase();
    const el = document.getElementById('searchResults');
    if (!el) return;
    if (!q) { el.innerHTML = `<div class="empty-state"><div class="em-icon">🔍</div><div class="em-text">输入关键词搜索游戏或开发者</div></div>`; return; }
    const gameRes = GAMES.filter(g => g.title.toLowerCase().includes(q) || g.tags.some(t => t.toLowerCase().includes(q)));
    const devRes = DEVS.filter(d => d.name.toLowerCase().includes(q));
    if (!gameRes.length && !devRes.length) { el.innerHTML = `<div class="empty-state"><div class="em-icon">😕</div><div class="em-text">没有找到相关结果</div></div>`; return; }
    let html = '';
    if (gameRes.length) {
        html += `<div style="font-size:13px;font-weight:700;color:var(--sub);margin-bottom:8px">游戏 · ${gameRes.length}个结果</div><div class="game-list" style="padding:0;margin-bottom:16px">${gameRes.map(g => { const d = getDev(g.devId); return `<div class="gl-item" onclick="openDetail(${g.id})"><div class="gl-icon"><img src="${g.icon}" alt=""></div><div class="gl-info"><div class="gi-name">${g.title}</div><div class="gi-dev">${d.name}</div><div class="gi-meta"><span class="stars">★${g.rating}</span><span class="rating">${g.ratings}评分</span><span class="size">${g.size}</span></div></div><button class="gl-btn" onclick="event.stopPropagation();openDetail(${g.id})">获取</button></div>` }).join('')}</div>`;
    }
    if (devRes.length) {
        html += `<div style="font-size:13px;font-weight:700;color:var(--sub);margin-bottom:8px">开发者 · ${devRes.length}个结果</div><div class="dev-grid" style="padding:0">${devRes.map(d => `<div class="dev-card" onclick="openContrib('${d.id}')"><img class="dev-ava" src="${d.avatar}" alt=""><div class="dev-card-info"><div class="d-name">${d.name}</div><div class="d-role">${d.role}</div><div class="d-games">已贡献 ${gamesByDev(d.id).length} 款游戏</div></div><span class="dev-arrow">›</span></div>`).join('')}</div>`;
    }
    el.innerHTML = html;
}

// ===== LIGHTBOX =====
function openLightbox(shots, idx) {
    lbShots = shots; lbIdx = idx;
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    const img = document.getElementById('lbImg');
    const counter = document.getElementById('lbCounter');
    if (img) img.src = lbShots[lbIdx];
    if (counter) counter.textContent = (lbIdx + 1) + ' / ' + lbShots.length;
    const prev = document.querySelector('.lightbox-prev');
    const next = document.querySelector('.lightbox-next');
    if (prev) prev.style.display = lbShots.length > 1 ? '' : 'none';
    if (next) next.style.display = lbShots.length > 1 ? '' : 'none';
    if (counter) counter.style.display = lbShots.length > 1 ? '' : 'none';
    requestAnimationFrame(() => lb.classList.add('show'));
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('show');
}

function navLightbox(dir) {
    if (lbShots.length <= 1) return;
    lbIdx = (lbIdx + dir + lbShots.length) % lbShots.length;
    const img = document.getElementById('lbImg');
    if (!img) return;
    img.style.opacity = '0';
    img.style.transform = 'scale(0.92)';
    setTimeout(() => {
        img.src = lbShots[lbIdx];
        const counter = document.getElementById('lbCounter');
        if (counter) counter.textContent = (lbIdx + 1) + ' / ' + lbShots.length;
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, 150);
}

(function() {
    let sx = 0;
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.addEventListener('touchstart', e => {
        if (e.target.closest('.lightbox-close, .lightbox-nav')) return;
        sx = e.touches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', e => {
        if (e.target.closest('.lightbox-close, .lightbox-nav')) return;
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 50) navLightbox(dx < 0 ? 1 : -1);
    }, { passive: true });
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
})();

function toggleDesc() {
    const d = document.getElementById('dDesc'), t = document.getElementById('dToggle');
    if (!d || !t) return;
    if (d.classList.contains('collapsed')) {
        d.classList.remove('collapsed');
        t.textContent = '收起';
    } else {
        d.classList.add('collapsed');
        t.textContent = '展开更多';
    }
}

let toastTimer = null;
function showToast(label) {
    const el = document.getElementById('toast');
    if (!el) return;
    document.getElementById('toastText').textContent = label + ' 暂未开通';
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

// ===== 初始化（保留启动页动画） =====
const SPLASH_DELAY = 2500;

function initApp() {
    try {
        // 渲染内容（在启动页背后进行）
        initHome();
        initCat();
        initDev();

        // 路由监听
        window.addEventListener('hashchange', function(e) {
            if (isHashChange) return;
            parseHash();
        });

        // 延迟隐藏启动页
        setTimeout(() => {
            try {
                const splash = document.getElementById('splash');
                const app = document.getElementById('app');
                if (splash) splash.classList.add('hide');
                if (app) app.classList.add('show');

                // 处理初始路由
                if (location.hash) {
                    parseHash();
                } else {
                    switchTab('home');
                    updateURL('pageHome', '');
                }
                updateTabBar();

                // 移除启动页 DOM
                setTimeout(() => {
                    const sp = document.getElementById('splash');
                    if (sp) sp.remove();
                }, 600);
            } catch (e) {
                console.error('启动页隐藏失败:', e);
                // 强制显示应用
                const app = document.getElementById('app');
                if (app) app.style.display = 'flex';
                const splash = document.getElementById('splash');
                if (splash) splash.style.display = 'none';
            }
        }, SPLASH_DELAY);

        // 绑定 Tab 事件（确保点击生效）
        const tabBar = document.getElementById('tabBar');
        if (tabBar) {
            tabBar.addEventListener('click', function(e) {
                const t = e.target.closest('.tab-item');
                if (!t) return;
                const tab = t.dataset.t;
                if (tab === curTab && pageStack.length === 1) return;

                // 关闭所有 slide 页面
                document.querySelectorAll('.page.slide').forEach(p => p.classList.remove('active'));
                while (pageStack.length > 1) {
                    const old = pageStack.pop();
                    const el = document.getElementById(old);
                    if (el) el.classList.remove('active');
                }
                switchTab(tab, false);
            });
        }
    } catch (e) {
        console.error('初始化失败:', e);
        // 出错时强制显示应用
        const app = document.getElementById('app');
        if (app) app.style.display = 'flex';
        const splash = document.getElementById('splash');
        if (splash) splash.style.display = 'none';
    }
}

// 启动应用
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}