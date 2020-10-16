### flv.js 实现前端拉流

##### 参考flv.js文档
https://github.com/Bilibili/flv.js/blob/master/docs/api.md#config

##### 使用方法
```html
 <Reflv
        url
        type="flv"
        isLive
        hasAudio
        hasVideo
        cors
        config={{
          enableWorker: true,
          enableStashBuffer: false,
          stashInitialSize: 128
        }}
/>
```

##### 配置文档

| isLive          | 指示数据源是否为实时流                                       |
| --------------- | ------------------------------------------------------------ |
| cors            | 指示数据源是否为跨域                                         |
| withCredentials | 指示是否对Cookie进行http提取                                 |
| hasAudio        | 指示流是否有音轨                                             |
| hasVideo        | 指示流中是否有视频轨道                                       |
| duration        | 指示总媒体持续时间（以毫秒为单位）                           |
| filesize        | 指示媒体文件的总文件大小，以字节为单位                       |
| config          | 配置对象                                                     |
| segments        | 多段播放的可选字段 {duration: number(ms),filesize:number(b),url:string}[] |
| url             | 表示媒体URL，可以以'https(s)'或'ws(s)'（WebSocket）开头      |
| type            | "flv" \| "mp4    
