const path = require("path");
const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const browserSync = require("browser-sync").create();
const server = path.resolve(__dirname, "mock");

// browser-sync 配置
gulp.task("browser-sync", async () => {
    browserSync.init(null, {
        proxy: "http://localhost:3000", // 这里的端口和 server.js 的端口一致
        port: 8081
    });
});

// browser-sync 监听文件
gulp.task("mock", async () => {
    gulp.watch(["./mock/db.js", "./mock/**"], gulp.series("bs-delay"));
});

// 延时刷新
gulp.task("bs-delay", async () => {
    setTimeout(async () => {
        browserSync.reload();
    }, 1000);
});

// 服务器重启
gulp.task("nodemon", async cb => {
    // 设个变量来防止重复重启
    var started = false;
    var stream = nodemon({
        script: "./mock/server.js",
        // 监听文件的后缀
        ext: "js",
        env: {
            NODE_ENV: "development"
        },
        // 监听的路径
        watch: [server]
    });
    stream
        .on("start", async () => {
            if (!started) {
                cb();
                started = true;
            }
        })
        .on("crash", async () => {
            console.error("application has crashed!\n");
            stream.emit("restart", 10);
        });
});

gulp.task("dev", gulp.series("nodemon", "browser-sync", "mock"));
