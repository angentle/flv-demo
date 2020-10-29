

import TestVideo from '../pages/testVideo/TestVideo'
import Video from '../pages/video/Video'

export default [
    {
        path: '/',
        exact: true,
        component: Video
    },
    {
        path: '/testVideo',
        exact: true,
        component: TestVideo
    },

]
