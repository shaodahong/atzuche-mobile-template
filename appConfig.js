module.exports = {
  // 一般情况下，它的值是 /${prodPathPrefix}/${prodPath}
  basename: process.env.NODE_ENV === 'production' ? '/<%= projectType %>/<%= prodPath %>' : '',

  // 打包出口目录的前缀，注意：不需要以/开头
  prodPathPrefix: '<%= projectType %>',

  // 打包的出口目录(默认dist目录)
  prodPath: '<%= prodPath %>',

  // 本地测试端口
  port: 4000,

  // 本地代理环境地址
  target: 'http://testh5.atzuche.com/',

  // html 文档的标题
  title: '<%= projectName %>',

  // 允许 webpack 解析的路径
  includeFiles: ['node_modules/auto-libs', 'node_modules/auto-ui']
}
