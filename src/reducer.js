export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after test
    // token: 'BQCObgO8IwZpqyNaW_lK_zPnEhVsMg2tvHGwsp4S2CW45C5FUjhtVIsXhs9AYOL-BzwuswTxkm4UwLBWiwEegtExsCYpzbznNxqqrXuXi4-wFrFdsspZcxj2JNTmvaP-mCcPZYhQzolTbrVEERt0Mkbn9exuyH_SUpLUg5JvwbVkOUW9',
};

export var reducer = (state, action) => {
console.log(action);

// Action => type, [payload]

    switch(action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
};

export default reducer;