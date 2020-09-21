controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectileCount < 3) {
        projectileCount += 1
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . 3 3 b 3 3 d d 3 3 . . 
            . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
            . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
            . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
            . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
            . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
            . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
            . 4 4 d 1 1 1 1 1 1 d d d b b . 
            . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
            4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
            4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
            4 5 5 d 5 5 d b b b d d 3 . . . 
            4 5 5 5 d d d d 4 4 b 3 . . . . 
            . 4 5 5 5 4 4 4 . . . . . . . . 
            . . 4 4 4 . . . . . . . . . . . 
            `, bus, 0, -50)
    }
})
function createEnemy () {
    seagull = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `, SpriteKind.Enemy)
    seagull.x = scene.screenWidth()
    seagull.top = 0 + randint(0, 20)
    seagull.setVelocity(randint(-100, -50), 0)
}
function createPlayer () {
    bus = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
        . 6 8 b b b 8 b b b b 8 6 6 6 6 
        . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
        . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
        . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
        . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    bus.bottom = scene.screenHeight()
    bus.setFlag(SpriteFlag.StayInScreen, true)
    controller.moveSprite(bus, 100, 0)
}
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    projectileCount += -1
})
let seagull: Sprite = null
let bus: Sprite = null
let projectile: Sprite = null
let projectileCount = 0
createPlayer()
game.onUpdateInterval(1000, function () {
    createEnemy()
})
