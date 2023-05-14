// 定义枚举类型
enum Direction {
    LEFT,
    RIGHT
}

const d1: Direction = Direction.LEFT

function turnDirection(direction: Direction) {
    switch (direction) {
        case Direction.LEFT:
            console.log("角色向左移动一个格子")
            break
        case Direction.RIGHT:
            console.log("角色向右移动一个格子")
            break
    }
}

// 监听键盘的点击
turnDirection(Direction.LEFT)

// 给枚举类型设置值
enum aa {
    A = 1,
    B = 2,
    C = 100,
    D
}

enum bb {
    A = "A",
    B = "B",
    C = "C",
    D = "D"
}

enum cc {
    A = 1 << 0,
    B = 1 << 1,
    C = 1 << 2,
    D = 1 << 3,
    E = 1 << 4
}


export { }

