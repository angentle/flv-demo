issue

```
[ESlint]报错：error Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
```
### 解决方案
在.eslintrc里配置
```
.eslintrc.js中设置：
parserOptions: {
    sourceType: 'module'
}
```



```
create-react-app 如何自定义eslint? 手动配置.eslintrc
```

### 解决方案
```
已经执行了yarn eject
报漏了webpack.config.js 改 cache 和 useEslintrc

    {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                cache: false, // 注意 eslintrc文件不生效 要把cache true改成false才生效
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                eslintPath: require.resolve('eslint'),
                resolvePluginsRelativeTo: __dirname,
                /**
                 * eslint 自定义配置
                 * 参考文档
                 * https://blog.csdn.net/HatOfDragon/article/details/103630723
                 */
                ignore: false,
                useEslintrc: true, // 默认false 改为true 自定义配置eslint
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          include: paths.appSrc,
        },

```