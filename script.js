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
    "desc": "植物大战僵尸是一款经典塔防类手机游戏，丰富关卡不同地形各具特色，植物组合运用策略搭配，感兴趣的小伙伴快来下载植物大战僵尸体验吧。\n\n植物大战僵尸植物图鉴\n1、豌豆射手：\n\n豌豆射手是你的第一道防线，它们会向入侵的僵尸射击豌豆。\n\n伤害程度：普通；\n\n费用：100；\n\n恢复速度：快。\n\n\n\n2、向日葵：\n\n向日葵是收集额外阳光的关键植物。\n\n费用：50；\n\n恢复速度：快。\n\n\n\n3、樱桃炸弹：\n\n樱桃炸弹能够炸飞一片区域内的所有僵尸。\n\n由于引线很短，因此应将其种植在离僵尸较近的位置\n\n伤害程度：极大；\n\n作用范围：中型区域；\n\n用途：单次使用；\n\n费用：150；\n\n恢复速度：非常慢。\n\n\n\n4、高坚果：\n\n高建国拥有坚硬的外壳，可用于保护其他植物。\n\n费用：50；\n\n恢复速度：慢。\n\n\n\n5、土豆地雷：\n\n土豆地雷能对敌人造成致命一击，应将其种植在僵尸前方，以便在接触时引爆。\n\n伤害程度：极大；\n\n作用范围：小型区域；\n\n用途：单次使用，具有引爆延迟；\n\n费用：25；\n\n恢复速度：慢。\n\n\n\n6、食人花：\n\n食人花能够一口吞掉僵尸，但在咀嚼过程中容易受到攻击。\n\n伤害程度：极大；\n\n作用范围：极短；\n\n特点：咀嚼时间较长。\n\n\n\n7、小喷菇：\n\n小喷菇价格便宜，但射程较短，伤害程度普通。\n\n此外，它在白天会进入休眠状态。\n\n而夜晚小喷菇则能为你而战。\n\n用途：夜晚地图前期发育；\n\n特点：不需要阳光就可以种植；\n\n射程：短。\n\n\n\n植物大战僵尸最后一关怎么打\n邪恶的僵尸博士驾驶着他的巨型僵尸机器人来袭，意图消灭你这个大脑守护者。\n\n\n\n如图所示，当Boss吐出一个类似橘子口味棒棒糖的火球时，你可以使用冰镇蘑菇来消除它。\n\n其实，在Boss吐火球之前，它的眼睛会发出红光;而在吐冰球之前，眼睛则会发出蓝光。\n\n只需提前判断好，应对起来就没什么难度。\n\n\n\n冰镇蘑菇不仅能消除火球，还能暂时冰冻住Boss。\n\n因此，如果你的冰镇蘑菇数量充足，不妨在Boss探出头时多次使用它，以便让植物有更多机会攻击Boss。\n\n另外，胡椒也能对Boss造成伤害，但记得保留一些用来对付Boss吐出的冰球。\n\n\n\nBoss还会随机使用汽车来压扁你的植物。\n\n如果植物上方有花盆，记得及时补充到缺损的位置。\n\n只要及时补充花盆，你的火力基本上就不会受影响。\n\n\n\n坚持就是胜利。\n\n经过一番激战，博士的巨型僵尸机器人终于被打败了。\n\n看到小白旗了吗?此时，你还将获得向日葵奖杯，一周目就此结束。\n\n\n\n植物大战僵尸ios版介绍\n植物大战僵尸是由PopCap Games开发设计的一款益智类对策类单机手游。\n\n游戏玩家根据武装多种多样绿色植物转换不一样的作用，迅速合理地把丧尸阻拦在侵入的路面上。\n\n不一样的对手，不一样的游戏玩法组成五种不一样的游戏模式，加上夜晚、大雾及其泳游池这类的阻碍提升了游戏趣味性。\n\n\n\n植物大战僵尸ios版特色\n1、通过了解每种僵尸的弱点，去好好的布置每种植物之间的搭配方法。\n\n2、应有尽有的搭配玩法，默契配合的能力，每一种都有独特的属性。\n\n3、通过获取到的能量给植物去进行升级，通过升级来强化植物的攻击力。\n\n4、游戏中每次提升等级都能解锁新的植物，新的植物攻击更加高。\n\n\n\n植物大战僵尸怎么刷金币\n1、为了更快地赚取金币，大家可以选择《谁笑到最后》这个模式。\n\n\n\n2、开局时，建议保留200阳光，以备不时之需，比如防止蒜头或南瓜头被僵尸吃掉。\n\n\n\n3、过了第二波僵尸后，可以使用剩余的阳光替换掉受损的蒜头，并为南瓜头换上新的，以保持防御的完整性。\n\n\n\n4、到了第三波，记得给金盏花套上南瓜头，以防海豚僵尸的偷袭。\n\n5、在整个游戏过程中，要时刻留意阳光的数量，以便及时补充蒜头和南瓜头。\n\n只要策略得当，轻松过关不成问题，连续扛过五波僵尸，就能稳稳赚取金币。\n\n\n\n植物大战僵尸ios版亮点\n游戏中有46种不同植物，每种植物之间都有着不同的造型，同时在这里玩家需要布置合理的战术，去消灭前来攻击的家园的僵尸，充分了解僵尸的特征才能更好的打败僵尸。",
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
    }
    const p = document.getElementById('pageSearch');
    if (p) {
        p.classList.add('active');
        p.style.zIndex = 20;
        pageStack.push('pageSearch');
        updateTabBar();
        updateURL('pageSearch', '');
        document.getElementById('searchResults').innerHTML = `<div class="empty-state"><div class="em-icon">🔍</div><div class="em-text">输入关键词搜索游戏或开发者</div></div>`;
        setTimeout(() => document.getElementById('searchInput').focus(), 400);
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
}

