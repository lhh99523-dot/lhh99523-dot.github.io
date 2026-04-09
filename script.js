// 塔罗牌数据
const tarotCards = [
    // 大阿卡纳（22张）
    {
        name: "魔术师",
        meaning: "创造、技能、意志力、计划",
        analysis: "最近你在创造力和技能方面会有不错的表现，可能会有新的计划或项目开始。"
    },
    {
        name: "女祭司",
        meaning: "直觉、潜意识、神秘、内在知识",
        analysis: "你需要倾听自己的直觉，关注内在的声音，可能会有一些神秘的启示。"
    },
    {
        name: "女皇",
        meaning: "丰饶、母性、关系、创造力",
        analysis: "最近在人际关系或创造力方面会有丰收，可能会有新的机会出现。"
    },
    {
        name: "皇帝",
        meaning: "权威、结构、控制、领导力",
        analysis: "你可能会在工作或生活中承担更多的责任，展现领导力。"
    },
    {
        name: "教皇",
        meaning: "传统、信仰、指导、教育",
        analysis: "你可能会寻求指导或教育，或者在某个领域成为他人的导师。"
    },
    {
        name: "恋人",
        meaning: "关系、选择、爱、和谐",
        analysis: "最近在人际关系方面会有重要的选择或发展，可能会有新的爱情或合作机会。"
    },
    {
        name: "战车",
        meaning: "胜利、控制、决心、方向",
        analysis: "你会有明确的目标和方向，通过努力和决心取得成功。"
    },
    {
        name: "力量",
        meaning: "勇气、力量、耐心、控制",
        analysis: "你会展现出内在的力量和勇气，克服困难，取得成功。"
    },
    {
        name: "隐士",
        meaning: "内省、独处、智慧、指导",
        analysis: "你可能需要一些独处的时间来反思和寻找内在的智慧。"
    },
    {
        name: "命运之轮",
        meaning: "变化、命运、循环、机会",
        analysis: "最近会有一些命运的变化，可能会有新的机会出现。"
    },
    {
        name: "正义",
        meaning: "正义、平衡、法律、真相",
        analysis: "你会寻求平衡和正义，可能会有一些法律或道德方面的问题需要处理。"
    },
    {
        name: "倒吊人",
        meaning: "牺牲、视角、等待、转变",
        analysis: "你可能需要换个角度看问题，或者做出一些牺牲来获得更大的收获。"
    },
    {
        name: "死神",
        meaning: "结束、转变、重生、新开始",
        analysis: "最近会有一些结束和新的开始，可能会有重大的转变。"
    },
    {
        name: "节制",
        meaning: "平衡、和谐、适度、融合",
        analysis: "你需要在生活的各个方面寻求平衡，保持和谐。"
    },
    {
        name: "恶魔",
        meaning: "诱惑、束缚、欲望、物质",
        analysis: "你可能会面临一些诱惑或束缚，需要保持清醒的头脑。"
    },
    {
        name: "塔",
        meaning: "突然变化、危机、崩溃、觉醒",
        analysis: "最近可能会有一些突然的变化或危机，但这也是觉醒和成长的机会。"
    },
    {
        name: "星星",
        meaning: "希望、灵感、宁静、指引",
        analysis: "你会充满希望和灵感，找到前进的方向。"
    },
    {
        name: "月亮",
        meaning: "潜意识、恐惧、幻觉、直觉",
        analysis: "你需要关注自己的潜意识和直觉，可能会有一些情绪上的波动。"
    },
    {
        name: "太阳",
        meaning: "成功、喜悦、活力、真相",
        analysis: "最近会有成功和喜悦，充满活力和正能量。"
    },
    {
        name: "审判",
        meaning: "审判、觉醒、重生、责任",
        analysis: "你会对自己的过去进行反思，做出新的决定，开始新的阶段。"
    },
    {
        name: "世界",
        meaning: "完成、圆满、成功、旅行",
        analysis: "你会完成一个重要的阶段，获得成功和圆满。"
    },
    
    // 小阿卡纳 - 权杖（14张）
    {
        name: "权杖Ace",
        meaning: "新开始、创造力、行动、潜能",
        analysis: "你可能会有新的创意或项目开始，充满活力和热情。"
    },
    {
        name: "权杖2",
        meaning: "平衡、选择、计划、合作",
        analysis: "你需要在不同的选择之间找到平衡，制定清晰的计划。"
    },
    {
        name: "权杖3",
        meaning: "团队、合作、远见、规划",
        analysis: "你可能会与他人合作，共同实现目标，需要有长远的规划。"
    },
    {
        name: "权杖4",
        meaning: "稳定、安全、家庭、庆祝",
        analysis: "你可能会在家庭或工作中找到稳定，值得庆祝的成就。"
    },
    {
        name: "权杖5",
        meaning: "冲突、竞争、挑战、动力",
        analysis: "你可能会面临一些竞争或冲突，但这也会激发你的动力。"
    },
    {
        name: "权杖6",
        meaning: "胜利、成功、认可、进展",
        analysis: "你会在某个领域取得成功，获得他人的认可。"
    },
    {
        name: "权杖7",
        meaning: "坚持、防御、挑战、勇气",
        analysis: "你需要坚持自己的立场，勇敢面对挑战。"
    },
    {
        name: "权杖8",
        meaning: "快速行动、进展、旅行、消息",
        analysis: "事情会快速进展，可能会有旅行或重要消息。"
    },
    {
        name: "权杖9",
        meaning: "警觉、防御、压力、准备",
        analysis: "你需要保持警觉，为可能的挑战做准备。"
    },
    {
        name: "权杖10",
        meaning: "负担、责任、压力、完成",
        analysis: "你可能会承担较多责任，但也会完成重要的任务。"
    },
    {
        name: "权杖侍从",
        meaning: "新想法、好奇心、探索、学习",
        analysis: "你可能会有新的想法，充满好奇心和探索精神。"
    },
    {
        name: "权杖骑士",
        meaning: "行动、冒险、热情、冲动",
        analysis: "你会采取积极行动，充满热情和冒险精神。"
    },
    {
        name: "权杖王后",
        meaning: "创造力、热情、领导力、自信",
        analysis: "你会展现出创造力和领导力，充满自信。"
    },
    {
        name: "权杖国王",
        meaning: "权威、领导力、成功、稳定",
        analysis: "你会展现出权威和领导力，取得稳定的成功。"
    },
    
    // 小阿卡纳 - 圣杯（14张）
    {
        name: "圣杯Ace",
        meaning: "新感情、爱、直觉、情感",
        analysis: "你可能会有新的感情开始，或者在情感方面有新的体验。"
    },
    {
        name: "圣杯2",
        meaning: "合作、关系、平衡、和谐",
        analysis: "你会在关系中找到平衡和和谐，可能会有新的合作。"
    },
    {
        name: "圣杯3",
        meaning: "友谊、庆祝、社交、团队",
        analysis: "你会与朋友或团队一起庆祝，享受社交活动。"
    },
    {
        name: "圣杯4",
        meaning: "不满、冷漠、选择、反思",
        analysis: "你可能会对当前的状况感到不满，需要反思和做出选择。"
    },
    {
        name: "圣杯5",
        meaning: "悲伤、失落、遗憾、变化",
        analysis: "你可能会经历一些悲伤或失落，但这也是变化的开始。"
    },
    {
        name: "圣杯6",
        meaning: "礼物、慷慨、互惠、和谐",
        analysis: "你会体验到慷慨和互惠，关系更加和谐。"
    },
    {
        name: "圣杯7",
        meaning: "梦想、幻想、选择、欲望",
        analysis: "你会有很多梦想和欲望，需要做出明智的选择。"
    },
    {
        name: "圣杯8",
        meaning: "离开、放弃、寻求、成长",
        analysis: "你可能会离开当前的状况，寻求新的成长机会。"
    },
    {
        name: "圣杯9",
        meaning: "满足、幸福、享受、独立",
        analysis: "你会感到满足和幸福，享受当前的生活。"
    },
    {
        name: "圣杯10",
        meaning: "家庭、幸福、和谐、满足",
        analysis: "你会在家庭或关系中找到幸福和和谐。"
    },
    {
        name: "圣杯侍从",
        meaning: "新感情、直觉、创造力、敏感",
        analysis: "你会有新的感情体验，展现出直觉和创造力。"
    },
    {
        name: "圣杯骑士",
        meaning: "浪漫、情感、行动、追求",
        analysis: "你会在情感方面采取积极行动，追求自己的目标。"
    },
    {
        name: "圣杯王后",
        meaning: "情感、直觉、关怀、创造力",
        analysis: "你会展现出情感和直觉，关怀他人，富有创造力。"
    },
    {
        name: "圣杯国王",
        meaning: "情感稳定、成熟、领导力、智慧",
        analysis: "你会在情感方面展现出稳定和成熟，具有领导力和智慧。"
    },
    
    // 小阿卡纳 - 宝剑（14张）
    {
        name: "宝剑Ace",
        meaning: "新想法、清晰、真理、突破",
        analysis: "你会有新的想法和突破，思路清晰。"
    },
    {
        name: "宝剑2",
        meaning: "平衡、选择、决策、冲突",
        analysis: "你需要在不同的选择之间做出平衡和决策。"
    },
    {
        name: "宝剑3",
        meaning: "悲伤、心痛、冲突、背叛",
        analysis: "你可能会经历一些悲伤或心痛，但这也是成长的机会。"
    },
    {
        name: "宝剑4",
        meaning: "休息、冥想、反思、恢复",
        analysis: "你需要休息和反思，恢复精力。"
    },
    {
        name: "宝剑5",
        meaning: "冲突、竞争、胜利、损失",
        analysis: "你可能会经历一些冲突或竞争，有得有失。"
    },
    {
        name: "宝剑6",
        meaning: "和平、解决、旅行、进展",
        analysis: "你会找到和平和解决问题的方法，事情会有进展。"
    },
    {
        name: "宝剑7",
        meaning: "策略、机智、竞争、秘密",
        analysis: "你需要运用策略和机智来应对竞争或挑战。"
    },
    {
        name: "宝剑8",
        meaning: "限制、束缚、困境、突破",
        analysis: "你可能会感到限制或束缚，但也有突破的机会。"
    },
    {
        name: "宝剑9",
        meaning: "焦虑、恐惧、失眠、压力",
        analysis: "你可能会感到焦虑或压力，需要找到缓解的方法。"
    },
    {
        name: "宝剑10",
        meaning: "结束、痛苦、转变、新开始",
        analysis: "你会经历一个阶段的结束，虽然痛苦，但也是新开始的机会。"
    },
    {
        name: "宝剑侍从",
        meaning: "新想法、沟通、学习、好奇心",
        analysis: "你会有新的想法，善于沟通和学习。"
    },
    {
        name: "宝剑骑士",
        meaning: "行动、沟通、挑战、正义",
        analysis: "你会采取积极行动，善于沟通，追求正义。"
    },
    {
        name: "宝剑王后",
        meaning: "智慧、清晰、洞察力、独立",
        analysis: "你会展现出智慧和洞察力，具有独立思考能力。"
    },
    {
        name: "宝剑国王",
        meaning: "权威、智慧、领导力、决策",
        analysis: "你会展现出权威和智慧，具有领导力和决策能力。"
    },
    
    // 小阿卡纳 - 星币（14张）
    {
        name: "星币Ace",
        meaning: "新机会、财富、物质、开始",
        analysis: "你会有新的财富或物质机会，是一个好的开始。"
    },
    {
        name: "星币2",
        meaning: "平衡、管理、选择、适应",
        analysis: "你需要平衡和管理自己的资源，适应变化。"
    },
    {
        name: "星币3",
        meaning: "合作、技能、团队、创造",
        analysis: "你会与他人合作，运用技能创造价值。"
    },
    {
        name: "星币4",
        meaning: "稳定、安全、占有、保守",
        analysis: "你会追求稳定和安全，可能会有些保守。"
    },
    {
        name: "星币5",
        meaning: "困难、贫困、挑战、希望",
        analysis: "你可能会面临一些困难或挑战，但仍有希望。"
    },
    {
        name: "星币6",
        meaning: "慷慨、分享、平衡、公平",
        analysis: "你会展现出慷慨和分享精神，追求平衡和公平。"
    },
    {
        name: "星币7",
        meaning: "耐心、投资、成长、收获",
        analysis: "你需要耐心投资，等待成长和收获。"
    },
    {
        name: "星币8",
        meaning: "努力、专注、技能、进步",
        analysis: "你会通过努力和专注，提升技能，取得进步。"
    },
    {
        name: "星币9",
        meaning: "成功、财富、独立、舒适",
        analysis: "你会取得成功和财富，享受独立和舒适的生活。"
    },
    {
        name: "星币10",
        meaning: "家庭、财富、传承、稳定",
        analysis: "你会在家庭和财富方面找到稳定，可能会有传承。"
    },
    {
        name: "星币侍从",
        meaning: "新机会、学习、技能、实践",
        analysis: "你会有新的学习和实践机会，提升技能。"
    },
    {
        name: "星币骑士",
        meaning: "努力、专注、责任、进步",
        analysis: "你会通过努力和专注，承担责任，取得进步。"
    },
    {
        name: "星币王后",
        meaning: " abundance、滋养、创造、稳定",
        analysis: "你会展现出丰富和滋养的特质，创造稳定的环境。"
    },
    {
        name: "星币国王",
        meaning: "成功、财富、领导力、稳定",
        analysis: "你会展现出成功和财富，具有领导力和稳定的特质。"
    }
];

