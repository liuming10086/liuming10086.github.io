 // document.getElementById('card-music').getElementsByClassName('item-content').item(0).innerHTML='<div id="aplayer" class="no-destroy"></div>';
    const ap =new APlayer({
        container: document.getElementById('aplayer'),
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 1,
        fixed: true,
        audio: [
            {
                name: '住在天狼星的那個人',
                artist: 'OHMYMEITING',
                url: 'https://music.163.com/song/media/outer/url?id=545009030',
                cover: 'https://p2.music.126.net/VZRyjdY2QWC-MpjXrTaF1g==/109951164544594940.jpg',
                lrc: '[00:00.000] 作词 : 黃美婷 Meiting\n[00:00.544] 作曲 : 黃美婷 Meiting\n[00:01.89]在望无边际的天空上面\n[00:07.11]一闪一闪众多星星里面\n[00:12.28]还是他最耀眼\n[00:17.41]亮得我都睁不开眼\n[00:22.63]我和他之间有几个光年?\n[00:27.73]乘坐太空船赶走了思念\n[00:32.99]看见他的笑颜\n[00:38.10]时间停止在这瞬间\n[00:42.68]住在天狼星的那个人\n[00:45.63]那拐走我的心的人\n[00:48.14]他天天叫我烦恼郁闷\n[00:52.63]明明感觉是对的人\n[00:55.23]但谁也不愿先出声\n[00:58.43]别做无谓的抗争\n[01:03.36]住在天狼星的那个人\n[01:06.19]想趁这机会问一问\n[01:08.72]你心里到底有没有我们?\n[01:13.29]明明你就是对的人\n[01:16.67]你要不要认真\n[01:18.86]给我一个温柔的吻\n[01:21.03]让我们一起私奔\n[01:45.19]漫步星环又绕了一大圈\n[01:50.46]感觉就好像过了一千年\n[01:55.55]远处你的 指尖\n[02:00.60]什么时候才能再碰见\n[02:05.29]住在天狼星的那个人\n[02:08.06]那拐走我的心的人\n[02:10.77]他天天叫我烦恼郁闷\n[02:15.23]明明感觉是对的人\n[02:17.92]但谁也不愿先出声\n[02:20.99]别做无谓的抗争\n[02:25.94]住在天狼星的那个人\n[02:28.75]想趁这机会问一问\n[02:31.44]你心里到底有没有我们?\n[02:35.84]明明你就是对的人\n[02:39.31]你要不要认真\n[02:41.42]给我一个温柔的吻\n[02:43.66]让我们一起私奔\n[02:51.93]就请你不要再答非所问\n[02:56.46]还在犹豫什么?\n[02:59.70]让我们的心布满了星辰\n[03:09.82]住在天狼星的那个人\n[03:12.60]那拐走我的心的人\n[03:15.26]他天天叫我烦恼郁闷\n[03:19.82]明明感觉是对的人\n[03:22.34]但谁也不愿先出声\n[03:25.56]别做无谓的抗争\n[03:30.45]住在天狼星的那个人\n[03:33.32]想趁这机会问一问\n[03:35.90]你心里到底有没有我们?\n[03:40.40]明明你就是对的人\n[03:43.87]你要不要认真\n[03:45.90]给我一个温柔的吻\n[03:48.20]让我们一起私奔\n',
            },
            {
                name: '恋爱频率',
                artist: 'Sasablue',
                url: 'https://music.163.com/song/media/outer/url?id=1928419759',
                cover: 'https://p1.music.126.net/RxhofcXQPZNSDZy5GtZAwA==/109951167192765079.jpg',
                lrc: '[00:00.000] 作词 : 卓泽槟\n[00:01.000] 作曲 : 卓泽槟\n[00:02.000] 编曲 : 正好儿\n[00:03.000] 制作人 : BackToBand赵楚峰\n[00:17.67] Tell me why想不透\n[00:20.97]你让我多么心动\n[00:24.51]遇见你是生命中[00:26.91]最美的彩虹\n[00:30.81]冥冥之中你的回眸\n[00:33.63]最美的镜头\n[00:36.09]想跟你走\n[00:37.59]想拉着你的手\n[00:40.32]可好像显得太冲动\n[00:44.25]已经幻想靠在怀里\n[00:47.64]已经幻想是我依偎着你\n[00:50.25]你却和我保持适当距离\n[00:53.04] ok明白是我太过着急\n[00:57.33]恋爱频率开启\n[01:00.75]我会一点一点想你\n[01:04.14]一天一遍放在心里\n[01:07.53]等到那天终于靠近\n[01:10.83]脸红害羞就深呼吸\n[01:14.28]我会一点一点想你\n[01:17.64]一遍一遍慢慢累积\n[01:21.00]累积成永恒的记忆\n[01:24.27]想够一万遍就在一起\n[01:41.79]冥冥之中你的回眸\n[01:44.64]最美的镜头\n[01:47.13]想跟你走\n[01:48.60]想拉着你的手\n[01:51.24]可好像显得太冲动\n[01:55.26]已经幻想靠在怀里\n[01:58.65]已经幻想是我依偎着你\n[02:01.23]你却和我保持适当距离\n[02:04.02] ok明白是我太过着急\n[02:08.31]恋爱频率开启\n[02:11.67]我会一点一点想你\n[02:15.09]一天一遍放在心里\n[02:18.54]等到那天终于靠近\n[02:21.84]脸红害羞就深呼吸\n[02:25.26]我会一点一点想你\n[02:28.62]一遍一遍慢慢累积\n[02:32.01]累积成永恒的记忆\n[02:35.34]想够一万遍就在一起\n[02:41.91]我会一点一点想你\n[02:45.51]一天一遍放在心里\n[02:48.96]等到那天终于靠近\n[02:52.26]脸红害羞就深呼吸\n[02:55.68]我会一点一点想你\n[02:59.04]一遍一遍慢慢累积\n[03:02.46]累积成永恒的记忆\n[03:05.67]想够一万遍就在一起\n[03:06.380] 营销 : 大声密谋\n[03:07.693] 总监制 : 陈国威 Andrew Chan@索尼音乐\n[03:09.006] 和声 : Sasablue\n[03:10.319] 录音 : Sleepinkid@MaiMaiMusic\n[03:11.632] 混音 : 冯兆麟@西安魔音音乐\n[03:12.945] 母带 : 冯兆麟@西安魔音音乐\n[03:14.258] 封面 : 木子日尧丝内\n[03:15.571] 文案 : 枇杷\n[03:16.884] 艺人统筹 : 乌云/BackToBand赵楚峰\n[03:18.197] 项目统筹 : 杰森/BackToBand赵楚峰/桑玉泓\n[03:19.510] （未经著作权人许可，不得翻唱、翻录或使用）',
            },
            {
                name: '给你呀',
                artist: '蒋小呢',
                url: 'https://music.163.com/song/media/outer/url?id=1497588709',
                cover: 'https://p1.music.126.net/GI1Ex39x73zBT-1r7_o-sQ==/109951165494781109.jpg',
                lrc: '[00:00.000] 作词 : 小卫\n[00:01.000] 作曲 : 小卫\n[00:02.000] 编曲 : G23\n[00:03.000] 制作人 : 欧几\n[00:04.000] 混音 : 裴济逸\n[00:15.320]监制：你的大表哥曲甲\n[00:20.320]所有美好全部come for ya\n[00:22.990]我的爱也全部come for ya\n[00:25.540]Baby 这是我给你的礼物\n[00:28.150]只想把你藏在我心底\n[00:30.960]所有美好全部come for ya\n[00:33.400]我的爱也全部come for ya\n[00:36.180]Baby 这是我给你的礼物\n[00:38.760]只想把你藏在我心底\n[00:42.250]One\n[00:42.870]About stranger lover\n[00:44.540]第一次见面的时候我马上心动了\n[00:46.970]Oh girl\n[00:48.350]你迷人的发尾\n[00:49.780]记得亲你的时候你害羞往后退\n[00:52.460]我天天都想念着圆圆的你\n[00:54.990]你淡淡的发香是迷人的迷\n[00:57.860]you know 不愿意失去你\n[01:00.439]人群再 熙攘我也可以瞬间抓住你\n[01:03.738]亲爱的 what is wrong\n[01:06.200]告诉我 who  you love\n[01:08.867]亲爱的 what is wrong\n[01:11.459]告诉我 who  you love\n[01:14.027]喜欢你是我 的秘密\n[01:16.268]深度就像在海底十万米\n[01:19.209]我欣赏日出和日落的静谧\n[01:21.718]爱着天空也深爱着你\n[01:23.878]所有美好全部come for ya\n[01:26.158]我的爱也全部come for ya\n[01:28.677]Baby 这是我给你的礼物\n[01:31.369]只想把你藏在我心底\n[01:34.080]所有美好全部come for ya\n[01:36.628]我的爱也全部come for ya\n[01:39.399]Baby 这是我给你的礼物\n[01:42.169]只想把你藏在我心底\n[01:45.568]亲爱的 what is wrong\n[01:48.390]告诉我 who  you love\n[01:50.980]亲爱的 what is wrong\n[01:53.519]告诉我 who  you love\n[01:56.238]喜欢你是我 的秘密\n[01:58.590]深度就像在海底十万米\n[02:01.209]我欣赏日出和日落的静谧\n[02:03.786]爱着天空也深爱着你\n[02:05.849]所有美好全部come for ya\n[02:08.060]我的爱也全部come for ya\n[02:10.596]Baby 这是我给你的礼物\n[02:13.247]只想把你藏在我心底\n[02:15.985]所有美好全部come for ya\n[02:18.474]我的爱也全部come for ya\n[02:21.247]Baby 这是我给你的礼物\n[02:23.395]只想把你藏在我心底\n[02:25.846]监制：姚政\n[02:26.846]企划：刘畅\n[02:27.846]统筹：丁柏昕\n[02:28.846]推广：徐思灵/黄紫嫣\n[02:29.846]网易音乐人x飓风工作室 联合出品\n'
            },
            {
                name: '我的711',
                artist: '张叶蕾',
                url: 'https://music.163.com/song/media/outer/url?id=1335548766',
                cover: 'https://p2.music.126.net/FczwlTAj6Pnl-N-HuZ6Jig==/109951163747818803.jpg',
                lrc: '[00:00.000] 作词 : 张叶蕾\n' +
                    '[00:00.000] 作曲 : 张叶蕾\n' +
                    '[00:00.000]作曲 : 张叶蕾\n' +
                    '[00:01.000]作词 : 张叶蕾\n' +
                    '[00:13.23]第一次Eelin Star相遇\n' +
                    '[00:16.75]我根本认不出你\n' +
                    '[00:19.67]你比想象中要熟悉\n' +
                    '[00:23.21]穿着白色波点外衣\n' +
                    '[00:25.80]不经意 在你的笑容中沉溺\n' +
                    '[00:30.97]嘿babe 最爱你美丽下透的傻气\n' +
                    '[00:37.86]台北天天下雨\n' +
                    '[00:42.06]躲在屋檐下的你\n' +
                    '[00:44.25]鲜奶不加冰\n' +
                    '[00:48.20]爱到欲罢不能的你\n' +
                    '[00:50.48]像孩子一样天真地笑 tempo慢的怪异\n' +
                    '[00:55.69]一起坐在彩虹桥的阶梯\n' +
                    '[00:59.60]数着星星\n' +
                    '[01:02.63]啦啦啦 汗湿透外衣\n' +
                    '[01:05.80]明明很累却说不要紧\n' +
                    '[01:09.09]爱逞强爱管闲事的你\n' +
                    '[01:15.11]很孩子气 跟着Ricky\n' +
                    '[01:18.09]喜欢扎进女生堆里\n' +
                    '[01:21.01]What do  mean to me\n' +
                    '[01:24.53]What do we mean to you\n' +
                    '[01:38.91]最后在飞机场分离\n' +
                    '[01:43.10]我哭得喘不过气\n' +
                    '[01:45.68]你比想象中还要像\n' +
                    '[01:48.90]那不打烊的711\n' +
                    '[01:52.07]不经意 回忆那么美丽\n' +
                    '[01:56.09]oh baby 想你想你\n' +
                    '[02:04.11]加州太阳雨\n' +
                    '[02:08.55]没有为我撑伞的你\n' +
                    '[02:10.52]蓝莓碎颗粒\n' +
                    '[02:14.38]没有和我分享的你\n' +
                    '[02:16.68]像孩子一样天真的笑 tempo慢的怪异\n' +
                    '[02:21.48]我们分散在世界的各地\n' +
                    '[02:25.85]等待相聚\n' +
                    '[02:28.69]啦啦啦 是流言蜚语\n' +
                    '[02:32.12]明明很累却说不要紧\n' +
                    '[02:35.06]爱逞强爱管闲事的你\n' +
                    '[02:40.51]很孩子气 跟着Ricky\n' +
                    '[02:44.30]喜欢扎进女生堆里\n' +
                    '[02:47.28]What do mean to me\n' +
                    '[02:50.62]What do we mean to you\n' +
                    '[02:53.79]Da la da\n' +
                    '[02:55.38]Da la da\n' +
                    '[02:57.09]Da la da da da la da\n' +
                    '[02:59.97]Du du du du du lu du lu da la da\n' +
                    '[03:03.56]La la la\n' +
                    '[03:05.86]啦啦啦 汗湿透外衣\n' +
                    '[03:09.11]明明很累却说不要紧\n' +
                    '[03:12.39]爱逞强爱管闲事的你\n' +
                    '[03:17.23]很孩子气 跟着Ricky\n' +
                    '[03:21.05]喜欢扎进女生堆里\n' +
                    '[03:24.36]What do you mean to me\n' +
                    '[03:27.93]What do we mean to you\n' +
                    '[03:33.92]What do we mean to you\n' +
                    '[03:40.60]What do we mean to you\n' +
                    '[03:46.55]What do we mean to you\n'
            },
        ]
    });

