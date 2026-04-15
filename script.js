const rawQuestions = [
    // 维度一：FAST vs DREA-M
    { text: "开局九种九牌，你的第一反应是？", options: [{ text: "推了下一把", type: "FAST" }, { text: "国士我来了", type: "DREA-M" }] },
    { text: "已经第12巡了，你还在一向听，此时进了一张牌可以把坎张变成两面，但你会失去三色同顺，你会怎么做？", options: [{ text: "我要听牌，三色是什么我不认识", type: "FAST" }, { text: "我要做大牌，小牌有啥意思", type: "DREA-M" }] },
    { text: "你在做七对，手上有四对，此时进了个刻子，你会？", options: [{ text: "坚持七对！", type: "FAST" }, { text: "四暗刻！", type: "DREA-M" }] },
    { text: "你的牌在第6巡听牌了，但是只有平和，如果摸一张就能有三色同顺，这张还是dora，一下就能多三番，你怎么办？", options: [{ text: "棒听即立，速攻速攻！", type: "FAST" }, { text: "不立，万一摸上来了怎么办", type: "DREA-M" }] },
    { text: "你起手就听牌了，平和dora2的3900点。此时对家打出了你听的牌，你怎么办？", options: [{ text: "荣！", type: "FAST" }, { text: "我要地和", type: "DREA-M" }] },

    // 维度二：REAC-H vs CHII
    { text: "游戏刚开始第二巡，你的手牌一般，上家打出了一张坎张搭子需要的牌，你会？", options: [{ text: "来日方长，万一自己摸到了呢？我要立直", type: "REAC-H" }, { text: "吃！断幺九1000点我来了", type: "CHII" }] },
    { text: "你对“立直”这个操作的看法是？", options: [{ text: "立直麻将一定要立直！", type: "REAC-H" }, { text: "立直是什么？断幺九永远的神！", type: "CHII" }] },
    { text: "手里有一对中，别的牌形状还不错，别人早早打出中，你会碰吗？", options: [{ text: "不碰，万一摸到第三张了呢，实在不行当雀头", type: "REAC-H" }, { text: "碰！有役再说，1000点就1000点", type: "CHII" }] },
    { text: "你更喜欢下面哪种牌？", options: [{ text: "立平dora2，7700点", type: "REAC-H" }, { text: "断幺dora3，7700点", type: "CHII" }] },
    { text: "你家一姬是哪款？", options: [{ text: "立chi nya！自摸nya！", type: "REAC-H" }, { text: "chii nya！碰nya！", type: "CHII" }] },

    // 维度三：ATT-ACK vs TUR-TLE
    { text: "下家第三巡立直了，你的牌两向听，形状还行，没有绝对安全牌，你会？", options: [{ text: "看不见", type: "ATT-ACK" }, { text: "打个边张防一手吧", type: "TUR-TLE" }] },
    { text: "东一局，庄家立直了，你听牌了，立直平和2000点。你怎么办？", options: [{ text: "立！直接刚", type: "ATT-ACK" }, { text: "不想点12000，跑吧", type: "TUR-TLE" }] },
    { text: "第8巡，上家看起来在做万子染手，两副露但还没溢出。你的牌好形一向听，但是摸到一张用不上的7万，你会？", options: [{ text: "应该没听，听了也不胡这张", type: "ATT-ACK" }, { text: "两副露听牌概率不小，跑", type: "TUR-TLE" }] },
    { text: "南4局，大家点数都差不多，没人上30000点，你目前二位，你不是庄家，被自摸也不会掉到四位。你坎张听牌了，立直dora1的2600点，目前没人立直，你会？", options: [{ text: "立，万一中里了就一位结束", type: "ATT-ACK" }, { text: "默听有人立就跑，不吃四就行", type: "TUR-TLE" }] },
    { text: "有人开局中张连打，看着像在做国士。你在第11巡好形一向听，牌是立平dora1的3900点。这时摸到了一张没见过的幺九牌，你会？", options: [{ text: "国士没那么好做的，不怕", type: "ATT-ACK" }, { text: "万一点32000就吃四了，不打了", type: "TUR-TLE" }] },

    // 维度四：SCI-MJ vs FLOW
    { text: "连续三把胡了满贯，现在是南1局的大一位。有人立直了，你可以追立，牌是两面听牌5200点，你会？", options: [{ text: "大top，不对刚了，跑", type: "SCI-MJ" }, { text: "流势在我，追立", type: "FLOW" }] },
    { text: "连续三局起手牌极差，一直不进张，你认为原因是？", options: [{ text: "正常现象，没办法", type: "SCI-MJ" }, { text: "流势没了，我要吃碰改变流势", type: "FLOW" }] },
    { text: "在防守时，你主要依据什么？", options: [{ text: "这张是筋，应该比较安全", type: "SCI-MJ" }, { text: "我的感觉告诉我不胡这张", type: "FLOW" }] },
    { text: "开局你打了一张孤张2万，结果连着摸了两张2万，你会怎么办？", options: [{ text: "坚持牌效，正常做牌", type: "SCI-MJ" }, { text: "这是发牌姬给我的信号，该做四暗刻了", type: "FLOW" }] },
    { text: "如果要上分，你觉得哪个更重要？", options: [{ text: "理论学习和AI复盘", type: "SCI-MJ" }, { text: "风水宝地和良辰吉日", type: "FLOW" }] }
];

