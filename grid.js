const GRID_SIZE = 21;

export function getRandomGridPos() {
    const pos = {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
    console.log(pos);
    return pos;
}

export function outsideGrid(pos) {
    return pos.x < 1 || pos.x > GRID_SIZE || pos.y < 1 || pos.y > GRID_SIZE;
}