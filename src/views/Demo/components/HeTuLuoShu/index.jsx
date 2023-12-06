import { useState } from "react";
import InteractiveGrid from "../../../../components/canvas/InteractiveGrid/index.tsx";
import CustomDialog from "../../../../components/CustomDialog/index.tsx";
import "./style.css";

const HeTuLuoShu = () => {
    // Dialog states
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogContentIndex, setDialogContentIndex] = useState(null);

    const onGridClick = (i) => {
        setDialogTitle(stellarHanzi[i]);
        setDialogContentIndex(nodes[i].length-1);
        setIsDialogOpen(true);
    };

    // stellar grid width and height
    const gridsWidth = [3, 9, 3];
    const gridsHeight = [3, 7, 5];

    // color
    const color = "black";

    // size
    const size = 30;
    const lineWidth = 5;
    const radius = (size - 2 * lineWidth) / 2;

    // elements in canvas
    const lines = [
        [[0, 0, 2, 2]],
        [
            [1, 0, 1, 1],
            [1, 1, 1, 2],
            [1, 2, 1, 3],
            [1, 3, 1, 4],
            [1, 4, 1, 5],
            [1, 5, 1, 6],
            [1, 6, 1, 7],
            [1, 7, 1, 8],
        ],
        [
            [1, 0, 0, 1],
            [1, 0, 2, 1],
            [0, 1, 1, 2],
            [2, 1, 1, 2],
        ],
        [
            [0, 1, 1, 1],
            [1, 1, 2, 1],
            [2, 1, 3, 1],
            [3, 1, 4, 1],
            [4, 1, 5, 1],
            [5, 1, 6, 1],
        ],
        [
            [3, 2, 3, 4],
            [1, 4, 3, 4],
            [3, 4, 3, 6],
            [3, 4, 5, 4],
        ],
        [
            [1, 1, 3, 1],
            [3, 1, 5, 1],
        ],
        [
            [1, 1, 1, 2],
            [2, 0, 1, 1],
            [1, 2, 2, 2],
            [2, 0, 3, 0],
            [3, 0, 3, 1],
            [3, 1, 2, 2],
        ],
        [],
        [
            [1, 0, 1, 1],
            [1, 1, 1, 2],
            [1, 0, 2, 0],
            [1, 2, 2, 2],
            [2, 0, 3, 0],
            [2, 2, 3, 2],
            [3, 0, 3, 1],
            [3, 1, 3, 2],
        ],
    ];

    const nodes = [
        [
            [true, 0, 0],
            [true, 2, 2],
        ],
        [
            [false, 1, 0],
            [false, 1, 1],
            [false, 1, 2],
            [false, 1, 3],
            [false, 1, 4],
            [false, 1, 5],
            [false, 1, 6],
            [false, 1, 7],
            [false, 1, 8],
        ],
        [
            [true, 0, 1],
            [true, 1, 0],
            [true, 1, 2],
            [true, 2, 1],
        ],
        [
            [false, 0, 1],
            [false, 1, 1],
            [false, 2, 1],
            [false, 3, 1],
            [false, 4, 1],
            [false, 5, 1],
            [false, 6, 1],
        ],
        [
            [false, 1, 4],
            [false, 3, 2],
            [false, 3, 4],
            [false, 3, 6],
            [false, 5, 4],
        ],
        [
            [false, 1, 1],
            [false, 3, 1],
            [false, 5, 1],
        ],
        [
            [true, 1, 1],
            [true, 1, 2],
            [true, 2, 0],
            [true, 2, 2],
            [true, 3, 0],
            [true, 3, 1],
        ],
        [[false, 2, 4]],
        [
            [true, 1, 0],
            [true, 1, 1],
            [true, 1, 2],
            [true, 2, 0],
            [true, 2, 2],
            [true, 3, 0],
            [true, 3, 1],
            [true, 3, 2],
        ],
    ];

    const stellarHanzi = ["二", "九", "四", "七", "五", "三", "六", "一", "八"];

    const hundredHanzi = [
        [["元"], ["道"]],
        [
            ["阴", "阳"],
            ["男", "女"],
        ],
        [
            ["天", "地", "人"],
            ["日", "月", "星"],
        ],
        [
            ["东", "南", "西", "北"],
            ["春", "夏", "秋", "冬"],
        ],
        [
            ["木", "火", "土", "金", "水"],
            ["清", "赤", "黄", "白", "黑"],
        ],
        [
            ["草", "植", "虫", "鱼", "鸟", "兽"],
            ["首", "面", "身", "心", "手", "足"],
        ],
        [
            ["刀", "匕", "斤", "矢", "弓", "戈", "矛"],
            ["喜", "怒", "哀", "惧", "爱", "恶", "欲"],
        ],
        [
            ["云", "川", "电", "雨", "雷", "风", "山", "谷"],
            ["笙", "埙", "革", "柷", "石", "钟", "丝", "竹"],
        ],
        [
            ["衣", "食", "居", "行", "皿", "用", "鼎", "市", "井"],
            ["祖", "父", "母", "兄", "弟", "姐", "妹", "子", "孙"],
        ],
        [
            ["礼", "乐", "射", "御", "书", "数", "琴", "棋", "诗", "画"],
            ["仁", "义", "礼", "智", "信", "福", "寿", "康", "乐", "宁"],
        ],
        [
            ["羽", "毛", "隹", "肉", "爪", "虎", "飞", "豸", "齿", "骨", "贝"],
            ["示", "丰", "主", "歹", "毒", "巫", "妖", "魔", "镇", "鬼", "神"],
        ],
        [
            [
                "鼠",
                "牛",
                "虎",
                "兔",
                "龙",
                "蛇",
                "马",
                "羊",
                "猴",
                "鸡",
                "犬",
                "豕",
            ],
            [
                "子",
                "丑",
                "寅",
                "卯",
                "辰",
                "巳",
                "午",
                "未",
                "申",
                "酉",
                "戌",
                "亥",
            ],
        ],
    ];

    const generateStellarGrid = (width, height, i) => {
        return (
            <InteractiveGrid
                hasDialog={true}
                canvasType="line-node"
                width={width * size}
                height={height * size}
                size={size}
                lineWidth={lineWidth}
                radius={radius}
                color={color}
                lines={lines[i]}
                nodes={nodes[i]}
                text={stellarHanzi[i]}
                onClick={() => onGridClick(i)}
            />
        );
    };

    const generateRow = (height, row) => {
        return (
            <div className="row-container">
                {gridsWidth.map((width, col) =>
                    generateStellarGrid(width, height, row * 3 + col)
                )}
            </div>
        );
    };

    const createDialogContent = (hanziList) => {
        return (
            <div>
                {hanziList ? hanziList.map((row) => { return (
                    <div className="row-container">
                        {row.map((e) => { return(
                            <InteractiveGrid
                                canvasType="hanzi-grid"
                                width={100}
                                height={100}
                                size={size}
                                lineWidth={lineWidth}
                                radius={radius}
                                color={"red"}
                                text={e}
                            />)
                        })}
                    </div>
                )}) : null}
            </div>
        )
    }

    return (
        <div className="container">
            <div className="wrapper">
                {gridsHeight.map((height, row) => generateRow(height, row))}
            </div>
            <CustomDialog open={isDialogOpen} title={dialogTitle} onClose={() => setIsDialogOpen(false)}>
                {createDialogContent(hundredHanzi[dialogContentIndex])}
            </CustomDialog>
        </div>
    );
};

export default HeTuLuoShu;
