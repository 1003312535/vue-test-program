import {
    CHANGINDEXPATH,
    CHANGASIDENAVCOLLAPSESTATUS
} from './constant'
// console.log(CHANGINDEXPATH, 'CHANGINDEXPATH--------------------------------------CHANGINDEXPATH')
export default {
    [CHANGINDEXPATH](state, payload) { //修改 currentIndexPath
        state.currentIndexPath = payload
    },
    [CHANGASIDENAVCOLLAPSESTATUS](state, payload) { //修改 currentIndexPath
        state.isCollapse = payload
    }
}