// ===== 公开调用函数 =====
function openDetail(id) {
    renderDetail(id);
    pushPage('pageDetail', id);
}

function openContrib(devId) {
    renderContrib(devId);
    pushPage('pageContrib', devId);
}

function openSearch() {
    pushPage('pageSearch', '');
    document.getElementById('searchResults').innerHTML = `<div class="empty-state"><div class="em-icon">🔍</div><div class="em-text">输入关键词搜索游戏或开发者</div></div>`;
    setTimeout(() => document.getElementById('searchInput').focus(), 400);
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
    document.getElementById('detailScroll').innerHTML = `
    <div class="dl-info-top"><div class="dl-icon"><img src="${g.icon}" alt=""></div><div class="dl-meta"><div class="name">${g.title}</div><div class="dev">${d.name}</div><div class="stat-row"><span class="stars">★★★★★</span><span>${g.rating}</span><span>·</span><span>${g.ratings}个评分</span><span>·</span><span>${g.size}</span></div></div></div>
    <div class="dl-sec"><div class="dl-sec-title">预览</div><div class="dl-shots">${g.shots.map((s, i) => `<div class="dl-shot" onclick="openLightbox(${JSON.stringify(g.shots).replace(/"/g, '&quot;')},${i})"><img src="${s}" alt=""></div>`).join('')}</div></div>
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
    <div class="dl-sec"><div class="dl-sec-title">下载方式</div><div class="dl-downloads">${dlKeys.map(k => { const has = !!g.dl[k.key]; return `<div class="dl-btn${has ? '' : ' disabled'}" onclick="${has ? `window.open('${g.dl[k.key]}','_blank')` : `showToast('${k.label}')`}"><span class="dl-icon-sm">${k.icon}</span><span class="dl-label">${k.label}</span><span class="dl-sub">${has ? k.sub : '暂未开通'}</span></div>` }).join('')}</div></div>
    ${byDev.length ? `<div class="dl-sec"><div class="dl-sec-title">创作者其他作品</div><div class="rec-scroll">${byDev.map(x => `<div class="rec-card" onclick="openDetail(${x.id})"><div class="rec-card-img"><img src="${x.icon}" alt=""></div><div class="rc-name">${x.title}</div><div class="rc-meta"><span class="stars">★${x.rating}</span> ${x.size}</div></div>`).join('')}</div></div>` : ''}
    ${similar.length ? `<div class="dl-sec"><div class="dl-sec-title">同类型推荐</div><div class="rec-scroll">${similar.map(x => `<div class="rec-card" onclick="openDetail(${x.id})"><div class="rec-card-img"><img src="${x.icon}" alt=""></div><div class="rc-name">${x.title}</div><div class="rc-meta"><span class="stars">★${x.rating}</span> ${x.size}</div></div>`).join('')}</div></div>` : ''}
    <div style="height:20px"></div>`;
    document.getElementById('detailScroll').scrollTop = 0;
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
    document.querySelectorAll('#cDots i').forEach((d, i) => d.classList.toggle('on', i === carouselIdx));
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
    document.getElementById('searchInput').value = '';
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
    document.getElementById('lbImg').src = lbShots[lbIdx];
    document.getElementById('lbCounter').textContent = (lbIdx + 1) + ' / ' + lbShots.length;
    document.querySelector('.lightbox-prev').style.display = lbShots.length > 1 ? '' : 'none';
    document.querySelector('.lightbox-next').style.display = lbShots.length > 1 ? '' : 'none';
    document.getElementById('lbCounter').style.display = lbShots.length > 1 ? '' : 'none';
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
        document.getElementById('lbCounter').textContent = (lbIdx + 1) + ' / ' + lbShots.length;
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