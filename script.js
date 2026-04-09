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
    
    // 标记当前卡片为选中
    cardElement.classList.add('selected');
    selectedPiles.add(pileNumber);
    
    // 为每个卡片位置分配洗好的牌中的一张
    // 这样，每次洗牌后，每个位置会对应不同的牌，但在同一次洗牌中，每个位置对应固定的牌
    const actualCardIndex = (pileNumber - 1) * 3 + cardIndex;
    // 使用模运算确保索引在洗好的牌的范围内
    const normalizedIndex = actualCardIndex % shuffledCards.length;
    const selectedCard = shuffledCards[normalizedIndex];
    
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
    const positionNames = getSpreadPositionNames(spreadType);
    let reading = `<h3>你的问题：${question}</h3>`;
    reading += `<p>主题：${topic} | 时间范围：${timeRange}个月内</p>`;
    reading += '<h4>牌阵解读：</h4>';
    
    // 每张牌的解读
    cards.forEach((card, index) => {
        const orientation = getCardOrientation();
        reading += `
        <div class="card-reading">
            <h5>${positionNames[index]}：${card.name} ${orientation}</h5>
            <p><strong>核心含义：</strong>${card.meaning}</p>
            <p><strong>位置意义：</strong>${getPositionMeaning(positionNames[index], card, orientation, topic)}</p>
        </div>
        `;
    });
    
    // 综合解读
    reading += '<h4>综合解读：</h4>';
    reading += `<p>${getComprehensiveReading(cards, topic, timeRange)}</p>`;
    
    // 行动建议
    reading += '<h4>行动建议：</h4>';
    const suggestions = getActionSuggestions(cards, topic);
    suggestions.forEach((suggestion, index) => {
        reading += `<p>${index + 1}. ${suggestion}</p>`;
    });
    
    // 免责声明
    reading += '<h4>免责声明：</h4>';
    reading += '<p>塔罗是心理觉察工具，非宿命预言，最终决策由你负责。</p>';
    
    return reading;
}

// 获取位置意义
function getPositionMeaning(position, card, orientation, topic) {
    // 这里可以根据位置、卡片、正逆位和主题生成更具体的解读
    return `在${position}位置，${card.name}${orientation}可能暗示着${card.analysis}`;
}

// 获取综合解读
function getComprehensiveReading(cards, topic, timeRange) {
    // 这里可以根据所有卡片生成综合解读
    return `根据所选卡片的整体能量，在未来${timeRange}个月内，你在${topic}方面可能会经历一些变化和成长。建议保持开放的心态，积极面对挑战，抓住机遇。`;
}

// 获取行动建议
function getActionSuggestions(cards, topic) {
    const baseSuggestions = [
        "保持冥想和自我反思，清晰自己的目标和价值观",
        "与信任的朋友或导师交流，获取不同角度的建议",
        "制定具体的行动计划，分步骤实现你的目标",
        "保持灵活性，适应可能出现的变化",
        "关注自我照顾，确保身心健康"
    ];
    
    // 根据主题调整建议
    switch(topic) {
        case 'career':
            return [
                "更新你的简历和专业技能，为新机会做准备",
                "主动寻找网络和职业发展机会",
                "设定明确的职业目标，并制定实现路径",
                "保持学习态度，适应行业变化",
                "与同事和上级保持良好沟通"
            ];
        case 'relationship':
            return [
                "与伴侣保持开放和诚实的沟通",
                "花时间了解彼此的需求和期望",
                "建立健康的边界，保持个人空间",
                "共同参与有意义的活动，增强连接",
                "学会倾听和理解对方的观点"
            ];
        case 'finance':
            return [
                "制定详细的预算和财务计划",
                "考虑多元化投资，降低风险",
                "减少不必要的开支，增加储蓄",
                "学习财务知识，提高理财能力",
                "为紧急情况建立应急基金"
            ];
        case 'personal':
            return [
                "设定个人成长目标，持续学习和发展",
                "培养健康的生活习惯，包括饮食和运动",
                "探索新的兴趣爱好，丰富生活体验",
                "建立支持性的社交网络",
                "定期反思和调整生活方向"
            ];
        default:
            return baseSuggestions;
    }
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