// 洗牌函数
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// 初始化游戏
let shuffledCards = [];
let selectedPile = null;

function initGame() {
    // 使用自定义塔罗牌数据或默认数据
    const cardsToUse = customTarotData || tarotCards;
    shuffledCards = shuffle([...cardsToUse]);
    selectedPile = null;
    document.getElementById('result').style.display = 'none';
    
    // 重置卡片样式
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.className = 'card card-back';
        card.innerHTML = '';
        
        // 使用自定义卡片背面图片
        if (customCardBack) {
            card.style.backgroundImage = `url(${customCardBack})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
        } else {
            card.style.backgroundImage = 'none';
        }
        
        card.style.transform = card.style.transform.replace(' scale(1.1)', '');
    });
}

// 处理卡片选择
function handleCardSelect(cardElement) {
    const pileNumber = parseInt(cardElement.dataset.pile);
    const cardIndex = parseInt(cardElement.dataset.cardIndex);
    
    // 确保每堆牌只能选择一张
    if (selectedPiles.has(pileNumber)) {
        // 取消之前的选择
        const previousCard = document.querySelector(`.card[data-pile="${pileNumber}"].selected`);
        if (previousCard) {
            previousCard.classList.remove('selected');
            // 从选中卡片中移除
            selectedCards = selectedCards.filter(card => card.pile !== pileNumber);
        }
    }
    
    // 从洗好的牌中随机选择一张
    // 这样每次选择卡片时都会随机从完整的洗好的牌中选择，增加结果的多样性
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    const selectedCard = shuffledCards[randomIndex];
    
    // 标记当前卡片为选中
    cardElement.classList.add('selected');
    cardElement.classList.remove('card-back');
    selectedPiles.add(pileNumber);
    
    // 显示卡片正面内容
    cardElement.innerHTML = `
        <div class="card-front">
            <div class="card-name">${selectedCard.name}</div>
            <div class="card-meaning">${selectedCard.meaning}</div>
        </div>
    `;
    
    // 添加到选中卡片数组
    selectedCards = selectedCards.filter(card => card.pile !== pileNumber);
    selectedCards.push({ ...selectedCard, pile: pileNumber });
    
    // 更新选择状态
    document.getElementById('selectedCount').textContent = selectedCards.length;
    
    // 显示确认按钮
    if (selectedCards.length === 3) {
        document.getElementById('confirmSelectionBtn').style.display = 'block';
    } else {
        document.getElementById('confirmSelectionBtn').style.display = 'none';
    }
}

// 处理确认选择
function handleConfirmSelection() {
    if (selectedCards.length !== 3) return;
    
    // 显示结果
    setTimeout(() => {
        // 生成专业解读
        const reading = generateProfessionalReading(selectedCards, userSpreadType, userQuestion, userTopic, userTimeRange);
        document.getElementById('analysis').innerHTML = reading;
        document.getElementById('result').style.display = 'block';
        document.getElementById('cardSelection').style.display = 'none';
    }, 1000);
}

// 全局变量
let customBackground = null;
let customCardBack = null;
let customTarotData = null;

// 从本地存储加载设置
function loadSettings() {
    const savedBackground = localStorage.getItem('tarotBackground');
    const savedCardBack = localStorage.getItem('tarotCardBack');
    const savedTarotData = localStorage.getItem('tarotData');
    
    if (savedBackground) {
        customBackground = savedBackground;
        document.querySelector('.stars').style.backgroundImage = `url(${savedBackground})`;
    }
    
    if (savedCardBack) {
        customCardBack = savedCardBack;
    }
    
    if (savedTarotData) {
        try {
            customTarotData = JSON.parse(savedTarotData);
        } catch (e) {
            console.error('Failed to parse tarot data:', e);
        }
    }
}

// 保存设置到本地存储
function saveSettings() {
    if (customBackground) {
        localStorage.setItem('tarotBackground', customBackground);
    }
    
    if (customCardBack) {
        localStorage.setItem('tarotCardBack', customCardBack);
    }
    
    if (customTarotData) {
        localStorage.setItem('tarotData', JSON.stringify(customTarotData));
    }
}

// 处理文件上传
function handleFileUpload(input, callback) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            callback(e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

// 全局变量
let userQuestion = '';
let userTopic = '';
let userTimeRange = '';
let userSpreadType = '';
let selectedCards = [];
let selectedPiles = new Set();

// 生成正逆位
function getCardOrientation() {
    return Math.random() > 0.5 ? '正位' : '逆位';
}

// 获取牌阵位置名称
function getSpreadPositionNames(spreadType) {
    switch(spreadType) {
        case '1':
            return ['指引'];
        case '3':
            return ['过去', '现在', '未来'];
        case '5':
            return ['现状', '挑战', '过去影响', '未来趋势', '建议'];
        case '10':
            return ['当前状况', '挑战', '过去', '未来', '意识', '潜意识', '自我', '环境', '希望与恐惧', '结果'];
        default:
            return ['指引'];
    }
}

// 生成专业解读
function generateProfessionalReading(cards, spreadType, question, topic, timeRange) {
    const questionAnalysis = analyzeQuestion(question);
    const categories = questionAnalysis.categories;
    const intentions = questionAnalysis.intentions;
    const originalQuestion = questionAnalysis.originalQuestion;
    
    let reading = `<h3>专业塔罗解读</h3>`;
    
    // 第一阶段：内部分析（不能直接给用户看）
    // 1. 判断问题类型
    let questionType = '综合运势类';
    if (categories.includes('relationship')) {
        if (originalQuestion.includes('恋爱') || originalQuestion.includes('暧昧')) {
            questionType = '感情类（恋爱/暧昧）';
        } else if (originalQuestion.includes('关系')) {
            questionType = '感情类（关系）';
        } else {
            questionType = '感情类';
        }
    } else if (categories.includes('career')) {
        questionType = '事业/学业类';
    } else if (originalQuestion.includes('要不要') || originalQuestion.includes('会不会') || originalQuestion.includes('能不能') || originalQuestion.includes('是否')) {
        questionType = '是否决策类';
    }
    
    // 2. 生成3张牌（牌名+正逆位）
    const cardsWithOrientation = cards.map(card => ({
        ...card,
        orientation: Math.random() > 0.5 ? '正位' : '逆位'
    }));
    
    // 3. 用关键词总结每张牌（每张≤5个词）
    const cardKeywords = cardsWithOrientation.map(card => {
        // 从牌的含义中提取关键词
        const meaning = card.meaning;
        const words = meaning.split(/[,，。.]/).filter(word => word.trim().length > 0);
        let keywords = [];
        
        for (const word of words) {
            const trimmedWord = word.trim();
            if (trimmedWord.length > 0) {
                keywords.push(trimmedWord);
                if (keywords.length >= 5) break;
            }
        }
        
        // 如果关键词不够，从牌名和含义中提取
        if (keywords.length < 5) {
            const cardNameWords = card.name.split(' ');
            for (const word of cardNameWords) {
                if (!keywords.includes(word) && word.length > 0) {
                    keywords.push(word);
                    if (keywords.length >= 5) break;
                }
            }
        }
        
        return keywords.slice(0, 5);
    });
    
    // 4. 写出核心矛盾（一句话，越具体越好）
    let coreConflict = '';
    if (questionType.includes('感情类')) {
        coreConflict = `你希望与对方发展关系，但可能面临${cardKeywords[1][0]}的阻碍`;
    } else if (questionType === '事业/学业类') {
        coreConflict = `你追求事业/学业发展，但可能遇到${cardKeywords[1][0]}的挑战`;
    } else if (questionType === '是否决策类') {
        coreConflict = `你需要做决策，但${cardKeywords[1][0]}因素可能影响你的选择`;
    } else {
        coreConflict = `你希望改善现状，但${cardKeywords[1][0]}可能成为阻碍`;
    }
    
    // 第二阶段：推理过程
    reading += `<h4>推理过程</h4>`;
    const card1 = cardsWithOrientation[0];
    const card2 = cardsWithOrientation[1];
    const card3 = cardsWithOrientation[2];
    
    let reasoning = `
    <p><strong>现状是</strong>：${card1.name}(${card1.orientation})代表的${card1.meaning}，表明你当前处于${cardKeywords[0].join('、')}的状态。</p>
    <p><strong>问题在于</strong>：${card2.name}(${card2.orientation})带来的${card2.meaning}，意味着你面临${cardKeywords[1].join('、')}的挑战。</p>
    <p><strong>对方/环境实际上</strong>：可能并不像你想象的那样，${card2.orientation === '逆位' ? '反而可能存在' : '可能隐藏着'}${cardKeywords[1][0]}的因素。</p>
    <p><strong>所以结果会</strong>：${card3.name}(${card3.orientation})暗示的${card3.meaning}，表明${card3.orientation === '正位' ? '积极的' : '需要调整的'}发展趋势。</p>
    `;
    reading += reasoning;
    
    // 第三阶段：对用户说的话
    reading += `<h4>针对性解读</h4>`;
    
    // 针对性解读
    let targetedReading = '';
    if (questionType.includes('感情类')) {
        if (originalQuestion.includes('在一起') || originalQuestion.includes('会有结果')) {
            targetedReading = `关于你和对方的关系发展，当前你们可能处于${card1.meaning}的状态。对方可能因为${card2.meaning}的原因有所顾虑或犹豫，甚至可能在试探你的态度。从发展趋势来看，${card3.meaning}暗示着你们的关系需要双方共同努力才能有进一步发展。`;
        } else {
            targetedReading = `关于你的感情状况，当前你可能处于${card1.meaning}的状态。在关系中，${card2.meaning}可能是你需要面对的挑战或问题，你可能在逃避某些现实问题。从发展趋势来看，${card3.meaning}暗示着你的感情生活会有新的变化。`;
        }
    } else if (questionType === '事业/学业类') {
        targetedReading = `关于你的事业/学业，当前你可能处于${card1.meaning}的状态。在工作/学习中，${card2.meaning}可能是你需要面对的挑战或机会，你可能在拖延某些重要任务。从发展趋势来看，${card3.meaning}暗示着你的事业/学业会有新的进展。`;
    } else if (questionType === '是否决策类') {
        targetedReading = `关于你的决策问题，当前${card1.meaning}是你需要考虑的核心因素。在做决定时，${card2.meaning}可能会影响你的选择，你可能在犹豫是否要冒险。从发展趋势来看，${card3.meaning}暗示着你的决策会带来怎样的结果。`;
    } else {
        targetedReading = `关于你的综合运势，当前${card1.meaning}是你需要关注的重点。在未来${timeRange}个月内，${card2.meaning}可能会对你产生影响，你可能在面对变化时感到不安。从发展趋势来看，${card3.meaning}暗示着你会经历怎样的变化。`;
    }
    reading += `<p>${targetedReading}</p>`;
    
    // 明确结论
    reading += `<h4>明确结论</h4>`;
    let conclusion = '';
    if (questionType === '是否决策类') {
        // 为是否类问题提供明确的是/否结论
        if (card3.orientation === '正位' && (card1.orientation === '正位' || card2.orientation === '正位')) {
            conclusion = `会`;
        } else if (card3.orientation === '正位' && card1.orientation === '逆位' && card2.orientation === '逆位') {
            conclusion = `偏会`;
        } else if (card3.orientation === '逆位' && (card1.orientation === '逆位' || card2.orientation === '逆位')) {
            conclusion = `不会`;
        } else {
            conclusion = `偏不会`;
        }
    } else if (questionType.includes('感情类')) {
        if (card3.orientation === '正位') {
            conclusion = `建议尝试发展关系`;
        } else {
            conclusion = `不建议急于发展关系`;
        }
    } else if (questionType === '事业/学业类') {
        if (card3.orientation === '正位') {
            conclusion = `建议积极推进`;
        } else {
            conclusion = `建议谨慎行事`;
        }
    } else {
        if (card3.orientation === '正位') {
            conclusion = `发展趋势积极`;
        } else {
            conclusion = `需要调整策略`;
        }
    }
    reading += `<p>${conclusion}</p>`;
    
    // 行动建议
    reading += `<h4>行动建议</h4>`;
    reading += `<ul>`;
    
    // 基于卡片组合生成具体可执行的行动建议
    const suggestions = getActionSuggestions(cardsWithOrientation, topic, question);
    // 确保至少有2条建议
    const effectiveSuggestions = suggestions.slice(0, 5);
    effectiveSuggestions.forEach(suggestion => {
        reading += `<li>${suggestion}</li>`;
    });
    
    reading += `</ul>`;
    
    // 一句点破
    reading += `<h4>一句点破</h4>`;
    let keyPoint = '';
    if (questionType.includes('感情类')) {
        keyPoint = `核心问题不是对方是否喜欢你，而是你是否有勇气面对关系中的挑战`;
    } else if (questionType === '事业/学业类') {
        keyPoint = `核心问题不是机会是否存在，而是你是否准备好抓住它`;
    } else if (questionType === '是否决策类') {
        keyPoint = `核心问题不是选择哪条路，而是你是否愿意承担选择的后果`;
    } else {
        keyPoint = `核心问题不是环境如何变化，而是你如何应对变化`;
    }
    reading += `<p>${keyPoint}</p>`;
    
    // 免责声明
    reading += '<h4>免责声明</h4>';
    reading += '<p>塔罗是心理觉察工具，非宿命预言，最终决策由你负责。</p>';
    
    return reading;
}

// 分析用户问题，提取关键词和具体意图
function analyzeQuestion(question) {
    const keywords = {
        career: {
            words: ['工作', '职业', '事业', '职场', '晋升', '面试', '工作机会', '职业发展', '跳槽', '加薪', '离职', '求职', '创业'],
            intentions: {
                promotion: ['晋升', '升职', '提拔', '加薪'],
                jobSearch: ['找工作', '求职', '面试', '跳槽', '换工作'],
                careerGrowth: ['职业发展', '职业规划', '事业', '职场'],
               创业: ['创业', '开店', '生意', '事业']
            }
        },
        relationship: {
            words: ['感情', '恋爱', '婚姻', '关系', '伴侣', '爱情', '友情', '家庭', '对象', '配偶', '恋人', '男女朋友', '在一起', '她', '他', '喜欢', '爱', '追', '表白'],
            intentions: {
                romantic: ['恋爱', '爱情', '对象', '男女朋友', '恋人', '在一起', '喜欢', '爱', '追', '表白'],
                marriage: ['婚姻', '配偶', '结婚'],
                family: ['家庭', '亲情'],
                friendship: ['友情', '朋友']
            }
        },
        finance: {
            words: ['财务', '金钱', '财富', '投资', '收入', '支出', '理财', '经济', '存款', '债务', '开销', '工资', '奖金'],
            intentions: {
                investment: ['投资', '理财', '股票', '基金'],
                savings: ['存款', '储蓄', '省钱'],
                income: ['收入', '工资', '奖金', '赚钱'],
                expenses: ['支出', '开销', '债务', '花钱']
            }
        },
        personal: {
            words: ['个人', '成长', '健康', '学习', '自我', '情绪', '心理', '生活', '身体', '精神', '心灵', '心态'],
            intentions: {
                health: ['健康', '身体', '疾病', '医疗'],
                personalGrowth: ['个人成长', '自我提升', '学习', '成长'],
                emotional: ['情绪', '心理', '心态', '心情'],
                lifestyle: ['生活', '生活方式', '日常']
            }
        }
    };
    
    const analysis = {
        categories: [],
        intentions: [],
        keywords: [],
        originalQuestion: question
    };
    
    // 特殊问题模式匹配
    const relationshipPatterns = [
        /我会和.*在一起吗/, 
        /我能和.*在一起吗/, 
        /我是否会和.*在一起/, 
        /我和.*会在一起吗/, 
        /我喜欢.*怎么办/, 
        /我应该向.*表白吗/, 
        /我和.*的关系如何/, 
        /我和.*会有结果吗/
    ];
    
    // 检查特殊关系问题模式
    for (const pattern of relationshipPatterns) {
        if (pattern.test(question)) {
            analysis.categories.push('relationship');
            analysis.intentions.push('romantic');
            analysis.keywords.push('在一起');
            break;
        }
    }
    
    // 分析类别
    for (const [category, data] of Object.entries(keywords)) {
        for (const word of data.words) {
            if (question.includes(word) && !analysis.categories.includes(category)) {
                analysis.categories.push(category);
                analysis.keywords.push(word);
            }
        }
    }
    
    // 分析具体意图
    for (const [category, data] of Object.entries(keywords)) {
        for (const [intention, intentionWords] of Object.entries(data.intentions)) {
            for (const word of intentionWords) {
                if (question.includes(word) && !analysis.intentions.includes(intention)) {
                    analysis.intentions.push(intention);
                    if (!analysis.keywords.includes(word)) {
                        analysis.keywords.push(word);
                    }
                }
            }
        }
    }
    
    // 如果没有找到类别，默认个人类别
    if (analysis.categories.length === 0) {
        analysis.categories.push('personal');
    }
    
    return analysis;
}

// 获取位置意义
function getPositionMeaning(position, card, orientation, topic, question) {
    // 根据用户问题和位置生成更相关的解读
    const questionAnalysis = analyzeQuestion(question);
    const categories = questionAnalysis.categories;
    const intentions = questionAnalysis.intentions;
    const originalQuestion = questionAnalysis.originalQuestion;
    
    // 生成更自然的位置意义解读
    const positionIntroductions = [
        `${position}位置的${card.name}${orientation}似乎在告诉你`,
        `当${card.name}${orientation}出现在${position}位置时，它可能在提示你`,
        `在${position}这个位置，${card.name}${orientation}带来的信息是`,
        `${position}位置的${card.name}${orientation}暗示着`
    ];
    
    const introduction = positionIntroductions[Math.floor(Math.random() * positionIntroductions.length)];
    
    let positionMeaning = `${introduction}`;
    
    // 根据问题类型和具体意图调整解读，使其更加自然和个性化
    if (categories.includes('career')) {
        if (intentions.includes('promotion')) {
            positionMeaning += `关于你的职业晋升，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你有机会获得认可和提升，关键是要保持专业态度，展示你的价值。`;
        } else if (intentions.includes('jobSearch')) {
            positionMeaning += `针对你的求职情况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这暗示着新的工作机会可能正在向你靠近，建议保持积极的求职态度。`;
        } else if (intentions.includes('careerGrowth')) {
            positionMeaning += `关于你的职业发展，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你会在职业道路上遇到新的挑战和机遇，帮助你实现成长。`;
        } else if (intentions.includes('创业')) {
            positionMeaning += `对于你的创业计划，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这暗示着你的创业道路可能会有新的进展，需要保持专注和灵活。`;
        } else {
            positionMeaning += `关于你的职业情况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你会经历一些职业上的变化，需要保持开放的心态。`;
        }
    } else if (categories.includes('relationship')) {
        if (intentions.includes('romantic')) {
            positionMeaning += `关于你的感情生活，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的爱情关系会有新的发展，建议保持真诚的沟通。`;
        } else if (intentions.includes('marriage')) {
            positionMeaning += `关于你的婚姻关系，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的婚姻会更加稳定和和谐，需要双方共同努力维护。`;
        } else if (intentions.includes('family')) {
            positionMeaning += `关于你的家庭关系，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的家庭生活会更加融洽，建议多花时间与家人相处。`;
        } else if (intentions.includes('friendship')) {
            positionMeaning += `关于你的友情，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的友谊会更加深厚，建议保持与朋友的联系和互动。`;
        } else {
            positionMeaning += `关于你的感情状况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你会经历一些情感上的变化，需要保持平衡的心态。`;
        }
    } else if (categories.includes('finance')) {
        if (intentions.includes('investment')) {
            positionMeaning += `关于你的投资情况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的投资会有回报，建议保持理性的投资策略。`;
        } else if (intentions.includes('savings')) {
            positionMeaning += `关于你的储蓄计划，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的积蓄会有所增长，建议保持良好的储蓄习惯。`;
        } else if (intentions.includes('income')) {
            positionMeaning += `关于你的收入情况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的收入会有所增加，建议合理规划和管理你的财务。`;
        } else if (intentions.includes('expenses')) {
            positionMeaning += `关于你的支出情况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你需要更加注意控制开支，建议制定合理的预算。`;
        } else {
            positionMeaning += `关于你的财务状况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你会经历一些财务上的变化，需要保持谨慎的理财态度。`;
        }
    } else if (categories.includes('personal')) {
        if (intentions.includes('health')) {
            positionMeaning += `关于你的健康状况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的健康会有所改善，建议保持健康的生活方式。`;
        } else if (intentions.includes('personalGrowth')) {
            positionMeaning += `关于你的个人成长，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你会有新的自我突破和成长，建议保持学习和探索的态度。`;
        } else if (intentions.includes('emotional')) {
            positionMeaning += `关于你的情绪状态，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的情绪会更加稳定，建议学习情绪管理的技巧。`;
        } else if (intentions.includes('lifestyle')) {
            positionMeaning += `关于你的生活方式，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你的生活质量会有所提高，建议保持平衡的生活节奏。`;
        } else {
            positionMeaning += `关于你的个人情况，${card.analysis.replace(/最近/g, `在未来${userTimeRange}个月内`)}。这可能意味着你会经历一些个人层面的变化和成长，需要保持自我觉察。`;
        }
    } else {
        positionMeaning += `${card.analysis}。这可能与你当前关注的${topic}方面有关，建议保持开放的心态去理解其中的信息。`;
    }
    
    return positionMeaning;
}

// 获取综合解读
function getComprehensiveReading(cards, topic, timeRange, question) {
    // 根据用户问题生成更相关的综合解读
    const questionAnalysis = analyzeQuestion(question);
    const categories = questionAnalysis.categories;
    const intentions = questionAnalysis.intentions;
    const keywords = questionAnalysis.keywords;
    const originalQuestion = questionAnalysis.originalQuestion;
    
    // 生成更自然的综合解读开头，包含用户问题的元素
    const introductions = [
        `针对你提出的问题，综合三张卡片的信息，在未来${timeRange}个月内，`,
        `结合${cards[0].name}、${cards[1].name}和${cards[2].name}的能量，回应你关于${keywords.length > 0 ? keywords.join('、') : topic}的问题，在未来${timeRange}个月内，`,
        `从卡片的组合来看，关于你所问的${originalQuestion.substring(0, 20)}...，在未来${timeRange}个月内，`,
        `根据所选卡片的整体信息，针对你的具体问题，在未来${timeRange}个月内，`
    ];
    
    const introduction = introductions[Math.floor(Math.random() * introductions.length)];
    
    let comprehensiveReading = `${introduction}`;
    
    // 特殊处理"我会和她在一起吗"这样的问题
    const relationshipQuestionPatterns = [
        /我会和.*在一起吗/, 
        /我能和.*在一起吗/, 
        /我是否会和.*在一起/, 
        /我和.*会在一起吗/, 
        /我和.*会有结果吗/
    ];
    
    let isRelationshipQuestion = false;
    for (const pattern of relationshipQuestionPatterns) {
        if (pattern.test(question)) {
            isRelationshipQuestion = true;
            break;
        }
    }
    
    // 根据问题类型和具体意图调整解读，使其更加自然和个性化，直接回应用户的具体问题
    if (categories.includes('relationship')) {
        if (isRelationshipQuestion) {
            // 针对"我们会在一起吗"这样的具体问题
            comprehensiveReading += `关于你是否会和对方在一起的问题，卡片组合传递出的信息是：${cards[0].name}、${cards[1].name}和${cards[2].name}的能量暗示着你们之间有发展的可能性。这与你当前的情况密切相关，建议你保持真诚的沟通，表达你的感受，同时尊重对方的想法和选择，给彼此足够的时间和空间来发展这段关系。`;
        } else if (intentions.includes('romantic')) {
            // 检查是否是关于开始一段关系的问题
            const startRelationshipPatterns = [
                /我和.*会在一起吗/, 
                /我会和.*在一起吗/, 
                /我们会在一起吗/, 
                /我能和.*在一起吗/, 
                /我应该向.*表白吗/, 
                /我喜欢.*怎么办/
            ];
            
            let isStartRelationshipQuestion = false;
            for (const pattern of startRelationshipPatterns) {
                if (pattern.test(question)) {
                    isStartRelationshipQuestion = true;
                    break;
                }
            }
            
            if (isStartRelationshipQuestion) {
                comprehensiveReading += `关于你和对方的关系发展问题，卡片组合暗示着你们之间有机会建立更深的连接。这与你当前的情况密切相关，建议你保持开放的心态，真诚地表达你的感受，同时尊重对方的节奏和选择。`;
            } else {
                comprehensiveReading += `关于你的感情问题，卡片组合暗示着你的爱情关系有机会更加深入和丰富。这与你当前的感情状况密切相关，建议你保持开放真诚的沟通，与对方分享感受和想法，共同创造美好回忆。`;
            }
        } else if (intentions.includes('marriage')) {
            comprehensiveReading += `针对你的婚姻问题，卡片组合暗示着你和配偶之间的关系有机会进一步加深。这与你当前的婚姻状况直接相关，建议你们保持良好沟通，共同面对生活挑战，营造温馨家庭氛围。`;
        } else if (intentions.includes('family')) {
            comprehensiveReading += `关于你的家庭问题，卡片组合暗示着你的家庭生活会更加和谐。这与你当前的家庭状况密切相关，建议你多花时间与家人相处，倾听他们的想法和需求，增进彼此的理解和连接。`;
        } else if (intentions.includes('friendship')) {
            comprehensiveReading += `针对你的友情问题，卡片组合暗示着你的友谊有机会进一步巩固和发展。这与你当前的友情状况直接相关，建议你保持与朋友的联系和互动，在他们需要支持时及时伸出援手，共同创造更多美好回忆。`;
        } else {
            comprehensiveReading += `关于你的感情问题，卡片组合暗示着关系的变化和成长。这与你当前的情感状况密切相关，建议你保持开放的沟通，真诚地表达感受，同时尊重对方的需求和边界。`;
        }
    } else if (categories.includes('career')) {
        if (intentions.includes('promotion')) {
            comprehensiveReading += `关于你的晋升问题，卡片组合传递出积极的信号，可能意味着你会获得认可和提升的机会。这与你当前的职业发展状况密切相关，建议你主动展示工作成果，与上级保持良好沟通，抓住可能出现的晋升机会。`;
        } else if (intentions.includes('jobSearch')) {
            comprehensiveReading += `针对你的求职问题，卡片组合暗示着新的工作机会可能正在向你靠近。这与你当前的求职需求直接相关，建议你保持积极态度，更新简历，积极投递申请，为面试做好充分准备。`;
        } else if (intentions.includes('careerGrowth')) {
            comprehensiveReading += `关于你的职业发展问题，卡片组合暗示着你会在职业道路上遇到有意义的挑战和机遇。这与你当前的职业规划密切相关，建议你设定明确目标，持续学习提升技能，抓住能够推动你职业发展的机会。`;
        } else if (intentions.includes('创业')) {
            comprehensiveReading += `针对你的创业问题，卡片组合暗示着你的创业计划有潜力获得积极发展。这与你当前的创业需求直接相关，建议你做好市场调研，制定详细商业计划，保持灵活性，根据市场反馈调整策略。`;
        } else {
            comprehensiveReading += `关于你的职业问题，卡片组合暗示着新的机会和挑战正在出现。这与你当前的职业状况密切相关，建议你保持开放心态，积极面对变化，抓住能够推动你职业发展的机遇。`;
        }
    } else if (categories.includes('finance')) {
        if (intentions.includes('investment')) {
            comprehensiveReading += `关于你的投资问题，卡片组合暗示着你的投资策略有机会获得不错的收益。这与你当前的投资需求直接相关，建议你保持理性投资态度，分散风险，密切关注市场动态，根据情况调整投资组合。`;
        } else if (intentions.includes('savings')) {
            comprehensiveReading += `针对你的储蓄问题，卡片组合暗示着你的积蓄有机会稳步增加。这与你当前的储蓄需求直接相关，建议你制定合理储蓄计划，控制不必要开支，寻找合适的储蓄工具来增值资金。`;
        } else if (intentions.includes('income')) {
            comprehensiveReading += `关于你的收入问题，卡片组合暗示着你的收入有机会得到提升。这与你当前的收入需求密切相关，建议你合理规划和管理财务，考虑如何让资金发挥最大价值，同时为未来做好准备。`;
        } else if (intentions.includes('expenses')) {
            comprehensiveReading += `针对你的支出问题，卡片组合暗示着你可能需要审视消费习惯。这与你当前的支出状况直接相关，建议你制定详细预算，区分必要和非必要开支，避免冲动购物，保持财务平衡。`;
        } else {
            comprehensiveReading += `关于你的财务问题，卡片组合暗示着财务上的机遇和挑战。这与你当前的财务状况密切相关，建议你保持理性理财态度，制定合理财务计划，同时为紧急情况做好准备。`;
        }
    } else if (categories.includes('personal')) {
        if (intentions.includes('health')) {
            comprehensiveReading += `关于你的健康问题，卡片组合暗示着你的健康状况有机会更加良好。这与你当前的健康状况密切相关，建议你保持健康的生活方式，包括规律作息、均衡饮食和适当运动，同时定期进行健康检查。`;
        } else if (intentions.includes('personalGrowth')) {
            comprehensiveReading += `针对你的个人成长问题，卡片组合暗示着你会有机会探索自我，获得新的认知和成长。这与你当前的个人发展需求直接相关，建议你保持开放心态，积极学习和尝试新事物，不断挑战自己的舒适区。`;
        } else if (intentions.includes('emotional')) {
            comprehensiveReading += `关于你的情绪问题，卡片组合暗示着你的情绪状态有机会更加平和。这与你当前的情绪状况密切相关，建议你学习情绪管理技巧，保持积极心态，同时寻求支持和倾诉，与信任的人分享感受。`;
        } else if (intentions.includes('lifestyle')) {
            comprehensiveReading += `针对你的生活方式问题，卡片组合暗示着你的生活质量有机会得到提升。这与你当前的生活状况直接相关，建议你保持平衡的生活节奏，注重自我照顾，发展兴趣爱好，创造更加充实和有意义的生活。`;
        } else {
            comprehensiveReading += `关于你的个人问题，卡片组合暗示着自我认知和成长的机会。这与你当前的个人状况密切相关，建议你保持开放心态，关注自己的需求和感受，同时积极探索新的可能性。`;
        }
    } else {
        comprehensiveReading += `关于你所问的${topic}问题，卡片组合暗示着你可能会经历一些有意义的变化和成长。这与你当前的状况密切相关，建议你保持开放心态，积极面对挑战，抓住机遇，同时关注自己的内心需求，保持平衡和自我觉察。`;
    }
    
    return comprehensiveReading;
}

// 获取行动建议
function getActionSuggestions(cards, topic, question) {
    const questionAnalysis = analyzeQuestion(question);
    const categories = questionAnalysis.categories;
    const intentions = questionAnalysis.intentions;
    
    // 为每张牌定义特定的行动建议
    const cardSpecificSuggestions = {
        "魔术师": [
            "发挥你的创造力，尝试新的方法解决问题",
            "利用你的技能和资源，创造新的机会",
            "保持积极的心态，相信自己的能力",
            "设定明确的目标，并采取行动实现它们",
            "学会灵活应对变化，适应不同的情况"
        ],
        "女祭司": [
            "倾听你的直觉，相信内在的智慧",
            "花时间反思和内省，了解自己的真实需求",
            "学习和研究，获取更多的知识和信息",
            "保持耐心，等待合适的时机",
            "培养你的直觉能力，相信第一感觉"
        ],
        "皇后": [
            "关注你的创造力和表达能力",
            "培养和谐的人际关系，与他人建立良好的连接",
            "照顾好自己的身体和情绪健康",
            "创造一个舒适和美丽的环境",
            "学习接纳和欣赏自己的内在美"
        ],
        "皇帝": [
            "设定明确的规则和界限，保持秩序",
            "展现你的领导力和决策能力",
            "制定详细的计划，并有条不紊地执行",
            "承担责任，成为可靠的人",
            "学习如何平衡权威和同理心"
        ],
        "教皇": [
            "寻求智慧和指导，向有经验的人学习",
            "参与社区和团体活动，建立连接",
            "坚守你的价值观和信念",
            "分享你的知识和经验，帮助他人",
            "学习如何在传统和创新之间找到平衡"
        ],
        "恋人": [
            "关注你的人际关系，特别是亲密关系",
            "学会做出明智的选择，考虑长远的后果",
            "培养与他人的深度连接和理解",
            "保持开放的心态，接受新的关系",
            "学习如何在关系中保持自我身份"
        ],
        "战车": [
            "设定明确的目标，并为之努力奋斗",
            "保持专注和决心，克服困难和挑战",
            "学会平衡你的情绪和理性",
            "培养你的意志力和毅力",
            "采取行动，不要犹豫或拖延"
        ],
        "力量": [
            "培养你的内在力量和自信",
            "学会控制你的情绪和冲动",
            "展现你的勇气和决心，面对挑战",
            "保持耐心和宽容，对待自己和他人",
            "学习如何以柔克刚，用爱和理解解决问题"
        ],
        "隐士": [
            "花时间独处和反思，了解自己的内心",
            "寻求内在的智慧和指引",
            "学习独立思考和自主决策",
            "保持简单和简约的生活方式",
            "培养你的观察力和洞察力"
        ],
        "命运之轮": [
            "接受生活中的变化和起伏",
            "相信命运的安排，保持乐观的心态",
            "抓住机会，适应新的环境",
            "学习从经验中成长，无论是成功还是失败",
            "保持灵活性，随遇而安"
        ],
        "正义": [
            "保持公平和公正的态度",
            "遵守规则和道德准则",
            "学会平衡你的权利和责任",
            "做出明智和公正的决策",
            "培养你的判断力和洞察力"
        ],
        "倒吊人": [
            "学会从不同的角度看待问题",
            "接受暂时的牺牲和挑战，为了长远的利益",
            "培养你的耐心和毅力",
            "学习放下控制，相信过程",
            "寻找困境中的成长和学习机会"
        ],
        "死神": [
            "接受结束和转变，为新的开始做准备",
            "放下过去的负担和执念",
            "拥抱变化，相信新的机会",
            "学习从损失中成长，寻找新的意义",
            "培养你的适应能力和韧性"
        ],
        "节制": [
            "保持平衡和和谐的生活方式",
            "学会自我控制和适度",
            "培养你的耐心和宽容",
            "寻找不同元素之间的平衡",
            "学习如何在不同的需求之间找到妥协"
        ],
        "恶魔": [
            "识别并面对你的恐惧和欲望",
            "学会控制你的负面情绪和行为",
            "打破束缚你的模式和习惯",
            "培养你的意志力和自律",
            "寻找自由和解放的方式"
        ],
        "塔": [
            "接受突如其来的变化和挑战",
            "学会在危机中保持冷静和坚强",
            "放下旧的结构和观念，为新的开始做准备",
            "培养你的适应能力和韧性",
            "寻找危机中的机会和成长"
        ],
        "星星": [
            "保持希望和乐观的心态",
            "设定远大的目标和梦想",
            "培养你的创造力和想象力",
            "相信宇宙的指引和支持",
            "寻找生活中的美好和灵感"
        ],
        "月亮": [
            "关注你的情绪和潜意识",
            "学会面对和处理你的恐惧和焦虑",
            "培养你的直觉和洞察力",
            "保持耐心，等待真相的揭示",
            "寻找情绪的平衡和稳定"
        ],
        "太阳": [
            "展现你的活力和热情",
            "享受生活的美好和快乐",
            "培养你的自信和自尊",
            "分享你的光和温暖，帮助他人",
            "保持积极的心态，面对挑战"
        ],
        "审判": [
            "反思你的过去，从中学习和成长",
            "接受对你行为的后果和责任",
            "做出必要的改变和调整",
            "寻找新的开始和重生的机会",
            "培养你的自我意识和责任感"
        ],
        "世界": [
            "庆祝你的成就和完成",
            "寻找生活的意义和目的",
            "培养你的全球视野和理解",
            "接受你在宇宙中的位置",
            "寻找和谐和平衡的生活方式"
        ],
        "权杖Ace": [
            "抓住新的机会和开始",
            "展现你的创造力和热情",
            "采取行动，不要犹豫",
            "设定明确的目标，并为之努力",
            "培养你的主动性和领导力"
        ],
        "权杖2": [
            "平衡你的选择和责任",
            "保持灵活性，适应不同的情况",
            "寻找新的机会和可能性",
            "培养你的决策能力",
            "学习如何在不同的选项之间做出选择"
        ],
        "权杖3": [
            "设定长期的目标和愿景",
            "寻求合作和团队精神",
            "探索新的领域和机会",
            "培养你的远见和规划能力",
            "学习如何协调不同的资源和人才"
        ],
        "权杖4": [
            "建立稳定和安全的基础",
            "庆祝你的成就和成功",
            "培养和谐的人际关系",
            "寻找归属感和家庭的温暖",
            "学习如何创造一个舒适的环境"
        ],
        "权杖5": [
            "面对挑战和竞争，保持坚强",
            "寻找合作和共识的机会",
            "培养你的沟通和解决冲突的能力",
            "保持专注和决心，实现你的目标",
            "学习如何在压力下保持冷静"
        ],
        "权杖6": [
            "庆祝你的胜利和成就",
            "展现你的领导力和自信",
            "分享你的成功和经验，帮助他人",
            "保持积极的心态，面对未来的挑战",
            "学习如何保持你的优势和成功"
        ],
        "权杖7": [
            "坚持你的目标，克服障碍",
            "培养你的毅力和决心",
            "寻找创新的方法解决问题",
            "保持专注和集中，面对挑战",
            "学习如何在逆境中保持坚强"
        ],
        "权杖8": [
            "快速行动，抓住机会",
            "保持灵活性，适应变化",
            "培养你的效率和速度",
            "寻找新的机会和可能性",
            "学习如何在压力下保持冷静和高效"
        ],
        "权杖9": [
            "保持警惕，为可能的挑战做准备",
            "培养你的韧性和坚持",
            "寻找支持和帮助，不要独自面对困难",
            "保持专注和决心，实现你的目标",
            "学习如何在压力下保持平衡"
        ],
        "权杖10": [
            "管理你的责任和负担，避免过度压力",
            "寻找支持和帮助，不要独自承担一切",
            "培养你的时间管理和组织能力",
            "设定优先级，专注于最重要的任务",
            "学习如何在责任和自我照顾之间找到平衡"
        ],
        "权杖侍从": [
            "保持好奇心和学习的态度",
            "探索新的兴趣和机会",
            "培养你的创造力和热情",
            "寻找导师和指导，学习新的技能",
            "保持开放的心态，接受新的挑战"
        ],
        "权杖骑士": [
            "采取行动，追求你的目标",
            "展现你的热情和勇气",
            "保持专注和决心，克服障碍",
            "寻找新的机会和冒险",
            "学习如何在行动中保持平衡和智慧"
        ],
        "权杖王后": [
            "展现你的创造力和领导力",
            "培养和谐的人际关系",
            "保持热情和活力，面对挑战",
            "寻找平衡和和谐的生活方式",
            "学习如何在力量和温柔之间找到平衡"
        ],
        "权杖国王": [
            "展现你的领导力和权威",
            "培养你的决策能力和责任感",
            "设定明确的目标，并带领团队实现",
            "保持冷静和理性，面对挑战",
            "学习如何在权力和同理心之间找到平衡"
        ],
        "圣杯Ace": [
            "开放你的心，接受新的感情和机会",
            "培养你的直觉和情感智慧",
            "寻找爱和连接，与他人建立深度关系",
            "保持感恩和欣赏的心态",
            "学习如何表达你的情感和需求"
        ],
        "圣杯2": [
            "培养和谐的人际关系",
            "寻找合作和共识的机会",
            "学习如何在关系中保持平衡",
            "展现你的同理心和理解",
            "建立互相支持和尊重的关系"
        ],
        "圣杯3": [
            "庆祝友谊和社交的快乐",
            "寻找团队合作和集体活动的机会",
            "培养你的社交技能和人际关系",
            "分享你的快乐和资源，帮助他人",
            "学习如何在群体中保持自我身份"
        ],
        "圣杯4": [
            "反思你的需求和欲望，寻找更深层的满足",
            "保持耐心，等待合适的机会",
            "培养你的自我意识和内省能力",
            "寻找新的可能性和机会",
            "学习如何在满足和渴望之间找到平衡"
        ],
        "圣杯5": [
            "面对损失和失望，接受现实",
            "寻找新的希望和机会",
            "培养你的韧性和恢复能力",
            "寻求支持和安慰，不要独自面对痛苦",
            "学习如何从损失中成长和学习"
        ],
        "圣杯6": [
            "分享你的爱和资源，帮助他人",
            "培养和谐的人际关系",
            "寻找互相支持和帮助的机会",
            "保持感恩和慷慨的心态",
            "学习如何在给予和接受之间找到平衡"
        ],
        "圣杯7": [
            "探索你的梦想和欲望，寻找真正的满足",
            "保持现实的态度，区分幻想和现实",
            "培养你的直觉和洞察力",
            "寻找内在的平静和满足",
            "学习如何在欲望和现实之间找到平衡"
        ],
        "圣杯8": [
            "放下过去的负担和不满，寻找新的机会",
            "保持勇气和决心，追求更好的未来",
            "培养你的自我意识和内省能力",
            "寻找新的可能性和方向",
            "学习如何在放下和坚持之间找到平衡"
        ],
        "圣杯9": [
            "庆祝你的成就和满足",
            "保持感恩和欣赏的心态",
            "培养你的自我价值感和自尊",
            "寻找内在的平静和快乐",
            "学习如何在满足和追求之间找到平衡"
        ],
        "圣杯10": [
            "培养和谐的家庭和人际关系",
            "寻找爱和连接的机会",
            "保持感恩和满足的心态",
            "分享你的快乐和资源，帮助他人",
            "学习如何在个人和集体之间找到平衡"
        ],
        "圣杯侍从": [
            "保持开放的心态，接受新的感情和机会",
            "培养你的直觉和情感智慧",
            "寻找学习和成长的机会",
            "保持好奇心和探索的精神",
            "学习如何表达你的情感和需求"
        ],
        "圣杯骑士": [
            "追求你的感情和梦想",
            "展现你的热情和浪漫",
            "保持专注和决心，实现你的目标",
            "寻找深度和真实的连接",
            "学习如何在行动和情感之间找到平衡"
        ],
        "圣杯王后": [
            "展现你的同理心和理解",
            "培养和谐的人际关系",
            "保持直觉和情感智慧",
            "寻找平衡和和谐的生活方式",
            "学习如何在情感和理性之间找到平衡"
        ],
        "圣杯国王": [
            "展现你的情感智慧和领导力",
            "培养和谐的人际关系",
            "保持冷静和理性，面对挑战",
            "寻找平衡和和谐的生活方式",
            "学习如何在情感和权威之间找到平衡"
        ],
        "宝剑Ace": [
            "清晰你的思路和目标",
            "培养你的逻辑思维和分析能力",
            "寻找真相和理解，不要被表面现象迷惑",
            "保持专注和集中，解决问题",
            "学习如何在思考和行动之间找到平衡"
        ],
        "宝剑2": [
            "平衡你的思想和情感",
            "保持冷静和理性，面对挑战",
            "寻找和谐和共识的机会",
            "培养你的决策能力和判断力",
            "学习如何在冲突中保持平衡"
        ],
        "宝剑3": [
            "面对痛苦和悲伤，接受现实",
            "寻找支持和安慰，不要独自面对困难",
            "培养你的韧性和恢复能力",
            "寻找新的希望和机会",
            "学习如何从痛苦中成长和学习"
        ],
        "宝剑4": [
            "休息和恢复，为未来的挑战做准备",
            "寻找内在的平静和反思的机会",
            "培养你的自我照顾和自我关爱",
            "保持耐心，等待合适的时机",
            "学习如何在行动和休息之间找到平衡"
        ],
        "宝剑5": [
            "面对冲突和竞争，保持冷静",
            "寻找合作和共识的机会",
            "培养你的沟通和解决冲突的能力",
            "保持专注和决心，实现你的目标",
            "学习如何在竞争和合作之间找到平衡"
        ],
        "宝剑6": [
            "寻找和平和解决问题的方法",
            "保持冷静和理性，面对挑战",
            "培养你的适应能力和韧性",
            "寻找新的机会和方向",
            "学习如何在困难中保持希望"
        ],
        "宝剑7": [
            "寻找创新和策略的方法解决问题",
            "保持灵活和适应的态度",
            "培养你的洞察力和机智",
            "寻找新的机会和可能性",
            "学习如何在挑战中保持创造力"
        ],
        "宝剑8": [
            "识别并打破限制你的思维和行为模式",
            "寻找新的视角和可能性",
            "培养你的自我意识和内省能力",
            "保持勇气，面对挑战",
            "学习如何在限制中找到自由"
        ],
        "宝剑9": [
            "面对你的恐惧和焦虑，寻找解决方法",
            "寻求支持和帮助，不要独自面对困难",
            "培养你的韧性和恢复能力",
            "保持希望和乐观的心态",
            "学习如何在压力下保持冷静"
        ],
        "宝剑10": [
            "接受结束和转变，为新的开始做准备",
            "寻找新的希望和机会",
            "培养你的韧性和恢复能力",
            "保持勇气，面对挑战",
            "学习如何从困难中成长和学习"
        ],
        "宝剑侍从": [
            "保持好奇心和学习的态度",
            "培养你的逻辑思维和分析能力",
            "寻找新的知识和信息",
            "保持开放的心态，接受新的挑战",
            "学习如何在思考和行动之间找到平衡"
        ],
        "宝剑骑士": [
            "采取行动，追求你的目标",
            "展现你的勇气和决心",
            "保持专注和集中，解决问题",
            "寻找新的机会和挑战",
            "学习如何在行动和思考之间找到平衡"
        ],
        "宝剑王后": [
            "展现你的逻辑思维和分析能力",
            "培养你的洞察力和判断力",
            "保持冷静和理性，面对挑战",
            "寻找真相和理解，不要被表面现象迷惑",
            "学习如何在理性和情感之间找到平衡"
        ],
        "宝剑国王": [
            "展现你的逻辑思维和领导力",
            "培养你的决策能力和判断力",
            "保持冷静和理性，面对挑战",
            "寻找真相和理解，不要被表面现象迷惑",
            "学习如何在权威和同理心之间找到平衡"
        ],
        "星币Ace": [
            "抓住新的财务和物质机会",
            "培养你的理财能力和资源管理",
            "寻找稳定和安全的基础",
            "保持现实和实用的态度",
            "学习如何在物质和精神之间找到平衡"
        ],
        "星币2": [
            "平衡你的财务和资源",
            "保持灵活和适应的态度",
            "寻找新的机会和可能性",
            "培养你的理财能力和资源管理",
            "学习如何在风险和安全之间找到平衡"
        ],
        "星币3": [
            "寻求合作和团队精神，实现共同目标",
            "培养你的技能和专业知识",
            "寻找稳定和安全的基础",
            "保持现实和实用的态度",
            "学习如何在个人和团队之间找到平衡"
        ],
        "星币4": [
            "管理你的财务和资源，确保安全和稳定",
            "保持谨慎和保守的态度",
            "寻找长期的财务规划和目标",
            "培养你的理财能力和资源管理",
            "学习如何在积累和分享之间找到平衡"
        ],
        "星币5": [
            "面对财务和物质的挑战，保持坚强",
            "寻找支持和帮助，不要独自面对困难",
            "培养你的韧性和恢复能力",
            "寻找新的机会和可能性",
            "学习如何在困难中保持希望"
        ],
        "星币6": [
            "分享你的资源和财富，帮助他人",
            "保持公平和公正的态度",
            "寻找平衡和和谐的关系",
            "培养你的理财能力和资源管理",
            "学习如何在给予和接受之间找到平衡"
        ],
        "星币7": [
            "投资你的时间和资源，追求长期的回报",
            "保持耐心和坚持，实现你的目标",
            "培养你的理财能力和资源管理",
            "寻找稳定和安全的基础",
            "学习如何在努力和收获之间找到平衡"
        ],
        "星币8": [
            "专注于你的工作和技能，追求卓越",
            "保持勤奋和努力，实现你的目标",
            "培养你的专业知识和技能",
            "寻找稳定和安全的基础",
            "学习如何在工作和生活之间找到平衡"
        ],
        "星币9": [
            "庆祝你的财务和物质成就",
            "保持感恩和满足的心态",
            "培养你的理财能力和资源管理",
            "寻找内在的平静和快乐",
            "学习如何在物质和精神之间找到平衡"
        ],
        "星币10": [
            "建立稳定和安全的家庭和财务基础",
            "分享你的资源和财富，帮助他人",
            "培养和谐的家庭和人际关系",
            "寻找长期的财务规划和目标",
            "学习如何在个人和集体之间找到平衡"
        ],
        "星币侍从": [
            "学习理财和资源管理的知识",
            "保持好奇和探索的精神",
            "寻找新的机会和可能性",
            "培养你的技能和专业知识",
            "保持现实和实用的态度"
        ],
        "星币骑士": [
            "采取行动，追求你的财务和物质目标",
            "保持稳定和可靠的态度",
            "培养你的理财能力和资源管理",
            "寻找长期的财务规划和目标",
            "学习如何在行动和谨慎之间找到平衡"
        ],
        "星币王后": [
            "展现你的理财能力和资源管理",
            "培养和谐的家庭和人际关系",
            "保持稳定和可靠的态度",
            "寻找平衡和和谐的生活方式",
            "学习如何在物质和精神之间找到平衡"
        ],
        "星币国王": [
            "展现你的理财能力和领导力",
            "培养稳定和安全的基础",
            "保持现实和实用的态度",
            "寻找长期的财务规划和目标",
            "学习如何在权威和同理心之间找到平衡"
        ]
    };
    
    // 生成基于翻牌结果的行动建议
    const suggestions = [];
    
    // 首先根据问题类型确定相关的补充建议
    let additionalSuggestions = [];
    
    if (categories.includes('career')) {
        if (intentions.includes('promotion')) {
            additionalSuggestions = [
                "主动展示你的工作成果，让上级了解你的贡献",
                "寻求反馈和指导，不断提升自己的专业技能",
                "建立良好的职场关系，与同事和上级保持积极沟通",
                "设定明确的职业目标，并制定详细的实现计划",
                "保持学习态度，关注行业发展趋势"
            ];
        } else if (intentions.includes('jobSearch')) {
            additionalSuggestions = [
                "更新你的简历和 LinkedIn 资料，突出你的技能和经验",
                "主动投递简历，参加行业 networking 活动",
                "准备面试，研究目标公司的文化和业务",
                "提升你的面试技巧，准备常见问题的回答",
                "保持积极的心态，不要因为拒绝而气馁"
            ];
        } else if (intentions.includes('careerGrowth')) {
            additionalSuggestions = [
                "设定长期和短期的职业目标，明确发展方向",
                "参加培训和课程，提升专业技能",
                "寻找导师，获取职业发展的指导",
                "拓展人脉，与行业专业人士建立联系",
                "定期评估自己的职业进展，调整发展策略"
            ];
        } else if (intentions.includes('创业')) {
            additionalSuggestions = [
                "做好市场调研，了解目标客户的需求",
                "制定详细的商业计划，包括财务预测",
                "寻找合适的合作伙伴和资源",
                "建立品牌形象，制定营销策略",
                "保持灵活性，根据市场反馈调整创业计划"
            ];
        } else {
            additionalSuggestions = [
                "更新你的简历和专业技能，为新机会做准备",
                "主动寻找网络和职业发展机会，拓展人脉",
                "设定明确的职业目标，并制定详细的实现路径",
                "保持学习态度，适应行业变化和新技术",
                "与同事和上级保持良好沟通，建立积极的工作关系"
            ];
        }
    } else if (categories.includes('relationship')) {
        if (intentions.includes('romantic')) {
            additionalSuggestions = [
                "与伴侣保持定期的深入沟通，分享彼此的感受和想法",
                "安排约会和浪漫的活动，保持感情的新鲜度",
                "学会倾听和理解对方的需求，培养同理心",
                "尊重彼此的个人空间和独立性",
                "共同设定关系目标，为未来规划"
            ];
        } else if (intentions.includes('marriage')) {
            additionalSuggestions = [
                "与配偶保持开放和诚实的沟通，定期交流",
                "共同参与家庭决策，培养团队精神",
                "安排夫妻独处的时间，保持亲密关系",
                "学会妥协和包容，处理冲突的技巧",
                "共同面对生活中的挑战，互相支持"
            ];
        } else if (intentions.includes('family')) {
            additionalSuggestions = [
                "安排家庭活动，增进家庭成员之间的联系",
                "倾听家人的需求和想法，尊重彼此的意见",
                "建立家庭规则和传统，增强家庭凝聚力",
                "学会处理家庭冲突，保持和谐的家庭氛围",
                "表达对家人的爱和感激，营造温暖的家庭环境"
            ];
        } else if (intentions.includes('friendship')) {
            additionalSuggestions = [
                "定期与朋友联系，保持友谊的活跃度",
                "倾听朋友的困扰和分享，提供支持和建议",
                "共同参与有趣的活动，创造美好回忆",
                "尊重朋友的边界和隐私",
                "在朋友需要帮助时，及时伸出援手"
            ];
        } else {
            additionalSuggestions = [
                "与对方保持开放和诚实的沟通，分享彼此的感受",
                "花时间了解彼此的需求和期望，增进理解",
                "建立健康的边界，保持个人空间和独立性",
                "共同参与有意义的活动，增强情感连接",
                "学会倾听和理解对方的观点，培养同理心"
            ];
        }
    } else if (categories.includes('finance')) {
        if (intentions.includes('investment')) {
            additionalSuggestions = [
                "制定投资计划，明确投资目标和风险承受能力",
                "学习投资知识，了解不同的投资工具",
                "分散投资，降低风险",
                "定期评估投资组合，根据市场情况调整",
                "咨询专业的理财顾问，获取专业建议"
            ];
        } else if (intentions.includes('savings')) {
            additionalSuggestions = [
                "制定详细的储蓄计划，设定储蓄目标",
                "控制日常开支，减少不必要的消费",
                "寻找增加收入的机会，提高储蓄能力",
                "选择合适的储蓄工具，如定期存款或货币基金",
                "定期检查储蓄进度，调整储蓄策略"
            ];
        } else if (intentions.includes('income')) {
            additionalSuggestions = [
                "提升专业技能，增加职场竞争力",
                "寻找副业或兼职机会，增加额外收入",
                "谈判薪资，争取合理的报酬",
                "投资自己的教育和培训，提高 earning potential",
                "制定收入增长计划，设定明确的目标"
            ];
        } else if (intentions.includes('expenses')) {
            additionalSuggestions = [
                "制定详细的预算，跟踪日常开支",
                "减少不必要的消费，区分需求和欲望",
                "寻找节省开支的方法，如比价和优惠券",
                "避免冲动购物，培养理性消费习惯",
                "定期检查开支情况，调整预算"
            ];
        } else {
            additionalSuggestions = [
                "制定详细的预算和财务计划，控制支出",
                "考虑多元化投资，降低财务风险",
                "减少不必要的开支，增加储蓄和投资",
                "学习财务知识，提高理财能力和决策水平",
                "为紧急情况建立应急基金，保障财务安全"
            ];
        }
    } else if (categories.includes('personal')) {
        if (intentions.includes('health')) {
            additionalSuggestions = [
                "保持规律的作息时间，保证充足的睡眠",
                "制定健康的饮食计划，均衡营养",
                "定期锻炼，保持身体活力",
                "减少压力，学习放松技巧",
                "定期体检，关注身体健康状况"
            ];
        } else if (intentions.includes('personalGrowth')) {
            additionalSuggestions = [
                "设定个人成长目标，明确发展方向",
                "阅读书籍和参加课程，扩展知识和技能",
                "寻求反馈和指导，了解自己的优势和不足",
                "挑战自己，尝试新的事物和经历",
                "定期反思和评估自己的成长进度"
            ];
        } else if (intentions.includes('emotional')) {
            additionalSuggestions = [
                "学习情绪管理技巧，保持情绪稳定",
                "寻求支持和倾诉，与信任的人分享感受",
                "培养积极的心态，关注生活中的美好",
                "练习冥想和正念，提高情绪觉察能力",
                "设定健康的边界，保护自己的情绪健康"
            ];
        } else if (intentions.includes('lifestyle')) {
            additionalSuggestions = [
                "设定生活目标，明确生活优先级",
                "培养健康的生活习惯，包括饮食和运动",
                "寻找工作和生活的平衡，避免过度工作",
                "发展兴趣爱好，丰富生活体验",
                "定期休息和放松，充电恢复精力"
            ];
        } else {
            additionalSuggestions = [
                "设定个人成长目标，持续学习和自我提升",
                "培养健康的生活习惯，包括饮食、运动和休息",
                "探索新的兴趣爱好，丰富生活体验和视野",
                "建立支持性的社交网络，与积极的人交往",
                "定期反思和调整生活方向，保持平衡和满足感"
            ];
        }
    } else {
        additionalSuggestions = [
            "保持冥想和自我反思，清晰自己的目标和价值观",
            "与信任的朋友或导师交流，获取不同角度的建议",
            "制定具体的行动计划，分步骤实现你的目标",
            "保持灵活性，适应可能出现的变化和挑战",
            "关注自我照顾，确保身心健康和平衡"
        ];
    }
    
    // 为每张牌添加特定的行动建议，但只选择与问题类型相关的建议
    cards.forEach(card => {
        if (cardSpecificSuggestions[card.name]) {
            // 获取该牌的所有行动建议
            const cardSuggestions = cardSpecificSuggestions[card.name];
            
            // 过滤出与问题类型相关的建议
            let relevantSuggestions = [];
            
            if (categories.includes('relationship')) {
                // 对于情感问题，过滤掉财务相关的建议
                relevantSuggestions = cardSuggestions.filter(suggestion => 
                    !suggestion.includes('财务') && 
                    !suggestion.includes('理财') && 
                    !suggestion.includes('投资') && 
                    !suggestion.includes('预算') && 
                    !suggestion.includes('储蓄')
                );
            } else if (categories.includes('career')) {
                // 对于事业问题，过滤掉与事业无关的建议
                relevantSuggestions = cardSuggestions.filter(suggestion => 
                    suggestion.includes('工作') || 
                    suggestion.includes('职业') || 
                    suggestion.includes('技能') || 
                    suggestion.includes('目标') || 
                    suggestion.includes('团队') || 
                    suggestion.includes('沟通')
                );
            } else if (categories.includes('finance')) {
                // 对于财务问题，过滤掉与财务无关的建议
                relevantSuggestions = cardSuggestions.filter(suggestion => 
                    suggestion.includes('财务') || 
                    suggestion.includes('理财') || 
                    suggestion.includes('投资') || 
                    suggestion.includes('预算') || 
                    suggestion.includes('储蓄') || 
                    suggestion.includes('收入') || 
                    suggestion.includes('支出')
                );
            } else if (categories.includes('personal')) {
                // 对于个人问题，过滤掉与个人成长无关的建议
                relevantSuggestions = cardSuggestions.filter(suggestion => 
                    suggestion.includes('自我') || 
                    suggestion.includes('成长') || 
                    suggestion.includes('健康') || 
                    suggestion.includes('情绪') || 
                    suggestion.includes('生活') || 
                    suggestion.includes('学习')
                );
            } else {
                // 对于其他问题，使用所有建议
                relevantSuggestions = cardSuggestions;
            }
            
            // 如果没有相关建议，使用所有建议
            if (relevantSuggestions.length === 0) {
                relevantSuggestions = cardSuggestions;
            }
            
            // 随机选择一条相关建议
            const randomIndex = Math.floor(Math.random() * relevantSuggestions.length);
            const selectedSuggestion = relevantSuggestions[randomIndex];
            
            // 确保建议不重复
            if (!suggestions.includes(selectedSuggestion)) {
                suggestions.push(selectedSuggestion);
            }
        }
    });
    
    // 如果建议不足5条，添加补充建议
    if (suggestions.length < 5) {
        // 随机选择补充建议，确保不重复
        while (suggestions.length < 5) {
            const randomIndex = Math.floor(Math.random() * additionalSuggestions.length);
            const suggestion = additionalSuggestions[randomIndex];
            if (!suggestions.includes(suggestion)) {
                suggestions.push(suggestion);
            }
        }
    }
    
    return suggestions;
}

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    // 加载设置
    loadSettings();
    
    initGame();
    
    // 开始占卜按钮事件
    document.getElementById('startReadingBtn').addEventListener('click', () => {
        // 获取用户输入
        userQuestion = document.getElementById('question').value.trim();
        userTopic = document.getElementById('topic').value;
        userTimeRange = document.getElementById('timeRange').value;
        userSpreadType = document.getElementById('spreadType').value;
        
        // 验证输入
        if (!userQuestion) {
            alert('请输入具体的问题');
            return;
        }
        
        // 显示牌堆选择区域
        document.getElementById('questionPanel').style.display = 'none';
        document.getElementById('cardSelection').style.display = 'flex';
    });
    
    // 卡片点击事件
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            handleCardSelect(card);
        });
    });
    
    // 确认选择按钮事件
    document.getElementById('confirmSelectionBtn').addEventListener('click', handleConfirmSelection);
    
    // 重置按钮事件
    document.getElementById('resetBtn').addEventListener('click', () => {
        // 重置到初始状态
        document.getElementById('result').style.display = 'none';
        document.getElementById('cardSelection').style.display = 'none';
        document.getElementById('questionPanel').style.display = 'block';
        
        // 重置选择状态
        selectedCards = [];
        selectedPiles.clear();
        document.getElementById('selectedCount').textContent = '0';
        document.getElementById('confirmSelectionBtn').style.display = 'none';
        
        // 重置卡片状态
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('selected');
        });
        
        initGame();
    });
    
    // 设置按钮事件
    document.getElementById('settingsBtn').addEventListener('click', () => {
        document.getElementById('settingsPanel').style.display = 'block';
    });
    
    // 关闭设置面板事件
    document.getElementById('closeSettingsBtn').addEventListener('click', () => {
        document.getElementById('settingsPanel').style.display = 'none';
    });
    
    // 保存设置事件
    document.getElementById('saveSettingsBtn').addEventListener('click', () => {
        // 处理背景图片上传
        const backgroundInput = document.getElementById('backgroundImage');
        if (backgroundInput.files.length > 0) {
            handleFileUpload(backgroundInput, (result) => {
                customBackground = result;
                document.querySelector('.stars').style.backgroundImage = `url(${result})`;
            });
        }
        
        // 处理卡片背面图片上传
        const cardBackInput = document.getElementById('cardBackImage');
        if (cardBackInput.files.length > 0) {
            handleFileUpload(cardBackInput, (result) => {
                customCardBack = result;
            });
        }
        
        // 处理塔罗牌数据导入
        const tarotDataInput = document.getElementById('tarotData');
        if (tarotDataInput.value.trim() !== '') {
            try {
                customTarotData = JSON.parse(tarotDataInput.value);
            } catch (e) {
                alert('塔罗牌数据格式错误，请检查JSON格式');
                return;
            }
        }
        
        // 保存设置
        saveSettings();
        
        // 关闭设置面板
        document.getElementById('settingsPanel').style.display = 'none';
        
        // 重新初始化游戏
        initGame();
    });
    
    // 触摸支持
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!selectedPile && document.getElementById('cardSelection').style.display === 'flex') {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            
            // 简单的触摸区域检测
            const screenWidth = window.innerWidth;
            const pileWidth = screenWidth / 3;
            
            if (touchEndX < pileWidth) {
                handlePileSelect(1);
            } else if (touchEndX < pileWidth * 2) {
                handlePileSelect(2);
            } else {
                handlePileSelect(3);
            }
        }
    });
});