const typesData = {
    "FAST": { name: "速攻达人", desc: "胡牌就是胜利，牌效就是信仰" },
    "DREA-M": { name: "梦想家", desc: "开局两对？四暗刻！开局白发中各一张？大三元！开局断幺九听牌？国士！" },
    "REAC-H": { name: "通通立仙人", desc: "立直麻将一定要立直！" },
    "CHII": { name: "副露狂魔", desc: "按钮亮了！" },
    "ATT-ACK": { name: "狂战士", desc: "别人立直我不慌，坎张nomi敢日庄" },
    "TUR-TLE": { name: "神龟", desc: "不点炮就不会......无铳吃四发牌姬全责" },
    "SCI-MJ": { name: "麻将科学家", desc: "这里立直比弃和的局收支高100点，所以要进攻（荣喵，-18000）" },
    "FLOW": { name: "流势大师", desc: "流势在我！" }
};

let questions = [];
let currentQuestionIndex = 0;
let scores = {};

// 乱序数组
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// 页面切换
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 初始化测试
function initQuiz() {
    scores = {
        "FAST": 0, "DREA-M": 0,
        "REAC-H": 0, "CHII": 0,
        "ATT-ACK": 0, "TUR-TLE": 0,
        "SCI-MJ": 0, "FLOW": 0
    };
    
    // 随机打乱题目
    questions = shuffle([...rawQuestions]);
    currentQuestionIndex = 0;
    
    renderQuestion();
    showPage('quiz-page');
}

// 渲染当前题目
function renderQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('question-count').innerText = `题目 ${currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById('progress').style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
    document.getElementById('question-text').innerText = q.text;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // 选项也随机打乱一下显示
    const options = shuffle([...q.options]);
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => selectOption(opt.type);
        optionsContainer.appendChild(btn);
    });
}

// 选择选项
function selectOption(type) {
    scores[type]++;
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        document.getElementById('progress').style.width = '100%';
        setTimeout(showResult, 300);
    }
}

// 显示结果
function showResult() {
    // 找出得分最高的性格类型
    let maxScore = -1;
    let topTypes = [];
    
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            topTypes = [type];
        } else if (score === maxScore) {
            topTypes.push(type);
        }
    }
    
    // 如果有多个最高分，随机抽取一个
    const finalTypeKey = topTypes[Math.floor(Math.random() * topTypes.length)];
    const finalType = typesData[finalTypeKey];
    
    document.getElementById('result-name').innerText = `${finalTypeKey} (${finalType.name})`;
    document.getElementById('result-desc').innerText = finalType.desc;
    
    // 渲染各个维度的条形图
    const totalD1 = scores["FAST"] + scores["DREA-M"];
    const pctD1 = totalD1 === 0 ? 50 : (scores["FAST"] / totalD1) * 100;
    document.getElementById('bar-fast-dream').style.width = `${pctD1}%`;
    
    const totalD2 = scores["REAC-H"] + scores["CHII"];
    const pctD2 = totalD2 === 0 ? 50 : (scores["REAC-H"] / totalD2) * 100;
    document.getElementById('bar-reach-chii').style.width = `${pctD2}%`;
    
    const totalD3 = scores["ATT-ACK"] + scores["TUR-TLE"];
    const pctD3 = totalD3 === 0 ? 50 : (scores["ATT-ACK"] / totalD3) * 100;
    document.getElementById('bar-attack-turtle').style.width = `${pctD3}%`;
    
    const totalD4 = scores["SCI-MJ"] + scores["FLOW"];
    const pctD4 = totalD4 === 0 ? 50 : (scores["SCI-MJ"] / totalD4) * 100;
    document.getElementById('bar-sci-flow').style.width = `${pctD4}%`;
    
    showPage('result-page');
}

// 事件监听
document.getElementById('start-btn').addEventListener('click', initQuiz);
document.getElementById('restart-btn').addEventListener('click', initQuiz);