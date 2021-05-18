import Api from '@/api'
export default {
    logOut({commit, state}) {
        return new Promise((resolve, reject) => {
            Api.admin.logOut().then(() => {
                commit('updateUser', {
                    key: 'isLogin',
                    val: false,
                });
                commit('updateUser', {
                    key: 'token',
                    val: '',
                });
                localStorage.setItem('isLogin', false);
                localStorage.setItem('token', '');
            })
        })
    },
    toggleSideBar({commit, state}) {
        commit('TOGGLESIDEBAR', state);
    }
}