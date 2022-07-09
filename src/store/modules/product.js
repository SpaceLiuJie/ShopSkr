const state = {
    productMessage:{

    },
    category_id:'',
    spuTitle:'',
    rowdetail:'',
}

const mutations = {
    UPDATE_PRODUCTMESSAGE(state,productMessage){
        state.productMessage = productMessage
    },
    UPDATE_CATEGORY_ID(state,category_id){
        state.category_id = category_id
    },
    UPDATE_SPUTITLE(state,spuTitle){
        state.spuTitle = spuTitle
    },
    GETROW(state,id){
        state.rowdetail = id;
    }
}

const actions = {
    updateProductMessage({commit},data){
        commit('UPDATE_PRODUCTMESSAGE',data)
    },
    updateCategoryId({commit},data){
        commit('UPDATE_CATEGORY_ID',data)
    },
    updateSpuTitle({commit},data){
        commit('UPDATE_SPUTITLE',data)
    },
    getRow({commit},data){
        commit('GETROW',data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}